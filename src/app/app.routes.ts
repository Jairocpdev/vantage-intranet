import { Routes } from '@angular/router';
export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
  { path: 'knowledge', loadComponent: () => import('./features/knowledge-base/knowledge.base').then(m => m.KnowledgeBaseComponent) },
  { path: 'people', loadComponent: () => import('./features/people/people.component').then(m => m.PeopleComponent) }
];