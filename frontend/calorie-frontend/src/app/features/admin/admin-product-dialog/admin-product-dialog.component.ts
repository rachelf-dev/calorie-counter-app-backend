import { Component, inject, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { finalize } from 'rxjs';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';

import { Product } from '../../../core/models/api.models';
import { ProductService } from '../../../core/services/product.service';
import { formatUnitLabel } from '../../../shared/unit-selector/unit-selector.component';

const UNIT_OPTIONS = ['teaspoon', 'tablespoon', 'cup', 'slice', 'single', 'grams'] as const;

@Component({
  selector: 'app-admin-product-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
  ],
  templateUrl: './admin-product-dialog.component.html',
  styleUrl: './admin-product-dialog.component.scss',
})
export class AdminProductDialogComponent {
  private readonly fb = inject(FormBuilder);
  private readonly productService = inject(ProductService);
  private readonly dialogRef = inject(MatDialogRef<AdminProductDialogComponent, Product | undefined>);

  readonly unitOptions = UNIT_OPTIONS;
  readonly unitLabel = formatUnitLabel;
  readonly submitting = signal(false);

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    caloriesPer100g: [null as number | null, [Validators.required, Validators.min(1)]],
    imageUrl: [''],
    servingSizes: this.fb.nonNullable.array(
      [this.createServingSizeGroup()],
      Validators.minLength(1)
    ),
  });

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
    const payload = {
      name: name.trim(),
      caloriesPer100g: Number(caloriesPer100g),
      servingSizes: servingSizes.map((size) => ({
        unit: size['unit'],
        weightInGrams: Number(size['weightInGrams']),
      })),
      ...(imageUrl.trim() ? { imageUrl: imageUrl.trim() } : {}),
    };

    this.submitting.set(true);
    this.form.disable();

    this.productService
      .createProduct(payload)
      .pipe(
        finalize(() => {
          this.submitting.set(false);
          this.form.enable();
        })
      )
      .subscribe({
        next: (product) => this.dialogRef.close(product),
        error: (err: HttpErrorResponse) => {
          this.form.setErrors({ server: err.error?.message ?? 'שגיאה בשמירת המוצר' });
        },
      });
  }

  cancel(): void {
    this.dialogRef.close(undefined);
  }
}
