import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { LogService } from '../../core/services/log.service';
import { LogsActions } from './logs.actions';

@Injectable()
export class LogsEffects {
  private readonly actions$ = inject(Actions);
  private readonly logService = inject(LogService);

  loadToday$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LogsActions.loadToday),
      switchMap(() =>
        this.logService.getToday().pipe(
          map((log) => LogsActions.loadTodaySuccess({ log })),
          catchError((error) =>
            of(
              LogsActions.loadTodayFailure({
                error: error?.error?.message ?? 'Failed to load today log',
              })
            )
          )
        )
      )
    )
  );

  addItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LogsActions.addItem),
      switchMap(({ payload }) =>
        this.logService.addToBasket(payload).pipe(
          map((log) => LogsActions.addItemSuccess({ log })),
          catchError((error) =>
            of(
              LogsActions.addItemFailure({
                error: error?.error?.message ?? 'Failed to add item',
              })
            )
          )
        )
      )
    )
  );

  removeItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LogsActions.removeItem),
      switchMap(({ itemId }) =>
        this.logService.removeFromBasket(itemId).pipe(
          map((log) => LogsActions.removeItemSuccess({ log })),
          catchError((error) =>
            of(
              LogsActions.removeItemFailure({
                error: error?.error?.message ?? 'Failed to remove item',
              })
            )
          )
        )
      )
    )
  );
}
