import { AsyncPipe } from '@angular/common';
import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { Product } from '../../core/models/api.models';
import { AuthService } from '../../core/services/auth.service';
import { ProductSearchComponent } from '../../shared/product-search/product-search.component';
import { UnitSelectorComponent, UnitSelection } from '../../shared/unit-selector/unit-selector.component';
import { BasketComponent } from './basket/basket.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { CalorieFormatPipe } from '../../shared/pipes/calorie-format.pipe';
import { CalorieWarningDirective } from '../../shared/directives/calorie-warning.directive';
import { WeeklyChartComponent } from '../../shared/weekly-chart/weekly-chart.component';
import { LogsActions } from '../../store/logs/logs.actions';
import {
  selectLogsError,
  selectLogsLoading,
  selectTodayLog,
} from '../../store/logs/logs.selectors';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,
    ProductSearchComponent,
    UnitSelectorComponent,
    BasketComponent,
    ProgressBarComponent,
    CalorieFormatPipe,
    CalorieWarningDirective,
    WeeklyChartComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly actions$ = inject(Actions);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  protected readonly authService = inject(AuthService);
  private readonly toastr = inject(ToastrService);
  private readonly destroyRef = inject(DestroyRef);

  readonly todayLog$ = this.store.select(selectTodayLog);
  readonly loading$ = this.store.select(selectLogsLoading);
  readonly error$ = this.store.select(selectLogsError);

  /** Read once from URL on load — avoids resetting the input while typing. */
  readonly initialSearch = this.route.snapshot.queryParamMap.get('search') ?? '';
  readonly selectedProduct = signal<Product | null>(null);
  readonly unitSelection = signal<UnitSelection | null>(null);

  ngOnInit(): void {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login'], {
        queryParams: {
          returnUrl: 'dashboard',
          ...(this.initialSearch ? { search: this.initialSearch } : {}),
        },
      });
      return;
    }

    this.store.dispatch(LogsActions.loadToday());

    this.actions$
      .pipe(
        ofType(LogsActions.addItemSuccess),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(({ log }) => {
        const lastItem = log.items.at(-1);
        const label = lastItem?.productName ?? 'הפריט';
        this.toastr.success(`${label} נוסף לסל`);
      });

    this.actions$
      .pipe(
        ofType(LogsActions.addItemFailure),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(({ error }) => {
        this.toastr.error(error);
      });

    this.actions$
      .pipe(
        ofType(LogsActions.removeItemSuccess),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        this.toastr.info('הפריט הוסר מהסל');
      });

    this.actions$
      .pipe(
        ofType(LogsActions.removeItemFailure),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(({ error }) => {
        this.toastr.error(error);
      });
  }

  onSearchChange(term: string): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { search: term || null },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  onProductSelected(product: Product): void {
    this.selectedProduct.set(product);
    this.unitSelection.set(null);
  }

  onUnitSelectionChange(selection: UnitSelection): void {
    this.unitSelection.set(selection);
  }

  addToBasket(): void {
    const product = this.selectedProduct();
    const selection = this.unitSelection();

    if (!product || !selection) {
      return;
    }

    this.store.dispatch(
      LogsActions.addItem({
        payload: {
          productId: product._id,
          unit: selection.unit,
          quantity: selection.quantity,
        },
      })
    );
  }

  logout(): void {
    this.authService.logout();
    this.toastr.info('התנתקת בהצלחה');
    this.router.navigate(['/login']);
  }
}
