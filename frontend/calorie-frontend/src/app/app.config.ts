import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeHe from '@angular/common/locales/he';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideToastr } from 'ngx-toastr';

import { routes } from './app.routes';
import { appInterceptor } from './core/interceptors/app.interceptor';
import { logsReducer } from './store/logs/logs.reducer';
import { LogsEffects } from './store/logs/logs.effects';

registerLocaleData(localeHe);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    { provide: LOCALE_ID, useValue: 'he-IL' },
    provideRouter(routes),
    provideHttpClient(withInterceptors([appInterceptor])),
    provideAnimations(),
    provideStore({ logs: logsReducer }),
    provideEffects([LogsEffects]),
    provideToastr({
      timeOut: 4000,
      positionClass: 'toast-top-left',
      preventDuplicates: true,
    }),
  ],
};
