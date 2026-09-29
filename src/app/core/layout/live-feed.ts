import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-live-feed',
  standalone: true,
  template: `
  <aside class="w- border-l border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 h-screen sticky top-0 p-4 flex flex-col gap-4 overflow-y-auto">
    <div class="flex items-center gap-2 text- font-semibold tracking-widest text-zinc-500 dark:text-zinc-400">
      <span class="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
      LIVE ACTIVITY • 247 online
    </div>

    <div class="space-y-3 text-">
      <div class="flex gap-2">
        <span class="font-bold text-zinc-900 dark:text-white">SM</span>
        <span class="text-zinc-600 dark:text-zinc-300">published ESG Q4 Report — 2m ago</span>
      </div>
      <div class="flex gap-2">
        <span class="font-bold text-zinc-900 dark:text-white">LE</span>
        <span class="text-zinc-600 dark:text-zinc-300">commented on VantageOS 4.2 — 8m ago</span>
      </div>
      <div class="flex gap-2">
        <span class="font-bold text-zinc-900 dark:text-white">KT</span>
        <span class="text-zinc-600 dark:text-zinc-300">merged PR feat(signals): resource() — 23m ago</span>
      </div>
    </div>

    <div class="mt-auto rounded- bg-zinc-900 dark:bg-black border border-zinc-800 p-3">
      <div class="text- font-bold text-zinc-400 tracking-widest">ESG PULSE</div>
      <div class="text- text-white mt-1 font-medium">LATAM -8.2% emissions vs Q3</div>
    </div>
  </aside>
  `
})
export class LiveFeedComponent {}