import type { Community } from '@/types/cms';

export const communities: Community[] = [
  {
    id: 'community-001',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-12-01T00:00:00Z',
    is_active: true,
    order_index: 1,
    name: 'VJ Greenwood',
    slug: 'vj-greenwood',
    location: 'Baner, Pune',
    tagline: 'Where Nature Meets Neighbourhood',
    description: 'Nestled among mature trees, VJ Greenwood is a sanctuary for families who believe in sustainable living. Morning bird songs and evening community walks define life here.',
    hero_image: '/placeholder.svg',
    lifestyle_images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    resident_quote: {
      text: 'My children learned more about nature here in one month than they did in years of city living.',
      author: 'Meera Patil, Resident since 2020',
    },
    local_experiences: [
      'Morning bird watching walks',
      'Weekend organic farmer\'s market',
      'Community composting program',
      'Nature photography club',
    ],
    features: ['Community Garden', 'Nature Trails', "Weekend Farmer's Market", "Children's Discovery Zone"],
    is_featured: true,
  },
  {
    id: 'community-002',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-12-01T00:00:00Z',
    is_active: true,
    order_index: 2,
    name: 'VJ Heights',
    slug: 'vj-heights',
    location: 'Kothrud, Pune',
    tagline: 'Elevated Living, Grounded Values',
    description: "VJ Heights combines panoramic city views with the warmth of close-knit community living. It's where skylines meet storylines.",
    hero_image: '/placeholder.svg',
    lifestyle_images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    resident_quote: {
      text: "The rooftop gatherings have given us friendships we'll cherish forever.",
      author: 'Suresh & Kavita Nair, Residents since 2018',
    },
    local_experiences: [
      'Rooftop stargazing nights',
      'Monthly cultural evenings',
      'Inter-floor cricket tournaments',
      'Book exchange program',
    ],
    features: ['Rooftop Community Lounge', 'Cultural Events Space', 'Multi-generational Zones', 'Art Gallery'],
    is_featured: true,
  },
  {
    id: 'community-003',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-12-01T00:00:00Z',
    is_active: true,
    order_index: 3,
    name: 'VJ Harmony',
    slug: 'vj-harmony',
    location: 'Wakad, Pune',
    tagline: 'Life in Perfect Balance',
    description: 'Designed for modern families seeking balance, VJ Harmony offers spaces that adapt to your lifestyle—from work-from-home needs to weekend celebrations.',
    hero_image: '/placeholder.svg',
    lifestyle_images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    resident_quote: {
      text: 'The community kitchen concept changed how we celebrate festivals—now the whole building cooks together.',
      author: 'The Kulkarni Family, Residents since 2021',
    },
    local_experiences: [
      'Community cooking sessions',
      'Work-from-home networking meetups',
      'Festival preparation together',
      'Weekend potluck dinners',
    ],
    features: ['Co-working Spaces', 'Wellness Centre', 'Community Kitchen', 'Festival Pavilion'],
    is_featured: true,
  },
  {
    id: 'community-004',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-12-01T00:00:00Z',
    is_active: true,
    order_index: 4,
    name: 'VJ Serenity',
    slug: 'vj-serenity',
    location: 'Hinjewadi, Pune',
    tagline: 'Your Peaceful Retreat',
    description: 'After the hustle of IT corridors, come home to tranquility. VJ Serenity is designed as an oasis of calm for the modern professional.',
    hero_image: '/placeholder.svg',
    lifestyle_images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    resident_quote: {
      text: 'I never thought I\'d find peace so close to work. This place proved me wrong.',
      author: 'Amit Sharma, Resident since 2022',
    },
    local_experiences: [
      'Guided meditation sessions',
      'Silent reading hours in the library',
      'Weekend wellness workshops',
      'Sound therapy evenings',
    ],
    features: ['Meditation Gardens', 'Sound-proof Studios', 'Infinity Pool', 'Stargazing Deck'],
    is_featured: false,
  },
];

// Helper functions
export const getActiveCommunities = (): Community[] => {
  return communities
    .filter(community => community.is_active)
    .sort((a, b) => a.order_index - b.order_index);
};

export const getFeaturedCommunities = (): Community[] => {
  return communities
    .filter(community => community.is_active && community.is_featured)
    .sort((a, b) => a.order_index - b.order_index);
};

export const getCommunityBySlug = (slug: string): Community | undefined => {
  return communities.find(community => community.slug === slug && community.is_active);
};
