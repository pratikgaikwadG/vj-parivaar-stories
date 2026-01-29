/**
 * CMS API Layer
 * 
 * This module provides a clean API interface for accessing CMS content.
 * Currently uses local TypeScript data, but can be easily swapped for
 * real API calls when a backend is connected.
 * 
 * All functions return Promises to match real API behavior.
 */

import {
  getActiveHero,
  getActiveCommunityMoments,
  homepageHero,
} from '@/data/cms/homepage';

import {
  getActiveStories,
  getFeaturedStories,
  getStoriesByType,
  getStoryBySlug,
} from '@/data/cms/stories';

import {
  getActiveTimeline,
  getHighlightedEvents,
} from '@/data/cms/timeline';

import {
  getActivePeople,
  getPeopleByRole,
  getLeadership,
  getTeamMembers,
} from '@/data/cms/parivaar';

import {
  getActiveCommunities,
  getFeaturedCommunities,
  getCommunityBySlug,
} from '@/data/cms/communities';

import {
  getActiveCTAs,
  getCTAsByContext,
} from '@/data/cms/soft-ctas';

import { siteSettings, siteStats } from '@/data/cms';

import type {
  HomepageHero,
  CommunityMoment,
  Story,
  BrandTimelineEvent,
  ParivaarPerson,
  Community,
  SoftCTA,
} from '@/types/cms';

// Simulated API delay (remove in production)
const simulateDelay = <T>(data: T, delay = 0): Promise<T> => {
  return new Promise(resolve => setTimeout(() => resolve(data), delay));
};

// Homepage API
export const cmsApi = {
  // Homepage
  homepage: {
    getHero: (): Promise<HomepageHero | null> => simulateDelay(getActiveHero()),
    getCommunityMoments: (): Promise<CommunityMoment[]> => simulateDelay(getActiveCommunityMoments()),
  },

  // Stories
  stories: {
    getAll: (): Promise<Story[]> => simulateDelay(getActiveStories()),
    getFeatured: (): Promise<Story[]> => simulateDelay(getFeaturedStories()),
    getByType: (type: Story['story_type']): Promise<Story[]> => simulateDelay(getStoriesByType(type)),
    getBySlug: (slug: string): Promise<Story | undefined> => simulateDelay(getStoryBySlug(slug)),
  },

  // Timeline
  timeline: {
    getAll: (): Promise<BrandTimelineEvent[]> => simulateDelay(getActiveTimeline()),
    getHighlights: (): Promise<BrandTimelineEvent[]> => simulateDelay(getHighlightedEvents()),
  },

  // Parivaar (People)
  parivaar: {
    getAll: (): Promise<ParivaarPerson[]> => simulateDelay(getActivePeople()),
    getByRole: (role: ParivaarPerson['role_type']): Promise<ParivaarPerson[]> => simulateDelay(getPeopleByRole(role)),
    getLeadership: (): Promise<ParivaarPerson[]> => simulateDelay(getLeadership()),
    getTeam: (): Promise<ParivaarPerson[]> => simulateDelay(getTeamMembers()),
  },

  // Communities
  communities: {
    getAll: (): Promise<Community[]> => simulateDelay(getActiveCommunities()),
    getFeatured: (): Promise<Community[]> => simulateDelay(getFeaturedCommunities()),
    getBySlug: (slug: string): Promise<Community | undefined> => simulateDelay(getCommunityBySlug(slug)),
  },

  // Soft CTAs
  ctas: {
    getAll: (): Promise<SoftCTA[]> => simulateDelay(getActiveCTAs()),
    getByContext: (context: SoftCTA['context']): Promise<SoftCTA[]> => simulateDelay(getCTAsByContext(context)),
  },

  // Site Settings
  settings: {
    get: () => simulateDelay(siteSettings),
    getStats: () => simulateDelay(siteStats),
  },
};

export default cmsApi;
