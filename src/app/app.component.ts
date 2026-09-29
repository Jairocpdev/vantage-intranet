import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './core/layout/sidebar';
import { HeaderComponent } from './core/layout/header'
import { LiveFeedComponent } from './core/layout/live-feed';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent, LiveFeedComponent],
  template: `
  <div class="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300 flex">
    <app-sidebar />
    <div class="flex-1 flex flex-col min-w-0">
      <app-header />
      <main class="flex-1 p-6 bg-zinc-50 dark:bg-zinc-950">
        <router-outlet />
      </main>
    </div>
    <app-live-feed />
  </div>
  `
})
export class AppComponent {}