import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  inject,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { Product, ServingSize } from '../../core/models/api.models';
import { CalorieFormatPipe } from '../pipes/calorie-format.pipe';

export interface UnitSelection {
  unit: string;
  quantity: number;
  estimatedCalories: number;
}

const UNIT_LABELS: Record<string, string> = {
  teaspoon: 'כפית',
  tablespoon: 'כף',
  cup: 'כוס',
  slice: 'פרוסה',
  single: 'יחידה',
  grams: 'גרם',
};

export function formatUnitLabel(unit: string): string {
  return UNIT_LABELS[unit] ?? unit;
}

@Component({
  selector: 'app-unit-selector',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    CalorieFormatPipe,
  ],
  templateUrl: './unit-selector.component.html',
  styleUrl: './unit-selector.component.scss',
})
export class UnitSelectorComponent implements OnChanges {
  private readonly fb = inject(FormBuilder);

  @Input({ required: true }) product!: Product;

  /** Emits whenever unit/quantity change and the form is valid. */
  @Output() readonly selectionChange = new EventEmitter<UnitSelection>();

  readonly form = this.fb.nonNullable.group({
    unit: ['', Validators.required],
    quantity: [1, [Validators.required, Validators.min(0.25)]],
  });

  constructor() {
    this.form.valueChanges.pipe(takeUntilDestroyed()).subscribe(() => this.emitSelection());
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product'] && this.product) {
      this.resetForProduct(this.product);
    }
  }

  get selectedServing(): ServingSize | undefined {
    const unit = this.form.controls.unit.value;
    return this.product?.servingSizes.find((s) => s.unit === unit);
  }

  get estimatedCalories(): number {
    const serving = this.selectedServing;
    if (!serving || !this.product || this.form.invalid) {
      return 0;
    }

    const quantity = this.form.controls.quantity.value;
    return (quantity * serving.weightInGrams * this.product.caloriesPer100g) / 100;
  }

  unitLabel(unit: string): string {
    return formatUnitLabel(unit);
  }

  private resetForProduct(product: Product): void {
    const first = product.servingSizes[0];

    if (!first) {
      this.form.reset({ unit: '', quantity: 1 });
      return;
    }

    this.form.setValue({ unit: first.unit, quantity: 1 });
    this.emitSelection();
  }

  private emitSelection(): void {
    if (this.form.invalid || !this.product) {
      return;
    }

    const { unit, quantity } = this.form.getRawValue();

    this.selectionChange.emit({
      unit,
      quantity,
      estimatedCalories: this.estimatedCalories,
    });
  }
}
