import { Component, inject } from '@angular/core';
import { KnowledgeService } from '../../core/services/knowledge.service';

@Component({
  selector: 'app-knowledge-base',
  standalone: true,
  template: `
  <div class="space-y-4">
    <div class="flex gap-2 flex-wrap">
      @for(cat of cats; track cat){
        <button (click)="svc.filter.set(cat)"
          [class.bg-zinc-900]="svc.filter()===cat" [class.text-white]="svc.filter()===cat"
          [class.dark:bg-white]="svc.filter()===cat" [class.dark:text-zinc-900]="svc.filter()===cat"
          class="px-3.5 h-8 rounded-full border border-zinc-200 dark:border-zinc-700 text- font-medium bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300">
          {{cat}}
        </button>
      }
    </div>
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
      @for(doc of svc.filteredDocs(); track doc.id){
        <article class="rounded- border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden hover:shadow-lg transition">
          <img [src]="doc.image" class="w-full aspect-[16/9] object-cover" />
          <div class="p-4">
            <div class="text- font-semibold text-zinc-500 dark:text-zinc-400">{{doc.category}}</div>
            <h4 class="font-semibold text- mt-1 dark:text-white">{{doc.title}}</h4>
            <p class="text- text-zinc-500 dark:text-zinc-400 mt-1">{{doc.excerpt}}</p>
          </div>
        </article>
      }
    </div>
  </div>
  `
})
export class KnowledgeBaseComponent {
  svc = inject(KnowledgeService);
  cats = ['All','Engineering Standards','Safety Protocols','HR Policies','IT Guides'];
}