import type { BrandTimelineEvent } from '@/types/cms';

export const brandTimeline: BrandTimelineEvent[] = [
  {
    id: 'timeline-001',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-12-01T00:00:00Z',
    is_active: true,
    order_index: 1,
    year: '1974',
    title: 'A Dream Takes Root',
    description: 'Founded by Late Shri Vithal Javdekar with a simple belief: every family deserves a home built with integrity and care.',
    image_url: '/placeholder.svg',
    highlight_quote: 'We build homes we would be proud to live in ourselves.',
    is_highlight: true,
  },
  {
    id: 'timeline-002',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-12-01T00:00:00Z',
    is_active: true,
    order_index: 2,
    year: '1985',
    title: 'First Milestone',
    description: 'Completed our 100th home, each one carrying the promise of quality and trust that would define our legacy.',
    is_highlight: false,
  },
  {
    id: 'timeline-003',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-12-01T00:00:00Z',
    is_active: true,
    order_index: 3,
    year: '1995',
    title: 'Second Generation Joins',
    description: 'The next generation brings fresh ideas while honoring the values that built our foundation.',
    is_highlight: false,
  },
  {
    id: 'timeline-004',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-12-01T00:00:00Z',
    is_active: true,
    order_index: 4,
    year: '2005',
    title: 'Community First Approach',
    description: 'Pioneered the concept of community-centric living in Pune, focusing on shared spaces and collective experiences.',
    is_highlight: false,
  },
  {
    id: 'timeline-005',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-12-01T00:00:00Z',
    is_active: true,
    order_index: 5,
    year: '2010',
    title: '10,000 Happy Families',
    description: 'A milestone not measured in units sold, but in families who found their forever homes with us.',
    highlight_quote: 'Every family that trusts us becomes part of our extended family.',
    is_highlight: true,
  },
  {
    id: 'timeline-006',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-12-01T00:00:00Z',
    is_active: true,
    order_index: 6,
    year: '2015',
    title: 'Sustainable Living Initiative',
    description: "Committed to green building practices, because we're not just building homes—we're building a future.",
    is_highlight: false,
  },
  {
    id: 'timeline-007',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-12-01T00:00:00Z',
    is_active: true,
    order_index: 7,
    year: '2020',
    title: 'Through Challenges, Together',
    description: 'The pandemic tested us, but our VJ Parivaar stood strong, supporting each other through unprecedented times.',
    is_highlight: false,
  },
  {
    id: 'timeline-008',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-12-01T00:00:00Z',
    is_active: true,
    order_index: 8,
    year: '2024',
    title: '50 Years of Trust',
    description: 'Half a century of building not just homes, but relationships that span generations.',
    highlight_quote: 'Fifty years of keeping our promise—one home, one family at a time.',
    is_highlight: true,
  },
];

// Helper functions
export const getActiveTimeline = (): BrandTimelineEvent[] => {
  return brandTimeline
    .filter(event => event.is_active)
    .sort((a, b) => a.order_index - b.order_index);
};

export const getHighlightedEvents = (): BrandTimelineEvent[] => {
  return brandTimeline
    .filter(event => event.is_active && event.is_highlight)
    .sort((a, b) => a.order_index - b.order_index);
};
