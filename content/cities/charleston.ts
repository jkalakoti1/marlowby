import type { City, CityProduct, CityHighlight, CityMaker, CityStory, CitySource, CitySEO } from '../cities-v2';

const makers: CityMaker[] = [
  {
    id: 'holy-city-roasters',
    name: 'Holy City Roasters',
    role: 'Coffee Roaster',
    bio: 'Roastery in a restored 1890s warehouse on the peninsula. They focus on coffees that tell the story of the Atlantic trade routes — Brazil, Colombia, Ethiopia.',
    image: '/images/makers/holy-city.webp',
    website: 'https://example.com/holy-city',
    instagram: '@holycityroasters',
    products: ['peninsula-blend'],
    location: 'Charleston, SC',
    isReal: false
  },
  {
    id: 'lowcountry-ceramics',
    name: 'Lowcountry Ceramics',
    role: 'Ceramicist',
    bio: 'Studio on Johns Island. Clay from the Ashley River. Salt-fired stoneware — the ocean in every piece.',
    image: '/images/makers/lowcountry-ceramics.webp',
    website: 'https://example.com/lowcountry-ceramics',
    instagram: '@lowcountryceramics',
    products: ['salt-fired-mug', 'oyster-plate'],
    location: 'Johns Island, SC',
    isReal: false
  },
  {
    id: 'rice-gold',
    name: 'Rice Gold',
    role: 'Rice Farmer & Miller',
    bio: 'Carolina Gold rice — the grain that built Charleston. Grown on historic fields, stone-milled fresh.',
    image: '/images/makers/rice-gold.webp',
    website: 'https://example.com/rice-gold',
    instagram: '@ricegoldsc',
    products: ['carolina-gold-rice', 'rice-grits'],
    location: 'Lowcountry, SC',
    isReal: false
  }
];

const products: CityProduct[] = [
  {
    id: 'peninsula-blend',
    name: 'Peninsula Blend',
    category: 'coffee',
    description: 'Medium-dark roast — chocolate, molasses, dried cherry. The taste of historic trade.',
    shortDescription: 'Atlantic trade route blend, 12oz',
    detail: 'Brazil, Colombia, Ethiopia — the three corners of the coffee triangle that fed Charleston\'s port. Roasted to Vienna for body and sweetness. 12oz whole bean. A portion supports historic preservation.',
    image: '/images/products/charleston/peninsula-blend.webp',
    alt: 'Coffee bag with historic map of Charleston harbor',
    makerId: 'holy-city-roasters',
    priceRange: '$$',
    tags: ['historic', 'trade-routes', 'medium-dark'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'salt-fired-mug',
    name: 'Salt-Fired Tumbler',
    category: 'ceramics',
    description: 'Stoneware tumbler fired with sea salt — the ocean glazes it for you.',
    shortDescription: 'Salt-fired stoneware tumbler, 14oz',
    detail: 'Ashley River clay, wood-fired to cone 10 with sea salt vapor. The salt creates a natural orange-peel texture and subtle color variation. 14oz. Each piece records the kiln\'s atmosphere. Dishwasher safe.',
    image: '/images/products/charleston/salt-mug.webp',
    alt: 'Stoneware tumbler with orange-peel salt glaze',
    makerId: 'lowcountry-ceramics',
    priceRange: '$$$',
    tags: ['salt-fired', 'wood-fired', 'river-clay', 'ocean'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'oyster-plate',
    name: 'Oyster Plate Set',
    category: 'ceramics',
    description: 'Set of 6 oyster plates with individual wells — Lowcountry tradition.',
    shortDescription: 'Salt-fired oyster plates, set of 6',
    detail: 'Same clay, same salt firing. Six plates with shallow wells for oysters, mignonette, crackers. The salt glaze catches in the wells like tide pools. Packaged in a wooden crate.',
    image: '/images/products/charleston/oyster-plates.webp',
    alt: 'Set of 6 ceramic oyster plates with tide-pool wells',
    makerId: 'lowcountry-ceramics',
    priceRange: '$$$$',
    tags: ['salt-fired', 'oyster', 'set', 'tradition'],
    isHero: false,
    isExclusive: true
  },
  {
    id: 'carolina-gold-rice',
    name: 'Carolina Gold Rice',
    category: 'pantry',
    description: 'The grandfather of American rice — nutty, aromatic, historic.',
    shortDescription: 'Heirloom Carolina Gold rice, 2lb',
    detail: 'Grown on the same fields that produced "Carolina Gold" in the 1700s. Stone-milled to order — retains the germ and bran. Nutty, floral, slightly sticky. 2lb. Cooks in 20 minutes. The taste of Lowcountry history.',
    image: '/images/products/charleston/carolina-gold.webp',
    alt: 'Golden heirloom rice grains in a cloth bag',
    makerId: 'rice-gold',
    priceRange: '$$$',
    tags: ['heirloom', 'stone-milled', 'historic', 'carolina-gold'],
    isHero: true,
    isExclusive: false
  },
  {
    id: 'rice-grits',
    name: 'Stone-Milled Rice Grits',
    category: 'pantry',
    description: 'Creamy grits from Carolina Gold — not corn, rice.',
    shortDescription: 'Rice grits, 1.5lb bag',
    detail: 'Coarse-milled Carolina Gold rice. Cooks like grits but creamier, sweeter, with a floral aroma. 1.5lb. The Lowcountry breakfast staple, reclaimed. Add shrimp, cheese, or just butter.',
    image: '/images/products/charleston/rice-grits.webp',
    alt: 'Cream-colored rice grits in a paper bag',
    makerId: 'rice-gold',
    priceRange: '$$',
    tags: ['rice-grits', 'carolina-gold', 'breakfast', 'lowcountry'],
    isHero: false,
    isExclusive: true
  },
  {
    id: 'benne-wafers',
    name: 'Benne Seed Wafers',
    category: 'baked-goods',
    description: 'Thin, crisp sesame wafers — the taste of Gullah Geechee heritage.',
    shortDescription: 'Benne wafers, tin of 24',
    detail: 'Benni (sesame) brought by enslaved West Africans. Toasted, baked into paper-thin wafers with butter and brown sugar. Tin of 24. The taste of Charleston\'s African roots. Made by a Gullah Geechee baker.',
    image: '/images/products/charleston/benne-wafers.webp',
    alt: 'Thin golden sesame wafers in a decorative tin',
    makerId: 'gullah-bakery',
    priceRange: '$$',
    tags: ['benne', 'sesame', 'gullah-geechee', 'heritage'],
    isHero: true,
    isExclusive: true
  }
];

const highlights: CityHighlight[] = [
  {
    title: 'The Ocean Is in Everything',
    text: 'Charleston is a peninsula between two rivers, opening to the Atlantic. The salt air seasons the clay, the rice, the air itself. Lowcountry Ceramics fires with sea salt. Rice Gold grows where tides once flooded. The coffee arrives on the same trade winds. This box tastes like salt, wind, and tide.',
    icon: 'Waves'
  },
  {
    title: 'Layers of History',
    text: 'Carolina Gold rice built fortunes and enslaved thousands. Benne seeds arrived in the hands of the enslaved. The peninsula\'s warehouses held cotton, rice, coffee, dreams. This box doesn\'t erase that history — it holds it. Each product is a thread. Together, they begin to tell a truer story.',
    icon: 'Layers'
  },
  {
    title: 'Preservation as Practice',
    text: 'Charleston preserved its buildings. Now it preserves its flavors — Carolina Gold rice, benne, oyster roasts, she-crab soup. The makers in this box are preservationists: growing heirloom rice, firing with salt, baking benne. Preservation isn\'t nostalgia. It\'s keeping the living culture alive.',
    icon: 'Archive'
  }
];

const story: CityStory = {
  title: 'The Grain That Built a City',
  content: 'Carolina Gold rice isn\'t just rice. It\'s the reason Charleston exists. In the 1700s, this grain — nutty, golden, demanding — made the Lowcountry the wealthiest place in British North America. It demanded tidal irrigation, which demanded engineering, which demanded enslaved knowledge from West African rice cultures. The enslaved brought the seeds, the skills, the songs. They built the dikes, the trunks, the canals. They grew the gold. After the Civil War, the industry collapsed. The rice almost vanished. In the 1980s, a few seeds were found in a USDA seed bank. A handful of farmers brought it back. Rice Gold mills it fresh on stone — the germ alive, the bran intact. When you cook it, the kitchen fills with a smell that hasn\'t changed in 300 years. In a future real box, the farmer would tell you about the harvest where the combine broke and they had to thresh by hand, like their great-great-grandparents. The rice from that harvest tastes different — more human. Here, the rice holds that possibility. A reminder that the most meaningful flavors are the ones that carry stories.',
  image: '/images/makers/rice-gold.webp',
  imageAlt: 'Farmer standing in a Carolina Gold rice field at harvest'
};

const sources: CitySource[] = [
  { name: 'Explore Charleston', url: 'https://www.explorecharleston.com/', type: 'tourism' },
  { name: 'Charleston Library Society', url: 'https://www.charlestonlibrarysociety.org/', type: 'cultural' }
];

const seo: CitySEO = {
  title: 'Charleston Preview Box | Marlowby',
  description: 'Explore the Charleston preview: salt-fired ceramics, Carolina Gold rice, benne wafers, Atlantic coffee. An editorial concept — no release date announced.',
  ogImage: '/images/cities/charleston-og.webp'
};

export const charleston: City = {
  id: 'charleston',
  slug: 'charleston',
  name: 'Charleston',
  state: 'South Carolina',
  abbreviation: 'SC',
  region: 'south',
  status: 'preview',
  order: 7,
  description: 'Salt-fired ceramics, heirloom rice, benne wafers, and Atlantic trade winds.',
  intro: 'Where the ocean seasons the clay, the rice remembers every hand, and history lives in the flavors. This preview explores the Lowcountry\'s living culture.',
  themes: ['food', 'arts', 'history', 'craft'],
  tags: ['rice', 'ceramics', 'salt-fired', 'benne', 'gullah-geechee', 'coastal', 'historic', 'preservation'],
  heroImage: '/images/cities/charleston.webp',
  heroImageAlt: 'Charleston harbor with historic waterfront and Ravenel Bridge',
  heroImageMobile: '/images/cities/charleston-mobile.webp',
  galleryImages: [
    '/images/cities/charleston-gallery-1.webp',
    '/images/cities/charleston-gallery-2.webp',
    '/images/cities/charleston-gallery-3.webp'
  ],
  colorPalette: {
    primary: '#2C5F6B',      // Deep harbor blue
    secondary: '#D4A574',    // Rice gold
    background: '#F0EEE8'    // Historic plaster
  },
  tagline: 'Salt, rice & memory',
  highlights,
  products,
  makers,
  story,
  sources,
  seo,
  productIds: products.map(p => p.id),
  relatedCityIds: ['savannah', 'new-orleans', 'asheville'],
  boxConfig: {
    estimatedShipDate: 'Preview — no date announced',
    productCount: 6,
    includesPostcard: true,
    includesStoryInsert: true,
    specialItems: ['tide-chart', 'rice-history']
  }
};