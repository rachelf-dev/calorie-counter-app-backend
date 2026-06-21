import { Component, EventEmitter, Input, OnInit, Output, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  finalize,
  map,
  of,
  startWith,
  switchMap,
  tap,
} from 'rxjs';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/api.models';
import { CalorieFormatPipe } from '../pipes/calorie-format.pipe';

@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    MatProgressSpinnerModule,
    CalorieFormatPipe,
  ],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.scss',
})
export class ProductSearchComponent implements OnInit {
  private readonly productService = inject(ProductService);

  /** Seed from URL on first load only — not synced back while typing. */
  @Input() initialSearch = '';

  /** Emits debounced search text so Dashboard can sync the URL. */
  @Output() readonly searchChange = new EventEmitter<string>();

  /** Emits the full product when the user picks an option. */
  @Output() readonly productSelected = new EventEmitter<Product>();

  readonly searchControl = new FormControl('', { nonNullable: true });
  readonly loading = signal(false);
  readonly hasSearched = signal(false);
  readonly searchError = signal<string | null>(null);

  readonly filteredProducts$ = this.searchControl.valueChanges.pipe(
    startWith(''),
    debounceTime(300),
    map((term) => term.trim()),
    distinctUntilChanged(),
    tap((term) => {
      this.searchChange.emit(term);
      this.hasSearched.set(term.length > 0);
    }),
    switchMap((term) => {
      if (!term) {
        this.loading.set(false);
        this.searchError.set(null);
        return of([] as Product[]);
      }

      this.loading.set(true);

      return this.productService.searchProducts(term).pipe(
        tap(() => this.searchError.set(null)),
        finalize(() => this.loading.set(false)),
        catchError((err: HttpErrorResponse) => {
          if (err.status === 401) {
            this.searchError.set('יש להתחבר כדי לחפש מוצרים');
          } else {
            this.searchError.set(err.error?.message ?? 'שגיאה בחיפוש מוצרים');
          }
          return of([] as Product[]);
        })
      );
    })
  );

  ngOnInit(): void {
    if (this.initialSearch) {
      this.searchControl.setValue(this.initialSearch, { emitEvent: true });
    }
  }

  readonly displayProduct = (product: Product | string): string =>
    typeof product === 'string' ? product : product.name;

  onProductSelected(product: Product): void {
    this.productSelected.emit(product);
  }
}
