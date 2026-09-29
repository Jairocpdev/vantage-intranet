import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  template: `
  <aside class="w- border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 h-screen sticky top-0 p-3 flex flex-col">
  <div class="flex items-center gap-2 px-2 py-2">
    <div class="h-7 w-7 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 grid place-items-center font-bold text-">V</div>
    <span class="text- font-bold tracking-tight dark:text-white">VANTAGE GLOBAL</span>
  </div>
  <!-- resto do menu com dark:text-zinc-400 etc -->
</aside>`
})
export class SidebarComponent {}