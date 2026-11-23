import type { City, CityProduct, CityHighlight, CityMaker, CityStory, CitySource, CitySEO } from '../cities-v2';

const makers: CityMaker[] = [
  {
    id: 'zinger-mann',
    name: 'Zingerman\'s Coffee Company',
    role: 'Coffee Roaster',
    bio: 'Roastery in a historic Kerrytown building. Part of the Zingerman\'s community of businesses. They roast for the deliberative palate — thoughtful, transparent, delicious.',
    image: '/images/makers/zinger-mann.webp',
    website: 'https://example.com/zingermans-coffee',
    instagram: '@zingermanscoffee',
    products: ['kerrytown-blend'],
    location: 'Ann Arbor, MI',
    isReal: false
  },
  {
    id: 'ann-arbor-ceramics',
    name: 'Ann Arbor Ceramics',
    role: 'Ceramicist',
    bio: 'Studio in a converted gas station on the west side. Local clay, electric kiln precision. Clean forms for daily rituals.',
    image: '/images/makers/ann-arbor-ceramics.webp',
    website: 'https://example.com/annarborceramics',
    instagram: '@annarborceramics',
    products: ['huron-mug', 'arboretum-bowl'],
    location: 'Ann Arbor, MI',
    isReal: false
  },
  {
    id: 'mitten-bakery',
    name: 'Mitten Bakery',
    role: 'Baker',
    bio: 'Micro-bakery in a former corner store. Naturally leavened breads, seasonal pastries. The scent of rye and butter on a Michigan morning.',
    image: '/images/makers/mitten-bakery.webp',
    website: 'https://example.com/mitten-bakery',
    instagram: '@mittenbakery',
    products: ['rye-loaf', 'cherry-scones'],
    location: 'Ann Arbor, MI',
    isReal: false
  }
];

const products: CityProduct[] = [
  {
    id: 'kerrytown-blend',
    name: 'Kerrytown Blend',
    category: 'coffee',
    description: 'Medium roast — caramel, toasted nut, clean finish. The taste of a Saturday market morning.',
    shortDescription: 'Community roast blend, 12oz',
    detail: 'Brazil, Colombia, Guatemala — roasted to highlight sweetness and balance. Named for the historic Kerrytown farmers market where Zingerman\'s began. 12oz whole bean. A portion supports food access programs.',
    image: '/images/products/ann-arbor/kerrytown.webp',
    alt: 'Coffee bag with Kerrytown market illustration',
    makerId: 'zinger-mann',
    priceRange: '$$',
    tags: ['community', 'market', 'balanced', 'michigan'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'huron-mug',
    name: 'Huron River Mug',
    category: 'ceramics',
    description: 'Cylindrical mug with subtle river-stone texture — matte glaze, comfortable hand.',
    shortDescription: 'Matte stoneware mug, 12oz',
    detail: 'Michigan clay body, fired to cone 6 oxidation. The texture is impressed with actual Huron River stones. Matte glaze — soft as a river-worn rock. 12oz. Fits the hand like a morning ritual should.',
    image: '/images/products/ann-arbor/huron-mug.webp',
    alt: 'Cylindrical matte mug with river-stone texture',
    makerId: 'ann-arbor-ceramics',
    priceRange: '$$$',
    tags: ['huron-river', 'matte', 'stone-texture', 'daily-ritual'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'arboretum-bowl',
    name: 'Nichols Arboretum Bowl',
    category: 'ceramics',
    description: 'Wide bowl with peony-petal rim — a nod to the Arb\'s famous peony garden.',
    shortDescription: 'Petal-rimmed serving bowl, 11 inches',
    detail: 'Same Michigan clay, same cone 6 firing. The rim is hand-pinched into gentle petals — 11, for the peony varieties. 11" diameter. Glazed in a soft cream that catches light like petals. For shared salads, family pasta.',
    image: '/images/products/ann-arbor/arboretum-bowl.webp',
    alt: 'Wide bowl with delicate pinched petal rim',
    makerId: 'ann-arbor-ceramics',
    priceRange: '$$$',
    tags: ['arboretum', 'peony', 'petal-rim', 'shared'],
    isHero: false,
    isExclusive: true
  },
  {
    id: 'rye-loaf',
    name: 'Michigan Rye Loaf',
    category: 'baked-goods',
    description: '100% Michigan rye, naturally leavened, 24-hour ferment — dense, tangy, alive.',
    shortDescription: 'Whole rye sourdough, 1.5lb',
    detail: 'Rye grown by a cooperative in the Thumb. 100% whole grain, wild yeast, 24-hour cold ferment. No commercial yeast, no wheat. 1.5lb. Dense, moist, tangy, keeps for weeks. The bread of the Upper Midwest.',
    image: '/images/products/ann-arbor/rye-loaf.webp',
    alt: 'Dark rye loaf with crackled crust',
    makerId: 'mitten-bakery',
    priceRange: '$$',
    tags: ['rye', '100-percent', 'naturally-leavened', 'michigan-grain'],
    isHero: true,
    isExclusive: false
  },
  {
    id: 'cherry-scones',
    name: 'Traverse City Cherry Scones',
    category: 'baked-goods',
    description: 'Tart Michigan cherries, cream, butter — the taste of the cherry capital.',
    shortDescription: 'Cherry scones, box of 6',
    detail: 'Montmorency tart cherries from the Traverse City region. Folded into buttermilk scone dough with a touch of almond. Box of 6. Sweet, tart, buttery, best warm. The flavor of a Michigan summer.',
    image: '/images/products/ann-arbor/cherry-scones.webp',
    alt: 'Golden scones studded with red cherries',
    makerId: 'mitten-bakery',
    priceRange: '$$',
    tags: ['cherry', 'traverse-city', 'montmorency', 'seasonal'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'honey-graham',
    name: 'Michigan Honey Grahams',
    category: 'baked-goods',
    description: 'Whole wheat, local honey, a whisper of cinnamon — the cracker of childhood made real.',
    shortDescription: 'Honey graham crackers, 8oz box',
    detail: 'Michigan whole wheat, wildflower honey from the Thumb, butter, cinnamon. Rolled thin, baked crisp. 8oz. For s\'mores, cheese plates, or straight from the box. The graham cracker you remember, but better.',
    image: '/images/products/ann-arbor/honey-graham.webp',
    alt: 'Rectangular graham crackers with honey drizzle',
    makerId: 'mitten-bakery',
    priceRange: '$$',
    tags: ['graham', 'honey', 'whole-wheat', 'nostalgic'],
    isHero: false,
    isExclusive: true
  }
];

const highlights: CityHighlight[] = [
  {
    title: 'Community Is the Business Model',
    text: 'Zingerman\'s started as a deli in 1982. Now it\'s a community of businesses — bakery, creamery, coffee, candy, mail order — each independently operated, all connected. Zingerman\'s Coffee roasts for the deli\'s sandwiches, the bakery\'s pastries, the creamery\'s affogato. The makers here don\'t just coexist; they compose each other. This box is a cross-section of that ecosystem.',
    icon: 'Users'
  },
  {
    title: 'The Water Shapes the Clay',
    text: 'The Huron River winds through Ann Arbor — 130 miles from spring to Lake Erie. Ann Arbor Ceramics walks its banks, collects its stones, presses them into clay. The mug\'s texture is the river\'s fingerprint. The bowl\'s rim echoes the peonies that grow in the Arb\'s floodplain. The water doesn\'t just flow through; it forms.',
    icon: 'Waves'
  },
  {
    title: 'Seasons Are Non-Negotiable',
    text: 'Michigan cherry season: two weeks in July. Rye harvest: August. Honey flow: June through September. Mitten Bakery works in that rhythm — no cherries in January, no rye in April. The sourdough ferments slower in winter. The scones wait for the harvest. This box respects the calendar. What\'s in it is what\'s ready.',
    icon: 'Calendar'
  }
];

const story: CityStory = {
  title: 'The Loaf That Feeds the Community',
  content: 'The rye grows in the Thumb — the peninsula of Michigan that reaches into Lake Huron. A cooperative of farmers grows it, mills it, bags it. Mitten Bakery receives it on Tuesday. Wednesday, they mix: whole rye, water, salt, starter. The starter is eight years old, fed daily, carried from a previous bakery, from a previous baker, from a lineage that goes back to the Old Country. Thursday, they shape. Friday, they bake — 480°F, steam, the crust sings. Saturday, the loaf sits on the Kerrytown farmers market table next to Zingerman\'s coffee and the creamery\'s butter. Someone buys it, takes it home, slices it thick, toasts it, butters it. The flavor is: earth, time, fire, lake, community. In a future real box, the baker would tell you about the loaf where the starter was sluggish and they waited an extra hour, and that loaf had a particular soul. Here, the loaf holds that possibility. A reminder that the best bread is the bread that feeds people together.',
  image: '/images/makers/mitten-bakery.webp',
  imageAlt: 'Baker pulling a rye loaf from a deck oven at dawn'
};

const sources: CitySource[] = [
  { name: 'Ann Arbor Convention & Visitors Bureau', url: 'https://www.annarbor.org/', type: 'tourism' },
  { name: 'Ann Arbor Art Center', url: 'https://www.annarborartcenter.org/', type: 'cultural' }
];

const seo: CitySEO = {
  title: 'Ann Arbor Preview Box | Marlowby',
  description: 'Explore the Ann Arbor preview: community coffee, Huron River ceramics, rye bread, cherry scones. An editorial concept — no release date announced.',
  ogImage: '/images/cities/ann-arbor-og.webp'
};

export const annArbor: City = {
  id: 'ann-arbor',
  slug: 'ann-arbor',
  name: 'Ann Arbor',
  state: 'Michigan',
  abbreviation: 'MI',
  region: 'midwest',
  status: 'preview',
  order: 15,
  description: 'Community coffee, river-stone ceramics, Michigan rye, and cherry-region pastries.',
  intro: 'Where the deli anchors the community, the river textures the clay, and seasons dictate the menu. This preview explores the makers of Kerrytown and the Huron.',
  themes: ['food', 'arts', 'craft', 'wellness'],
  tags: ['coffee', 'ceramics', 'river', 'rye', 'cherry', 'sourdough', 'community', 'zingermans', 'michigan'],
  heroImage: '/images/cities/ann-arbor.webp',
  heroImageAlt: 'Ann Arbor Kerrytown district with farmers market and historic buildings',
  heroImageMobile: '/images/cities/ann-arbor-mobile.webp',
  galleryImages: [
    '/images/cities/ann-arbor-gallery-1.webp',
    '/images/cities/ann-arbor-gallery-2.webp',
    '/images/cities/ann-arbor-gallery-3.webp'
  ],
  colorPalette: {
    primary: '#2D5A3D',      // Arb green
    secondary: '#C9A66B',    // Honey gold
    background: '#F0EEE8'    // Historic brick warmth
  },
  tagline: 'Community roast & river clay',
  highlights,
  products,
  makers,
  story,
  sources,
  seo,
  productIds: products.map(p => p.id),
  relatedCityIds: ['madison', 'minneapolis', 'iowa-city'],
  boxConfig: {
    estimatedShipDate: 'Preview — no date announced',
    productCount: 6,
    includesPostcard: true,
    includesStoryInsert: true,
    specialItems: ['community-map', 'seasonal-calendar']
  }
};