import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastrService } from 'ngx-toastr';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { AuthService } from '../../core/services/auth.service';
import { AuthActions } from './auth.actions';

@Injectable()
export class AuthEffects {
  private readonly actions$ = inject(Actions);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly toastr = inject(ToastrService);

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ email, password, returnUrl, search }) =>
        this.authService.login({ email, password }).pipe(
          tap((res) => {
            this.toastr.success(`ברוך הבא, ${res.user.name}`);
            this.router.navigate([`/${returnUrl ?? 'dashboard'}`], {
              ...(search ? { queryParams: { search } } : {}),
            });
          }),
          map((res) =>
            AuthActions.loginSuccess({ token: res.token, user: res.user })
          ),
          catchError((error) => {
            const message = error?.error?.message ?? 'אירעה שגיאה בהתחברות';
            this.toastr.error(message);
            return of(AuthActions.loginFailure({ error: message }));
          })
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.register),
      switchMap(({ name, email, password }) =>
        this.authService.register({ name, email, password }).pipe(
          tap((res) => {
            this.toastr.success(`ברוך הבא, ${res.user.name}`);
            this.router.navigate(['/dashboard']);
          }),
          map((res) =>
            AuthActions.registerSuccess({ token: res.token, user: res.user })
          ),
          catchError((error) => {
            const message = error?.error?.message ?? 'אירעה שגיאה בהרשמה';
            this.toastr.error(message);
            return of(AuthActions.registerFailure({ error: message }));
          })
        )
      )
    )
  );

  persistUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.setUser),
        tap(({ user }) => this.authService.updateCurrentUser(user))
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          this.authService.logout();
          this.toastr.info('התנתקת בהצלחה');
          this.router.navigate(['/login']);
        })
      ),
    { dispatch: false }
  );
}
