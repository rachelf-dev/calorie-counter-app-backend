import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  host: {
    dir: 'rtl',
    lang: 'he',
  },
  template: `
    <app-navbar />
    <main class="app-main">
      <router-outlet />
    </main>
  `,
  styles: `
    :host {
      display: block;
      min-height: 100vh;
    }

    .app-main {
      min-height: calc(100vh - 64px);
    }
  `,
})
export class AppComponent {}
