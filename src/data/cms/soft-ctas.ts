import type { SoftCTA } from '@/types/cms';

export const softCTAs: SoftCTA[] = [
  {
    id: 'cta-001',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-12-01T00:00:00Z',
    is_active: true,
    order_index: 1,
    text: 'Discover More',
    link: '/our-story',
    context: 'home',
  },
  {
    id: 'cta-002',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-12-01T00:00:00Z',
    is_active: true,
    order_index: 2,
    text: 'Meet the Family',
    link: '/vj-parivaar',
    context: 'home',
  },
  {
    id: 'cta-003',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-12-01T00:00:00Z',
    is_active: true,
    order_index: 3,
    text: 'Explore Life Here',
    link: '/life-at-vj',
    context: 'community',
  },
  {
    id: 'cta-004',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-12-01T00:00:00Z',
    is_active: true,
    order_index: 4,
    text: 'Discover More',
    link: '/stories',
    context: 'story',
  },
  {
    id: 'cta-005',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-12-01T00:00:00Z',
    is_active: true,
    order_index: 5,
    text: 'Meet the Family',
    link: '/vj-parivaar',
    context: 'our-story',
  },
];

// Helper functions
export const getActiveCTAs = (): SoftCTA[] => {
  return softCTAs
    .filter(cta => cta.is_active)
    .sort((a, b) => a.order_index - b.order_index);
};

export const getCTAsByContext = (context: SoftCTA['context']): SoftCTA[] => {
  return softCTAs
    .filter(cta => cta.is_active && cta.context === context)
    .sort((a, b) => a.order_index - b.order_index);
};
