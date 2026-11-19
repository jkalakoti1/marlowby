import type { City, CityProduct, CityHighlight, CityMaker, CityStory, CitySource, CitySEO } from './cities-v2';

const makers: CityMaker[] = [
  {
    id: 'rainline-coffee',
    name: 'Rainline Coffee',
    role: 'Coffee Roaster',
    bio: 'Minimal roastery in SE Portland. They believe coffee should be approachable — clean, sweet, and consistent. Their "Morning Walk" blend is designed for the Pacific Northwest drizzle.',
    image: '/images/makers/rainline.webp',
    website: 'https://example.com/rainline',
    instagram: '@rainlinecoffee',
    products: ['rainline-blend']
  },
  {
    id: 'bridgework-studio',
    name: 'Bridgework Studio',
    role: 'Ceramicist',
    bio: 'Studio collective under the Burnside Bridge. Functional ceramics inspired by the geometry of Portland\'s bridges and the organic forms of Forest Park.',
    image: '/images/makers/bridgework.webp',
    website: 'https://example.com/bridgework',
    instagram: '@bridgeworkstudio',
    products: ['bridge-mug', 'forest-bowl']
  },
  {
    id: 'trailnote-press',
    name: 'Trailnote Press',
    role: 'Stationer',
    bio: 'Pocket notebooks for hikers and urban wanderers. Water-resistant paper, sewn binding, designed to survive a Pacific Northwest downpour.',
    image: '/images/makers/trailnote.webp',
    website: 'https://example.com/trailnote',
    instagram: '@trailnotepress',
    products: ['trail-notebook', 'city-map-pad']
  },
  {
    id: 'evergreen-pantry',
    name: 'Evergreen Pantry',
    role: 'Preserves Maker',
    bio: 'Foraged and farmed fruit preserves from the Willamette Valley. Marionberry jam is their signature — the "cabernet of blackberries" grown only in Oregon.',
    image: '/images/makers/evergreen.webp',
    website: 'https://example.com/evergreen',
    instagram: '@evergreenpantry',
    products: ['marionberry-jam']
  }
];

const products: CityProduct[] = [
  {
    id: 'rainline-blend',
    name: 'Morning Walk Blend',
    category: 'coffee',
    description: 'Light-medium roast with notes of pear, milk chocolate, and toasted almond.',
    shortDescription: 'Approachable light-medium roast, 12oz',
    detail: 'Seasonal blend rotating between Ethiopian and Colombian coffees. Roasted for filter and drip. Bright but balanced — designed for the long Portland morning. 12oz whole bean. Roast date on bag.',
    image: '/images/products/portland/rainline.webp',
    alt: 'Minimal kraft bag with topographic line illustration',
    makerId: 'rainline-coffee',
    priceRange: '$$',
    tags: ['light-medium', 'seasonal', 'filter-roast'],
    isHero: true,
    isExclusive: false
  },
  {
    id: 'bridge-mug',
    name: 'Steel Bridge Mug',
    category: 'ceramics',
    description: 'Tall mug with double-finger handle — inspired by the Steel Bridge\'s lift span.',
    shortDescription: 'Tall ceramic mug with architectural handle',
    detail: 'Thrown porcelain, fired to cone 10. The handle echoes the Steel Bridge\'s counterweight silhouette. Matte "River Mist" glaze outside, glossy white inside. Holds 14oz. Dishwasher safe.',
    image: '/images/products/portland/bridge-mug.webp',
    alt: 'Tall porcelain mug with distinctive angular handle',
    makerId: 'bridgework-studio',
    priceRange: '$$$',
    tags: ['porcelain', 'architectural', 'bridge-inspired'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'forest-bowl',
    name: 'Forest Park Ramen Bowl',
    category: 'ceramics',
    description: 'Wide, deep bowl for noodles — glazed in Forest Park moss tones.',
    shortDescription: 'Large ramen bowl in moss glaze',
    detail: 'Stoneware, reduction fired. Interior glaze shifts from sage to deep forest green. Wide foot keeps it stable. 48oz capacity — fits a full ramen portion with room for broth. Microwave safe.',
    image: '/images/products/portland/forest-bowl.webp',
    alt: 'Wide ceramic bowl in shifting green glaze',
    makerId: 'bridgework-studio',
    priceRange: '$$$',
    tags: ['stoneware', 'ramen', 'forest-park'],
    isHero: false,
    isExclusive: true
  },
  {
    id: 'trail-notebook',
    name: 'Forest Park Trail Notebook',
    category: 'stationery',
    description: 'Water-resistant pocket notebook for trail notes and city observations.',
    shortDescription: 'Water-resistant dot-grid notebook, 48 pages',
    detail: 'Stone paper (calcium carbonate + resin) — truly waterproof, tear-resistant, and recyclable. 48 dot-grid pages. Sewn binding. 3.5 x 5.5 inches. Cover features topo lines of Forest Park\'s Wildwood Trail.',
    image: '/images/products/portland/trail-notebook.webp',
    alt: 'Pocket notebook with topographic trail map cover',
    makerId: 'trailnote-press',
    priceRange: '$$',
    tags: ['waterproof', 'stone-paper', 'topographic'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'city-map-pad',
    name: 'Neighborhood Map Pad',
    category: 'paper-goods',
    description: 'Tear-off pad of illustrated Portland neighborhood maps.',
    shortDescription: 'Map pad, 50 sheets, 12 neighborhoods',
    detail: 'Each sheet features a different neighborhood: Alberta, Mississippi, Division, Hawthorne, etc. Hand-drawn landmarks, coffee shops, parks. 50 sheets, 8.5 x 11 inches. Great for planning or framing.',
    image: '/images/products/portland/map-pad.webp',
    alt: 'Tear-off pad with hand-drawn neighborhood maps',
    makerId: 'trailnote-press',
    priceRange: '$$',
    tags: ['neighborhoods', 'illustrated', 'tear-off'],
    isHero: false,
    isExclusive: true
  },
  {
    id: 'marionberry-jam',
    name: 'Willamette Marionberry Jam',
    category: 'pantry',
    description: 'Oregon\'s signature berry — complex, wine-like, grown only in the Willamette Valley.',
    shortDescription: 'Marionberry jam, 8oz jar',
    detail: 'Marionberries from a 4th-generation farm near Salem. Cooked with minimal sugar to let the berry shine. No pectin. 8oz jar. The "cabernet of blackberries" — complex, tart, wine-like.',
    image: '/images/products/portland/marionberry.webp',
    alt: 'Deep purple jam in a wide-mouth jar',
    makerId: 'evergreen-pantry',
    priceRange: '$$',
    tags: ['oregon-exclusive', 'marionberry', 'low-sugar'],
    isHero: true,
    isExclusive: false
  }
];

const highlights: CityHighlight[] = [
  {
    title: 'A Creative Point of View',
    text: 'Portland\'s arts districts make space for galleries, shops, and independent ideas. Our preview takes that variety as a starting point for a few useful objects: a ceramic dish, a notebook, and a coffee concept. These are illustrative goods rather than real partnerships. The thread connecting them is curiosity about how design can become part of an ordinary day.',
    icon: 'Palette'
  },
  {
    title: 'The Ritual of a Good Cup',
    text: 'For this concept, coffee offers a reason to slow down and pay attention. Rainline Coffee is a fictional example, with no sourcing, roasting, or sustainability claims attached. Alongside a notebook and a small dish, it suggests a tabletop scene rather than a verified selection from Portland businesses. A future real box would tell a specific maker\'s story in their own words.',
    icon: 'Coffee'
  },
  {
    title: 'Space for an Outdoor Pause',
    text: 'Portland\'s parks range from large wooded landscapes to small places to pause in the city. Forest Park is one example of that connection to green space. Our preview carries the idea into a pocket notebook: a place to jot down a walk, a detail, or an unexpected thought. It is an editorial connection, not a claim that every resident experiences the city the same way.',
    icon: 'Trees'
  }
];

const story: CityStory = {
  title: 'A Small Notebook for Noticing More',
  content: 'Some discoveries are easy to walk past. A hand-painted sign, the shape of a leaf, a sentence overheard on a coffee break — each can be a reason to open a notebook. Trailnote Press is a fictional stationery concept that gives those small observations a place to land. Picture a simple pocket book, comfortable to carry, with enough blank space to make it your own. This is not a real publisher\'s story, and no materials or environmental certifications are claimed. The idea is more modest: a useful object that encourages attention. In a destination box, it could connect the experience of opening something new with the habit of looking a little more closely at what is already around you.',
  image: '/images/makers/trailnote-press.webp',
  imageAlt: 'Hands writing in a pocket notebook on a forest trail'
};

const sources: CitySource[] = [
  { name: 'Travel Portland', url: 'https://www.travelportland.com/attractions/', type: 'tourism' },
  { name: 'Portland Parks & Recreation', url: 'https://www.portland.gov/parks', type: 'government' }
];

const seo: CitySEO = {
  title: 'Portland Preview Box | Marlowby',
  description: 'Explore the Portland preview: Rainline coffee, Bridgework ceramics, Trailnote notebooks, Marionberry jam. An editorial concept — no release date announced.',
  ogImage: '/images/cities/portland-og.webp'
};

export const portland: City = {
  id: 'portland',
  slug: 'portland',
  name: 'Portland',
  state: 'Oregon',
  abbreviation: 'OR',
  region: 'pacific-northwest',
  status: 'preview',
  order: 2,
  description: 'Independent coffee rituals, bridge-inspired ceramics, and forest trails in the city.',
  intro: 'Independent ideas, slow coffee rituals, and a little room to breathe. This editorial preview follows Portland\'s creative and outdoor spirit.',
  themes: ['food', 'arts', 'outdoors', 'design'],
  tags: ['coffee', 'ceramics', 'forest-park', 'bridges', 'rain', 'bikes', 'makers'],
  heroImage: '/images/cities/portland.webp',
  heroImageAlt: 'Portland cityscape with bridges and green riverbanks',
  heroImageMobile: '/images/cities/portland-mobile.webp',
  galleryImages: [
    '/images/cities/portland-gallery-1.webp',
    '/images/cities/portland-gallery-2.webp',
    '/images/cities/portland-gallery-3.webp'
  ],
  colorPalette: {
    primary: '#3D5636',      // Forest sage
    secondary: '#638DB8',    // Bridge steel blue
    background: '#EFF2ED'    // Misty morning
  },
  tagline: 'Creativity & outdoor spirit',
  highlights,
  products,
  makers,
  story,
  sources,
  seo,
  productIds: products.map(p => p.id),
  relatedCityIds: ['seattle', 'boulder', 'denver'],
  boxConfig: {
    estimatedShipDate: 'Preview — no date announced',
    productCount: 6,
    includesPostcard: true,
    includesStoryInsert: true,
    specialItems: ['trail-map', 'rain-playlist']
  }
};