import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideToastr } from 'ngx-toastr';

import { routes } from './app.routes';
import { logsReducer } from './store/logs/logs.reducer';
import { LogsEffects } from './store/logs/logs.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([])),
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
