import type { City, CityProduct, CityHighlight, CityMaker, CityStory, CitySource, CitySEO } from '../cities-v2';

const makers: CityMaker[] = [
  {
    id: 'prairie-roasters',
    name: 'Prairie Roasters',
    role: 'Coffee Roaster',
    bio: 'Roastery in a historic downtown building. They roast for the prairie rhythm — vast skies, deep roots, honest flavors.',
    image: '/images/makers/prairie-roasters.webp',
    website: 'https://example.com/prairie-roasters',
    instagram: '@prairieroasters',
    products: ['big-sky-blend'],
    location: 'Iowa City, IA',
    isReal: false
  },
  {
    id: 'cedar-ceramics',
    name: 'Cedar Ceramics',
    role: 'Ceramicist',
    bio: 'Studio in a converted carriage house. Clay from the Iowa River floodplain. Soda-fired — the prairie wind in the kiln.',
    image: '/images/makers/cedar-ceramics.webp',
    website: 'https://example.com/cedar-ceramics',
    instagram: '@cedarceramics',
    products: ['floodplain-mug', 'prairie-horizon-bowl'],
    location: 'Iowa City, IA',
    isReal: false
  },
  {
    id: 'amana-preserves',
    name: 'Amana Preserves',
    role: 'Preserves & Pantry Maker',
    bio: 'From the Amana Colonies — seven villages, German communal heritage. Jams, pickles, sauerkraut, rye bread. Made the way the ancestors did.',
    image: '/images/makers/amana-preserves.webp',
    website: 'https://example.com/amana-preserves',
    instagram: '@amanapreserves',
    products: ['rhubarb-jam', 'sauerkraut', 'rye-bread'],
    location: 'Amana Colonies, IA',
    isReal: false
  }
];

const products: CityProduct[] = [
  {
    id: 'big-sky-blend',
    name: 'Big Sky Blend',
    category: 'coffee',
    description: 'Medium roast — caramel, toasted grain, clean horizon finish.',
    shortDescription: 'Prairie medium roast, 12oz',
    detail: 'Brazil, Colombia, Mexican — roasted for balance and body. Notes of caramel, toasted wheat, honey. 12oz whole bean. The coffee for watching storms roll across the prairie.',
    image: '/images/products/iowa-city/big-sky.webp',
    alt: 'Coffee bag with endless prairie sky illustration',
    makerId: 'prairie-roasters',
    priceRange: '$$',
    tags: ['prairie', 'medium', 'balanced', 'horizon'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'floodplain-mug',
    name: 'Iowa River Floodplain Mug',
    category: 'ceramics',
    description: 'Mug from river clay — soda fired, the color of prairie grass after rain.',
    shortDescription: 'Soda-fired floodplain clay mug, 14oz',
    detail: 'Clay from the Iowa River floodplain — rich, plastic, full of prairie minerals. Soda firing at cone 10 — sodium vapor glazes the surface naturally. Green-grey where thick, pale straw where thin. 14oz. The prairie in your hand.',
    image: '/images/products/iowa-city/floodplain-mug.webp',
    alt: 'Stoneware mug with soda-fired prairie grass glaze',
    makerId: 'cedar-ceramics',
    priceRange: '$$$',
    tags: ['floodplain-clay', 'soda-fired', 'prairie', 'river'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'prairie-horizon-bowl',
    name: 'Prairie Horizon Bowl',
    category: 'ceramics',
    description: 'Wide, shallow bowl — the unbroken line where sky meets grass.',
    shortDescription: 'Soda-fired horizon bowl, 13 inches',
    detail: 'Same floodplain clay, same soda kiln. Wide and shallow — 13" diameter, 2" deep. The rim is perfectly level. The soda glaze creates a subtle horizon line across the interior. For the meals that stretch into conversation.',
    image: '/images/products/iowa-city/horizon-bowl.webp',
    alt: 'Wide shallow bowl with subtle horizon glaze line',
    makerId: 'cedar-ceramics',
    priceRange: '$$$',
    tags: ['floodplain-clay', 'soda-fired', 'horizon', 'wide'],
    isHero: false,
    isExclusive: true
  },
  {
    id: 'rhubarb-jam',
    name: 'Amana Rhubarb Jam',
    category: 'pantry',
    description: 'Heirloom rhubarb from Amana gardens — tart, floral, the taste of spring.',
    shortDescription: 'Rhubarb jam, 8oz jar',
    detail: 'Victoria rhubarb grown in the Amana Colonies\' communal gardens. Cooked with cane sugar and a whisper of vanilla. No pectin. 8oz. Bright pink, intensely rhubarb. The first taste of an Iowa spring.',
    image: '/images/products/iowa-city/rhubarb-jam.webp',
    alt: 'Bright pink rhubarb jam in a jar',
    makerId: 'amana-preserves',
    priceRange: '$$',
    tags: ['rhubarb', 'amana', 'heirloom', 'communal-gardens', 'spring'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'sauerkraut',
    name: 'Traditional Amana Sauerkraut',
    category: 'pantry',
    description: 'Cabbage, salt, time — fermented in oak barrels the German way.',
    shortDescription: 'Barrel-fermented sauerkraut, 16oz jar',
    detail: 'Cabbage from Iowa fields. Shredded, salted, packed in oak barrels. Fermented 6 weeks at 55°F. No vinegar, no heat. 16oz. Crisp, complex, probiotic, alive. The way the ancestors preserved the harvest.',
    image: '/images/products/iowa-city/sauerkraut.webp',
    alt: 'Pale sauerkraut in a glass jar with oak barrel illustration',
    makerId: 'amana-preserves',
    priceRange: '$$',
    tags: ['sauerkraut', 'amana', 'oak-barrel', 'fermented', 'probiotic', 'traditional'],
    isHero: false,
    isExclusive: true
  },
  {
    id: 'rye-bread',
    name: 'Amana Rye Bread',
    category: 'baked-goods',
    description: 'Dense, sour, caraway-studded — baked in a brick oven.',
    shortDescription: 'Traditional rye loaf, 2lb',
    detail: 'Rye flour, wheat flour, sourdough starter, caraway, salt. Baked in a brick oven at 450°F. 2lb. Thick crust, tight crumb, deep sour. Keeps for weeks. The bread that built the colonies.',
    image: '/images/products/iowa-city/rye-bread.webp',
    alt: 'Dark rye loaf with caraway seeds and thick crust',
    makerId: 'amana-preserves',
    priceRange: '$$',
    tags: ['rye', 'amana', 'brick-oven', 'caraway', 'sourdough', 'communal'],
    isHero: true,
    isExclusive: false
  }
];

const highlights: CityHighlight[] = [
  {
    title: 'The Prairie Is the Palette',
    text: 'Iowa City sits where the prairie meets the river. The horizon is 360 degrees. The grass roots go 15 feet deep. Cedar Ceramics digs clay from the floodplain — the prairie\'s own sediment. Prairie Roasters roasts for the big sky. Amana Preserves grows rhubarb in soil that remembers the glaciers. This box is colored by the prairie: straw, green, sky, earth.',
    icon: 'Horizon'
  },
  {
    title: 'Communal Is a Practice',
    text: 'The Amana Colonies — seven villages, founded 1855 by German Pietists — lived communally for 90 years. Shared kitchens, shared gardens, shared work, shared worship. They disbanded the commune in 1932, but the practice remains: recipes shared, gardens tended together, barrels packed by neighbors. Amana Preserves isn\'t a brand; it\'s a continuation. This box tastes like people who know each other\'s hands.',
    icon: 'Users'
  },
  {
    title: 'Writing Is the Industry',
    text: 'Iowa City is a UNESCO City of Literature — the Iowa Writers\' Workshop, the International Writing Program, the presses, the readings, the bookstores. The makers here work in that atmosphere: Prairie Roasters names blends after poems. Cedar Ceramics titles forms after lines. Amana Preserves labels jars with verses. This box is written as much as made.',
    icon: 'BookOpen'
  }
];

const story: CityStory = {
  title: 'The Clay That Remembers the Glacier',
  content: 'The Iowa River floodplain clay is glacial till — ground by ice sheets 12,000 years ago, deposited when they melted. It\'s fine, plastic, full of the minerals the glaciers scraped from the Canadian Shield: iron, feldspar, mica, quartz. Cedar Ceramics digs it by hand in spring, after the floods recede. They throw it, fire it with soda. The sodium finds the silica, makes glass. The iron flashes green-grey. The mica catches light. The mug that emerges holds the geology: Canadian Shield to glacier to river to floodplain to kiln to hand. In a future real box, the ceramicist would tell you about the firing where a spring flood changed the clay\'s mineral balance and the mugs came out with a particular flash of gold. Here, the mug holds that possibility. A reminder that the oldest ice still shapes the cup you hold.',
  image: '/images/makers/cedar-ceramics.webp',
  imageAlt: 'Ceramicist digging floodplain clay after spring recession'
};

const sources: CitySource[] = [
  { name: 'Iowa City UNESCO City of Literature', url: 'https://www.iowacityofliterature.org/', type: 'cultural' },
  { name: 'Amana Colonies', url: 'https://www.amanacolonies.com/', type: 'cultural' }
];

const seo: CitySEO = {
  title: 'Iowa City Preview Box | Marlowby',
  description: 'Explore the Iowa City preview: prairie coffee, floodplain soda-fired ceramics, Amana rhubarb jam, sauerkraut, rye bread. An editorial concept — no release date announced.',
  ogImage: '/images/cities/iowa-city-og.webp'
};

export const iowaCity: City = {
  id: 'iowa-city',
  slug: 'iowa-city',
  name: 'Iowa City',
  state: 'Iowa',
  abbreviation: 'IA',
  region: 'midwest',
  status: 'preview',
  order: 16,
  description: 'Prairie coffee, floodplain soda-fired ceramics, and Amana Colonies preserves.',
  intro: 'Where the prairie horizon meets the floodplain clay, communal traditions endure, and literature flavors the craft. This preview explores the makers of the UNESCO City of Literature.',
  themes: ['food', 'arts', 'craft', 'design', 'wellness'],
  tags: ['coffee', 'ceramics', 'soda-fired', 'floodplain', 'rhubarb', 'sauerkraut', 'rye', 'amana', 'prairie', 'literature'],
  heroImage: '/images/cities/iowa-city.webp',
  heroImageAlt: 'Iowa City downtown with the Old Capitol and prairie sky',
  heroImageMobile: '/images/cities/iowa-city-mobile.webp',
  galleryImages: [
    '/images/cities/iowa-city-gallery-1.webp',
    '/images/cities/iowa-city-gallery-2.webp',
    '/images/cities/iowa-city-gallery-3.webp'
  ],
  colorPalette: {
    primary: '#4A6B42',      // Prairie grass
    secondary: '#D4C4A8',    // Floodplain straw
    background: '#F0EEE8'    // Historic brick
  },
  tagline: 'Prairie horizon & communal craft',
  highlights,
  products,
  makers,
  story,
  sources,
  seo,
  productIds: products.map(p => p.id),
  relatedCityIds: ['madison', 'minneapolis', 'ann-arbor'],
  boxConfig: {
    estimatedShipDate: 'Preview — no date announced',
    productCount: 6,
    includesPostcard: true,
    includesStoryInsert: true,
    specialItems: ['prairie-map', 'amana-recipes']
  }
};