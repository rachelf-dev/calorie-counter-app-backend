import { TestBed } from '@angular/core/testing';
import {
  HttpClient,
  HttpErrorResponse,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { appInterceptor } from './app.interceptor';
import { AuthService } from '../services/auth.service';

describe('appInterceptor', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;
  let authService: AuthService;
  let router: jasmine.SpyObj<Router>;
  let toastr: jasmine.SpyObj<ToastrService>;

  beforeEach(() => {
    router = jasmine.createSpyObj('Router', ['navigate']);
    toastr = jasmine.createSpyObj('ToastrService', ['error']);

    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: Router, useValue: router },
        { provide: ToastrService, useValue: toastr },
        provideHttpClient(withInterceptors([appInterceptor])),
        provideHttpClientTesting(),
      ],
    });

    http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
    authService = TestBed.inject(AuthService);
    localStorage.setItem('token', 'jwt-token');
  });

  afterEach(() => {
    httpMock.verify();
    localStorage.clear();
  });

  it('adds Authorization header when token exists', () => {
    http.get('/api/users/profile').subscribe();

    const req = httpMock.expectOne('/api/users/profile');
    expect(req.request.headers.get('Authorization')).toBe('Bearer jwt-token');
    req.flush({});
  });

  it('handles 401 by logging out and redirecting to login', () => {
    spyOn(authService, 'logout').and.callThrough();

    http.get('/api/users/profile').subscribe({
      error: (error: HttpErrorResponse) => {
        expect(error.status).toBe(401);
      },
    });

    const req = httpMock.expectOne('/api/users/profile');
    req.flush({ message: 'Unauthorized' }, { status: 401, statusText: 'Unauthorized' });

    expect(toastr.error).toHaveBeenCalledWith('פג תוקף ההתחברות, אנא התחבר מחדש');
    expect(authService.logout).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('handles 403 with permission toast', () => {
    http.get('/api/users').subscribe({
      error: (error: HttpErrorResponse) => {
        expect(error.status).toBe(403);
      },
    });

    const req = httpMock.expectOne('/api/users');
    req.flush({ message: 'Forbidden' }, { status: 403, statusText: 'Forbidden' });

    expect(toastr.error).toHaveBeenCalledWith('אין לך הרשאה לבצע פעולה זו');
  });
});
