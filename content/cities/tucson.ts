import type { City, CityProduct, CityHighlight, CityMaker, CityStory, CitySource, CitySEO } from './cities-v2';

const makers: CityMaker[] = [
  {
    id: 'sonoran-roasters',
    name: 'Sonoran Roasters',
    role: 'Coffee Roaster',
    bio: 'Roastery in a mid-century adobe in Barrio Viejo. They roast for the desert — light, bright, highlighting the fruit that survives the heat.',
    image: '/images/makers/sonoran-roasters.webp',
    website: 'https://example.com/sonoran-roasters',
    instagram: '@sonoranroasters',
    products: ['saguaro-blossom-blend']
  },
  {
    id: 'desert-clay',
    name: 'Desert Clay Studio',
    role: 'Ceramicist',
    bio: 'Studio at the base of Sentinel Peak. Clay from the Santa Cruz River bed. Pit-fired with mesquite and palo verde.',
    image: '/images/makers/desert-clay.webp',
    website: 'https://example.com/desert-clay',
    instagram: '@desertclaystudio',
    products: ['river-bed-mug', 'saguaro-vase']
  },
  {
    id: 'chile-company',
    name: 'Tucson Chile Company',
    role: 'Chile Farmer & Preserver',
    bio: 'Fourth-generation chile farmers in the Santa Cruz Valley. Chimayó, Anaheim, and the native chiltepin — the mother of all chiles.',
    image: '/images/makers/chile-company.webp',
    website: 'https://example.com/tucson-chile',
    instagram: '@tucsonchileco',
    products: ['chiltepin-salt', 'ancho-powder', 'green-chile-sauce']
  }
];

const products: CityProduct[] = [
  {
    id: 'saguaro-blossom-blend',
    name: 'Saguaro Blossom Blend',
    category: 'coffee',
    description: 'Light roast — citrus, jasmine, honey. The taste of desert bloom.',
    shortDescription: 'Desert light roast, 12oz',
    detail: 'Ethiopian Yirgacheffe and Mexican Chiapas. Roasted light to preserve the floral notes that the desert sun amplifies. Notes of orange blossom, bergamot, raw honey. 12oz whole bean. A portion supports saguaro conservation.',
    image: '/images/products/tucson/saguaro-blossom.webp',
    alt: 'Coffee bag with saguaro blossom illustration',
    makerId: 'sonoran-roasters',
    priceRange: '$$',
    tags: ['light-roast', 'floral', 'desert', 'saguaro'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'river-bed-mug',
    name: 'Santa Cruz River Bed Mug',
    category: 'ceramics',
    description: 'Mug from river clay — pit fired with mesquite, the color of desert varnish.',
    shortDescription: 'Pit-fired river clay mug, 12oz',
    detail: 'Clay harvested from the Santa Cruz River bed — dry most of the year, alive in monsoon. Pit fired with mesquite and palo verde for 12 hours. The flame paints each mug differently: iron red, carbon black, ash white. 12oz. No two alike.',
    image: '/images/products/tucson/river-bed-mug.webp',
    alt: 'Rustic mug with desert varnish colors from pit firing',
    makerId: 'desert-clay',
    priceRange: '$$$',
    tags: ['river-clay', 'pit-fired', 'mesquite', 'desert-varnish'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'saguaro-vase',
    name: 'Saguaro Rib Vase',
    category: 'ceramics',
    description: 'Tall vase with vertical ribs — echoes the saguaro\'s pleats.',
    shortDescription: 'Pit-fired ribbed vase, 14 inches',
    detail: 'Same river clay, same pit fire. The ribs are thrown, then carved deeper while leather-hard. 14" tall. For ocotillo stems, dried desert flowers, or empty — the form is the statement. The fire writes the surface.',
    image: '/images/products/tucson/saguaro-vase.webp',
    alt: 'Tall ribbed ceramic vase with pit-fire patterning',
    makerId: 'desert-clay',
    priceRange: '$$$',
    tags: ['river-clay', 'pit-fired', 'saguaro', 'ribbed'],
    isHero: false,
    isExclusive: true
  },
  {
    id: 'chiltepin-salt',
    name: 'Chiltepin Sea Salt',
    category: 'spice',
    description: 'The mother of all chiles — tiny, fierce, Sonoran native — blended with Gulf salt.',
    shortDescription: 'Chiltepin salt, 3oz jar',
    detail: 'Chiltepin (Capsicum annuum var. glabriusculum) — the wild chile native to the Sonoran Desert. 50,000-100,000 Scoville, but the heat flashes fast. Blended with Gulf of California sea salt. 3oz. A pinch wakes everything: fruit, chocolate, eggs, margaritas.',
    image: '/images/products/tucson/chiltepin-salt.webp',
    alt: 'Red-flecked salt in a small jar',
    makerId: 'chile-company',
    priceRange: '$$',
    tags: ['chiltepin', 'wild-chile', 'native', 'sea-salt', 'sonoran'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'ancho-powder',
    name: 'Ancho Chile Powder',
    category: 'spice',
    description: 'Dried poblano — sweet, raisiny, mild heat. The backbone of mole.',
    shortDescription: 'Ancho powder, 3oz jar',
    detail: 'Anaheim chiles grown in the Santa Cruz Valley. Sun-dried on adobe roofs. Stone-ground. 3oz. Deep red, sweet as dried fruit, gentle warmth. Essential for red enchilada sauce, mole, rubs.',
    image: '/images/products/tucson/ancho-powder.webp',
    alt: 'Deep red chile powder in a ceramic jar',
    makerId: 'chile-company',
    priceRange: '$$',
    tags: ['ancho', 'poblano', 'sun-dried', 'stone-ground', 'mole'],
    isHero: false,
    isExclusive: true
  },
  {
    id: 'green-chile-sauce',
    name: 'Fire-Roasted Green Chile Sauce',
    category: 'condiment',
    description: 'Hatch-type green chile, fire-roasted, peeled, simmered with garlic and onion.',
    shortDescription: 'Green chile sauce, 16oz jar',
    detail: 'New Mexico chiles grown in Arizona soil. Roasted over mesquite, hand-peeled. Simmered with garlic, onion, oregano, tomato. 16oz. The sauce for burritos, eggs, enchiladas, everything. Medium heat.',
    image: '/images/products/tucson/green-chile.webp',
    alt: 'Vibrant green chile sauce in a jar',
    makerId: 'chile-company',
    priceRange: '$$',
    tags: ['green-chile', 'fire-roasted', 'mesquite', 'versatile'],
    isHero: true,
    isExclusive: false
  }
];

const highlights: CityHighlight[] = [
  {
    title: 'The Desert Is Specific',
    text: 'The Sonoran Desert is the wettest desert in the world — two rainy seasons, 300+ sunny days, saguaros only here. The makers work with that specificity: chiltepin that grows nowhere else, clay from a river that runs underground, coffee roasted for air that\'s 10% humidity. This box doesn\'t do "Southwest" — it does Tucson.',
    icon: 'Cactus'
  },
  {
    title: 'Fire Is the Glaze',
    text: 'Desert Clay doesn\'t use glazes. They use fire — mesquite, palo verde, the wind in the pit. The flame carries minerals, deposits carbon, melts ash. The mug that emerges has a surface written by the desert\'s own trees. In a gas kiln, you control. In a pit, you collaborate. This box is the result of that collaboration.',
    icon: 'Flame'
  },
  {
    title: 'Chile Is a Lineage',
    text: 'The chiltepin is the wild ancestor. The Anaheim was bred from it. The Chimayó was carried north by Spanish settlers. Tucson Chile Company grows all three — the wild, the bred, the carried. Each powder tells a migration story. This box holds the lineage: mother, daughter, traveler.',
    icon: 'Branch'
  }
];

const story: CityStory = {
  title: 'The Chile That Remembers the Desert',
  content: 'The chiltepin (chil-tuh-peen) is a bird pepper — tiny, round, bright red. Birds eat them, distribute them. They don\'t feel the heat. Humans do: 100,000 Scoville that hits like lightning and vanishes like mirage. It\'s the only chile native to the Sonoran Desert. Tucson Chile Company wild-harvests it in the Baboquivari Mountains, where the Tohono O\'odham have gathered it for millennia. They dry it in the sun, blend it with Gulf salt. In a future real box, the farmer would tell you about the harvest where the monsoon came early and the chiles swelled with water, diluting the fire. The salt from that year tastes different — more mineral, less heat. Here, the salt holds that possibility. A reminder that the wildest flavors are the ones that refuse to be tamed.',
  image: '/images/makers/chile-company.webp',
  imageAlt: 'Farmer harvesting wild chiltepin in the Baboquivari Mountains'
};

const sources: CitySource[] = [
  { name: 'Visit Tucson', url: 'https://www.visittucson.org/', type: 'tourism' },
  { name: 'Arizona State Museum', url: 'https://www.statemuseum.arizona.edu/', type: 'cultural' }
];

const seo: CitySEO = {
  title: 'Tucson Preview Box | Marlowby',
  description: 'Explore the Tucson preview: desert light roast, pit-fired river clay, wild chiltepin, fire-roasted green chile. An editorial concept — no release date announced.',
  ogImage: '/images/cities/tucson-og.webp'
};

export const tucson: City = {
  id: 'tucson',
  slug: 'tucson',
  name: 'Tucson',
  state: 'Arizona',
  abbreviation: 'AZ',
  region: 'southwest',
  status: 'preview',
  order: 12,
  description: 'Desert light roast coffee, pit-fired river clay ceramics, wild chiltepin, and Sonoran chile lineage.',
  intro: 'Where the saguaro defines the skyline, the river runs underground, and chile is a wild ancestor. This preview explores the makers of the Sonoran Desert.',
  themes: ['food', 'arts', 'outdoors', 'craft'],
  tags: ['coffee', 'ceramics', 'pit-fired', 'river-clay', 'chiltepin', 'chile', 'sonoran', 'desert', 'wild-harvest'],
  heroImage: '/images/cities/tucson.webp',
  heroImageAlt: 'Saguaro cactus forest at sunset in Saguaro National Park',
  heroImageMobile: '/images/cities/tucson-mobile.webp',
  galleryImages: [
    '/images/cities/tucson-gallery-1.webp',
    '/images/cities/tucson-gallery-2.webp',
    '/images/cities/tucson-gallery-3.webp'
  ],
  colorPalette: {
    primary: '#C45A2A',      // Terracotta
    secondary: '#E8C56D',    // Desert gold
    background: '#FDF6ED'    // Adobe white
  },
  tagline: 'Wild chile & pit fire',
  highlights,
  products,
  makers,
  story,
  sources,
  seo,
  productIds: products.map(p => p.id),
  relatedCityIds: ['santa-fe', 'denver', 'asheville'],
  boxConfig: {
    estimatedShipDate: 'Preview — no date announced',
    productCount: 6,
    includesPostcard: true,
    includesStoryInsert: true,
    specialItems: ['chile-lineage-chart', 'pit-fire-log']
  }
};