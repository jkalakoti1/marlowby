import type { City, CityProduct, CityHighlight, CityMaker, CityStory, CitySource, CitySEO } from '../cities-v2';

const makers: CityMaker[] = [
  {
    id: 'wasatch-roasters',
    name: 'Wasatch Roasters',
    role: 'Coffee Roaster',
    bio: 'Roastery at 4,500 feet in a former canning factory. They roast for the mountain lifestyle — clean, bright, fuel for the approach.',
    image: '/images/makers/wasatch-roasters.webp',
    website: 'https://example.com/wasatch-roasters',
    instagram: '@wasatchroasters',
    products: ['alpine-glow-blend'],
    location: 'Provo, UT',
    isReal: false
  },
  {
    id: 'utah-clay',
    name: 'Utah Clay Studio',
    role: 'Ceramicist',
    bio: 'Studio in a historic Provo woolen mill. Clay from the Wasatch foothills. Reduction fired — the range\'s iron and limestone in the glaze.',
    image: '/images/makers/utah-clay.webp',
    website: 'https://example.com/utah-clay',
    instagram: '@utahclaystudio',
    products: ['wasatch-mug', 'timpanogos-bowl'],
    location: 'Provo, UT',
    isReal: false
  },
  {
    id: 'pioneer-pantry',
    name: 'Pioneer Pantry',
    role: 'Preserves & Honey Maker',
    bio: 'Family apiary and orchard in Utah Valley since 1923. Raw honey, fruit preserves, apple butter — the flavors of the Mormon corridor.',
    image: '/images/makers/pioneer-pantry.webp',
    website: 'https://example.com/pioneer-pantry',
    instagram: '@pioneerpantry',
    products: ['wildflower-honey', 'apricot-preserves', 'apple-butter'],
    location: 'Utah Valley, UT',
    isReal: false
  }
];

const products: CityProduct[] = [
  {
    id: 'alpine-glow-blend',
    name: 'Alpine Glow Blend',
    category: 'coffee',
    description: 'Light-medium roast — stone fruit, honey, clean alpine finish. The taste of first light on Timpanogos.',
    shortDescription: 'Mountain light roast, 12oz',
    detail: 'Ethiopian, Guatemalan, Costa Rican — roasted to highlight origin brightness. Notes of peach, apricot, wildflower honey. 12oz whole bean. Roasted at 4,500 feet where water boils at 204°F.',
    image: '/images/products/provo/alpine-glow.webp',
    alt: 'Coffee bag with Mount Timpanogos at alpenglow',
    makerId: 'wasatch-roasters',
    priceRange: '$$',
    tags: ['light-medium', 'stone-fruit', 'alpine', 'high-altitude'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'wasatch-mug',
    name: 'Wasatch Range Mug',
    category: 'ceramics',
    description: 'Mug glazed with Wasatch foothill clay — iron red, limestone white, reduction fired.',
    shortDescription: 'Reduction-fired mountain clay mug, 12oz',
    detail: 'Clay dug from the Wasatch foothills — ancient seabed, rich in iron and limestone. Gas reduction to cone 10. The iron flashes red, the limestone stays white. 12oz. The mountain range in your hand.',
    image: '/images/products/provo/wasatch-mug.webp',
    alt: 'Ceramic mug with iron-red and limestone-white reduction glaze',
    makerId: 'utah-clay',
    priceRange: '$$$',
    tags: ['wasatch', 'foothill-clay', 'reduction', 'iron-limestone'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'timpanogos-bowl',
    name: 'Mount Timpanogos Bowl',
    category: 'ceramics',
    description: 'Wide bowl with carved ridge — the mountain\'s profile in clay.',
    shortDescription: 'Reduction-fired carved bowl, 12 inches',
    detail: 'Same Wasatch clay, same reduction fire. The ridge is carved leather-hard — Timpanogos\'s jagged silhouette. 12" diameter. The glaze breaks on the ridge: white on the peaks, red in the valleys.',
    image: '/images/products/provo/timpanogos-bowl.webp',
    alt: 'Wide ceramic bowl with carved mountain ridge',
    makerId: 'utah-clay',
    priceRange: '$$$',
    tags: ['wasatch', 'timpanogos', 'carved', 'reduction', 'silhouette'],
    isHero: false,
    isExclusive: true
  },
  {
    id: 'wildflower-honey',
    name: 'Wasatch Wildflower Honey',
    category: 'pantry',
    description: 'Raw, unfiltered honey from hives in the alpine meadows — floral, complex, alive.',
    shortDescription: 'Raw wildflower honey, 12oz jar',
    detail: 'Hives at 6,000+ feet in the Uinta-Wasatch-Cache National Forest. Clover, lupine, penstemon, fireweed. Never heated, never filtered. 12oz. Crystallizes naturally — warm gently to liquify. The taste of a Utah summer.',
    image: '/images/products/provo/wildflower-honey.webp',
    alt: 'Golden raw honey in a glass jar with honeycomb',
    makerId: 'pioneer-pantry',
    priceRange: '$$',
    tags: ['raw', 'wildflower', 'alpine', 'unfiltered', 'utah'],
    isHero: true,
    isExclusive: false
  },
  {
    id: 'apricot-preserves',
    name: 'Utah Apricot Preserves',
    category: 'pantry',
    description: 'Blush apricots from Utah Valley — the last commercial orchards in the state.',
    shortDescription: 'Apricot preserves, 8oz jar',
    detail: 'Blush apricots grown in the shadow of Timpanogos. Cooked with cane sugar and lemon — no pectin. 8oz. Bright, tangy, intensely apricot. The flavor of a valley that used to be all orchards.',
    image: '/images/products/provo/apricot-preserves.webp',
    alt: 'Golden-orange apricot preserves with fruit pieces',
    makerId: 'pioneer-pantry',
    priceRange: '$$',
    tags: ['apricot', 'utah-valley', 'no-pectin', 'orchard'],
    isHero: false,
    isExclusive: true
  },
  {
    id: 'apple-butter',
    name: 'Slow-Cooked Apple Butter',
    category: 'pantry',
    description: 'Heritage apples, copper kettle, 12 hours — dark, spiced, spreadable autumn.',
    shortDescription: 'Apple butter, 10oz jar',
    detail: 'Heritage apples from the family orchard. Slow-cooked 12 hours in a copper kettle with cinnamon, allspice, clove. 10oz. Dark as mahogany, smooth as velvet. The pantry staple of the Mormon corridor.',
    image: '/images/products/provo/apple-butter.webp',
    alt: 'Dark apple butter in a jar with copper kettle illustration',
    makerId: 'pioneer-pantry',
    priceRange: '$$',
    tags: ['apple', 'copper-kettle', 'heritage', 'slow-cooked', 'spiced'],
    isHero: false,
    isExclusive: true
  }
];

const highlights: CityHighlight[] = [
  {
    title: 'The Mountains Are the Kiln',
    text: 'The Wasatch Range rises 7,000 feet from the valley floor — a wall of limestone and quartzite. Utah Clay digs clay from its foothills. Wasatch Roasters roasts at its feet. Pioneer Pantry keeps bees in its meadows. The range isn\'t a backdrop; it\'s the source. The clay, the air, the water, the flowers — all come down from the Wasatch.',
    icon: 'Mountain'
  },
  {
    title: 'Altitude Changes the Roast',
    text: 'Provo sits at 4,500 feet. Water boils at 204°F. Coffee roasts faster, develops differently. Wasatch Roasters built their profiles for this air — lighter, brighter, preserving the fruit that high altitude amplifies. The same beans roasted at sea level would taste flat. Here, they sing.',
    icon: 'Sun'
  },
  {
    title: 'A Corridor of Continuity',
    text: 'The Mormon Corridor — the Interstate 15 spine from Salt Lake to St. George — carries a specific material culture: fruit orchards, honey bees, copper kettles, woolen mills, clay pits. Pioneer Pantry\'s apple butter uses the same recipe as 1923. Utah Clay works in a woolen mill. The makers aren\'t reviving; they\'re continuing. This box holds that thread.',
    icon: 'Thread'
  }
];

const story: CityStory = {
  title: 'The Clay That Was Once a Sea',
  content: 'The Wasatch foothills were the shore of Lake Bonneville — a massive prehistoric lake that covered much of Utah 15,000 years ago. The clay Utah Clay digs is the lake\'s sediment: fine, plastic, rich with the minerals of an inland sea. In the reduction kiln, the iron from that ancient water flashes red. The limestone from the lake\'s shells stays white. The mug that emerges holds the geology: seabed to mountain to fire to hand. In a future real box, the ceramicist would tell you about the firing where the kiln reduction was perfect and the iron crystallized into microscopic mirrors. The mugs from that firing flash like the lake at noon. Here, the mug holds that possibility. A reminder that the oldest seas can still become the cup you drink from.',
  image: '/images/makers/utah-clay.webp',
  imageAlt: 'Ceramicist digging Wasatch foothill clay from ancient lakebed'
};

const sources: CitySource[] = [
  { name: 'Visit Provo', url: 'https://www.visitprovo.com/', type: 'tourism' },
  { name: 'Utah Division of Arts & Museums', url: 'https://arts.utah.gov/', type: 'cultural' }
];

const seo: CitySEO = {
  title: 'Provo Preview Box | Marlowby',
  description: 'Explore the Provo preview: alpine coffee, Wasatch clay ceramics, wildflower honey, apricot preserves. An editorial concept — no release date announced.',
  ogImage: '/images/cities/provo-og.webp'
};

export const provo: City = {
  id: 'provo',
  slug: 'provo',
  name: 'Provo',
  state: 'Utah',
  abbreviation: 'UT',
  region: 'mountain',
  status: 'preview',
  order: 14,
  description: 'Alpine coffee, Wasatch foothill clay ceramics, wildflower honey, and Mormon corridor pantry.',
  intro: 'Where the Wasatch rises from an ancient seabed, altitude shapes the roast, and continuity flavors the pantry. This preview explores the makers of Utah Valley.',
  themes: ['food', 'arts', 'outdoors', 'craft'],
  tags: ['coffee', 'ceramics', 'reduction', 'wasatch', 'honey', 'apricot', 'apple-butter', 'high-altitude', 'lake-bonneville'],
  heroImage: '/images/cities/provo.webp',
  heroImageAlt: 'Mount Timpanogos rising above Provo at alpenglow',
  heroImageMobile: '/images/cities/provo-mobile.webp',
  galleryImages: [
    '/images/cities/provo-gallery-1.webp',
    '/images/cities/provo-gallery-2.webp',
    '/images/cities/provo-gallery-3.webp'
  ],
  colorPalette: {
    primary: '#8B3E2F',      // Iron red
    secondary: '#D4C4A8',    // Limestone white
    background: '#F5F0E8'    // Valley warmth
  },
  tagline: 'Ancient sea & alpine fire',
  highlights,
  products,
  makers,
  story,
  sources,
  seo,
  productIds: products.map(p => p.id),
  relatedCityIds: ['boulder', 'santa-fe', 'flagstaff'],
  boxConfig: {
    estimatedShipDate: 'Preview — no date announced',
    productCount: 6,
    includesPostcard: true,
    includesStoryInsert: true,
    specialItems: ['wasatch-map', 'honey-guide']
  }
};