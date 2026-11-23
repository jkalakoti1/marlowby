import type { City, CityProduct, CityHighlight, CityMaker, CityStory, CitySource, CitySEO } from '../cities-v2';

const makers: CityMaker[] = [
  {
    id: 'bridger-roasters',
    name: 'Bridger Roasters',
    role: 'Coffee Roaster',
    bio: 'Roastery in a historic downtown livery stable. They roast for the big sky — clean, bright, fuel for the mountains.',
    image: '/images/makers/bridger-roasters.webp',
    website: 'https://example.com/bridger-roasters',
    instagram: '@bridgerroasters',
    products: ['big-sky-blend'],
    location: 'Bozeman, MT',
    isReal: false
  },
  {
    id: 'gallatin-ceramics',
    name: 'Gallatin Ceramics',
    role: 'Ceramicist',
    bio: 'Studio in a converted grain elevator. Clay from the Gallatin River valley. Gas reduction — the range\'s limestone and shale in the glaze.',
    image: '/images/makers/gallatin-ceramics.webp',
    website: 'https://example.com/gallatin-ceramics',
    instagram: '@gallatinceramics',
    products: ['gallatin-mug', 'bridger-bowl'],
    location: 'Bozeman, MT',
    isReal: false
  },
  {
    id: 'montana-mustard',
    name: 'Montana Mustard Co.',
    role: 'Mustard & Condiment Maker',
    bio: 'Family business since 1989. Mustard from Montana-grown seed, honey from local hives, whiskey from Montana distilleries.',
    image: '/images/makers/montana-mustard.webp',
    website: 'https://example.com/montana-mustard',
    instagram: '@montanamustard',
    products: ['honey-mustard', 'whiskey-mustard', 'horseradish-mustard'],
    location: 'Bozeman, MT',
    isReal: false
  }
];

const products: CityProduct[] = [
  {
    id: 'big-sky-blend',
    name: 'Big Sky Blend',
    category: 'coffee',
    description: 'Medium roast — caramel, toasted nut, expansive finish. The taste of 180-degree horizons.',
    shortDescription: 'Montana medium roast, 12oz',
    detail: 'Brazil, Colombia, Guatemala — roasted for balance and body. Notes of caramel, toasted almond, wildflower honey. 12oz whole bean. Roasted at 4,800 feet. A portion supports public land access.',
    image: '/images/products/bozeman/big-sky.webp',
    alt: 'Coffee bag with Bridger Range and endless sky',
    makerId: 'bridger-roasters',
    priceRange: '$$',
    tags: ['big-sky', 'medium', 'balanced', 'montana', 'public-lands'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'gallatin-mug',
    name: 'Gallatin River Mug',
    category: 'ceramics',
    description: 'Mug from river valley clay — reduction fired, the color of limestone and trout water.',
    shortDescription: 'Reduction-fired river clay mug, 14oz',
    detail: 'Clay from the Gallatin River valley — limestone, shale, ancient seabed. Gas reduction to cone 10. The limestone flashes white, the shale gives iron warmth. 14oz. Holds the river\'s clarity.',
    image: '/images/products/bozeman/gallatin-mug.webp',
    alt: 'Ceramic mug with limestone-white and iron-warm reduction glaze',
    makerId: 'gallatin-ceramics',
    priceRange: '$$$',
    tags: ['gallatin-river', 'limestone', 'shale', 'reduction', 'river-clay'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'bridger-bowl',
    name: 'Bridger Range Bowl',
    category: 'ceramics',
    description: 'Bowl with carved ridgeline — the Bridger\'s knife-edge peaks in clay.',
    shortDescription: 'Reduction-fired ridged bowl, 12 inches',
    detail: 'Same Gallatin clay, same reduction fire. The rim is hand-carved to the Bridger Range silhouette — Sacagawea, Bridger, Hardscrabble. 12" diameter. The glaze breaks on the peaks: white on the summits, warm in the couloirs.',
    image: '/images/products/bozeman/bridger-bowl.webp',
    alt: 'Wide bowl with carved mountain ridgeline',
    makerId: 'gallatin-ceramics',
    priceRange: '$$$',
    tags: ['bridger-range', 'carved', 'reduction', 'ridgeline', 'peaks'],
    isHero: false,
    isExclusive: true
  },
  {
    id: 'honey-mustard',
    name: 'Montana Honey Mustard',
    category: 'condiment',
    description: 'Montana mustard seed, Montana honey — sweet, sharp, balanced.',
    shortDescription: 'Honey mustard, 9oz jar',
    detail: 'Yellow mustard seed grown in the Golden Triangle. Raw honey from Gallatin Valley hives. Apple cider vinegar, salt. 9oz. Sweet, sharp, clean. The mustard for pretzels, sandwiches, glazes, life.',
    image: '/images/products/bozeman/honey-mustard.webp',
    alt: 'Golden honey mustard in a jar with Montana wheat illustration',
    makerId: 'montana-mustard',
    priceRange: '$$',
    tags: ['honey', 'mustard-seed', 'montana-grown', 'balanced'],
    isHero: true,
    isExclusive: false
  },
  {
    id: 'whiskey-mustard',
    name: 'Montana Whiskey Mustard',
    category: 'condiment',
    description: 'Mustard seed, Montana whiskey, honey — complex, warm, grown-up.',
    shortDescription: 'Whiskey mustard, 9oz jar',
    detail: 'Same Montana seed, same local honey. Whiskey from a Bozeman distillery — oat-based, smooth. 9oz. Warm, complex, boozy but not hot. The mustard for charcuterie, cheese, the end of a long day.',
    image: '/images/products/bozeman/whiskey-mustard.webp',
    alt: 'Amber whiskey mustard with distillery illustration',
    makerId: 'montana-mustard',
    priceRange: '$$',
    tags: ['whiskey', 'mustard-seed', 'montana-distillery', 'complex'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'horseradish-mustard',
    name: 'Horseradish Mustard',
    category: 'condiment',
    description: 'Mustard seed, fresh horseradish root — the bite that clears the sinuses.',
    shortDescription: 'Horseradish mustard, 9oz jar',
    detail: 'Montana mustard seed, fresh horseradish root grated by hand. Apple cider vinegar, salt. 9oz. Sharp, clean, nasal-clearing. The mustard for prime rib, sausages, the morning after.',
    image: '/images/products/bozeman/horseradish-mustard.webp',
    alt: 'Pale horseradish mustard with root illustration',
    makerId: 'montana-mustard',
    priceRange: '$$',
    tags: ['horseradish', 'mustard-seed', 'sharp', 'fresh-root'],
    isHero: false,
    isExclusive: true
  }
];

const highlights: CityHighlight[] = [
  {
    title: 'The Sky Is the Ceiling',
    text: 'Bozeman sits in the Gallatin Valley, ringed by the Bridger, Gallatin, Madison, and Spanish Peaks ranges. The sky is 360 degrees, unbroken. Bridger Roasters roasts for that openness — clean, bright, no ceiling. Gallatin Ceramics throws forms that hold the sky\'s light. Montana Mustard grows seed under that sky. This box breathes with the horizon.',
    icon: 'Horizon'
  },
  {
    title: 'The River Is the Source',
    text: 'The Gallatin River begins in Yellowstone, runs through the valley, joins the Missouri. It carries the park\'s minerals, the range\'s limestone, the valley\'s clay. Gallatin Ceramics digs clay from its banks. Bridger Roasters draws water from its aquifer. Montana Mustard irrigates seed with its ditches. The river doesn\'t just water the valley; it makes everything in it.',
    icon: 'Waves'
  },
  {
    title: 'Public Land Is the Backyard',
    text: 'Bozeman is surrounded by national forest, wilderness, Yellowstone. The makers here don\'t just visit; they rely. Bridger Roasters\' portion supports access. Gallatin Ceramics\' clay comes from forest service land. The honey bees forage wilderness edges. This box is made possible by public land — and gives back to it.',
    icon: 'Trees'
  }
];

const story: CityStory = {
  title: 'The Clay That Was Once a Sea',
  content: 'The Gallatin Valley was the shore of the Western Interior Seaway — a vast inland sea that split North America 70 million years ago. The clay Gallatin Ceramics digs is the sea\'s sediment: limestone from ancient shells, shale from deep mud, bentonite from volcanic ash. In the reduction kiln, the limestone flashes white. The iron in the shale warms. The mug that emerges holds the geology: sea to mountain to river to valley to kiln to hand. In a future real box, the ceramicist would tell you about the firing where the reduction caught the limestone just right and the mugs came out glowing like the river at noon. Here, the mug holds that possibility. A reminder that the oldest seas still become the cup you drink from.',
  image: '/images/makers/gallatin-ceramics.webp',
  imageAlt: 'Ceramicist digging Gallatin River clay from ancient seabed'
};

const sources: CitySource[] = [
  { name: 'Bozeman CVB', url: 'https://www.bozemanmt.org/', type: 'tourism' },
  { name: 'Montana Arts Council', url: 'https://art.mt.gov/', type: 'cultural' }
];

const seo: CitySEO = {
  title: 'Bozeman Preview Box | Marlowby',
  description: 'Explore the Bozeman preview: big sky coffee, Gallatin River ceramics, Montana mustards. An editorial concept — no release date announced.',
  ogImage: '/images/cities/bozeman-og.webp'
};

export const bozeman: City = {
  id: 'bozeman',
  slug: 'bozeman',
  name: 'Bozeman',
  state: 'Montana',
  abbreviation: 'MT',
  region: 'mountain',
  status: 'preview',
  order: 18,
  description: 'Big sky coffee, ancient seabed clay ceramics, and Montana-grown mustards.',
  intro: 'Where the mountains ring the valley, the river carries an ancient sea, and public land is the backyard. This preview explores the makers of the Gallatin Gateway.',
  themes: ['food', 'arts', 'outdoors', 'craft'],
  tags: ['coffee', 'ceramics', 'reduction', 'gallatin', 'bridger', 'mustard', 'honey', 'whiskey', 'public-lands', 'yellowstone'],
  heroImage: '/images/cities/bozeman.webp',
  heroImageAlt: 'Bridger Range rising over the Gallatin Valley at alpenglow',
  heroImageMobile: '/images/cities/bozeman-mobile.webp',
  galleryImages: [
    '/images/cities/bozeman-gallery-1.webp',
    '/images/cities/bozeman-gallery-2.webp',
    '/images/cities/bozeman-gallery-3.webp'
  ],
  colorPalette: {
    primary: '#2D4A3E',      // Pine forest
    secondary: '#D4C4A8',    // Limestone
    background: '#F5F0E8'    // Valley warmth
  },
  tagline: 'Ancient sea & big sky',
  highlights,
  products,
  makers,
  story,
  sources,
  seo,
  productIds: products.map(p => p.id),
  relatedCityIds: ['provo', 'boulder', 'flagstaff'],
  boxConfig: {
    estimatedShipDate: 'Preview — no date announced',
    productCount: 6,
    includesPostcard: true,
    includesStoryInsert: true,
    specialItems: ['range-map', 'public-lands-guide']
  }
};