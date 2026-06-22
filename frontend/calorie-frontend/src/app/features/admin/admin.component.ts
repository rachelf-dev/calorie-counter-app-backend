import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { debounceTime, distinctUntilChanged, startWith, switchMap, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

import { Product, User } from '../../core/models/api.models';
import { AuthService } from '../../core/services/auth.service';
import { ProductService } from '../../core/services/product.service';
import { UserService } from '../../core/services/user.service';
import {
  ConfirmDialogComponent,
  ConfirmDialogData,
} from '../../shared/confirm-dialog/confirm-dialog.component';
import { CalorieFormatPipe } from '../../shared/pipes/calorie-format.pipe';
import { formatUnitLabel } from '../../shared/unit-selector/unit-selector.component';
import { AdminProductDialogComponent } from './admin-product-dialog/admin-product-dialog.component';

export type AdminTab = 'products' | 'users';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    CalorieFormatPipe,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent implements OnInit {
  private readonly productService = inject(ProductService);
  private readonly userService = inject(UserService);
  private readonly authService = inject(AuthService);
  private readonly dialog = inject(MatDialog);
  private readonly toastr = inject(ToastrService);
  private readonly destroyRef = inject(DestroyRef);

  readonly selectedTab = signal<AdminTab>('products');
  readonly globalProducts = signal<Product[]>([]);
  readonly productsLoading = signal(false);
  readonly productsError = signal<string | null>(null);
  readonly deletingProductId = signal<string | null>(null);

  readonly productSearchControl = new FormControl('', { nonNullable: true });
  readonly productColumns = ['name', 'calories', 'servingSizes', 'actions'];

  readonly users = signal<User[]>([]);
  readonly usersLoading = signal(false);
  readonly usersError = signal<string | null>(null);
  readonly updatingRoleUserId = signal<string | null>(null);
  readonly deletingUserId = signal<string | null>(null);
  readonly userColumns = ['name', 'email', 'role', 'actions'];
  readonly roleOptions: User['role'][] = ['user', 'admin'];

  readonly unitLabel = formatUnitLabel;

  ngOnInit(): void {
    this.productSearchControl.valueChanges
      .pipe(
        startWith(this.productSearchControl.value),
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => {
          this.productsLoading.set(true);
          this.productsError.set(null);
        }),
        switchMap((term) => this.productService.searchProducts(term.trim())),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: (items) => {
          this.globalProducts.set(items.filter((product) => product.createdBy === null));
          this.productsLoading.set(false);
        },
        error: (err) => {
          this.productsError.set(err?.error?.message ?? 'שגיאה בטעינת המוצרים');
          this.productsLoading.set(false);
        },
      });
  }

  onTabChange(index: number): void {
    const tab: AdminTab = index === 0 ? 'products' : 'users';
    this.selectedTab.set(tab);

    if (tab === 'users') {
      this.loadUsers();
    }
  }

  roleLabel(role: User['role']): string {
    return role === 'admin' ? 'מנהל' : 'משתמש';
  }

  isCurrentUser(user: User): boolean {
    return user._id === this.authService.currentUser()?._id;
  }

  onUserRoleChange(user: User, role: User['role']): void {
    if (role === user.role || this.isCurrentUser(user)) {
      return;
    }

    this.updatingRoleUserId.set(user._id);

    this.userService.updateUserRole(user._id, role).subscribe({
      next: (updated) => {
        this.users.update((items) =>
          items.map((item) => (item._id === updated._id ? updated : item))
        );
        this.updatingRoleUserId.set(null);
        this.toastr.success(`תפקיד "${user.name}" עודכן ל-${this.roleLabel(role)}`);
      },
      error: (err) => {
        this.updatingRoleUserId.set(null);
        this.toastr.error(err?.error?.message ?? 'שגיאה בעדכון התפקיד');
      },
    });
  }

  confirmDeleteUser(user: User): void {
    if (this.isCurrentUser(user)) {
      return;
    }

    const data: ConfirmDialogData = {
      title: 'מחיקת משתמש',
      message: `האם את בטוחה שברצונך למחוק את "${user.name}" (${user.email})? פעולה זו אינה ניתנת לביטול.`,
      confirmText: 'מחק',
      cancelText: 'ביטול',
    };

    this.dialog
      .open(ConfirmDialogComponent, {
        data,
        width: '420px',
        maxWidth: '95vw',
      })
      .afterClosed()
      .pipe(filter((confirmed): confirmed is boolean => confirmed === true))
      .subscribe(() => this.deleteUser(user));
  }

  private deleteUser(user: User): void {
    this.deletingUserId.set(user._id);

    this.userService.deleteUser(user._id).subscribe({
      next: () => {
        this.users.update((items) => items.filter((item) => item._id !== user._id));
        this.deletingUserId.set(null);
        this.toastr.success(`"${user.name}" נמחק בהצלחה`);
      },
      error: (err) => {
        this.deletingUserId.set(null);
        this.toastr.error(err?.error?.message ?? 'שגיאה במחיקת המשתמש');
      },
    });
  }

  private loadUsers(): void {
    this.usersLoading.set(true);
    this.usersError.set(null);

    this.userService.listUsers().subscribe({
      next: (items) => {
        this.users.set(items);
        this.usersLoading.set(false);
      },
      error: (err) => {
        this.usersError.set(err?.error?.message ?? 'שגיאה בטעינת המשתמשים');
        this.usersLoading.set(false);
      },
    });
  }

  tabIndex(): number {
    return this.selectedTab() === 'products' ? 0 : 1;
  }

  servingSizesSummary(product: Product): string {
    if (!product.servingSizes.length) {
      return '—';
    }

    return product.servingSizes
      .map((size) => `${this.unitLabel(size.unit)} (${size.weightInGrams} ג׳)`)
      .join(' · ');
  }

  openAddGlobalProductDialog(): void {
    this.dialog
      .open(AdminProductDialogComponent, {
        width: '640px',
        maxWidth: '95vw',
        maxHeight: '90vh',
        autoFocus: 'first-tabbable',
      })
      .afterClosed()
      .pipe(filter((product): product is Product => !!product))
      .subscribe((product) => this.onGlobalProductCreated(product));
  }

  private onGlobalProductCreated(product: Product): void {
    if (product.createdBy !== null) {
      return;
    }

    const term = this.productSearchControl.value.trim().toLowerCase();
    const matchesSearch = !term || product.name.toLowerCase().includes(term);

    if (matchesSearch) {
      this.globalProducts.update((items) =>
        [...items, product].sort((a, b) => a.name.localeCompare(b.name, 'he'))
      );
    }

    this.toastr.success(`"${product.name}" נוסף כמוצר גלובלי`);
  }

  confirmDeleteProduct(product: Product): void {
    const data: ConfirmDialogData = {
      title: 'מחיקת מוצר גלובלי',
      message: `האם את בטוחה שברצונך למחוק את "${product.name}"? המוצר יוסר מכל המשתמשים.`,
      confirmText: 'מחק',
      cancelText: 'ביטול',
    };

    this.dialog
      .open(ConfirmDialogComponent, {
        data,
        width: '420px',
        maxWidth: '95vw',
      })
      .afterClosed()
      .pipe(filter((confirmed): confirmed is boolean => confirmed === true))
      .subscribe(() => this.deleteGlobalProduct(product));
  }

  private deleteGlobalProduct(product: Product): void {
    this.deletingProductId.set(product._id);

    this.productService.deleteProduct(product._id).subscribe({
      next: () => {
        this.globalProducts.update((items) => items.filter((item) => item._id !== product._id));
        this.deletingProductId.set(null);
        this.toastr.success(`"${product.name}" נמחק בהצלחה`);
      },
      error: (err) => {
        this.deletingProductId.set(null);
        this.toastr.error(err?.error?.message ?? 'שגיאה במחיקת המוצר');
      },
    });
  }
}
