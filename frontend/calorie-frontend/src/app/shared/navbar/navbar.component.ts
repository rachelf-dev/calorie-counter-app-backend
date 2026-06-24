import { AsyncPipe } from '@angular/common';
import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Store } from '@ngrx/store';
import { filter, map } from 'rxjs';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { User } from '../../core/models/api.models';
import { UserService } from '../../core/services/user.service';
import { AuthActions } from '../../store/auth/auth.actions';
import {
  selectAuthUser,
  selectIsAdmin,
  selectIsAuthenticated,
} from '../../store/auth/auth.selectors';

interface NavLink {
  label: string;
  path: string;
  icon: string;
  adminOnly?: boolean;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly userService = inject(UserService);
  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);

  readonly user$ = this.store.select(selectAuthUser);
  readonly isAuthenticated$ = this.store.select(selectIsAuthenticated);
  readonly isAdmin = toSignal(this.store.select(selectIsAdmin), { initialValue: false });

  readonly isMobile = signal(false);
  readonly sidenavOpen = signal(false);
  readonly currentUrl = signal(this.router.url);

  readonly navLinks: NavLink[] = [
    { label: 'לוח בקרה', path: '/dashboard', icon: 'dashboard' },
    { label: 'היסטוריה', path: '/history', icon: 'history' },
    { label: 'המוצרים שלי', path: '/my-products', icon: 'inventory_2' },
    { label: 'מוצרים', path: '/products', icon: 'storefront' },
    { label: 'פרופיל', path: '/profile', icon: 'person' },
    { label: 'ניהול', path: '/admin', icon: 'admin_panel_settings', adminOnly: true },
  ];

  visibleLinks(isAdmin: boolean, url: string): NavLink[] {
    return this.navLinks
      .filter((link) => !link.adminOnly || isAdmin)
      .filter((link) => !this.isActivePage(link.path, url));
  }

  private isActivePage(path: string, url: string): boolean {
    const clean = url.split('?')[0].split('#')[0];
    return clean === path || clean.startsWith(path + '/');
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        map((e) => e.urlAfterRedirects),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((url) => this.currentUrl.set(url));

    this.breakpointObserver
      .observe('(max-width: 768px)')
      .pipe(
        map((result) => result.matches),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((matches) => {
        this.isMobile.set(matches);
        if (!matches) {
          this.sidenavOpen.set(false);
        }
      });
  }

  profileImageUrl(user: User): string {
    return this.userService.imageUrl(user.profileImage);
  }

  logout(): void {
    this.sidenavOpen.set(false);
    this.store.dispatch(AuthActions.logout());
  }

  closeSidenav(): void {
    this.sidenavOpen.set(false);
  }

  openSidenav(): void {
    this.sidenavOpen.set(true);
  }
}
