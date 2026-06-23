import { createFeature, createReducer, on } from '@ngrx/store';

import { User } from '../../core/models/api.models';
import { AuthService } from '../../core/services/auth.service';
import { AuthActions } from './auth.actions';

export interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const storedSession = AuthService.getStoredSession();

export const initialAuthState: AuthState = {
  user: storedSession.user,
  token: storedSession.token,
  loading: false,
  error: null,
};

export const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialAuthState,

    on(AuthActions.login, AuthActions.register, (state) => ({
      ...state,
      loading: true,
      error: null,
    })),

    on(AuthActions.loginSuccess, AuthActions.registerSuccess, (state, { token, user }) => ({
      ...state,
      user,
      token,
      loading: false,
      error: null,
    })),

    on(AuthActions.loginFailure, AuthActions.registerFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error,
    })),

    on(AuthActions.setUser, (state, { user }) => ({
      ...state,
      user,
    })),

    on(AuthActions.logout, () => ({
      user: null,
      token: null,
      loading: false,
      error: null,
    }))
  ),
});

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectAuthState,
  selectUser,
  selectToken,
  selectLoading,
  selectError,
} = authFeature;
