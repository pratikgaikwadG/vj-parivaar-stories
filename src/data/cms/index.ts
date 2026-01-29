// Central CMS Data Export
// This module provides a unified API for accessing all CMS content
// Can be easily replaced with real API calls when backend is connected

export * from './homepage';
export * from './stories';
export * from './timeline';
export * from './parivaar';
export * from './communities';
export * from './soft-ctas';

// Re-export types
export type {
  CMSBase,
  HomepageHero,
  CommunityMoment,
  Story,
  BrandTimelineEvent,
  ParivaarPerson,
  Community,
  SoftCTA,
  SoftCTAText,
  MediaAsset,
  Admin,
  SiteSettings,
} from '@/types/cms';

// Site-wide settings (would be a table in production)
export const siteSettings = {
  id: 'settings-001',
  created_at: '2024-01-01T00:00:00Z',
  updated_at: '2024-12-01T00:00:00Z',
  is_active: true,
  order_index: 1,
  site_name: 'VJ Javdekar',
  tagline: 'Building Homes, Growing Families',
  logo_url: '/logo.svg',
  footer_text: 'For over five decades, we\'ve been more than builders—we\'ve been family. Every home we create is a testament to trust, quality, and the enduring bonds of community.',
  social_links: [
    { platform: 'facebook', url: 'https://facebook.com/vjjavdekar' },
    { platform: 'instagram', url: 'https://instagram.com/vjjavdekar' },
    { platform: 'linkedin', url: 'https://linkedin.com/company/vjjavdekar' },
  ],
};

// Stats (would be computed or stored in production)
export const siteStats = {
  happy_families: '15,000+',
  years_of_trust: '50+',
  team_members: '200+',
  trusted_partners: '50+',
};
