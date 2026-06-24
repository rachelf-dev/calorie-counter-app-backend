import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';

import { Product, ServingSize } from '../../../core/models/api.models';
import { ProductService } from '../../../core/services/product.service';
import { formatUnitLabel } from '../../../shared/unit-selector/unit-selector.component';

const UNIT_OPTIONS = ['teaspoon', 'tablespoon', 'cup', 'slice', 'single', 'grams'] as const;

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly productService = inject(ProductService);
  private readonly toastr = inject(ToastrService);

  readonly unitOptions = UNIT_OPTIONS;
  readonly unitLabel = formatUnitLabel;

  readonly isEditMode = signal(false);
  readonly loading = signal(false);
  readonly submitting = signal(false);
  readonly productId = signal<string | null>(null);

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    caloriesPer100g: [null as number | null, [Validators.required, Validators.min(1)]],
    imageUrl: [''],
    servingSizes: this.fb.nonNullable.array(
      [this.createServingSizeGroup()],
      Validators.minLength(1)
    ),
  });

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.isEditMode.set(true);
      this.productId.set(id);
      this.loadProduct(id);
    }
  }

  get servingSizes(): FormArray<FormGroup> {
    return this.form.controls.servingSizes;
  }

  createServingSizeGroup(): FormGroup {
    return this.fb.nonNullable.group({
      unit: ['', Validators.required],
      weightInGrams: [null as number | null, [Validators.required, Validators.min(0.1)]],
    });
  }

  addServingSize(): void {
    this.servingSizes.push(this.createServingSizeGroup());
  }

  removeServingSize(index: number): void {
    if (this.servingSizes.length <= 1) {
      return;
    }

    this.servingSizes.removeAt(index);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, caloriesPer100g, imageUrl, servingSizes } = this.form.getRawValue();
    const parsedCalories = Number(caloriesPer100g);
    const parsedServingSizes = servingSizes.map((size) => ({
      unit: size['unit'],
      weightInGrams: Number(size['weightInGrams']),
    }));

    if (!Number.isFinite(parsedCalories) || parsedCalories < 1) {
      this.toastr.error('יש להזין לפחות 1 קק״ל ל-100 גרם');
      return;
    }

    if (
      parsedServingSizes.some(
        (size) => !Number.isFinite(size.weightInGrams) || size.weightInGrams < 0.1
      )
    ) {
      this.toastr.error('משקל יחידה חייב להיות לפחות 0.1 גרם');
      return;
    }

    const payload = {
      name: name.trim(),
      caloriesPer100g: parsedCalories,
      servingSizes: parsedServingSizes,
      ...(imageUrl.trim() ? { imageUrl: imageUrl.trim() } : {}),
    };

    const id = this.productId();
    const request$ = id
      ? this.productService.updateProduct(id, payload)
      : this.productService.createProduct(payload);

    this.submitting.set(true);
    this.form.disable();

    request$
      .pipe(
        finalize(() => {
          this.submitting.set(false);
          if (!this.loading()) {
            this.form.enable();
          }
        })
      )
      .subscribe({
        next: () => {
          this.toastr.success(id ? 'המוצר עודכן בהצלחה' : 'המוצר נוסף בהצלחה');
          this.router.navigate(['/my-products']);
        },
        error: (err: HttpErrorResponse) => {
          this.toastr.error(err.error?.message ?? 'שגיאה בשמירת המוצר');
        },
      });
  }

  private loadProduct(id: string): void {
    this.loading.set(true);
    this.form.disable();

    this.productService.getMyProducts().subscribe({
      next: (products) => {
        const product = products.find((item) => item._id === id);

        if (!product) {
          this.toastr.error('המוצר לא נמצא');
          this.router.navigate(['/my-products']);
          return;
        }

        this.patchProduct(product);
        this.loading.set(false);
        this.form.enable();
      },
      error: (err) => {
        this.loading.set(false);
        this.toastr.error(err?.error?.message ?? 'שגיאה בטעינת המוצר');
        this.router.navigate(['/my-products']);
      },
    });
  }

  private patchProduct(product: Product): void {
    this.form.patchValue({
      name: product.name,
      caloriesPer100g: product.caloriesPer100g,
      imageUrl: product.imageUrl ?? '',
    });
    this.setServingSizes(product.servingSizes);
  }

  private setServingSizes(sizes: ServingSize[]): void {
    this.servingSizes.clear();

    for (const size of sizes) {
      this.servingSizes.push(
        this.fb.nonNullable.group({
          unit: [size.unit, Validators.required],
          weightInGrams: [size.weightInGrams, [Validators.required, Validators.min(0.1)]],
        })
      );
    }

    if (this.servingSizes.length === 0) {
      this.servingSizes.push(this.createServingSizeGroup());
    }
  }
}
