/**
 * City Registry — Scalable import for 20+ cities
 * Each city is in its own file for maintainability and code-splitting
 */

export * from '../cities-v2';

// Re-export all city data files
export { austin } from './austin';
export { newOrleans } from './new-orleans';
export { portland } from './portland';
export { seattle } from './seattle';
export { denver } from './denver';
export { asheville } from './asheville';
export { santaFe } from './santa-fe';
export { charleston } from './charleston';
export { minneapolis } from './minneapolis';
export { boulder } from './boulder';
export { savannah } from './savannah';
export { burlington } from './burlington';
export { tucson } from './tucson';
export { madison } from './madison';
export { provo } from './provo';
export { annArbor } from './ann-arbor';
export { iowaCity } from './iowa-city';
export { flagstaff } from './flagstaff';
export { bozeman } from './bozeman';

// Collect all cities into an array (sorted by order)
import { austin } from './austin';
import { newOrleans } from './new-orleans';
import { portland } from './portland';
import { seattle } from './seattle';
import { denver } from './denver';
import { asheville } from './asheville';
import { santaFe } from './santa-fe';
import { charleston } from './charleston';
import { minneapolis } from './minneapolis';
import { boulder } from './boulder';
import { savannah } from './savannah';
import { burlington } from './burlington';
import { tucson } from './tucson';
import { madison } from './madison';
import { provo } from './provo';
import { annArbor } from './ann-arbor';
import { iowaCity } from './iowa-city';
import { flagstaff } from './flagstaff';
import { bozeman } from './bozeman';

import type { City, CityProduct } from '../cities-v2';

export const allCities: City[] = [
  austin,
  newOrleans,
  portland,
  seattle,
  denver,
  asheville,
  santaFe,
  charleston,
  minneapolis,
  boulder,
  savannah,
  burlington,
  tucson,
  madison,
  provo,
  annArbor,
  iowaCity,
  flagstaff,
  bozeman,
].sort((a, b) => a.order - b.order);

// Helper to get cities by status
export function getCitiesByStatus(status: City['status']): City[] {
  return allCities.filter(c => c.status === status);
}

// Get current box city
export function getCurrentCity(): City | undefined {
  return allCities.find(c => c.status === 'current');
}

// Get upcoming cities
export function getUpcomingCities(): City[] {
  return allCities.filter(c => c.status === 'upcoming');
}

// Get preview cities
export function getPreviewCities(): City[] {
  return allCities.filter(c => c.status === 'preview');
}

// Get archived cities
export function getArchivedCities(): City[] {
  return allCities.filter(c => c.status === 'archived');
}

// Product exports - get all products from the current city (Austin)
export function getAllProducts(): CityProduct[] {
  const currentCity = allCities.find(c => c.status === 'current');
  return currentCity?.products || [];
}

// Product exports for a specific city
export function getProductsForCity(cityId: string): CityProduct[] {
  const city = allCities.find(c => c.id === cityId);
  return city?.products || [];
}

// Export products directly for convenience
export const products: CityProduct[] = getAllProducts();

// Backward compatibility
export const cities = allCities;