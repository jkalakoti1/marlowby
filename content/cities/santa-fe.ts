import type { City, CityProduct, CityHighlight, CityMaker, CityStory, CitySource, CitySEO } from './cities-v2';

const makers: CityMaker[] = [
  {
    id: 'high-desert-roasters',
    name: 'High Desert Roasters',
    role: 'Coffee Roaster',
    bio: 'Solar-powered roastery on the historic Camino Real. They roast with the New Mexico sun — 300+ days a year. Bright, clean, intentional.',
    image: '/images/makers/high-desert.webp',
    website: 'https://example.com/high-desert',
    instagram: '@highdesertroasters',
    products: ['solar-roast-blend']
  },
  {
    id: 'pueblo-pottery',
    name: 'Pueblo Pottery Collective',
    role: 'Ceramicist',
    bio: 'Multi-generational Pueblo potters working in micaceous clay. Traditional forms, contemporary uses. Each piece carries centuries of knowledge.',
    image: '/images/makers/pueblo-pottery.webp',
    website: 'https://example.com/pueblo-pottery',
    instagram: '@pueblopotterycollective',
    products: ['micaceous-bean-pot', 'pinch-cup']
  },
  {
    id: 'chile-traditions',
    name: 'Chile Traditions',
    role: 'Chile Farmer & Preserver',
    bio: 'Hatch Valley chile farmers since 1918. Green chile roasted over piñon, red chile dried in the sun. The taste of New Mexico.',
    image: '/images/makers/chile-traditions.webp',
    website: 'https://example.com/chile-traditions',
    instagram: '@chiletraditions',
    products: ['hatch-green-chile', 'red-chile-powder']
  }
];

const products: CityProduct[] = [
  {
    id: 'solar-roast-blend',
    name: 'Solar Roast Blend',
    category: 'coffee',
    description: 'Roasted with concentrated New Mexico sunlight — clean, bright, no fossil fuels.',
    shortDescription: 'Solar-roasted coffee blend, 12oz',
    detail: 'Roasted in a custom solar concentrator — 300+ sunny days a year, zero emissions. Blend of Mexican Chiapas and Ethiopian Sidama. Light-medium roast preserves origin character. Notes of citrus, honey, almond. 12oz whole bean.',
    image: '/images/products/santa-fe/solar-roast.webp',
    alt: 'Coffee bag with solar concentrator illustration',
    makerId: 'high-desert-roasters',
    priceRange: '$$',
    tags: ['solar-roasted', 'sustainable', 'light-medium'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'micaceous-bean-pot',
    name: 'Micaceous Bean Pot',
    category: 'ceramics',
    description: 'Traditional Pueblo micaceous clay pot — the gold standard for cooking beans.',
    shortDescription: 'Micaceous clay bean pot, 3 quarts',
    detail: 'Mica-rich clay from sacred Pueblo sources. Hand-coiled, pit-fired. The mica creates natural non-stick and even heat. 3 quarts — cooks a pound of beans perfectly. No glaze needed. Seasons with use.',
    image: '/images/products/santa-fe/micaceous-pot.webp',
    alt: 'Golden micaceous clay pot with natural sparkle',
    makerId: 'pueblo-pottery',
    priceRange: '$$$$',
    tags: ['micaceous', 'pueblo', 'pit-fired', 'traditional', 'heirloom'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'pinch-cup',
    name: 'Pinch Tea Cup',
    category: 'ceramics',
    description: 'Small pinch-formed cup — the oldest form, made by hand.',
    shortDescription: 'Pinch-formed tea cup, micaceous clay',
    detail: 'Formed entirely by pinching — no wheel, no mold. Micaceous clay from the same source as the bean pot. Pit-fired. 4oz. Fits perfectly in the palm. The mica catches the light as you sip.',
    image: '/images/products/santa-fe/pinch-cup.webp',
    alt: 'Small pinch-formed cup with golden mica flecks',
    makerId: 'pueblo-pottery',
    priceRange: '$$$',
    tags: ['pinch-formed', 'micaceous', 'tea', 'meditative'],
    isHero: false,
    isExclusive: true
  },
  {
    id: 'hatch-green-chile',
    name: 'Hatch Green Chile (Frozen)',
    category: 'pantry',
    description: 'Fresh-roasted Hatch green chile — peeled, seeded, frozen at peak.',
    shortDescription: 'Frozen roasted green chile, 1lb',
    detail: 'Hatch Valley chile, roasted over piñon wood fire. Hand-peeled, seeded, flash-frozen within hours. 1lb bag. The standard by which all green chile is measured. Use in stews, sauces, burgers, everything.',
    image: '/images/products/santa-fe/hatch-green.webp',
    alt: 'Vibrant green roasted chile in freezer bag',
    makerId: 'chile-traditions',
    priceRange: '$$',
    tags: ['hatch', 'green-chile', 'piñon-roasted', 'frozen'],
    isHero: true,
    isExclusive: false
  },
  {
    id: 'red-chile-powder',
    name: 'Chimayó Red Chile Powder',
    category: 'spice',
    description: 'Sun-dried red chile from the sacred Chimayó valley — complex, sweet, holy.',
    shortDescription: 'Chimayó red chile powder, 4oz jar',
    detail: 'Native Chimayó chile, grown in the valley for 400+ years. Sun-dried on adobe roofs. Stone-ground. 4oz. Notes of dried cherry, tobacco, earth. The "holy chile" — pilgrims take soil from the sanctuario for their gardens.',
    image: '/images/products/santa-fe/chimayo-red.webp',
    alt: 'Deep red chile powder in a ceramic jar',
    makerId: 'chile-traditions',
    priceRange: '$$$',
    tags: ['chimayo', 'red-chile', 'sun-dried', 'stone-ground', 'heirloom'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'piñon-shortbread',
    name: 'Piñon Shortbread Cookies',
    category: 'baked-goods',
    description: 'Buttery shortbread with toasted piñon nuts — New Mexico\'s state cookie.',
    shortDescription: 'Piñon shortbread, box of 12',
    detail: 'Piñon pine nuts hand-harvested from the high desert. Toasted, folded into European-style shortbread. Box of 12. The taste of New Mexico holidays — buttery, nutty, resinous, unforgettable.',
    image: '/images/products/santa-fe/pinon-shortbread.webp',
    alt: 'Golden shortbread cookies with visible pine nuts',
    makerId: 'santa-fe-bakery',
    priceRange: '$$',
    tags: ['piñon', 'shortbread', 'state-cookie', 'holiday'],
    isHero: false,
    isExclusive: true
  }
];

const highlights: CityHighlight[] = [
  {
    title: 'The Sun Is a Tool',
    text: 'Santa Fe sits at 7,000 feet with 300+ days of sun. High Desert Roasters uses that sun as fuel — a solar concentrator that reaches roasting temperatures with zero emissions. It\'s not a gimmick; it changes the coffee. Cleaner. Brighter. The same sun that fires the clay, dries the chile, grows the piñon. In this box, the sun is an ingredient.',
    icon: 'Sun'
  },
  {
    title: 'Clay with Memory',
    text: 'Micaceous clay from Pueblo sources isn\'t just a material — it\'s a lineage. The mica comes from deposits known for generations. The coiling technique passes through hands. The pit fire connects to ancestors. When you cook beans in a micaceous pot, you\'re participating in a technology thousands of years old that still works better than anything modern. This box honors that continuity.',
    icon: 'Sparkles'
  },
  {
    title: 'Chile Is a Verb',
    text: 'In New Mexico, "chile" isn\'t a noun — it\'s a verb. To chile something is to transform it. Green chile roasted over piñon. Red chile dried on adobe. Powder ground on stone. The flavor isn\'t in the pepper; it\'s in the process. This box includes both green and red, both processes, both seasons. Because in Santa Fe, you don\'t choose. You do both.',
    icon: 'Flame'
  }
];

const story: CityStory = {
  title: 'The Pot That Remembers Every Hand',
  content: 'The micaceous bean pot begins as mica-schist in the mountains near Taos. The Pueblo potters know the seams. They dig with permission, with prayer. The clay is coiled — not thrown, coiled — building upward ring by ring. The mica platelets align, creating planes that conduct heat like metal but hold it like stone. Then the pit fire: cedar, piñon, cottonwood. The flame finds every curve. The pot emerges golden, sparkling, alive. In a Pueblo kitchen, this pot cooks beans every week for decades. It remembers every hand that stirred. The mica gets smoother. The clay gets darker. The flavor accumulates. In a future real box, the potter would tell you about the pot their grandmother made that\'s still cooking beans today. Here, the pot holds that possibility. A reminder that some technologies don\'t obsolete — they deepen.',
  image: '/images/makers/pueblo-pottery.webp',
  imageAlt: 'Pueblo potter coiling a micaceous bean pot by hand'
};

const sources: CitySource[] = [
  { name: 'Santa Fe Tourism', url: 'https://www.santafe.org/', type: 'tourism' },
  { name: 'New Mexico Arts', url: 'https://www.nmarts.org/', type: 'cultural' }
];

const seo: CitySEO = {
  title: 'Santa Fe Preview Box | Marlowby',
  description: 'Explore the Santa Fe preview: solar-roasted coffee, micaceous Pueblo pottery, Hatch chile, piñon shortbread. An editorial concept — no release date announced.',
  ogImage: '/images/cities/santa-fe-og.webp'
};

export const santaFe: City = {
  id: 'santa-fe',
  slug: 'santa-fe',
  name: 'Santa Fe',
  state: 'New Mexico',
  abbreviation: 'NM',
  region: 'southwest',
  status: 'preview',
  order: 6,
  description: 'Solar-roasted coffee, micaceous Pueblo pottery, Hatch chile, and high desert light.',
  intro: 'Where the sun is fuel, clay has memory, and chile is a verb. This preview explores the materials and makers shaped by 7,000 feet of high desert.',
  themes: ['food', 'arts', 'craft', 'design'],
  tags: ['solar', 'pueblo', 'micaceous', 'chile', 'piñon', 'high-desert', 'adobe', 'tradition'],
  heroImage: '/images/cities/santa-fe.webp',
  heroImageAlt: 'Santa Fe Plaza with adobe architecture and Sangre de Cristo Mountains',
  heroImageMobile: '/images/cities/santa-fe-mobile.webp',
  galleryImages: [
    '/images/cities/santa-fe-gallery-1.webp',
    '/images/cities/santa-fe-gallery-2.webp',
    '/images/cities/santa-fe-gallery-3.webp'
  ],
  colorPalette: {
    primary: '#C46210',      // Adobe terracotta
    secondary: '#D4A574',    // Warm sand
    background: '#FDF8F3'    // White adobe
  },
  tagline: 'Sun, clay & chile',
  highlights,
  products,
  makers,
  story,
  sources,
  seo,
  productIds: products.map(p => p.id),
  relatedCityIds: ['denver', 'tucson', 'asheville'],
  boxConfig: {
    estimatedShipDate: 'Preview — no date announced',
    productCount: 6,
    includesPostcard: true,
    includesStoryInsert: true,
    specialItems: ['solar-diagram', 'chile-guide']
  }
};