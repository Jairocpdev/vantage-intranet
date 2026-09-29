import { Injectable, signal, computed, resource } from '@angular/core';

export interface Doc {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  critical?: boolean;
}

@Injectable({ providedIn: 'root' })
export class KnowledgeService {
  filter = signal('All');
  search = signal('');

  // Mock igual do seu protótipo original
  private mockDocs: Doc[] = [
    { id: '1', title: 'Q4 ESG Compliance Update: New Reporting Standards for LATAM', category: 'Critical', excerpt: 'All regional leads must complete updated GRI training by Nov 15.', image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800', critical: true },
    { id: '2', title: 'VantageOS 4.2 Release Notes', category: 'Engineering Standards', excerpt: 'Zoneless, signals and resource() stable.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800' },
    { id: '3', title: 'Safety Protocols - Offshore Operations', category: 'Safety Protocols', excerpt: 'Updated procedures for Q1 2026.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800' },
    { id: '4', title: 'HR Policy: Remote Work Guidelines', category: 'HR Policies', excerpt: 'New flexible work framework.', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800' },
    { id: '5', title: 'IT Security: Zero Trust Rollout', category: 'IT Guides', excerpt: 'Phased migration to zero trust.', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800' },
  ];

  // CORREÇÃO: resource() que não quebra - retorna mock local
  docsResource = resource({
    loader: async () => {
      // simula delay de rede igual prod real
      await new Promise(r => setTimeout(r, 300));
      return this.mockDocs;
    }
  });

  // filtered reativo com search + category
  filteredDocs = computed(() => {
    const docs = this.docsResource.value() ?? [];
    const f = this.filter();
    const s = this.search().toLowerCase();

    return docs.filter(d => {
      const byCat = f === 'All' || d.category === f || (f === 'Critical' && d.critical);
      const bySearch = !s || d.title.toLowerCase().includes(s) || d.excerpt.toLowerCase().includes(s);
      return byCat && bySearch;
    });
  });
}