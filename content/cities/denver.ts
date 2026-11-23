import type { City, CityProduct, CityHighlight, CityMaker, CityStory, CitySource, CitySEO } from '../cities-v2';

const makers: CityMaker[] = [
  {
    id: 'high-plains-coffee',
    name: 'High Plains Coffee',
    role: 'Coffee Roaster',
    bio: 'Roastery in RiNo at 5,280 feet. High-altitude roasting changes everything — beans develop differently, faster. They lean into it with bright, clean profiles.',
    image: '/images/makers/high-plains.webp',
    website: 'https://example.com/high-plains',
    instagram: '@highplainscoffee',
    products: ['mile-high-blend'],
    location: 'Denver, CO',
    isReal: false
  },
  {
    id: 'rocky-mountain-ceramics',
    name: 'Rocky Mountain Ceramics',
    role: 'Ceramicist',
    bio: 'Studio in a converted warehouse in Sun Valley. Clay from Colorado deposits, glazes from local minerals. Forms inspired by red rock and alpine geometry.',
    image: '/images/makers/rocky-mountain-ceramics.webp',
    website: 'https://example.com/rocky-mountain-ceramics',
    instagram: '@rockymountainceramics',
    products: ['mesa-mug', 'alpine-bowl'],
    location: 'Denver, CO',
    isReal: false
  },
  {
    id: 'peak-pantry',
    name: 'Peak Pantry',
    role: 'Preserves Maker',
    bio: 'Small-batch preserves from Palisade peaches, Rocky Ford melons, and wild chokecherries. Colorado fruit, minimal sugar, maximum flavor.',
    image: '/images/makers/peak-pantry.webp',
    website: 'https://example.com/peak-pantry',
    instagram: '@peakpantry',
    products: ['palisade-jam', 'chokecherry-syrup'],
    location: 'Denver, CO',
    isReal: false
  }
];

const products: CityProduct[] = [
  {
    id: 'mile-high-blend',
    name: 'Mile High Blend',
    category: 'coffee',
    description: 'High-altitude roasted blend — bright citrus, honey sweetness, clean finish.',
    shortDescription: 'High-altitude roasted blend, 12oz',
    detail: 'Roasted at 5,280 feet in Denver. Lower boiling point means faster development, brighter acids preserved. Ethiopian Yirgacheffe and Colombian Huila. 12oz whole bean. Roast date stamped.',
    image: '/images/products/denver/mile-high.webp',
    alt: 'Coffee bag with topographic mountain illustration',
    makerId: 'high-plains-coffee',
    priceRange: '$$',
    tags: ['high-altitude', 'bright', 'ethiopian'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'mesa-mug',
    name: 'Mesa Mug',
    category: 'ceramics',
    description: 'Wide-based mug with layered glaze — sandstone, iron, sky blue.',
    shortDescription: 'Stoneware mug with landscape glaze',
    detail: 'Colorado clay, fired to cone 10 reduction. Three glazes layered: sandstone base, iron wash, sky blue top. The interaction creates mesas and canyons. Holds 14oz. Each unique.',
    image: '/images/products/denver/mesa-mug.webp',
    alt: 'Ceramic mug with layered geological glaze',
    makerId: 'rocky-mountain-ceramics',
    priceRange: '$$$',
    tags: ['colorado-clay', 'reduction', 'landscape-glaze'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'alpine-bowl',
    name: 'Alpine Ramen Bowl',
    category: 'ceramics',
    description: 'Deep bowl with high foot — stable on uneven ground (or a camp table).',
    shortDescription: 'Camp-ready ramen bowl, 44oz',
    detail: 'Stoneware with high foot ring for stability. Interior glaze: alpine lake blue. Exterior: raw clay with iron flecks. 44oz. Designed for backcountry ramen but pretty enough for the table.',
    image: '/images/products/denver/alpine-bowl.webp',
    alt: 'Deep ceramic bowl with blue interior and raw exterior',
    makerId: 'rocky-mountain-ceramics',
    priceRange: '$$$',
    tags: ['stoneware', 'camp-ready', 'alpine'],
    isHero: false,
    isExclusive: true
  },
  {
    id: 'palisade-jam',
    name: 'Palisade Peach Jam',
    category: 'pantry',
    description: 'Colorado\'s famous peaches — grown where the desert meets the mountains.',
    shortDescription: 'Palisade peach jam, 8oz jar',
    detail: 'Palisade peaches from a family orchard since 1920. High elevation, intense sun, cool nights = concentrated sugar. Cooked with just enough cane sugar to set. 8oz jar. No pectin.',
    image: '/images/products/denver/palisade-jam.webp',
    alt: 'Golden peach jam with fruit pieces visible',
    makerId: 'peak-pantry',
    priceRange: '$$',
    tags: ['colorado-peaches', 'high-elevation', 'no-pectin'],
    isHero: true,
    isExclusive: false
  },
  {
    id: 'chokecherry-syrup',
    name: 'Wild Chokecherry Syrup',
    category: 'condiment',
    description: 'Foraged chokecherries — tart, complex, distinctly Western.',
    shortDescription: 'Wild chokecherry syrup, 12oz bottle',
    detail: 'Hand-foraged from the Front Range foothills. Chokecherries are tiny, tart, and full of tannin. Simmered with honey and a touch of lemon. 12oz. Excellent on pancakes, in cocktails, or with game meat.',
    image: '/images/products/denver/chokecherry.webp',
    alt: 'Deep ruby syrup in an amber glass bottle',
    makerId: 'peak-pantry',
    priceRange: '$$',
    tags: ['foraged', 'wild', 'chokecherry'],
    isHero: false,
    isExclusive: true
  },
  {
    id: 'bison-jerky',
    name: 'Grass-Fed Bison Jerky',
    category: 'snack',
    description: 'Colorado bison, peppered with Pueblo chile and juniper.',
    shortDescription: 'Bison jerky with Pueblo chile, 3oz',
    detail: 'San Luis Valley bison, 100% grass-fed. Marinated with Pueblo chile, juniper berries, garlic, black pepper. Air-dried, not cooked. 3oz. High protein, no nitrates.',
    image: '/images/products/denver/bison-jerky.webp',
    alt: 'Dark jerky strips with visible pepper flecks',
    makerId: 'high-plains-meats',
    priceRange: '$$$',
    tags: ['bison', 'grass-fed', 'pueblo-chile'],
    isHero: true,
    isExclusive: false
  }
];

const highlights: CityHighlight[] = [
  {
    title: 'Altitude Changes Everything',
    text: 'At 5,280 feet, water boils at 202°F. Coffee roasts faster. Clay fires differently. Fruit develops more sugar. The altitude isn\'t a number — it\'s a force that shapes every material in this box. High Plains Coffee leans into it. Rocky Mountain Ceramics fires with it. Peak Pantry grows because of it.',
    icon: 'Mountain'
  },
  {
    title: 'Where Plains Meet Peaks',
    text: 'Denver sits at the threshold — the High Plains roll up to the Front Range. This transition zone creates unique ecologies: Palisade peaches in desert valleys, chokecherries in foothill draws, bison on shortgrass prairie. The box captures that edge: where agriculture meets wilderness, where city meets mountain.',
    icon: 'Map'
  },
  {
    title: 'Four Seasons, Sometimes in One Day',
    text: 'Colorado weather is a personality trait. Snow in June, 70°F in January, afternoon thunderstorms in July. The makers here work with that volatility — ceramics that survive thermal shock, preserves that capture a perfect week of peach weather, coffee roasted for crisp morning air. Adaptability is the local craft.',
    icon: 'CloudSun'
  }
];

const story: CityStory = {
  title: 'The Mesa in the Mug',
  content: 'Rocky Mountain Ceramics\' Mesa Mug started as a question: what does the Front Range feel like in your hand? The clay comes from a deposit near Golden — the same formation that creates the red rocks at Red Rocks Amphitheatre. The glazes use iron from the same mineral seams that stain the canyons rust-red. The sky blue is mixed from cobalt and the ash of piñon pine. When the kiln hits 2,350°F, these materials melt and move, creating landscapes that never existed but feel completely real. You can trace a canyon with your thumb. Find a mesa. Watch the glaze break like a cliff face. In a future real box, the ceramicist would tell you about the firing where the kiln stalled at 2,100°F and they had to feed it wood for six hours in a snowstorm. The mugs from that firing have a particular warmth. Here, the mug holds that possibility. A reminder that the land doesn\'t just surround us — it can be held.',
  image: '/images/makers/rocky-mountain-ceramics.webp',
  imageAlt: 'Ceramicist opening a reduction kiln at high altitude'
};

const sources: CitySource[] = [
  { name: 'Visit Denver', url: 'https://www.denver.org/', type: 'tourism' },
  { name: 'Colorado Creative Industries', url: 'https://coloradocreativeindustries.org/', type: 'government' }
];

const seo: CitySEO = {
  title: 'Denver Preview Box | Marlowby',
  description: 'Explore the Denver preview: high-altitude coffee, mesa-glazed ceramics, Palisade peaches, bison jerky. An editorial concept — no release date announced.',
  ogImage: '/images/cities/denver-og.webp'
};

export const denver: City = {
  id: 'denver',
  slug: 'denver',
  name: 'Denver',
  state: 'Colorado',
  abbreviation: 'CO',
  region: 'mountain',
  status: 'preview',
  order: 4,
  description: 'Mile-high coffee, red-rock ceramics, peak-grown fruit, and prairie bison.',
  intro: 'Where the plains meet the peaks, altitude shapes every flavor and form. This preview explores the materials and makers of the Front Range.',
  themes: ['food', 'arts', 'outdoors', 'design'],
  tags: ['coffee', 'ceramics', 'mountains', 'high-altitude', 'bison', 'peaches', 'rocks'],
  heroImage: '/images/cities/denver.webp',
  heroImageAlt: 'Denver skyline with the Rocky Mountains rising behind',
  heroImageMobile: '/images/cities/denver-mobile.webp',
  galleryImages: [
    '/images/cities/denver-gallery-1.webp',
    '/images/cities/denver-gallery-2.webp',
    '/images/cities/denver-gallery-3.webp'
  ],
  colorPalette: {
    primary: '#A0522D',      // Sienna
    secondary: '#8FBC8F',    // Dark sea green
    background: '#F5F0E8'    // Warm sand
  },
  tagline: 'Altitude & attitude',
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
    specialItems: ['topo-map', 'altitude-guide']
  }
};