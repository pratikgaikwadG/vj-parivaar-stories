// CMS Base Types - All tables follow this structure
export interface CMSBase {
  id: string;
  created_at: string;
  updated_at: string;
  is_active: boolean;
  order_index: number;
}

// Homepage Hero Section
export interface HomepageHero extends CMSBase {
  headline: string;
  subheadline: string;
  background_image_url: string;
  mobile_image_url?: string;
  soft_cta_text: string;
  soft_cta_link: string;
}

// Community Moments
export interface CommunityMoment extends CMSBase {
  title: string;
  description: string;
  image_url: string;
  quote: string;
  author_name: string;
  author_type: 'employee' | 'homeowner' | 'partner';
}

// Stories
export interface Story extends CMSBase {
  title: string;
  slug: string;
  short_description: string;
  full_content: string;
  cover_image: string;
  story_type: 'community' | 'employee' | 'homeowner' | 'event';
  published_date: string;
  is_featured: boolean;
  author_name: string;
  author_role: string;
}

// Brand Timeline
export interface BrandTimelineEvent extends CMSBase {
  year: string;
  title: string;
  description: string;
  image_url?: string;
  highlight_quote?: string;
  is_highlight: boolean;
}

// Parivaar People (unified directory)
export interface ParivaarPerson extends CMSBase {
  name: string;
  role_type: 'employee' | 'homeowner' | 'partner';
  designation: string;
  bio?: string;
  profile_image: string;
  joined_year?: string;
  tenure?: string;
  personal_quote: string;
}

// Communities
export interface Community extends CMSBase {
  name: string;
  slug: string;
  location: string;
  tagline: string;
  description: string;
  hero_image: string;
  lifestyle_images: string[];
  resident_quote?: {
    text: string;
    author: string;
  };
  local_experiences: string[];
  features: string[];
  is_featured: boolean;
}

// Soft CTAs
export type SoftCTAText = 'Discover More' | 'Meet the Family' | 'Explore Life Here';

export interface SoftCTA extends CMSBase {
  text: SoftCTAText;
  link: string;
  context: 'home' | 'story' | 'community' | 'parivaar' | 'our-story';
}

// Media Assets
export interface MediaAsset extends CMSBase {
  file_url: string;
  file_type: 'image' | 'video';
  alt_text: string;
  used_in: string;
}

// Admin (for reference - would be handled by auth system)
export interface Admin {
  id: string;
  name: string;
  email: string;
  last_login_at: string;
}

// Site Settings
export interface SiteSettings extends CMSBase {
  site_name: string;
  tagline: string;
  logo_url: string;
  footer_text: string;
  social_links: {
    platform: string;
    url: string;
  }[];
}
