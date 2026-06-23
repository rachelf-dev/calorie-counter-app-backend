import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { User } from '../../core/models/api.models';

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    Login: props<{
      email: string;
      password: string;
      returnUrl?: string;
      search?: string;
    }>(),
    'Login Success': props<{ token: string; user: User }>(),
    'Login Failure': props<{ error: string }>(),

    Register: props<{ name: string; email: string; password: string }>(),
    'Register Success': props<{ token: string; user: User }>(),
    'Register Failure': props<{ error: string }>(),

    'Set User': props<{ user: User }>(),
    Logout: emptyProps(),
  },
});
