import type { HomepageHero, CommunityMoment } from '@/types/cms';

export const homepageHero: HomepageHero = {
  id: 'hero-001',
  created_at: '2024-01-01T00:00:00Z',
  updated_at: '2024-12-01T00:00:00Z',
  is_active: true,
  order_index: 1,
  headline: 'Where Every Home Tells a Story',
  subheadline: "At VJ Javdekar, we don't just build homes—we nurture communities. For five decades, families across Pune have trusted us to create spaces where life unfolds beautifully.",
  background_image_url: '/assets/hero-family.jpg',
  mobile_image_url: '/assets/hero-family-mobile.jpg',
  soft_cta_text: 'Discover Our Story',
  soft_cta_link: '/our-story',
};

export const communityMoments: CommunityMoment[] = [
  {
    id: 'moment-001',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-12-01T00:00:00Z',
    is_active: true,
    order_index: 1,
    title: 'Morning Yoga Sessions',
    description: 'Every morning, residents gather in the community garden for yoga. What started as a casual activity has become a cherished ritual that brings neighbours together.',
    image_url: '/assets/community-yoga.jpg',
    quote: 'The morning yoga sessions have given us friendships that go beyond just being neighbours.',
    author_name: 'VJ Greenwood Residents',
    author_type: 'homeowner',
  },
  {
    id: 'moment-002',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-12-01T00:00:00Z',
    is_active: true,
    order_index: 2,
    title: 'Festival Celebrations',
    description: 'From Diwali to Ganesh Chaturthi, our communities come alive with shared celebrations that remind us why we chose to live here.',
    image_url: '/placeholder.svg',
    quote: 'Last Diwali, our entire building came together. The laughter, the lights, the love—unforgettable.',
    author_name: 'The Sharma Family',
    author_type: 'homeowner',
  },
  {
    id: 'moment-003',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-12-01T00:00:00Z',
    is_active: true,
    order_index: 3,
    title: 'Weekend Farmer\'s Market',
    description: 'Local vendors and residents come together every Saturday for fresh produce, homemade goods, and community connection.',
    image_url: '/placeholder.svg',
    quote: 'My children learned more about nature here in one month than they did in years of city living.',
    author_name: 'Meera Patil',
    author_type: 'homeowner',
  },
];

// Helper function to get active content ordered by order_index
export const getActiveHero = (): HomepageHero | null => {
  return homepageHero.is_active ? homepageHero : null;
};

export const getActiveCommunityMoments = (): CommunityMoment[] => {
  return communityMoments
    .filter(moment => moment.is_active)
    .sort((a, b) => a.order_index - b.order_index);
};
