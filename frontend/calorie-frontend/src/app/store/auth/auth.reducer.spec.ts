import { User } from '../../core/models/api.models';
import { AuthActions } from './auth.actions';
import { authReducer, initialAuthState } from './auth.reducer';

describe('authReducer', () => {
  const user: User = {
    _id: 'user-1',
    name: 'Test User',
    email: 'test@example.com',
    role: 'user',
    calorieGoal: 2000,
  };

  it('sets loading on login', () => {
    const state = authReducer(
      initialAuthState,
      AuthActions.login({ email: 'test@example.com', password: 'secret123' })
    );

    expect(state.loading).toBeTrue();
    expect(state.error).toBeNull();
  });

  it('stores token and user on login success', () => {
    const state = authReducer(
      { ...initialAuthState, loading: true },
      AuthActions.loginSuccess({ token: 'jwt-token', user })
    );

    expect(state.loading).toBeFalse();
    expect(state.token).toBe('jwt-token');
    expect(state.user).toEqual(user);
  });

  it('stores error on login failure', () => {
    const state = authReducer(
      { ...initialAuthState, loading: true },
      AuthActions.loginFailure({ error: 'Invalid credentials' })
    );

    expect(state.loading).toBeFalse();
    expect(state.error).toBe('Invalid credentials');
  });

  it('clears auth state on logout', () => {
    const state = authReducer(
      { user, token: 'jwt-token', loading: false, error: null },
      AuthActions.logout()
    );

    expect(state.user).toBeNull();
    expect(state.token).toBeNull();
  });
});
