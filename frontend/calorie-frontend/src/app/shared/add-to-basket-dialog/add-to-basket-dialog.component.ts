import { Component, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { Product } from '../../core/models/api.models';
import { LogsActions } from '../../store/logs/logs.actions';
import {
  UnitSelectorComponent,
  UnitSelection,
} from '../unit-selector/unit-selector.component';

export interface AddToBasketDialogData {
  product: Product;
}

@Component({
  selector: 'app-add-to-basket-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, UnitSelectorComponent],
  template: `
    <h2 mat-dialog-title>הוסף לסל</h2>
    <mat-dialog-content>
      <p class="product-name">{{ data.product.name }}</p>
      <app-unit-selector
        [product]="data.product"
        (selectionChange)="onSelectionChange($event)"
      />
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button type="button" (click)="dialogRef.close()">ביטול</button>
      <button
        mat-flat-button
        color="primary"
        type="button"
        [disabled]="!selection() || adding()"
        (click)="addToBasket()"
      >
        הוסף לסל
      </button>
    </mat-dialog-actions>
  `,
  styles: `
    .product-name {
      margin: 0 0 12px;
      font-weight: 500;
    }

    mat-dialog-content {
      min-width: min(360px, 90vw);
    }
  `,
})
export class AddToBasketDialogComponent {
  readonly dialogRef = inject(MatDialogRef<AddToBasketDialogComponent>);
  readonly data = inject<AddToBasketDialogData>(MAT_DIALOG_DATA);
  private readonly store = inject(Store);
  private readonly actions$ = inject(Actions);
  private readonly toastr = inject(ToastrService);

  readonly selection = signal<UnitSelection | null>(null);
  readonly adding = signal(false);

  onSelectionChange(selection: UnitSelection): void {
    this.selection.set(selection);
  }

  addToBasket(): void {
    const unitSelection = this.selection();

    if (!unitSelection) {
      return;
    }

    this.adding.set(true);

    this.store.dispatch(
      LogsActions.addItem({
        payload: {
          productId: this.data.product._id,
          unit: unitSelection.unit,
          quantity: unitSelection.quantity,
        },
      })
    );

    this.actions$
      .pipe(
        ofType(LogsActions.addItemSuccess, LogsActions.addItemFailure),
        take(1)
      )
      .subscribe((action) => {
        this.adding.set(false);

        if (action.type === LogsActions.addItemSuccess.type) {
          this.toastr.success(`${this.data.product.name} נוסף לסל`);
          this.dialogRef.close(true);
          return;
        }

        this.toastr.error(action.error);
      });
  }
}
