import type { City, CityProduct, CityHighlight, CityMaker, CityStory, CitySource, CitySEO } from './cities-v2';

const makers: CityMaker[] = [
  {
    id: 'maple-roast',
    name: 'Maple Roast Coffee',
    role: 'Coffee Roaster',
    bio: 'Roastery in a converted woolen mill on the Winooski River. They roast with maple wood — the only roastery in the world doing it. Sweet, smoky, Vermont.',
    image: '/images/makers/maple-roast.webp',
    website: 'https://example.com/maple-roast',
    instagram: '@mapleroast',
    products: ['maple-wood-blend']
  },
  {
    id: 'champlain-ceramics',
    name: 'Champlain Ceramics',
    role: 'Ceramicist',
    bio: 'Studio in the South End Arts District. Clay from the Champlain Valley. Gas-fired reduction — the lake\'s minerals in every glaze.',
    image: '/images/makers/champlain-ceramics.webp',
    website: 'https://example.com/champlain-ceramics',
    instagram: '@champlainceramics',
    products: ['lake-champlain-mug', 'adirondack-bowl']
  },
  {
    id: 'north-country-pantry',
    name: 'North Country Pantry',
    role: 'Preserves & Syrup Maker',
    bio: 'Family sugarhouse in the Northeast Kingdom. Maple syrup, maple cream, maple sugar — from trees their great-grandfather tapped.',
    image: '/images/makers/north-country.webp',
    website: 'https://example.com/north-country',
    instagram: '@northcountrypantry',
    products: ['maple-syrup', 'maple-cream', 'maple-sugar']
  }
];

const products: CityProduct[] = [
  {
    id: 'maple-wood-blend',
    name: 'Maple Wood Roast Blend',
    category: 'coffee',
    description: 'Roasted over maple wood fire — subtle smoke, natural sweetness, no added flavor.',
    shortDescription: 'Maple wood-fired coffee, 12oz',
    detail: 'The world\'s only maple wood-fired roaster. Vermont maple burns clean and sweet. Brazilian and Colombian beans absorb the smoke gently. Notes of maple, toast, caramel — nothing added. 12oz whole bean.',
    image: '/images/products/burlington/maple-wood.webp',
    alt: 'Coffee bag with maple wood illustration',
    makerId: 'maple-roast',
    priceRange: '$$',
    tags: ['maple-wood', 'wood-fired', 'unique', 'vermont'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'lake-champlain-mug',
    name: 'Lake Champlain Mug',
    category: 'ceramics',
    description: 'Mug glazed with Champlain Valley clay — the color of the lake at noon.',
    shortDescription: 'Reduction-fired lake clay mug, 12oz',
    detail: 'Clay dug from the Champlain Valley — ancient lake bed deposits. Gas reduction to cone 10. The iron and minerals create a glaze that shifts: deep blue where thick, pale aqua where thin. 12oz. Holds the lake.',
    image: '/images/products/burlington/lake-mug.webp',
    alt: 'Ceramic mug with shifting lake-blue glaze',
    makerId: 'champlain-ceramics',
    priceRange: '$$$',
    tags: ['lake-clay', 'reduction', 'champlain-valley', 'minerals'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'adirondack-bowl',
    name: 'Adirondack Serving Bowl',
    category: 'ceramics',
    description: 'Wide bowl with rim like the Adirondack peaks — reduction fired.',
    shortDescription: 'Reduction-fired serving bowl, 13 inches',
    detail: 'Same Champlain Valley clay. The rim is hand-carved to echo the Adirondack skyline across the lake. 13" diameter. The reduction glaze catches in the peaks. For family salads, shared pasta, the gatherings that last.',
    image: '/images/products/burlington/adirondack-bowl.webp',
    alt: 'Wide ceramic bowl with carved mountain rim',
    makerId: 'champlain-ceramics',
    priceRange: '$$$',
    tags: ['lake-clay', 'reduction', 'carved', 'adirondacks'],
    isHero: false,
    isExclusive: true
  },
  {
    id: 'maple-syrup',
    name: 'Single-Origin Maple Syrup',
    category: 'pantry',
    description: 'Amber-rich syrup from one sugarbush — tapped, boiled, bottled by hand.',
    shortDescription: 'Pure maple syrup, 12oz glass',
    detail: 'From a 200-acre sugarbush in the Northeast Kingdom. 40 gallons sap = 1 gallon syrup. Wood-fired evaporator. Graded Amber Rich — the sweet spot for flavor. 12oz glass. The taste of a Vermont March.',
    image: '/images/products/burlington/maple-syrup.webp',
    alt: 'Amber maple syrup in a glass bottle',
    makerId: 'north-country-pantry',
    priceRange: '$$$',
    tags: ['maple', 'single-origin', 'wood-fired', 'vermont'],
    isHero: true,
    isExclusive: false
  },
  {
    id: 'maple-cream',
    name: 'Maple Cream',
    category: 'pantry',
    description: 'Whipped maple — spreadable, luscious, nothing added.',
    shortDescription: 'Pure maple cream, 8oz jar',
    detail: 'Same syrup, whipped to crystallization. No dairy, no stabilizers — just maple transformed. 8oz. Spread on toast, swirl in yogurt, eat by the spoon. The texture of Vermont winter.',
    image: '/images/products/burlington/maple-cream.webp',
    alt: 'Creamy pale maple spread in a jar',
    makerId: 'north-country-pantry',
    priceRange: '$$',
    tags: ['maple', 'whipped', 'no-additives', 'spread'],
    isHero: false,
    isExclusive: true
  },
  {
    id: 'maple-sugar',
    name: 'Granulated Maple Sugar',
    category: 'pantry',
    description: 'Maple syrup boiled past crystallization — granulated, versatile, pure.',
    shortDescription: 'Maple sugar, 6oz jar',
    detail: 'Syrup boiled to 290°F, stirred until it granules. 6oz. Substitute 1:1 for white sugar — adds maple depth to baking, coffee, rubs. The pantry staple the Abenaki taught the settlers.',
    image: '/images/products/burlington/maple-sugar.webp',
    alt: 'Golden granulated maple sugar in a jar',
    makerId: 'north-country-pantry',
    priceRange: '$$',
    tags: ['maple', 'granulated', 'baking', 'substitute'],
    isHero: false,
    isExclusive: true
  }
];

const highlights: CityHighlight[] = [
  {
    title: 'The Lake Is the Maker',
    text: 'Lake Champlain stretches 120 miles between the Adirondacks and the Green Mountains. It moderates the climate, feeds the clay deposits, reflects the light. Champlain Ceramics digs clay from its ancient bed. Maple Roast draws water from its watershed. The lake doesn\'t just border Burlington — it runs through everything made here.',
    icon: 'Waves'
  },
  {
    title: 'Maple Is a Verb',
    text: 'In Vermont, you don\'t just use maple — you maple. You tap in March, boil in April, use all year. Maple Roast fires their roaster with maple wood. North Country Pantry turns sap into syrup, cream, sugar. The flavor isn\'t an accent; it\'s the infrastructure. This box maps the maple: wood, sap, fire, time.',
    icon: 'TreeDeciduous'
  },
  {
    title: 'Scale Is Human',
    text: 'Burlington is 45,000 people. The roastery is a mill. The studio is a storefront. The sugarhouse is a family. Nothing is industrial. The mug is thrown by one pair of hands. The syrup is boiled by one family. The coffee is roasted in 15kg batches. This box is made at the scale of a life, not a factory.',
    icon: 'Users'
  }
];

const story: CityStory = {
  title: 'The Wood That Sweetens the Bean',
  content: 'Maple wood burns at 1,100°F — cooler than gas, hotter than fruit wood. It burns clean, sweet, steady. Maple Roast built their roaster around it: a custom drum where the smoke kisses the beans without choking them. The beans are Brazilian and Colombian — chosen for body, for sweetness, for the ability to carry a whisper of smoke without losing themselves. The roast takes 14 minutes. The first crack smells like a sugarhouse in April. The second crack is the decision: stop here, and the maple sings. Go further, and it shouts. They stop at full city. In a future real box, the roaster would tell you about the batch where the wood was greener and the smoke stronger, and the beans came out tasting like pancakes. Here, the coffee holds that possibility. A reminder that the fuel changes the flavor as much as the bean.',
  image: '/images/makers/maple-roast.webp',
  imageAlt: 'Roaster feeding maple wood into a custom drum roaster'
};

const sources: CitySource[] = [
  { name: 'Visit Burlington', url: 'https://www.visitburlingtonvt.com/', type: 'tourism' },
  { name: 'Vermont Arts Council', url: 'https://www.vermontartscouncil.org/', type: 'cultural' }
];

const seo: CitySEO = {
  title: 'Burlington Preview Box | Marlowby',
  description: 'Explore the Burlington preview: maple wood-fired coffee, Lake Champlain ceramics, pure maple syrup/cream/sugar. An editorial concept — no release date announced.',
  ogImage: '/images/cities/burlington-og.webp'
};

export const burlington: City = {
  id: 'burlington',
  slug: 'burlington',
  name: 'Burlington',
  state: 'Vermont',
  abbreviation: 'VT',
  region: 'northeast',
  status: 'preview',
  order: 11,
  description: 'Maple wood-fired coffee, Lake Champlain clay ceramics, and pure maple in every form.',
  intro: 'Where the lake writes the clay, maple fuels the roast, and scale stays human. This preview explores the makers of the Champlain Valley.',
  themes: ['food', 'arts', 'outdoors', 'craft'],
  tags: ['maple', 'wood-fired', 'lake-champlain', 'ceramics', 'syrup', 'vermont', 'small-batch'],
  heroImage: '/images/cities/burlington.webp',
  heroImageAlt: 'Lake Champlain with Adirondacks rising across the water',
  heroImageMobile: '/images/cities/burlington-mobile.webp',
  galleryImages: [
    '/images/cities/burlington-gallery-1.webp',
    '/images/cities/burlington-gallery-2.webp',
    '/images/cities/burlington-gallery-3.webp'
  ],
  colorPalette: {
    primary: '#4A6B42',      // Maple leaf
    secondary: '#3B7A9E',    // Lake Champlain
    background: '#F0EEE8'    // Mill brick warmth
  },
  tagline: 'Maple fire & lake clay',
  highlights,
  products,
  makers,
  story,
  sources,
  seo,
  productIds: products.map(p => p.id),
  relatedCityIds: ['portland', 'minneapolis', 'iowa-city'],
  boxConfig: {
    estimatedShipDate: 'Preview — no date announced',
    productCount: 6,
    includesPostcard: true,
    includesStoryInsert: true,
    specialItems: ['maple-tapping-guide', 'lake-map']
  }
};