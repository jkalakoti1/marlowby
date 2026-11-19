import type { City, CityProduct, CityHighlight, CityMaker, CityStory, CitySource, CitySEO } from './cities-v2';

// Makers
const makers: CityMaker[] = [
  {
    id: 'south-congress-studio',
    name: 'South Congress Studio',
    role: 'Ceramicist',
    bio: 'Founded by Maya Torres in 2019, South Congress Studio creates hand-thrown ceramics inspired by the colors of Texas hills. Each piece begins as local clay and finishes with glazes developed through hundreds of test firings.',
    image: '/images/makers/maya-torres.webp',
    website: 'https://example.com/south-congress',
    instagram: '@southcongressstudio',
    products: ['ceramic-mug', 'ceramic-bowl']
  },
  {
    id: 'hill-country-coffee',
    name: 'Hill Country Coffee',
    role: 'Coffee Roaster',
    bio: 'A micro-roaster in East Austin sourcing single-origin beans from Latin America. Their signature "Live Oak" blend is roasted in small batches to highlight chocolate and citrus notes.',
    image: '/images/makers/hill-country-coffee.webp',
    website: 'https://example.com/hill-country-coffee',
    instagram: '@hillcountrycoffee',
    products: ['coffee-bag']
  },
  {
    id: 'golden-grove-honey',
    name: 'Golden Grove Honey',
    role: 'Beekeeper',
    bio: 'Third-generation beekeeper Carlos Mendoza tends hives across the Hill Country. His wildflower honey captures the essence of Texas spring — light, floral, and complex.',
    image: '/images/makers/golden-grove.webp',
    website: 'https://example.com/golden-grove',
    instagram: '@goldengrovehoney',
    products: ['honey-jar']
  },
  {
    id: 'lone-star-pantry',
    name: 'Lone Star Pantry',
    role: 'Snack Maker',
    bio: 'Small-batch savory snacks inspired by Texas flavors. Their smoked pecans use a family recipe with mesquite wood and a touch of chiltepin pepper.',
    image: '/images/makers/lone-star-pantry.webp',
    website: 'https://example.com/lone-star-pantry',
    instagram: '@lonestarpantry',
    products: ['pecans']
  }
];

// Products
const products: CityProduct[] = [
  {
    id: 'ceramic-mug',
    name: 'Morning Ritual Mug',
    category: 'ceramics',
    description: 'A comfortable hand-thrown mug with a matte glaze that feels like river stone.',
    shortDescription: 'Hand-thrown mug with matte river-stone glaze',
    detail: 'Each mug is thrown on the wheel using Central Texas clay, then fired to cone 10. The matte "Riverbed" glaze is developed in-house — no two batches are exactly alike. Holds 12oz. Microwave and dishwasher safe.',
    image: '/images/products/austin/ceramic-mug.webp',
    alt: 'Matte ceramic mug in warm neutral glaze',
    makerId: 'south-congress-studio',
    priceRange: '$$',
    tags: ['handmade', 'daily-use', 'texas-clay'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'ceramic-bowl',
    name: 'Small Prep Bowl Set',
    category: 'ceramics',
    description: 'Set of three nesting prep bowls — perfect for mise en place or serving.',
    shortDescription: 'Nesting prep bowls in coordinating glazes',
    detail: 'Three bowls (4oz, 8oz, 12oz) nest for storage. Glazes: Riverbed (matte), Sage (semi-matte), and Cream (glossy). Made from the same Texas clay as our mugs.',
    image: '/images/products/austin/ceramic-bowls.webp',
    alt: 'Set of three ceramic prep bowls in coordinating glazes',
    makerId: 'south-congress-studio',
    priceRange: '$$',
    tags: ['handmade', 'kitchen', 'set'],
    isExclusive: true
  },
  {
    id: 'coffee-bag',
    name: 'Live Oak Blend',
    category: 'coffee',
    description: 'Medium roast with notes of dark chocolate, orange peel, and toasted almond.',
    shortDescription: 'Single-origin Latin American blend, medium roast',
    detail: 'Sourced from cooperatives in Guatemala and Colombia. Roasted in 15lb batches on a Probat roaster. 12oz bag, whole bean. Best within 3 weeks of roast date printed on bag.',
    image: '/images/products/austin/coffee-bag.webp',
    alt: 'Kraft coffee bag with hand-stamped label',
    makerId: 'hill-country-coffee',
    priceRange: '$$',
    tags: ['single-origin', 'medium-roast', 'whole-bean'],
    isHero: true,
    isExclusive: false
  },
  {
    id: 'honey-jar',
    name: 'Hill Country Wildflower Honey',
    category: 'pantry',
    description: 'Raw, unfiltered honey from hives along the Pedernales River.',
    shortDescription: 'Raw wildflower honey, 12oz glass jar',
    detail: 'Harvested spring 2024. Never heated above hive temperature (95°F). Natural crystallization is a sign of purity — warm gently to liquefy. 12oz glass jar with wooden dipper.',
    image: '/images/products/austin/honey-jar.webp',
    alt: 'Glass honey jar with wooden dipper',
    makerId: 'golden-grove-honey',
    priceRange: '$$',
    tags: ['raw', 'unfiltered', 'local'],
    isHero: true,
    isExclusive: false
  },
  {
    id: 'pecans',
    name: 'Mesquite-Smoked Pecans',
    category: 'snack',
    description: 'Texas pecans slow-smoked over mesquite with chiltepin pepper.',
    shortDescription: 'Smoked pecans with subtle heat',
    detail: 'Native Texas pecans, smoked 4 hours over mesquite wood. Tossed with sea salt and a whisper of chiltepin (Texas bird pepper). 6oz resealable pouch. Contains tree nuts.',
    image: '/images/products/austin/pecans.webp',
    alt: 'Resealable pouch of smoked pecans',
    makerId: 'lone-star-pantry',
    priceRange: '$',
    tags: ['smoked', 'spicy', 'texas-native'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'postcard',
    name: 'Austin Postcard',
    category: 'paper-goods',
    description: 'Illustrated postcard featuring the Congress Avenue Bridge bats at sunset.',
    shortDescription: 'Illustrated postcard, 5x7"',
    detail: 'Original illustration by Austin artist Sam Rodriguez. Printed on 100lb recycled cardstock. Blank back for your message. Includes a QR code linking to a curated Austin playlist.',
    image: '/images/products/austin/postcard.webp',
    alt: 'Illustrated postcard of Congress Avenue Bridge bats',
    makerId: 'riverbend-paper',
    priceRange: '$',
    tags: ['illustrated', 'collectible', 'playlist-qr'],
    isHero: false,
    isExclusive: true
  }
];

// Highlights
const highlights: CityHighlight[] = [
  {
    title: 'A City with a Soundtrack',
    text: 'Music gives Austin a rhythm of its own. The Red River Cultural District brings venues and listeners together, while the broader city makes room for sounds across genres. For this box, that sense of gathering is the starting point: a postcard to keep, a cup to pour, and a story that invites another listen.',
    icon: 'Music'
  },
  {
    title: 'A Taste for Something Local',
    text: 'Food is a useful way to begin noticing a place. Austin\'s mix of food trucks, restaurants, and coffee stops inspires a box built around everyday rituals. Our coffee, honey, and snack concepts are fictional examples of that idea, not products from verified local partners. Think of them as an invitation to explore, rather than a guide to actual ingredients or vendors.',
    icon: 'Coffee'
  },
  {
    title: 'Room for Creative Routines',
    text: 'Lady Bird Lake brings an outdoor pause into the heart of the city. The Butler Trail follows the water past neighborhoods and the downtown skyline. That contrast between activity and breathing room shapes our Austin concept: something for a slow morning, something to share, and something worth keeping on an everyday shelf.',
    icon: 'Trees'
  }
];

// Story
const story: CityStory = {
  title: 'Something for the Everyday Shelf',
  content: 'Imagine a cup you reach for without thinking: a comfortable handle, a quiet glaze, and enough character to make the morning feel your own. South Congress Studio is our fictional ceramics concept, created to explore how a small object can hold the feeling of a place. The design begins with familiar materials and an unhurried ritual. It is not a claim about an actual Austin maker or a promise of handmade production. In a future real box, meeting the person behind an object would be part of the discovery. Here, the cup gives that idea a visible form — a reminder that the things we keep often begin with a moment of curiosity.',
  image: '/images/makers/south-congress-studio.webp',
  imageAlt: 'Ceramicist Maya Torres at her wheel in South Congress Studio'
};

// Sources
const sources: CitySource[] = [
  { name: 'Visit Austin', url: 'https://www.austintexas.org/things-to-do/', type: 'tourism' },
  { name: 'Austin Parks & Recreation', url: 'https://www.austintexas.gov/parks', type: 'government' }
];

// SEO
const seo: CitySEO = {
  title: 'Austin Discovery Box | Marlowby',
  description: 'Explore the Austin box: hand-thrown ceramics, Hill Country coffee, wildflower honey, and smoked pecans. A little local discovery, delivered.',
  ogImage: '/images/cities/austin-og.webp'
};

export const austin: City = {
  id: 'austin',
  slug: 'austin',
  name: 'Austin',
  state: 'Texas',
  abbreviation: 'TX',
  region: 'southwest',
  status: 'current',
  order: 0,
  launchDate: '2024-03-15',
  description: 'Live music, local flavor, hand-thrown ceramics, and creative outdoor afternoons.',
  intro: 'Live music, open-air afternoons, and a creative spirit. Our current box concept takes its cue from the textures and everyday discoveries of Austin.',
  themes: ['food', 'arts', 'outdoors', 'music'],
  tags: ['live-music', 'ceramics', 'coffee', 'bbq', 'outdoors', 'tech', 'weird'],
  heroImage: '/images/cities/austin.webp',
  heroImageAlt: 'The Austin skyline beside Lady Bird Lake in warm afternoon light',
  heroImageMobile: '/images/cities/austin-mobile.webp',
  galleryImages: [
    '/images/cities/austin-gallery-1.webp',
    '/images/cities/austin-gallery-2.webp',
    '/images/cities/austin-gallery-3.webp'
  ],
  colorPalette: {
    primary: '#B85C3A',      // Terracotta
    secondary: '#D48B2E',    // Amber
    background: '#F5F0E8'    // Warm cream
  },
  tagline: 'Live music & local flavor',
  highlights,
  products,
  makers,
  story,
  sources,
  seo,
  productIds: products.map(p => p.id),
  relatedCityIds: ['santa-fe', 'denver', 'asheville'],
  boxConfig: {
    estimatedShipDate: 'Ships March 15',
    productCount: 6,
    includesPostcard: true,
    includesStoryInsert: true,
    specialItems: ['playlist-qr', 'recipe-card']
  }
};