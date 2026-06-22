import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { Product } from '../../core/models/api.models';
import { ProductService } from '../../core/services/product.service';
import {
  ConfirmDialogComponent,
  ConfirmDialogData,
} from '../../shared/confirm-dialog/confirm-dialog.component';
import { AddToBasketDialogService } from '../../shared/add-to-basket-dialog/add-to-basket-dialog.service';
import { CalorieFormatPipe } from '../../shared/pipes/calorie-format.pipe';
import { formatUnitLabel } from '../../shared/unit-selector/unit-selector.component';
@Component({
  selector: 'app-my-products',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,
    CalorieFormatPipe,
  ],
  templateUrl: './my-products.component.html',
  styleUrl: './my-products.component.scss',
})
export class MyProductsComponent implements OnInit {
  private readonly productService = inject(ProductService);
  private readonly dialog = inject(MatDialog);
  private readonly toastr = inject(ToastrService);
  private readonly addToBasketDialog = inject(AddToBasketDialogService);

  readonly products = signal<Product[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly deletingId = signal<string | null>(null);

  readonly unitLabel = formatUnitLabel;

  ngOnInit(): void {
    this.loadProducts();
  }

  servingSizesSummary(product: Product): string {
    if (!product.servingSizes.length) {
      return '—';
    }

    return product.servingSizes
      .map((size) => `${this.unitLabel(size.unit)} (${size.weightInGrams} ג׳)`)
      .join(' · ');
  }

  addToBasket(product: Product): void {
    this.addToBasketDialog.open(product);
  }

  confirmDelete(product: Product): void {
    const data: ConfirmDialogData = {
      title: 'מחיקת מוצר',
      message: `האם את בטוחה שברצונך למחוק את "${product.name}"?`,
      confirmText: 'מחק',
      cancelText: 'ביטול',
    };

    this.dialog
      .open(ConfirmDialogComponent, {
        data,
        width: '400px',
        maxWidth: '95vw',
      })
      .afterClosed()
      .pipe(filter((confirmed): confirmed is boolean => confirmed === true))
      .subscribe(() => this.deleteProduct(product));
  }

  private deleteProduct(product: Product): void {
    this.deletingId.set(product._id);

    this.productService.deleteProduct(product._id).subscribe({
      next: () => {
        this.products.update((items) => items.filter((item) => item._id !== product._id));
        this.deletingId.set(null);
        this.toastr.success(`"${product.name}" נמחק בהצלחה`);
      },
      error: (err) => {
        this.deletingId.set(null);
        this.toastr.error(err?.error?.message ?? 'שגיאה במחיקת המוצר');
      },
    });
  }

  private loadProducts(): void {
    this.loading.set(true);
    this.error.set(null);

    this.productService.getMyProducts().subscribe({
      next: (products) => {
        this.products.set(products);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err?.error?.message ?? 'שגיאה בטעינת המוצרים');
        this.loading.set(false);
      },
    });
  }
}
