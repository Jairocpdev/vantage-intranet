import { Component, signal, computed, OnInit, OnDestroy } from '@angular/core';

interface Person {
  id: string;
  name: string;
  role: string;
  team: string;
  avatar: string;
  initials: string;
  location: string;
}

@Component({
  selector: 'app-people',
  standalone: true,
  template: `
  <div class="space-y-5">
    <div class="flex justify-between items-center">
      <h2 class="text- font-semibold tracking-tight dark:text-white">People Directory</h2>
      <span class="text- px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300">
        {{ onlineCount() }} online • presence() live
      </span>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      @for(p of people(); track p.id){
        <div class="rounded- border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 flex gap-3 hover:shadow-md transition">
          <div class="relative">
            <div class="h-10 w-10 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 grid place-items-center text- font-bold">
              {{p.initials}}
            </div>
            @if(isOnline(p.id)){
              <span class="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white dark:border-zinc-900 animate-pulse"></span>
            } @else {
              <span class="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-700 border-2 border-white dark:border-zinc-900"></span>
            }
          </div>
          <div class="flex-1 min-w-0">
            <div class="text- font-semibold dark:text-white truncate">{{p.name}}</div>
            <div class="text- text-zinc-500 truncate">{{p.role}} • {{p.team}}</div>
            <div class="text- text-zinc-400 mt-1">{{p.location}} • {{ isOnline(p.id) ? 'Active now' : 'Offline' }}</div>
          </div>
        </div>
      }
    </div>
  </div>
  `
})
export class PeopleComponent implements OnInit, OnDestroy {
  people = signal<Person[]>([
    { id: 'SM', name: 'Sarah Mitchell', role: 'ESG Lead', team: 'LATAM', initials: 'SM', location: 'São Paulo', avatar: '' },
    { id: 'LE', name: 'Lucas Evans', role: 'Staff Engineer', team: 'VantageOS', initials: 'LE', location: 'Berlin', avatar: '' },
    { id: 'KT', name: 'Katherine Torres', role: 'Engineering Manager', team: 'Signals', initials: 'KT', location: 'Austin', avatar: '' },
    { id: 'JA', name: 'Jairo Andrade', role: 'Frontend Architect', team: 'Intranet', initials: 'JA', location: 'Nilópolis', avatar: '' },
    { id: 'RP', name: 'Rafael Pires', role: 'Safety Officer', team: 'Offshore', initials: 'RP', location: 'Macaé', avatar: '' },
    { id: 'AM', name: 'Ana Maria', role: 'HR Business Partner', team: 'People', initials: 'AM', location: 'Lisboa', avatar: '' },
  ]);

  // presence() signal que muda a cada 3s igual Slack/【entity-Teams¦canonical_name=Microsoft Teams】
  private onlineIds = signal<Set<string>>(new Set(['SM','JA','KT']));
  private interval: any;

  isOnline = (id: string) => this.onlineIds().has(id);
  onlineCount = computed(() => this.onlineIds().size);

  ngOnInit() {
    this.interval = setInterval(() => {
      const all = this.people().map(p => p.id);
      const randomOnline = new Set(
        all.filter(() => Math.random() > 0.4)
      );
      this.onlineIds.set(randomOnline);
    }, 3000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}