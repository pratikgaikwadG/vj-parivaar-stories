import type { Story } from '@/types/cms';

export const stories: Story[] = [
  {
    id: 'story-001',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-12-15T00:00:00Z',
    is_active: true,
    order_index: 1,
    title: 'Finding Home in More Ways Than One',
    slug: 'finding-home-in-more-ways-than-one',
    short_description: "When we moved into our VJ home three years ago, we didn't just find a place to live—we found a community that welcomed us with open arms.",
    full_content: `When we first visited VJ Greenwood, we weren't sure what to expect. We'd looked at dozens of properties, and they all started to blur together—the same amenities lists, the same promises.

But something was different here. The security guard knew the residents by name. Children were playing in the garden while their grandparents watched from nearby benches. A group of women were laughing together near the community center.

It felt like walking into a village, not an apartment complex.

Three years later, I can tell you that feeling wasn't a fluke. It's the everyday reality of life here. Our daughter has "aunties" in every building who keep an eye on her. We've celebrated every festival with neighbors who've become family.

When my mother fell ill last year, it was our VJ neighbors who organized meals, drove us to appointments, and simply showed up. That's when I truly understood what VJ Javdekar means when they talk about building communities, not just homes.`,
    cover_image: '/placeholder.svg',
    story_type: 'homeowner',
    published_date: '2024-12-15',
    is_featured: true,
    author_name: 'Priya & Rahul Sharma',
    author_role: 'Homeowners since 2021',
  },
  {
    id: 'story-002',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-11-20T00:00:00Z',
    is_active: true,
    order_index: 2,
    title: 'Growing Together as a Family',
    slug: 'growing-together-as-a-family',
    short_description: "Working at VJ Javdekar isn't just a job—it's being part of something meaningful. Every home we build carries a piece of our collective dream.",
    full_content: `I joined VJ Javdekar eight years ago, fresh out of architecture school with big dreams and little experience. What I found here changed my understanding of what it means to be an architect.

At VJ, we don't just design buildings—we design lives. Every decision we make, from the placement of a window to the curve of a pathway, is guided by one question: how will this serve the families who will live here?

I've watched children grow up in homes I helped design. I've seen grandparents find community in spaces we created for connection. I've witnessed strangers become neighbors, then friends, then family.

This is why I wake up excited every morning. Not because I'm going to work, but because I'm going to contribute to something that matters—homes where memories are made, communities where bonds are formed.`,
    cover_image: '/placeholder.svg',
    story_type: 'employee',
    published_date: '2024-11-20',
    is_featured: true,
    author_name: 'Anjali Deshmukh',
    author_role: 'Senior Architect, 8 years',
  },
  {
    id: 'story-003',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-10-15T00:00:00Z',
    is_active: true,
    order_index: 3,
    title: 'The Morning Yoga Sessions Changed Everything',
    slug: 'morning-yoga-sessions-changed-everything',
    short_description: 'What started as a casual gathering in the community garden has become the highlight of our mornings. Neighbors became friends, then family.',
    full_content: `It started with just three of us—Sunita, Meera, and myself—doing yoga in the garden one morning. We'd nod at each other in the elevator but never really talked.

That first session changed everything. As we stretched and breathed together in the early morning light, something shifted. We started talking. Then laughing. Then meeting for chai after yoga.

Word spread. Three became five, then ten, then twenty. Now, every morning at 6 AM, you'll find us in the VJ Greenwood garden—a mix of ages, backgrounds, and fitness levels, united by the simple joy of starting the day together.

We've celebrated birthdays, supported each other through losses, and watched our children become friends. All because someone suggested doing yoga in the garden one morning.

That's the magic of VJ communities. They create the space; we create the memories.`,
    cover_image: '/placeholder.svg',
    story_type: 'community',
    published_date: '2024-10-15',
    is_featured: true,
    author_name: 'The Sunrise Community',
    author_role: 'VJ Greenwood Residents',
  },
  {
    id: 'story-004',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-09-10T00:00:00Z',
    is_active: true,
    order_index: 4,
    title: 'Three Generations Under One Roof',
    slug: 'three-generations-under-one-roof',
    short_description: 'My parents were skeptical at first. Now, my father says choosing VJ was the best decision we ever made for our family.',
    full_content: `Finding a home that works for three generations isn't easy. My parents needed accessibility. My wife and I needed space to work from home. Our children needed room to play and grow.

Most builders showed us units—square footage and amenity lists. VJ Javdekar showed us possibilities.

They understood that my mother needed a balcony where she could tend to her plants. That my father needed quiet corners for his morning newspaper. That our kids needed safe spaces to explore.

Two years in, my skeptical father—the one who questioned every rupee spent—told me over chai that this was the best decision our family ever made. Coming from him, that's the highest praise possible.

We're not just living together; we're thriving together. And that's what VJ helped us build—not just a home, but a life.`,
    cover_image: '/placeholder.svg',
    story_type: 'homeowner',
    published_date: '2024-09-10',
    is_featured: false,
    author_name: 'Vikram Joshi',
    author_role: 'Homeowner since 2019',
  },
  {
    id: 'story-005',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-08-05T00:00:00Z',
    is_active: true,
    order_index: 5,
    title: 'Building Dreams, One Brick at a Time',
    slug: 'building-dreams-one-brick-at-a-time',
    short_description: "Every project teaches me something new about what home means to people. It's more than architecture—it's about creating spaces for life to unfold.",
    full_content: `After fifteen years in construction, you'd think I've seen it all. But VJ Javdekar taught me that every project is unique because every family is unique.

I remember a homeowner who asked if we could install an extra-wide doorway. When I asked why, she explained that her wheelchair-bound mother would be moving in. That simple request wasn't just about dimensions—it was about dignity, about a daughter ensuring her mother could move freely in her own home.

These moments remind me why quality matters. Why we never cut corners. Why every brick, every beam, every finish has to be perfect.

We're not just building structures. We're building the backdrop for life's most precious moments—first steps, festival celebrations, quiet Sunday mornings, and everything in between.`,
    cover_image: '/placeholder.svg',
    story_type: 'employee',
    published_date: '2024-08-05',
    is_featured: false,
    author_name: 'Rohan Kulkarni',
    author_role: 'Project Manager, 5 years',
  },
  {
    id: 'story-006',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-07-20T00:00:00Z',
    is_active: true,
    order_index: 6,
    title: "The Diwali We'll Never Forget",
    slug: 'diwali-well-never-forget',
    short_description: 'Last Diwali, our entire building came together for a celebration that reminded us why we chose to live here. The laughter, the lights, the love.',
    full_content: `It started as a simple idea: what if we celebrated Diwali together as a building?

The response was overwhelming. Everyone wanted to contribute—decorations, food, music, games for the kids. The community center transformed into something magical.

Grandparents told stories of Diwalis past. Children performed dances they'd been practicing for weeks. Neighbors who'd never spoken discovered shared histories and interests.

As the diyas flickered and the rangolis glowed, I looked around at faces illuminated by more than just lights. These weren't just neighbors anymore. They were family.

That night, as the celebrations wound down and we walked back to our homes, my daughter said, "Papa, can we do this every year?"

We will. Because this is what community means. This is what VJ Javdekar helped us build.`,
    cover_image: '/placeholder.svg',
    story_type: 'community',
    published_date: '2024-07-20',
    is_featured: false,
    author_name: 'VJ Heights Community',
    author_role: 'Community Event',
  },
];

// Helper functions for API-like access
export const getActiveStories = (): Story[] => {
  return stories
    .filter(story => story.is_active)
    .sort((a, b) => a.order_index - b.order_index);
};

export const getFeaturedStories = (): Story[] => {
  return stories
    .filter(story => story.is_active && story.is_featured)
    .sort((a, b) => a.order_index - b.order_index);
};

export const getStoriesByType = (type: Story['story_type']): Story[] => {
  return stories
    .filter(story => story.is_active && story.story_type === type)
    .sort((a, b) => a.order_index - b.order_index);
};

export const getStoryBySlug = (slug: string): Story | undefined => {
  return stories.find(story => story.slug === slug && story.is_active);
};
