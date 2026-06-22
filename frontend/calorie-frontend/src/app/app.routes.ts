import { Routes } from '@angular/router';

import { authGuard, guestGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login.component').then((m) => m.LoginComponent),
    canActivate: [guestGuard],
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/register/register.component').then((m) => m.RegisterComponent),
    canActivate: [guestGuard],
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then((m) => m.DashboardComponent),
    canActivate: [authGuard],
  },
  {
    path: 'history',
    loadComponent: () =>
      import('./features/history/history.component').then((m) => m.HistoryComponent),
    canActivate: [authGuard],
  },
  {
    path: 'my-products',
    loadComponent: () =>
      import('./features/my-products/my-products.component').then((m) => m.MyProductsComponent),
    canActivate: [authGuard],
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./features/all-products/all-products.component').then((m) => m.AllProductsComponent),
    canActivate: [authGuard],
  },
  {
    path: 'my-products/new',
    loadComponent: () =>
      import('./features/my-products/product-form/product-form.component').then(
        (m) => m.ProductFormComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'my-products/edit/:id',
    loadComponent: () =>
      import('./features/my-products/product-form/product-form.component').then(
        (m) => m.ProductFormComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./features/profile/profile.component').then((m) => m.ProfileComponent),
    canActivate: [authGuard],
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./features/admin/admin.component').then((m) => m.AdminComponent),
    canActivate: [adminGuard],
  },
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: '**', redirectTo: 'dashboard' },
];
