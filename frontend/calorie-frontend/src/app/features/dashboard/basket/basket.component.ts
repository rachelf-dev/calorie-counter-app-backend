import { Component, Input, inject } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';

import { LogItem } from '../../../core/models/api.models';
import {
  ConfirmDialogComponent,
  ConfirmDialogData,
} from '../../../shared/confirm-dialog/confirm-dialog.component';
import { CalorieFormatPipe } from '../../../shared/pipes/calorie-format.pipe';
import { formatUnitLabel } from '../../../shared/unit-selector/unit-selector.component';
import { LogsActions } from '../../../store/logs/logs.actions';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    CalorieFormatPipe,
  ],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss',
})
export class BasketComponent {
  private readonly store = inject(Store);
  private readonly dialog = inject(MatDialog);

  @Input({ required: true }) items: LogItem[] = [];
  @Input() loading = false;

  unitLabel = formatUnitLabel;

  confirmRemove(item: LogItem): void {
    const data: ConfirmDialogData = {
      title: 'הסרה מהסל',
      message: `האם את בטוחה שברצונך להסיר את "${item.productName}" מהסל?`,
      confirmText: 'הסר',
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
      .subscribe(() => {
        this.store.dispatch(LogsActions.removeItem({ itemId: item._id }));
      });
  }
}
