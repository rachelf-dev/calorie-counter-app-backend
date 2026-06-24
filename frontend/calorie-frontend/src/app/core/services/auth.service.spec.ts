import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';
import { User } from '../models/api.models';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  const mockUser: User = {
    _id: 'user-1',
    name: 'Test User',
    email: 'test@example.com',
    role: 'user',
    calorieGoal: 2000,
  };

  beforeEach(() => {
    localStorage.clear();

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
    });

    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
    localStorage.clear();
  });

  it('registers and persists session', () => {
    service.register({ name: 'Test User', email: 'test@example.com', password: 'secret123' }).subscribe();

    const req = httpMock.expectOne(`${environment.apiUrl}/auth/register`);
    expect(req.request.method).toBe('POST');
    req.flush({ token: 'jwt-token', user: mockUser });

    expect(service.getToken()).toBe('jwt-token');
    expect(service.isAuthenticated()).toBeTrue();
    expect(service.currentUser()).toEqual(mockUser);
  });

  it('logs in and persists session', () => {
    service.login({ email: 'test@example.com', password: 'secret123' }).subscribe();

    const req = httpMock.expectOne(`${environment.apiUrl}/auth/login`);
    expect(req.request.method).toBe('POST');
    req.flush({ token: 'jwt-token', user: mockUser });

    expect(service.getToken()).toBe('jwt-token');
    expect(service.currentUser()).toEqual(mockUser);
  });

  it('clears session on logout', () => {
    localStorage.setItem('token', 'jwt-token');
    localStorage.setItem('user', JSON.stringify(mockUser));
    service.currentUser.set(mockUser);

    service.logout();

    expect(service.getToken()).toBeNull();
    expect(service.isAuthenticated()).toBeFalse();
    expect(service.currentUser()).toBeNull();
  });
});
