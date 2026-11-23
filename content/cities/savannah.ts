import type { City, CityProduct, CityHighlight, CityMaker, CityStory, CitySource, CitySEO } from '../cities-v2';

const makers: CityMaker[] = [
  {
    id: 'savannah-bean',
    name: 'Savannah Bean Co.',
    role: 'Coffee Roaster',
    bio: 'Roastery in a 1920s cotton warehouse on River Street. They roast for the slow pace of the South — medium-dark, smooth, made for iced coffee in July.',
    image: '/images/makers/savannah-bean.webp',
    website: 'https://example.com/savannah-bean',
    instagram: '@savannahbeanco',
    products: ['river-street-blend'],
    location: 'Savannah, GA',
    isReal: false
  },
  {
    id: 'coastal-clay',
    name: 'Coastal Clay Studio',
    role: 'Ceramicist',
    bio: 'Studio on Hutchinson Island. Clay from the Savannah River. Soda-fired stoneware — the river and fire collaborate.',
    image: '/images/makers/coastal-clay.webp',
    website: 'https://example.com/coastal-clay',
    instagram: '@coastalclaystudio',
    products: ['river-silt-mug', 'marsh-bowl'],
    location: 'Savannah, GA',
    isReal: false
  },
  {
    id: 'gullah-goods',
    name: 'Gullah Goods',
    role: 'Preserves & Pantry Maker',
    bio: 'Gullah Geechee family business on St. Helena Island. Benne, sorghum, okra, sea island peas — the flavors that survived the Middle Passage.',
    image: '/images/makers/gullah-goods.webp',
    website: 'https://example.com/gullah-goods',
    instagram: '@gullahgoods',
    products: ['benne-brittle', 'sorghum-syrup', 'sea-island-peas'],
    location: 'St. Helena Island, GA',
    isReal: false
  }
];

const products: CityProduct[] = [
  {
    id: 'river-street-blend',
    name: 'River Street Blend',
    category: 'coffee',
    description: 'Medium-dark roast — chocolate, pecan, molasses. Made for Savannah humidity.',
    shortDescription: 'Southern roast blend, 12oz',
    detail: 'Brazil, Colombia, Guatemala — roasted to full city plus. Low acidity, heavy body, sweet finish. Designed for cold brew and iced coffee. 12oz whole bean. A portion supports Savannah\'s historic squares preservation.',
    image: '/images/products/savannah/river-street.webp',
    alt: 'Coffee bag with Savannah squares map',
    makerId: 'savannah-bean',
    priceRange: '$$',
    tags: ['southern-roast', 'cold-brew', 'pecan', 'historic'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'river-silt-mug',
    name: 'Savannah River Silt Mug',
    category: 'ceramics',
    description: 'Mug made from river silt clay — soda fired, the color of marsh at dusk.',
    shortDescription: 'Soda-fired river clay mug, 14oz',
    detail: 'Clay harvested from the Savannah River banks. Soda firing at cone 10 — sodium vapor creates a natural glaze, subtle orange peel texture. The color shifts: grey-green where thin, deep marsh where thick. 14oz. Each mug is a map of the firing.',
    image: '/images/products/savannah/river-silt-mug.webp',
    alt: 'Stoneware mug with soda-fired marsh glaze',
    makerId: 'coastal-clay',
    priceRange: '$$$',
    tags: ['river-clay', 'soda-fired', 'marsh', 'local'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'marsh-bowl',
    name: 'Salt Marsh Serving Bowl',
    category: 'ceramics',
    description: 'Wide shallow bowl — the horizon line of the Georgia coast.',
    shortDescription: 'Soda-fired serving bowl, 14 inches',
    detail: 'Same river clay, same soda kiln. Wide and shallow — for Lowcountry boils, shrimp and grits, summer tomatoes. 14" diameter. The soda glaze pools in the center like a tidal creek.',
    image: '/images/products/savannah/marsh-bowl.webp',
    alt: 'Wide ceramic bowl with tidal glaze pooling',
    makerId: 'coastal-clay',
    priceRange: '$$$',
    tags: ['river-clay', 'soda-fired', 'serving', 'lowcountry'],
    isHero: false,
    isExclusive: true
  },
  {
    id: 'benne-brittle',
    name: 'Benne Seed Brittle',
    category: 'baked-goods',
    description: 'Toasted sesame, caramelized sugar — the crunch of Gullah heritage.',
    shortDescription: 'Traditional benne brittle, 6oz tin',
    detail: 'Benni (sesame) brought by enslaved West Africans to the Sea Islands. Toasted, bound with cane sugar and a whisper of salt. 6oz tin. Crisp, nutty, not too sweet. The taste of resilience.',
    image: '/images/products/savannah/benne-brittle.webp',
    alt: 'Golden sesame brittle in a decorative tin',
    makerId: 'gullah-goods',
    priceRange: '$$',
    tags: ['benne', 'sesame', 'gullah-geechee', 'heritage', 'sea-islands'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'sorghum-syrup',
    name: 'Sweet Sorghum Syrup',
    category: 'pantry',
    description: 'Pressed from heirloom sorghum cane — earthy, complex, not just sweet.',
    shortDescription: 'Sorghum syrup, 12oz jar',
    detail: 'Sorghum grown on St. Helena Island. Cane pressed, juice boiled down in copper kettles. 12oz. Thicker than maple, richer than molasses. Notes of grass, earth, green apple. The sweetener of the Lowcountry before sugar.',
    image: '/images/products/savannah/sorghum.webp',
    alt: 'Amber sorghum syrup in a glass jar',
    makerId: 'gullah-goods',
    priceRange: '$$',
    tags: ['sorghum', 'heirloom', 'copper-kettle', 'sea-islands'],
    isHero: false,
    isExclusive: true
  },
  {
    id: 'sea-island-peas',
    name: 'Sea Island Red Peas',
    category: 'pantry',
    description: 'The original Hoppin\' John pea — creamy, nutty, historic.',
    shortDescription: 'Heirloom red peas, 1lb bag',
    detail: 'Vigna unguiculata — the cowpea variety brought from West Africa. Grown on Sapelo Island by Gullah farmers. Creamy texture, nutty flavor, holds shape when cooked. 1lb. For authentic Hoppin\' John, red peas and rice, or just simmered with ham hock.',
    image: '/images/products/savannah/sea-island-peas.webp',
    alt: 'Red-brown peas in a cloth bag',
    makerId: 'gullah-goods',
    priceRange: '$$',
    tags: ['heirloom', 'cowpea', 'hoppin-john', 'gullah', 'sapelo'],
    isHero: true,
    isExclusive: false
  }
];

const highlights: CityHighlight[] = [
  {
    title: 'The Squares Are the Plan',
    text: 'Savannah\'s 22 squares aren\'t parks — they\'re the city\'s operating system. Oglethorpe\'s 1733 plan: wards of 40 lots around a central square. Each square has a personality: Chippewa (the oak), Colonial Park (the fountain), Madison (the shade). The makers here work in that rhythm — the warehouse roastery, the island studio, the family kitchen. The grid holds them.',
    icon: 'Grid'
  },
  {
    title: 'Water Writes the Story',
    text: 'The Savannah River, the Intracoastal, the Atlantic, the marsh creeks — water defines every flavor. River silt becomes clay. Salt air seasons the sorghum. The tide brings shrimp, takes stories. Coastal Clay fires with river soda. Gullah Goods grows where the water rises. This box tastes brackish, sweet, tidal.',
    icon: 'Waves'
  },
  {
    title: 'Survival Is a Flavor',
    text: 'Benne seeds hidden in hair. Okra in the stew. Sorghum in the field. Sea island peas in the pot. The Gullah Geechee people carried these flavors across the ocean, planted them in Sea Island soil, kept them alive through slavery, reconstruction, development. Gullah Goods isn\'t preserving a museum — they\'re feeding their community. The brittle, the syrup, the peas — each is a living archive.',
    icon: 'Seedling'
  }
];

const story: CityStory = {
  title: 'The Clay That Remembers the River',
  content: 'The Savannah River runs 300 miles from the Appalachians to the Atlantic. Along the way, it carries the mountains — mica, feldspar, clay — and deposits them on Hutchinson Island. Coastal Clay Studio walks the bank at low tide, tests the mud between fingers, digs where the texture is right. The clay is gray, plastic, full of the river\'s journey. In the soda kiln, the sodium finds the silica, makes glass. The mug emerges with the river\'s colors: the green of the marsh grass, the grey of the tidal flat, the rust of the bank. In a future real box, the ceramicist would tell you about the firing where a storm surge flooded the studio and the kiln still fired. The mugs from that firing have a particular salt. Here, the mug holds that possibility. A reminder that the river gives, the fire takes, and the clay remembers both.',
  image: '/images/makers/coastal-clay.webp',
  imageAlt: 'Ceramicist digging river clay at low tide on Hutchinson Island'
};

const sources: CitySource[] = [
  { name: 'Visit Savannah', url: 'https://www.visitsavannah.com/', type: 'tourism' },
  { name: 'Gullah Geechee Cultural Heritage Corridor', url: 'https://gullahgeecheecorridor.org/', type: 'cultural' }
];

const seo: CitySEO = {
  title: 'Savannah Preview Box | Marlowby',
  description: 'Explore the Savannah preview: Southern roast coffee, river silt ceramics, benne brittle, sorghum, Sea Island peas. An editorial concept — no release date announced.',
  ogImage: '/images/cities/savannah-og.webp'
};

export const savannah: City = {
  id: 'savannah',
  slug: 'savannah',
  name: 'Savannah',
  state: 'Georgia',
  abbreviation: 'GA',
  region: 'south',
  status: 'preview',
  order: 10,
  description: 'River silt ceramics, Southern roast coffee, Gullah Geechee pantry staples, and tidal flavors.',
  intro: 'Where the squares anchor the city, the river writes the clay, and Gullah flavors survive. This preview explores the makers of the Georgia coast.',
  themes: ['food', 'arts', 'history', 'craft'],
  tags: ['ceramics', 'soda-fired', 'river-clay', 'benne', 'sorghum', 'sea-island-peas', 'gullah-geechee', 'coastal'],
  heroImage: '/images/cities/savannah.webp',
  heroImageAlt: 'Savannah historic district with live oaks and Spanish moss',
  heroImageMobile: '/images/cities/savannah-mobile.webp',
  galleryImages: [
    '/images/cities/savannah-gallery-1.webp',
    '/images/cities/savannah-gallery-2.webp',
    '/images/cities/savannah-gallery-3.webp'
  ],
  colorPalette: {
    primary: '#2D5A5E',      // Marsh teal
    secondary: '#C9A66B',    // Sorghum gold
    background: '#F5F0E8'    // Historic plaster
  },
  tagline: 'River clay & Gullah flavor',
  highlights,
  products,
  makers,
  story,
  sources,
  seo,
  productIds: products.map(p => p.id),
  relatedCityIds: ['charleston', 'asheville', 'new-orleans'],
  boxConfig: {
    estimatedShipDate: 'Preview — no date announced',
    productCount: 6,
    includesPostcard: true,
    includesStoryInsert: true,
    specialItems: ['square-map', 'gullah-guide']
  }
};