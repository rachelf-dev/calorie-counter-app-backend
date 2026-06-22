import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

import { Product } from '../../core/models/api.models';
import {
  AddToBasketDialogComponent,
  AddToBasketDialogData,
} from '../add-to-basket-dialog/add-to-basket-dialog.component';

@Injectable({ providedIn: 'root' })
export class AddToBasketDialogService {
  private readonly dialog = inject(MatDialog);
  private readonly toastr = inject(ToastrService);

  open(product: Product): void {
    if (!product.servingSizes.length) {
      this.toastr.warning('למוצר זה אין יחידות מנה');
      return;
    }

    const data: AddToBasketDialogData = { product };

    this.dialog.open(AddToBasketDialogComponent, {
      data,
      width: '420px',
      maxWidth: '95vw',
    });
  }
}
