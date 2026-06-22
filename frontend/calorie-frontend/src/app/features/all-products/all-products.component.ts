import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { debounceTime, distinctUntilChanged, startWith, switchMap, tap } from 'rxjs';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { ProductService } from '../../core/services/product.service';
import { AddToBasketDialogService } from '../../shared/add-to-basket-dialog/add-to-basket-dialog.service';
import { CalorieFormatPipe } from '../../shared/pipes/calorie-format.pipe';
import { formatUnitLabel } from '../../shared/unit-selector/unit-selector.component';
import { Product } from '../../core/models/api.models';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressBarModule,
    CalorieFormatPipe,
  ],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss',
})
export class AllProductsComponent implements OnInit {
  private readonly productService = inject(ProductService);
  private readonly addToBasketDialog = inject(AddToBasketDialogService);
  private readonly destroyRef = inject(DestroyRef);

  readonly products = signal<Product[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly searchControl = new FormControl('', { nonNullable: true });

  readonly unitLabel = formatUnitLabel;

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        startWith(this.searchControl.value),
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => {
          this.loading.set(true);
          this.error.set(null);
        }),
        switchMap((term) => this.productService.searchProducts(term.trim())),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: (items) => {
          this.products.set(items.filter((product) => product.createdBy === null));
          this.loading.set(false);
        },
        error: (err) => {
          this.error.set(err?.error?.message ?? 'שגיאה בטעינת המוצרים');
          this.loading.set(false);
        },
      });
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
}
