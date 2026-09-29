import { Component, inject, signal } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
  <header class="h- border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl flex items-center px-6 gap-3 sticky top-0 z-20">
    <span class="text-zinc-500 dark:text-zinc-400 text-sm">Home / Dashboard</span>
    
    <div class="ml-auto flex gap-2 items-center">
      <input 
        placeholder="Search (⌘K) - resource() powered" 
        class="h-9 pl-3 pr-10 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text- w- dark:text-white outline-none focus:border-zinc-900 dark:focus:border-zinc-100" />
    
      <div class="h-9 w-9 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center text- font-medium">JA</div>
    </div>
  </header>`
})
export class HeaderComponent {
  theme = inject(ThemeService);
}