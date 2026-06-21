import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../services/auth.service';

export const appInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const toastr = inject(ToastrService);
  const router = inject(Router);

  const token = authService.getToken();
  const authReq = token
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        if (token) {
          toastr.error('פג תוקף ההתחברות, אנא התחבר מחדש');
          authService.logout();
          router.navigate(['/login']);
        }
      } else if (error.status === 403) {
        toastr.error('אין לך הרשאה לבצע פעולה זו');
      } else if (error.status === 0 || error.status >= 500) {
        toastr.error('שגיאת שרת, אנא נסה מחדש מאוחר יותר');
      }

      return throwError(() => error);
    })
  );
};
