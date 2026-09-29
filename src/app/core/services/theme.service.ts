import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDark = signal(false);

  constructor() {
    const saved = localStorage.getItem('vantage-theme');
    if (saved) this.isDark.set(saved === 'dark');
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) this.isDark.set(true);

    effect(() => {
      document.documentElement.classList.toggle('dark', this.isDark());
      localStorage.setItem('vantage-theme', this.isDark() ? 'dark' : 'light');
    });
  }

  toggle() {
    this.isDark.update(v => !v);
  }
}