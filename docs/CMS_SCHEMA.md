# VJ Javdekar CMS Database Schema

## Overview

This document describes the Content Management System (CMS) architecture for the VJ Javdekar website. The schema follows a people-first, storytelling-driven approach with **no sales, pricing, or inventory tables**.

## Design Principles

1. **People-First Storytelling** - All content focuses on people, emotions, and lived experiences
2. **Community-Driven** - Content highlights community bonds and shared experiences  
3. **No Sales Language** - ❌ No pricing, ❌ No inventory, ❌ No floor plans, ❌ No lead generation
4. **Admin-Only Access** - Single role, no public user management

## Database Standards

All tables follow these conventions:

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `created_at` | TIMESTAMP | Record creation time |
| `updated_at` | TIMESTAMP | Last modification time |
| `is_active` | BOOLEAN | Publish/unpublish toggle |
| `order_index` | INTEGER | Frontend display ordering |

---

## Tables

### 1. `homepage_hero`
Hero section for the homepage.

| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PRIMARY KEY |
| headline | TEXT | NOT NULL |
| subheadline | TEXT | |
| background_image_url | TEXT | NOT NULL |
| mobile_image_url | TEXT | |
| soft_cta_text | TEXT | DEFAULT 'Discover More' |
| soft_cta_link | TEXT | NOT NULL |
| created_at | TIMESTAMP | DEFAULT NOW() |
| updated_at | TIMESTAMP | DEFAULT NOW() |
| is_active | BOOLEAN | DEFAULT TRUE |
| order_index | INTEGER | DEFAULT 1 |

---

### 2. `community_moments`
Highlights from community life shown on homepage.

| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PRIMARY KEY |
| title | TEXT | NOT NULL |
| description | TEXT | |
| image_url | TEXT | NOT NULL |
| quote | TEXT | |
| author_name | TEXT | |
| author_type | ENUM('employee', 'homeowner', 'partner') | |
| created_at | TIMESTAMP | DEFAULT NOW() |
| updated_at | TIMESTAMP | DEFAULT NOW() |
| is_active | BOOLEAN | DEFAULT TRUE |
| order_index | INTEGER | NOT NULL |

---

### 3. `stories`
Blog-style stories for Stories page and featured sections.

| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PRIMARY KEY |
| title | TEXT | NOT NULL |
| slug | TEXT | UNIQUE, NOT NULL |
| short_description | TEXT | |
| full_content | TEXT | Rich text/Markdown |
| cover_image | TEXT | |
| story_type | ENUM('community', 'employee', 'homeowner', 'event') | NOT NULL |
| published_date | DATE | |
| is_featured | BOOLEAN | DEFAULT FALSE |
| author_name | TEXT | |
| author_role | TEXT | |
| created_at | TIMESTAMP | DEFAULT NOW() |
| updated_at | TIMESTAMP | DEFAULT NOW() |
| is_active | BOOLEAN | DEFAULT TRUE |
| order_index | INTEGER | NOT NULL |

---

### 4. `brand_timeline`
Timeline events for Our Story page.

| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PRIMARY KEY |
| year | TEXT | NOT NULL |
| title | TEXT | NOT NULL |
| description | TEXT | |
| image_url | TEXT | |
| highlight_quote | TEXT | |
| is_highlight | BOOLEAN | DEFAULT FALSE |
| created_at | TIMESTAMP | DEFAULT NOW() |
| updated_at | TIMESTAMP | DEFAULT NOW() |
| is_active | BOOLEAN | DEFAULT TRUE |
| order_index | INTEGER | NOT NULL |

---

### 5. `parivaar_people`
Unified people directory (employees, homeowners, partners).

| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PRIMARY KEY |
| name | TEXT | NOT NULL |
| role_type | ENUM('employee', 'homeowner', 'partner') | NOT NULL |
| designation | TEXT | |
| bio | TEXT | |
| profile_image | TEXT | |
| joined_year | TEXT | |
| tenure | TEXT | |
| personal_quote | TEXT | |
| created_at | TIMESTAMP | DEFAULT NOW() |
| updated_at | TIMESTAMP | DEFAULT NOW() |
| is_active | BOOLEAN | DEFAULT TRUE |
| order_index | INTEGER | NOT NULL |

---

### 6. `communities`
Project communities (lifestyle-focused, no inventory).

| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PRIMARY KEY |
| name | TEXT | NOT NULL |
| slug | TEXT | UNIQUE, NOT NULL |
| location | TEXT | |
| tagline | TEXT | |
| description | TEXT | |
| hero_image | TEXT | |
| lifestyle_images | TEXT[] | Array of URLs |
| resident_quote_text | TEXT | |
| resident_quote_author | TEXT | |
| local_experiences | TEXT[] | Array of strings |
| features | TEXT[] | Array of feature names |
| is_featured | BOOLEAN | DEFAULT FALSE |
| created_at | TIMESTAMP | DEFAULT NOW() |
| updated_at | TIMESTAMP | DEFAULT NOW() |
| is_active | BOOLEAN | DEFAULT TRUE |
| order_index | INTEGER | NOT NULL |

---

### 7. `soft_ctas`
Reusable call-to-action buttons.

| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PRIMARY KEY |
| text | ENUM('Discover More', 'Meet the Family', 'Explore Life Here') | NOT NULL |
| link | TEXT | NOT NULL |
| context | ENUM('home', 'story', 'community', 'parivaar', 'our-story') | NOT NULL |
| created_at | TIMESTAMP | DEFAULT NOW() |
| updated_at | TIMESTAMP | DEFAULT NOW() |
| is_active | BOOLEAN | DEFAULT TRUE |
| order_index | INTEGER | NOT NULL |

---

### 8. `media_assets`
Central media library.

| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PRIMARY KEY |
| file_url | TEXT | NOT NULL |
| file_type | ENUM('image', 'video') | NOT NULL |
| alt_text | TEXT | |
| used_in | TEXT | Reference to page/component |
| created_at | TIMESTAMP | DEFAULT NOW() |
| updated_at | TIMESTAMP | DEFAULT NOW() |
| is_active | BOOLEAN | DEFAULT TRUE |
| order_index | INTEGER | DEFAULT 1 |

---

### 9. `admins`
Admin authentication (no public users).

| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PRIMARY KEY |
| name | TEXT | NOT NULL |
| email | TEXT | UNIQUE, NOT NULL |
| password_hash | TEXT | NOT NULL |
| last_login_at | TIMESTAMP | |
| created_at | TIMESTAMP | DEFAULT NOW() |
| updated_at | TIMESTAMP | DEFAULT NOW() |

---

## UI Component Mapping

| UI Component | CMS Table(s) |
|--------------|--------------|
| HeroSection | `homepage_hero` |
| StoryCard | `stories` |
| Timeline | `brand_timeline` |
| CommunityCard | `communities` |
| TeamMemberCard | `parivaar_people` |
| SoftCTA | `soft_ctas` |
| Navbar/Footer | `site_settings` (future) |

---

## API Query Patterns

All frontend queries should:

1. Filter by `is_active = true`
2. Order by `order_index ASC`
3. Support draft/published states via `is_active`

Example:
```sql
SELECT * FROM stories 
WHERE is_active = true AND is_featured = true 
ORDER BY order_index ASC;
```

---

## Future Considerations

When connecting a real database:

1. Replace TypeScript data files with API calls
2. Use the `cmsApi` layer in `src/lib/cms-api.ts`
3. Implement row-level security for admin access
4. Add `updated_by` column for audit trails

---

## ❌ Explicitly NOT Included

- Pricing tables
- Inventory/unit tables  
- Floor plan tables
- Lead capture/booking tables
- Marketing automation
- E-commerce logic
