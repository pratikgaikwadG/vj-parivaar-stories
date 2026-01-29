import type { ParivaarPerson } from '@/types/cms';

export const parivaarPeople: ParivaarPerson[] = [
  // Leadership
  {
    id: 'person-001',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-12-01T00:00:00Z',
    is_active: true,
    order_index: 1,
    name: 'Vijay Javdekar',
    role_type: 'employee',
    designation: 'Managing Director',
    bio: 'Leading VJ Javdekar with the same values his father instilled—integrity, quality, and a deep commitment to every family we serve.',
    profile_image: '/placeholder.svg',
    tenure: '30+ years',
    personal_quote: "Every brick we lay carries the weight of someone's dreams. We never forget that.",
  },
  {
    id: 'person-002',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-12-01T00:00:00Z',
    is_active: true,
    order_index: 2,
    name: 'Anita Javdekar',
    role_type: 'employee',
    designation: 'Director, Customer Relations',
    bio: 'Ensuring every homeowner feels heard, valued, and supported throughout their journey with VJ.',
    profile_image: '/placeholder.svg',
    tenure: '25+ years',
    personal_quote: "Our homeowners aren't customers—they're family. We treat every concern as our own.",
  },
  // Team Members
  {
    id: 'person-003',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-12-01T00:00:00Z',
    is_active: true,
    order_index: 3,
    name: 'Rajesh Mhatre',
    role_type: 'employee',
    designation: 'Head of Construction',
    profile_image: '/placeholder.svg',
    tenure: '18 years',
    personal_quote: "Quality isn't just a standard here—it's a promise we make to every family.",
  },
  {
    id: 'person-004',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-12-01T00:00:00Z',
    is_active: true,
    order_index: 4,
    name: 'Sneha Gokhale',
    role_type: 'employee',
    designation: 'Community Manager',
    profile_image: '/placeholder.svg',
    tenure: '6 years',
    personal_quote: 'I wake up excited because I get to help build communities, not just buildings.',
  },
  {
    id: 'person-005',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-12-01T00:00:00Z',
    is_active: true,
    order_index: 5,
    name: 'Prakash Joshi',
    role_type: 'employee',
    designation: 'Senior Architect',
    profile_image: '/placeholder.svg',
    tenure: '12 years',
    personal_quote: 'Design should serve life. Every space we create has a purpose rooted in how people actually live.',
  },
  {
    id: 'person-006',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-12-01T00:00:00Z',
    is_active: true,
    order_index: 6,
    name: 'Neha Sharma',
    role_type: 'employee',
    designation: 'Marketing Lead',
    profile_image: '/placeholder.svg',
    tenure: '4 years',
    personal_quote: "We don't sell homes—we share stories. The rest takes care of itself.",
  },
  // Homeowners
  {
    id: 'person-007',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-12-01T00:00:00Z',
    is_active: true,
    order_index: 7,
    name: 'The Patel Family',
    role_type: 'homeowner',
    designation: 'Homeowners',
    profile_image: '/placeholder.svg',
    tenure: 'VJ Heights, 2019',
    personal_quote: 'Three generations of our family live here. VJ understood what we needed before we did.',
  },
  {
    id: 'person-008',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-12-01T00:00:00Z',
    is_active: true,
    order_index: 8,
    name: 'Sunita & Mohan Rao',
    role_type: 'homeowner',
    designation: 'Homeowners',
    profile_image: '/placeholder.svg',
    tenure: 'VJ Greenwood, 2020',
    personal_quote: "We didn't just buy a home; we joined a family of 200 wonderful neighbours.",
  },
  // Partners
  {
    id: 'person-009',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-12-01T00:00:00Z',
    is_active: true,
    order_index: 9,
    name: 'BuildRight Materials',
    role_type: 'partner',
    designation: 'Construction Partner',
    profile_image: '/placeholder.svg',
    tenure: '15 years',
    personal_quote: "VJ's commitment to quality pushed us to be better. They accept nothing less than the best.",
  },
  {
    id: 'person-010',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-12-01T00:00:00Z',
    is_active: true,
    order_index: 10,
    name: 'GreenScape Landscaping',
    role_type: 'partner',
    designation: 'Landscaping Partner',
    profile_image: '/placeholder.svg',
    tenure: '8 years',
    personal_quote: "Working with VJ taught us that green spaces aren't amenities—they're essential to community life.",
  },
];

// Helper functions
export const getActivePeople = (): ParivaarPerson[] => {
  return parivaarPeople
    .filter(person => person.is_active)
    .sort((a, b) => a.order_index - b.order_index);
};

export const getPeopleByRole = (roleType: ParivaarPerson['role_type']): ParivaarPerson[] => {
  return parivaarPeople
    .filter(person => person.is_active && person.role_type === roleType)
    .sort((a, b) => a.order_index - b.order_index);
};

export const getLeadership = (): ParivaarPerson[] => {
  return parivaarPeople
    .filter(person => person.is_active && person.role_type === 'employee' && person.designation.includes('Director'))
    .sort((a, b) => a.order_index - b.order_index);
};

export const getTeamMembers = (): ParivaarPerson[] => {
  return parivaarPeople
    .filter(person => person.is_active && person.role_type === 'employee' && !person.designation.includes('Director'))
    .sort((a, b) => a.order_index - b.order_index);
};
