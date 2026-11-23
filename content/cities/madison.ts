import type { City, CityProduct, CityHighlight, CityMaker, CityStory, CitySource, CitySEO } from '../cities-v2';

const makers: CityMaker[] = [
  {
    id: 'cap-square-roasters',
    name: 'Cap Square Roasters',
    role: 'Coffee Roaster',
    bio: 'Roastery on the Capitol Square in a 1880s building. They roast for the Wisconsin rhythm — harsh winters, glorious summers, cheese with everything.',
    image: '/images/makers/cap-square.webp',
    website: 'https://example.com/cap-square',
    instagram: '@capsquareroasters',
    products: ['winter-warmer-blend'],
    location: 'Madison, WI',
    isReal: false
  },
  {
    id: 'driftless-ceramics',
    name: 'Driftless Ceramics',
    role: 'Ceramicist',
    bio: 'Studio in a former dairy barn in the Driftless Area. Clay from the Wisconsin River valley. Wood-fired — the land\'s unglaciated history in the flame.',
    image: '/images/makers/driftless-ceramics.webp',
    website: 'https://example.com/driftless-ceramics',
    instagram: '@driftlessceramics',
    products: ['driftless-mug', 'karst-bowl'],
    location: 'Driftless Area, WI',
    isReal: false
  },
  {
    id: 'cheese-craft',
    name: 'Cheese Craft Collective',
    role: 'Cheesemaker',
    bio: 'Cooperative of three family dairies. Bandaged cheddar aged in a limestone cave, blue from raw milk, alpine-style from pasture.',
    image: '/images/makers/cheese-craft.webp',
    website: 'https://example.com/cheese-craft',
    instagram: '@cheesecraftwi',
    products: ['bandaged-cheddar', 'cave-blue', 'alpine-wheel'],
    location: 'Madison, WI',
    isReal: false
  }
];

const products: CityProduct[] = [
  {
    id: 'winter-warmer-blend',
    name: 'Winter Warmer Blend',
    category: 'coffee',
    description: 'Medium-dark roast — chocolate, spice, maple. Roasted for -20°F mornings.',
    shortDescription: 'Wisconsin winter blend, 12oz',
    detail: 'Sumatra, Guatemala, Ethiopia — roasted to Vienna for body and warmth. Notes of dark chocolate, cinnamon, maple syrup. 12oz whole bean. Designed for the thermos on the ice fishing shanty.',
    image: '/images/products/madison/winter-warmer.webp',
    alt: 'Coffee bag with Capitol dome and snow illustration',
    makerId: 'cap-square-roasters',
    priceRange: '$$',
    tags: ['winter', 'medium-dark', 'maple', 'wisconsin'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'driftless-mug',
    name: 'Driftless Area Mug',
    category: 'ceramics',
    description: 'Mug from unglaciated clay — wood fired, the texture of ancient hills.',
    shortDescription: 'Wood-fired river valley mug, 14oz',
    detail: 'Clay from the Wisconsin River valley — the Driftless Area, where glaciers never reached. Ancient, mineral-rich, iron-heavy. Wood-fired anagama for 4 days. The flame path writes iron-red, ash-white, carbon-black. 14oz. The land before ice.',
    image: '/images/products/madison/driftless-mug.webp',
    alt: 'Rustic mug with wood-fire iron and ash patterning',
    makerId: 'driftless-ceramics',
    priceRange: '$$$',
    tags: ['driftless', 'unglaciated', 'wood-fired', 'anagama', 'ancient'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'karst-bowl',
    name: 'Karst Sinkhole Bowl',
    category: 'ceramics',
    description: 'Bowl with carved sinkhole foot — the Driftless\'s hidden geology.',
    shortDescription: 'Wood-fired bowl with karst foot, 11 inches',
    detail: 'Same Driftless clay, same anagama fire. The foot is carved to echo a sinkhole — the limestone dissolving, the earth opening. 11" diameter. The glaze pools in the cavity like groundwater.',
    image: '/images/products/madison/karst-bowl.webp',
    alt: 'Ceramic bowl with carved sinkhole foot and pooled glaze',
    makerId: 'driftless-ceramics',
    priceRange: '$$$',
    tags: ['driftless', 'karst', 'limestone', 'wood-fired', 'geology'],
    isHero: false,
    isExclusive: true
  },
  {
    id: 'bandaged-cheddar',
    name: 'Bandaged Cheddar (18 Month)',
    category: 'cheese',
    description: 'Cloth-bound, cave-aged — sharp, crystalline, nutty, true.',
    shortDescription: 'Traditional bandaged cheddar, 8oz wedge',
    detail: 'Raw milk from rotationally grazed herds. Cloth-bound, larded, aged 18 months in a limestone cave at 52°F. Crystals of tyrosine crunch. Flavor: broth, nuts, caramel, long finish. 8oz wedge cut from 40lb wheel.',
    image: '/images/products/madison/bandaged-cheddar.webp',
    alt: 'Cloth-bound cheddar wedge with crystalline interior',
    makerId: 'cheese-craft',
    priceRange: '$$$$',
    tags: ['bandaged', 'cave-aged', 'raw-milk', 'cheddar', 'crystals'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'cave-blue',
    name: 'Limestone Cave Blue',
    category: 'cheese',
    description: 'Raw milk blue aged in the same cave — creamy, peppery, mineral.',
    shortDescription: 'Cave-aged blue cheese, 6oz wedge',
    detail: 'Raw milk, penicillium roqueforti, limestone cave. 4 months. The cave\'s native molds join the party. Creamy paste, blue-green veins, peppery finish with mineral undertone. 6oz. The cave tastes in the cheese.',
    image: '/images/products/madison/cave-blue.webp',
    alt: 'Blue cheese wedge with limestone cave aging marks',
    makerId: 'cheese-craft',
    priceRange: '$$$$',
    tags: ['blue', 'raw-milk', 'cave-aged', 'limestone', 'native-molds'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'alpine-wheel',
    name: 'Alpine-Style Wheel (Quarter)',
    category: 'cheese',
    description: 'Swiss-style from Wisconsin pasture — nutty, elastic, melts like a dream.',
    shortDescription: 'Alpine-style cheese, quarter wheel ~5lb',
    detail: 'Raw milk, copper vat, pressed, brined, aged 6+ months on spruce boards. Nutty, fruity, elastic texture. Perfect for fondue, raclette, or thick slices on rye. ~5lb quarter wheel. The Alps in the Driftless.',
    image: '/images/products/madison/alpine-wheel.webp',
    alt: 'Golden alpine cheese wheel quarter on spruce board',
    makerId: 'cheese-craft',
    priceRange: '$$$$',
    tags: ['alpine', 'swiss-style', 'raw-milk', 'spruce-aged', 'fondue'],
    isHero: false,
    isExclusive: true
  }
];

const highlights: CityHighlight[] = [
  {
    title: 'The Glaciers Missed a Spot',
    text: 'The Driftless Area — southwest Wisconsin, northeast Iowa, southeast Minnesota, northwest Illinois — was never flattened by glaciers. The hills are ancient, the valleys deep, the limestone exposed, the springs cold. Driftless Ceramics digs clay from this unglaciated earth. The cheese caves are carved in this limestone. The coffee warms hands that know this terrain. This box is made by the land the ice forgot.',
    icon: 'Mountain'
  },
  {
    title: 'The Cave Is a Partner',
    text: 'Cheese Craft ages in a limestone cave — 52°F, 95% humidity, year-round. The cave doesn\'t just store; it participates. Native molds. Mineral air. Constant breath. The bandaged cheddar breathes through its cloth. The blue invites the cave\'s own penicillium. The alpine develops on spruce boards that have held generations. The cave is the fourth cheesemaker.',
    icon: 'Archive'
  },
  {
    title: 'Winter Is the Fifth Season',
    text: 'Madison winter: -20°F, three feet of snow, lake ice thick enough to drive on. The makers don\'t pause. Cap Square roasts darker. Driftless fires the anagama through the polar vortex. The cheese ages on. Winter clarifies — the flavors that survive are the ones that matter. This box is forged in the cold.',
    icon: 'Snowflake'
  }
];

const story: CityStory = {
  title: 'The Cave That Ages the Cheese',
  content: 'The limestone cave sits in the Driftless hills, carved by water over millions of years. The temperature never varies: 52°F. The humidity never varies: 95%. Cheese Craft\'s three dairies bring their wheels here — bandaged cheddar wrapped in cloth, blue pierced for air, alpine resting on spruce. The cave has its own microbiome: molds, yeasts, bacteria that have lived in the dark since before Wisconsin was a state. They colonize the rinds. They metabolize the proteins. They write flavors no lab can replicate. In a future real box, the affineur would tell you about the year the cave flooded and the blue cheese absorbed the flood\'s mineral signature. The wheels from that year taste different — more stone, less salt. Here, the cheese holds that possibility. A reminder that the oldest caves still have new flavors to teach.',
  image: '/images/makers/cheese-craft.webp',
  imageAlt: 'Affineur turning bandaged cheddar wheels in a limestone cave'
};

const sources: CitySource[] = [
  { name: 'Visit Madison', url: 'https://www.visitmadison.com/', type: 'tourism' },
  { name: 'Driftless Area Initiative', url: 'https://www.driftlesswi.com/', type: 'cultural' }
];

const seo: CitySEO = {
  title: 'Madison Preview Box | Marlowby',
  description: 'Explore the Madison preview: winter coffee, Driftless wood-fired ceramics, cave-aged cheeses. An editorial concept — no release date announced.',
  ogImage: '/images/cities/madison-og.webp'
};

export const madison: City = {
  id: 'madison',
  slug: 'madison',
  name: 'Madison',
  state: 'Wisconsin',
  abbreviation: 'WI',
  region: 'midwest',
  status: 'preview',
  order: 13,
  description: 'Winter coffee, unglaciated clay ceramics, and limestone cave-aged cheeses from the Driftless.',
  intro: 'Where the glaciers missed, the cave ages cheese, and winter forges flavor. This preview explores the makers of the Capitol and the Driftless.',
  themes: ['food', 'arts', 'outdoors', 'craft'],
  tags: ['coffee', 'ceramics', 'wood-fired', 'cheese', 'cave-aged', 'driftless', 'raw-milk', 'limestone', 'winter'],
  heroImage: '/images/cities/madison.webp',
  heroImageAlt: 'Wisconsin Capitol dome over frozen Lake Monona',
  heroImageMobile: '/images/cities/madison-mobile.webp',
  galleryImages: [
    '/images/cities/madison-gallery-1.webp',
    '/images/cities/madison-gallery-2.webp',
    '/images/cities/madison-gallery-3.webp'
  ],
  colorPalette: {
    primary: '#1B4F3A',      // Cave moss
    secondary: '#C9A66B',    // Aged cheddar
    background: '#F0EEE8'    // Limestone warmth
  },
  tagline: 'Unglaciated clay & cave cheese',
  highlights,
  products,
  makers,
  story,
  sources,
  seo,
  productIds: products.map(p => p.id),
  relatedCityIds: ['minneapolis', 'iowa-city', 'burlington'],
  boxConfig: {
    estimatedShipDate: 'Preview — no date announced',
    productCount: 6,
    includesPostcard: true,
    includesStoryInsert: true,
    specialItems: ['driftless-map', 'cave-guide']
  }
};