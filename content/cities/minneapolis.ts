import type { City, CityProduct, CityHighlight, CityMaker, CityStory, CitySource, CitySEO } from '../cities-v2';

const makers: CityMaker[] = [
  {
    id: 'north-loop-roasters',
    name: 'North Loop Roasters',
    role: 'Coffee Roaster',
    bio: 'Roastery in a converted flour mill in the North Loop. They celebrate Minnesota\'s Nordic roots — light roasts, clean profiles, fika-ready.',
    image: '/images/makers/north-loop.webp',
    website: 'https://example.com/north-loop',
    instagram: '@northlooproasters',
    products: ['nordic-blend'],
    location: 'Minneapolis, MN',
    isReal: false
  },
  {
    id: 'lake-superior-ceramics',
    name: 'Lake Superior Ceramics',
    role: 'Ceramicist',
    bio: 'Studio in Northeast Minneapolis. Clay from the Mesabi Range. Glazes from iron ore tailings — the land\'s industrial history made beautiful.',
    image: '/images/makers/lake-superior-ceramics.webp',
    website: 'https://example.com/lake-superior-ceramics',
    instagram: '@lakesuperiorceramics',
    products: ['iron-range-mug', 'agate-bowl'],
    location: 'Minneapolis, MN',
    isReal: false
  },
  {
    id: 'prairie-pantry',
    name: 'Prairie Pantry',
    role: 'Preserves Maker',
    bio: 'Small-batch preserves from Minnesota\'s short, intense growing season. Honeyberry, Saskatoon, chokecherry — the flavors of the northern prairie.',
    image: '/images/makers/prairie-pantry.webp',
    website: 'https://example.com/prairie-pantry',
    instagram: '@prairiepantrymn',
    products: ['honeyberry-jam', 'saskatoon-syrup'],
    location: 'Minneapolis, MN',
    isReal: false
  }
];

const products: CityProduct[] = [
  {
    id: 'nordic-blend',
    name: 'Fika Blend',
    category: 'coffee',
    description: 'Light roast for Nordic-style coffee — bright, clean, made for lingering.',
    shortDescription: 'Nordic light roast blend, 12oz',
    detail: 'Ethiopian, Kenyan, Colombian — roasted light to highlight origin. Designed for filter, not espresso. The Swedish "fika" tradition: coffee, pastry, pause. 12oz whole bean. Roasted in a restored 1960s Probat.',
    image: '/images/products/minneapolis/nordic-blend.webp',
    alt: 'Minimal coffee bag with Nordic pattern',
    makerId: 'north-loop-roasters',
    priceRange: '$$',
    tags: ['light-roast', 'nordic', 'fika', 'filter'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'iron-range-mug',
    name: 'Iron Range Mug',
    category: 'ceramics',
    description: 'Mug glazed with Mesabi Range iron ore — deep rust, magnetic history.',
    shortDescription: 'Iron ore-glazed stoneware mug, 14oz',
    detail: 'Mesabi Range clay body. Glaze made from iron ore tailings — the red dust that built a nation\'s steel. Fired to cone 10 reduction. The iron creates crystalline surfaces. 14oz. Holds heat like the ore holds history.',
    image: '/images/products/minneapolis/iron-range-mug.webp',
    alt: 'Stoneware mug with crystalline rust glaze',
    makerId: 'lake-superior-ceramics',
    priceRange: '$$$',
    tags: ['iron-ore', 'mesabi', 'reduction', 'industrial-history'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'agate-bowl',
    name: 'Lake Superior Agate Bowl',
    category: 'ceramics',
    description: 'Bowl with banded agate glaze — Minnesota\'s state gemstone in clay.',
    shortDescription: 'Agate-glazed bowl, 10 inches',
    detail: 'Glaze recipe developed over 3 years to recreate Lake Superior agate banding. Layers of rust, cream, translucent grey. Each firing different. 10" diameter. The land\'s geology, fired into form.',
    image: '/images/products/minneapolis/agate-bowl.webp',
    alt: 'Ceramic bowl with banded agate glaze pattern',
    makerId: 'lake-superior-ceramics',
    priceRange: '$$$',
    tags: ['agate', 'state-gem', 'banded-glaze', 'geology'],
    isHero: false,
    isExclusive: true
  },
  {
    id: 'honeyberry-jam',
    name: 'Haskap Honeyberry Jam',
    category: 'pantry',
    description: 'The "blueberry of the north" — complex, tart, wildly aromatic.',
    shortDescription: 'Honeyberry jam, 8oz jar',
    detail: 'Haskap (honeyberry) grown at the U of M\'s breeding program. Cold-hardy, early-ripening. Complex flavor: blueberry, raspberry, black currant, hint of honey. Cooked with minimal sugar. 8oz. No pectin.',
    image: '/images/products/minneapolis/honeyberry.webp',
    alt: 'Deep blue-purple jam with whole berries',
    makerId: 'prairie-pantry',
    priceRange: '$$',
    tags: ['honeyberry', 'haskap', 'cold-hardy', 'minnesota-bred'],
    isHero: true,
    isExclusive: false
  },
  {
    id: 'saskatoon-syrup',
    name: 'Saskatoon Berry Syrup',
    category: 'condiment',
    description: 'Prairie berry — sweet, nutty, tastes like blueberry met almond.',
    shortDescription: 'Saskatoon syrup, 12oz bottle',
    detail: 'Saskatoon berries (serviceberry) from a cooperative in western MN. Simmered with wild rice honey. 12oz. Excellent on pancakes, in cocktails, or over ice cream. The taste of the prairie in June.',
    image: '/images/products/minneapolis/saskatoon.webp',
    alt: 'Deep purple syrup in a clear bottle',
    makerId: 'prairie-pantry',
    priceRange: '$$',
    tags: ['saskatoon', 'serviceberry', 'prairie', 'wild-rice-honey'],
    isHero: false,
    isExclusive: true
  },
  {
    id: 'wild-rice',
    name: 'Hand-Harvested Wild Rice',
    category: 'pantry',
    description: 'True wild rice — hand-harvested by canoe, wood-parched.',
    shortDescription: 'Authentic wild rice, 1lb bag',
    detail: 'Harvested by Ojibwe ricers on White Earth Reservation. Hand-knocked from canoes. Wood-parched over open fire — not machine-dried. 1lb. Nutty, smoky, cooks in 20 minutes. The real thing.',
    image: '/images/products/minneapolis/wild-rice.webp',
    alt: 'Long dark wild rice grains in a paper bag',
    makerId: 'native-harvest',
    priceRange: '$$$$',
    tags: ['wild-rice', 'ojibwe', 'hand-harvested', 'wood-parched', 'native'],
    isHero: true,
    isExclusive: false
  }
];

const highlights: CityHighlight[] = [
  {
    title: 'Winter Is a Maker',
    text: 'Minneapolis winter isn\'t a pause — it\'s a forge. The cold clarifies. Coffee roasted lighter. Clay fired hotter. Berries that survive -40°F taste different. The makers here don\'t work around winter; they work with it. The short growing season concentrates flavor. The long nights concentrate craft. This box is made by winter.',
    icon: 'Snowflake'
  },
  {
    title: 'Water Is the Map',
    text: 'Minneapolis exists because of St. Anthony Falls — the only major waterfall on the Mississippi. The flour mills, the lumber, the power, the city. Lake Superior feeds the iron. The lakes (10,000+) feed the life. This box follows the water: iron from the Range, clay from the river, berries from the prairie potholes, wild rice from the northern lakes.',
    icon: 'Droplets'
  },
  {
    title: 'Industrial Nature',
    text: 'The Mesabi Range is a scar and a source. Iron ore tailings become glaze. Former mills become roasteries. The land\'s industrial history isn\'t erased — it\'s recomposed. Lake Superior Ceramics uses waste ore. North Loop Roasters works in a flour mill. The box holds that tension: extraction and creation, damage and beauty, the same ground.',
    icon: 'Factory'
  }
];

const story: CityStory = {
  title: 'The Ore That Glazes the Mug',
  content: 'The Mesabi Range stretches 110 miles across northern Minnesota. For a century, it supplied the iron that built American cities — skyscrapers, bridges, rails, cars. The tailings — the crushed rock left after the iron is magnetically separated — pile in mountains of red dust. Lake Superior Ceramics collects it. They wash it, mill it, test it. The iron is pure, the silica high. In the glaze, it crystallizes on cooling — microscopic needles of hematite catching light. The mug surface shifts as you turn it: rust, blood, garnet, black. In a future real box, the ceramicist would tell you about the firing where the kiln atmosphere reduced the iron just right, and the mugs came out glowing. Here, the mug holds that possibility. A reminder that the mines that built the nation can also make the cup you hold.',
  image: '/images/makers/lake-superior-ceramics.webp',
  imageAlt: 'Ceramicist testing iron ore glaze samples'
};

const sources: CitySource[] = [
  { name: 'Meet Minneapolis', url: 'https://www.minneapolis.org/', type: 'tourism' },
  { name: 'Minnesota Historical Society', url: 'https://www.mnhs.org/', type: 'cultural' }
];

const seo: CitySEO = {
  title: 'Minneapolis Preview Box | Marlowby',
  description: 'Explore the Minneapolis preview: Nordic coffee, iron ore ceramics, honeyberry jam, wild rice. An editorial concept — no release date announced.',
  ogImage: '/images/cities/minneapolis-og.webp'
};

export const minneapolis: City = {
  id: 'minneapolis',
  slug: 'minneapolis',
  name: 'Minneapolis',
  state: 'Minnesota',
  abbreviation: 'MN',
  region: 'midwest',
  status: 'preview',
  order: 8,
  description: 'Nordic light roasts, iron ore ceramics, prairie berries, and hand-harvested wild rice.',
  intro: 'Where winter forges flavor, water maps the city, and industrial history becomes craft. This preview explores the makers of the North Loop and the Iron Range.',
  themes: ['food', 'arts', 'outdoors', 'craft'],
  tags: ['coffee', 'ceramics', 'iron-ore', 'wild-rice', 'berries', 'nordic', 'winter', 'lakes'],
  heroImage: '/images/cities/minneapolis.webp',
  heroImageAlt: 'Minneapolis skyline with Stone Arch Bridge and Mississippi River',
  heroImageMobile: '/images/cities/minneapolis-mobile.webp',
  galleryImages: [
    '/images/cities/minneapolis-gallery-1.webp',
    '/images/cities/minneapolis-gallery-2.webp',
    '/images/cities/minneapolis-gallery-3.webp'
  ],
  colorPalette: {
    primary: '#1B3A4B',      // Deep lake blue
    secondary: '#8B6B4A',    // Iron rust
    background: '#F0F0ED'    // Winter sky
  },
  tagline: 'Winter water & iron craft',
  highlights,
  products,
  makers,
  story,
  sources,
  seo,
  productIds: products.map(p => p.id),
  relatedCityIds: ['denver', 'seattle', 'boulder'],
  boxConfig: {
    estimatedShipDate: 'Preview — no date announced',
    productCount: 6,
    includesPostcard: true,
    includesStoryInsert: true,
    specialItems: ['ice-map', 'ore-guide']
  }
};