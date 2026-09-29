// home.component.ts - FINAL - SEM CORTE
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnowledgeBaseComponent } from '../knowledge-base/knowledge.base';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, KnowledgeBaseComponent],
  template: `
  <section class="mb-6 rounded- border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 grid lg:grid-cols-[1.2fr_0.8fr] gap-6 overflow-hidden">
    <div>
      <span class="text- tracking-wide font-semibold px-2.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700">CRITICAL • LATAM</span>
      <h1 class="text- font-semibold leading-tight mt-3 tracking-tight">{{ announcements()[idx()].title }}</h1>
      <p class="text- text-zinc-600 mt-2 leading-relaxed">{{ announcements()[idx()].excerpt }}</p>
      <div class="flex gap-2 mt-5">
        <button (click)="idx.set((idx()+1)%announcements().length)" class="h-8 px-3.5 rounded-full bg-zinc-900 text-white text-">Next update →</button>
        <span class="text- text-zinc-500 self-center">{{idx()+1}} / {{announcements().length}}</span>
      </div>
    </div>
    <img [src]="announcements()[idx()].image" class="rounded-xl object-cover h- lg:h-full w-full" />
  </section>
  <app-knowledge-base />
  `
})
export class HomeComponent {
  idx = signal(0);
  announcements = signal([
    { title: 'Q4 ESG Compliance Update: New Reporting Standards for LATAM', excerpt: 'All regional leads must complete updated GRI training by Nov 15.', image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800' },
    { title: 'VantageOS 4.2 Rollout: Zoneless Migration Complete', excerpt: '47% reduction in bundle size, 2.3x faster INP.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800' }
  ]);
}