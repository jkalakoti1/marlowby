import type { City, CityProduct, CityHighlight, CityMaker, CityStory, CitySource, CitySEO } from '../cities-v2';

const makers: CityMaker[] = [
  {
    id: 'blue-ridge-roasters',
    name: 'Blue Ridge Roasters',
    role: 'Coffee Roaster',
    bio: 'Roastery in a former textile mill in the River Arts District. Appalachian heritage meets specialty coffee — they roast to highlight the terroir of the beans and the place.',
    image: '/images/makers/blue-ridge.webp',
    website: 'https://example.com/blue-ridge',
    instagram: '@blueridgeroasters',
    products: ['misty-mountain-blend'],
    location: 'Asheville, NC',
    isReal: false
  },
  {
    id: 'appalachian-ceramics',
    name: 'Appalachian Ceramics',
    role: 'Ceramicist',
    bio: 'Studio in a restored 1920s garage in West Asheville. Wild clay from the French Broad River valley. Wood-fired kiln built by hand.',
    image: '/images/makers/appalachian-ceramics.webp',
    website: 'https://example.com/appalachian-ceramics',
    instagram: '@appalachianceramics',
    products: ['river-clay-mug', 'ridge-bowl'],
    location: 'Asheville, NC',
    isReal: false
  },
  {
    id: 'wild-forage',
    name: 'Wild Forage',
    role: 'Forager & Preserver',
    bio: 'Ethically foraged Appalachian plants — ramps, morels, persimmons, spicebush. Small-batch preserves and dried goods.',
    image: '/images/makers/wild-forage.webp',
    website: 'https://example.com/wild-forage',
    instagram: '@wildforageavl',
    products: ['ramp-jam', 'persimmon-leather'],
    location: 'Asheville, NC',
    isReal: false
  }
];

const products: CityProduct[] = [
  {
    id: 'misty-mountain-blend',
    name: 'Misty Mountain Blend',
    category: 'coffee',
    description: 'Medium roast with notes of brown sugar, red apple, and a whisper of smoke.',
    shortDescription: 'Appalachian heritage blend, 12oz',
    detail: 'Blend of Brazilian, Colombian, and Guatemalan coffees. Roasted in a restored 1950s Probat. The "whisper of smoke" comes from the wood-fired roaster — a nod to Appalachian traditions. 12oz whole bean.',
    image: '/images/products/asheville/misty-mountain.webp',
    alt: 'Coffee bag with Blue Ridge Mountains silhouette',
    makerId: 'blue-ridge-roasters',
    priceRange: '$$',
    tags: ['wood-roasted', 'appalachian', 'medium'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'river-clay-mug',
    name: 'French Broad River Mug',
    category: 'ceramics',
    description: 'Mug made from wild clay dug from the French Broad River banks.',
    shortDescription: 'Wild clay mug, wood-fired',
    detail: 'Clay harvested by hand from the French Broad River valley. No commercial additives. Fired in a hand-built anagama kiln for 5 days. The flame path creates natural ash glazes — each mug a record of the fire. Holds 12oz.',
    image: '/images/products/asheville/river-clay-mug.webp',
    alt: 'Rustic mug with natural ash glaze variations',
    makerId: 'appalachian-ceramics',
    priceRange: '$$$',
    tags: ['wild-clay', 'wood-fired', 'anagama', 'local'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'ridge-bowl',
    name: 'Blue Ridge Serving Bowl',
    category: 'ceramics',
    description: 'Large bowl with ridged rim — echoes the mountain skyline.',
    shortDescription: 'Ridged serving bowl, wood-fired',
    detail: 'Same wild clay, same anagama firing. The ridged rim is carved by hand while the clay is leather-hard. 14" diameter, 4" deep. Perfect for family-style serving. Each ridge catches the glaze differently.',
    image: '/images/products/asheville/ridge-bowl.webp',
    alt: 'Large ceramic bowl with carved ridged rim',
    makerId: 'appalachian-ceramics',
    priceRange: '$$$',
    tags: ['wild-clay', 'wood-fired', 'carved', 'serving'],
    isHero: false,
    isExclusive: true
  },
  {
    id: 'ramp-jam',
    name: 'Wild Ramp Jam',
    category: 'pantry',
    description: 'Appalachian spring onions — foraged, fermented, preserved.',
    shortDescription: 'Fermented ramp jam, 6oz jar',
    detail: 'Ramps (wild leeks) foraged sustainably from private land in WNC. Lacto-fermented for 3 weeks, then blended with local honey and apple cider vinegar. 6oz. Complex, funky, sweet, garlicky. Limited seasonal.',
    image: '/images/products/asheville/ramp-jam.webp',
    alt: 'Pale green jam in a small jar',
    makerId: 'wild-forage',
    priceRange: '$$$',
    tags: ['foraged', 'fermented', 'seasonal', 'ramps'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'persimmon-leather',
    name: 'Persimmon Fruit Leather',
    category: 'snack',
    description: 'Wild persimmons, slow-dried into sheets — no sugar added.',
    shortDescription: '100% wild persimmon leather, 4 sheets',
    detail: 'American persimmons foraged after first frost (when sweet). Pulp pressed, spread thin, dried 18 hours at 135°F. No sugar, no preservatives. 4 sheets, 3x8 inches each. Chewy, complex, honey-like.',
    image: '/images/products/asheville/persimmon-leather.webp',
    alt: 'Amber fruit leather sheets on parchment',
    makerId: 'wild-forage',
    priceRange: '$$',
    tags: ['foraged', 'no-sugar', 'persimmon', 'wild'],
    isHero: false,
    isExclusive: true
  },
  {
    id: 'spicebush-bitters',
    name: 'Spicebush Aromatic Bitters',
    category: 'condiment',
    description: 'Native spicebush berries — "Appalachian allspice" — tinctured in bourbon.',
    shortDescription: 'Spicebush bitters, 4oz dropper bottle',
    detail: 'Lindera benzoin berries foraged in autumn. Tinctured 6 weeks in Kentucky bourbon with gentian root and orange peel. 4oz. A few drops in whiskey, sparkling water, or marinades. Tastes like: allspice, citrus, pine, forest floor.',
    image: '/images/products/asheville/spicebush-bitters.webp',
    alt: 'Amber bitters in a dropper bottle with foraged label',
    makerId: 'wild-forage',
    priceRange: '$$',
    tags: ['foraged', 'native-plant', 'bourbon', 'bitters'],
    isHero: true,
    isExclusive: true
  }
];

const highlights: CityHighlight[] = [
  {
    title: 'The Mountains Are the Makers',
    text: 'Asheville sits in a bowl of ancient mountains — the Blue Ridge, the Smokies, the Black Mountains. The elevation changes every few miles. The clay, the water, the plants, the air — all shaped by the Appalachians. The makers here don\'t just live in the mountains; their materials come from them. Wild clay from the river. Ramps from the coves. Persimmons from the ridges.',
    icon: 'Mountain'
  },
  {
    title: 'Tradition as Innovation',
    text: 'Appalachian craft has always been adaptive — using what\'s at hand, passing knowledge down, evolving with the land. Anagama kilns are Japanese, but the wild clay is local. Fermentation is ancient, but ramp jam is new. The makers here honor tradition by keeping it alive — which means changing it. The box captures that tension: old ways, new expressions.',
    icon: 'Flame'
  },
  {
    title: 'A Creative Ecology',
    text: 'The River Arts District, West Asheville, the South Slope — former industrial zones reborn as maker ecosystems. Ceramicists share kilns. Foragers trade spots. Roasters share green coffee. It\'s not a scene; it\'s a system. This box is a cross-section of that ecology: clay from the river, coffee from the roaster next door, ramps from the forager who trades with both.',
    icon: 'Users'
  }
];

const story: CityStory = {
  title: 'The River Gives, the Fire Takes',
  content: 'The French Broad River is one of the oldest rivers in the world — older than the mountains it cuts through. It carries clay from the ancient Appalachians, deposits it on the banks. Appalachian Ceramics digs it by hand: gray, plastic, full of mica and iron. They don\'t refine it. They throw it, carve it, load it into an anagama kiln they built brick by brick. For five days, they feed the fire — pine, oak, slab wood. The flame moves through the chamber, carrying ash, melting it into glaze. Where the flame kisses the pot, the clay vitrifies. Where ash settles, it becomes glass. The mug that emerges has a landscape on its surface: the river\'s clay, the mountain\'s wood, the fire\'s path. In a future real box, the ceramicist would tell you about the firing where a log shifted on day three and changed everything. The mugs from that firing have a particular shadow. Here, the mug holds that story in potentia. A reminder that the oldest rivers still have new things to give.',
  image: '/images/makers/appalachian-ceramics.webp',
  imageAlt: 'Ceramicist stoking an anagama kiln in the Blue Ridge Mountains'
};

const sources: CitySource[] = [
  { name: 'Explore Asheville', url: 'https://www.exploreasheville.com/', type: 'tourism' },
  { name: 'Asheville Creative Arts', url: 'https://www.ashevillecreativearts.org/', type: 'cultural' }
];

const seo: CitySEO = {
  title: 'Asheville Preview Box | Marlowby',
  description: 'Explore the Asheville preview: wild clay ceramics, wood-roasted coffee, foraged ramps, persimmon leather. An editorial concept — no release date announced.',
  ogImage: '/images/cities/asheville-og.webp'
};

export const asheville: City = {
  id: 'asheville',
  slug: 'asheville',
  name: 'Asheville',
  state: 'North Carolina',
  abbreviation: 'NC',
  region: 'south',
  status: 'preview',
  order: 5,
  description: 'Wild clay ceramics, wood-roasted coffee, foraged Appalachian flavors, and mountain creativity.',
  intro: 'Ancient mountains, wild clay, and a creative ecology where tradition evolves. This preview explores the makers and materials of the Blue Ridge.',
  themes: ['food', 'arts', 'outdoors', 'craft'],
  tags: ['ceramics', 'wood-fired', 'foraged', 'mountains', 'river', 'appalachian', 'wild-clay'],
  heroImage: '/images/cities/asheville.webp',
  heroImageAlt: 'Blue Ridge Mountains with morning mist over Asheville',
  heroImageMobile: '/images/cities/asheville-mobile.webp',
  galleryImages: [
    '/images/cities/asheville-gallery-1.webp',
    '/images/cities/asheville-gallery-2.webp',
    '/images/cities/asheville-gallery-3.webp'
  ],
  colorPalette: {
    primary: '#5D4E37',      // Mountain earth
    secondary: '#8F9B7A',    // Misty sage
    background: '#F0EEE8'    // Stone warmth
  },
  tagline: 'Wild clay & mountain craft',
  highlights,
  products,
  makers,
  story,
  sources,
  seo,
  productIds: products.map(p => p.id),
  relatedCityIds: ['charleston', 'santa-fe', 'denver'],
  boxConfig: {
    estimatedShipDate: 'Preview — no date announced',
    productCount: 6,
    includesPostcard: true,
    includesStoryInsert: true,
    specialItems: ['foraging-map', 'kiln-log']
  }
};