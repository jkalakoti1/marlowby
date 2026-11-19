/**
 * Scalable city data structure for 20+ cities
 * Supports regions, categories, and rich metadata for subscription box concepts
 */

export type CityStatus = 'current' | 'upcoming' | 'preview' | 'archived';
export type CityTheme = 'food' | 'arts' | 'outdoors' | 'history' | 'music' | 'craft' | 'wellness' | 'design';

export interface CityHighlight {
  title: string;
  description: string;
  icon?: string;
}

export interface CityProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  detail: string;
  maker: {
    name: string;
    location: string;
    bio: string;
    isReal: boolean;
  };
  tags: string[];
}

export interface CityStory {
  title: string;
  content: string;
  image: string;
  imageAlt: string;
}

export interface CitySource {
  name: string;
  url: string;
  type: 'tourism' | 'cultural' | 'government' | 'media';
}

export interface CitySEO {
  title: string;
  description: string;
  ogImage: string;
}

export interface City {
  // Core identity
  id: string;
  slug: string;
  name: string;
  state: string;
  abbreviation: string;
  region: string; // e.g., 'southwest', 'pacific-northwest', 'south', 'midwest', 'northeast'

  // Status & ordering
  status: CityStatus;
  order: number;
  launchDate?: string; // ISO date for upcoming boxes

  // Descriptive content
  shortDescription: string; // 1-2 sentences for cards
  longDescription: string; // Full intro for detail pages
  themes: CityTheme[];

  // Visual assets
  heroImage: string;
  heroImageAlt: string;
  galleryImages: string[];
  tagline: string;

  // Content sections
  highlights: CityHighlight[];
  products: CityProduct[];
  story: CityStory;
  sources: CitySource[];

  // SEO
  seo: CitySEO;

  // Related cities (for cross-linking)
  relatedCityIds: string[];
}

// Region definitions for grouping/filtering
export const regions = [
  { id: 'west', name: 'West', states: ['CA', 'OR', 'WA', 'NV', 'AZ', 'CO', 'UT', 'ID', 'MT', 'WY'] },
  { id: 'southwest', name: 'Southwest', states: ['TX', 'NM', 'OK', 'AZ'] },
  { id: 'pacific-northwest', name: 'Pacific Northwest', states: ['WA', 'OR', 'ID'] },
  { id: 'south', name: 'South', states: ['LA', 'MS', 'AL', 'GA', 'FL', 'SC', 'NC', 'TN', 'KY'] },
  { id: 'midwest', name: 'Midwest', states: ['IL', 'IN', 'OH', 'MI', 'WI', 'MN', 'IA', 'MO', 'KS', 'NE', 'SD', 'ND'] },
  { id: 'northeast', name: 'Northeast', states: ['NY', 'MA', 'PA', 'NJ', 'CT', 'RI', 'VT', 'NH', 'ME'] },
  { id: 'mountain', name: 'Mountain', states: ['CO', 'UT', 'WY', 'MT', 'ID', 'NM', 'AZ', 'NV'] },
] as const;

export type RegionId = typeof regions[number]['id'];

// Theme definitions with display labels
export const themes: Record<CityTheme, { label: string; description: string; icon: string }> = {
  food: { label: 'Food & Flavor', description: 'Culinary discoveries and local tastes', icon: '🍽️' },
  arts: { label: 'Arts & Culture', description: 'Creative scenes and cultural institutions', icon: '🎨' },
  outdoors: { label: 'Outdoors & Nature', description: 'Parks, trails, and natural beauty', icon: '🌲' },
  history: { label: 'History & Heritage', description: 'Historic districts and preserved stories', icon: '🏛️' },
  music: { label: 'Music & Nightlife', description: 'Live venues and musical traditions', icon: '🎵' },
  craft: { label: 'Craft & Makers', description: 'Artisan workshops and handmade goods', icon: '🔨' },
  wellness: { label: 'Wellness & Ritual', description: 'Mindful living and self-care', icon: '🧘' },
  design: { label: 'Design & Architecture', description: 'Visual culture and built environment', icon: '🏗️' },
};

// Status configurations
export const statusConfig: Record<CityStatus, { label: string; description: string; color: string; badgeVariant: 'default' | 'primary' | 'secondary' | 'accent' }> = {
  current: {
    label: 'Current Box',
    description: 'This month\'s featured destination',
    color: '#1A7F64',
    badgeVariant: 'primary'
  },
  upcoming: {
    label: 'Coming Soon',
    description: 'Announced future box with launch date',
    color: '#C34B27',
    badgeVariant: 'accent'
  },
  preview: {
    label: 'Preview',
    description: 'Editorial concept — no release date',
    color: '#52615A',
    badgeVariant: 'secondary'
  },
  archived: {
    label: 'Past Box',
    description: 'Previously featured destination',
    color: '#7B8277',
    badgeVariant: 'default'
  },
};

// Helper functions
export function getCityById(cities: City[], id: string): City | undefined {
  return cities.find(c => c.id === id);
}

export function getCityBySlug(cities: City[], slug: string): City | undefined {
  return cities.find(c => c.slug === slug);
}

export function getCitiesByStatus(cities: City[], status: CityStatus): City[] {
  return cities.filter(c => c.status === status).sort((a, b) => a.order - b.order);
}

export function getCitiesByRegion(cities: City[], region: RegionId): City[] {
  return cities.filter(c => c.region === region).sort((a, b) => a.order - b.order);
}

export function getCitiesByTheme(cities: City[], theme: CityTheme): City[] {
  return cities.filter(c => c.themes.includes(theme)).sort((a, b) => a.order - b.order);
}

export function searchCities(cities: City[], query: string): City[] {
  const normalized = query.toLowerCase().trim();
  if (!normalized) return cities;

  return cities.filter(c =>
    c.name.toLowerCase().includes(normalized) ||
    c.state.toLowerCase().includes(normalized) ||
    c.abbreviation.toLowerCase().includes(normalized) ||
    c.shortDescription.toLowerCase().includes(normalized) ||
    c.themes.some(t => themes[t].label.toLowerCase().includes(normalized)) ||
    c.region.toLowerCase().includes(normalized)
  ).sort((a, b) => a.order - b.order);
}

export function getRelatedCities(cities: City[], cityId: string, limit = 3): City[] {
  const city = getCityById(cities, cityId);
  if (!city) return [];

  return city.relatedCityIds
    .map(id => getCityById(cities, id))
    .filter((c): c is City => c !== undefined)
    .slice(0, limit);
}

// Type guards
export function isCurrentCity(city: City): city is City & { status: 'current' } {
  return city.status === 'current';
}

export function isUpcomingCity(city: City): city is City & { status: 'upcoming' } {
  return city.status === 'upcoming';
}