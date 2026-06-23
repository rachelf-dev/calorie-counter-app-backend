import { createSelector } from '@ngrx/store';

import { selectAuthState } from './auth.reducer';

export const selectAuthUser = createSelector(selectAuthState, (state) => state.user);

export const selectAuthToken = createSelector(selectAuthState, (state) => state.token);

export const selectIsAuthenticated = createSelector(
  selectAuthToken,
  (token) => !!token
);

export const selectIsAdmin = createSelector(
  selectAuthUser,
  (user) => user?.role === 'admin'
);

export const selectAuthLoading = createSelector(selectAuthState, (state) => state.loading);

export const selectAuthError = createSelector(selectAuthState, (state) => state.error);
