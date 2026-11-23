import type { City, CityProduct, CityHighlight, CityMaker, CityStory, CitySource, CitySEO } from '../cities-v2';

const makers: CityMaker[] = [
  {
    id: 'flatirons-coffee',
    name: 'Flatirons Coffee',
    role: 'Coffee Roaster',
    bio: 'Roastery at 5,430 feet in a converted garage. High-altitude, solar-assisted roasting. Clean, bright, mountain-focused.',
    image: '/images/makers/flatirons.webp',
    website: 'https://example.com/flatirons',
    instagram: '@flatironscoffee',
    products: ['chautauqua-blend'],
    location: 'Boulder, CO',
    isReal: false
  },
  {
    id: 'rocky-mtn-ceramics',
    name: 'Rocky Mountain Ceramics',
    role: 'Ceramicist',
    bio: 'Studio in a historic dairy barn. Local clay, reduction firing. Forms inspired by the Flatirons\' geometry and alpine meadows.',
    image: '/images/makers/rocky-mtn-ceramics.webp',
    website: 'https://example.com/rocky-mtn-ceramics',
    instagram: '@rockymtnceramics',
    products: ['flatiron-mug', 'alpine-meadow-bowl'],
    location: 'Boulder, CO',
    isReal: false
  },
  {
    id: 'peak-apothecary',
    name: 'Peak Apothecary',
    role: 'Herbalist',
    bio: 'High-altitude herbs — osha, yarrow, arnica, rosehip. Wildcrafted above 8,000 feet. Small-batch teas and salves.',
    image: '/images/makers/peak-apothecary.webp',
    website: 'https://example.com/peak-apothecary',
    instagram: '@peakapothecary',
    products: ['alpine-tea', 'arnica-salve'],
    location: 'Boulder, CO',
    isReal: false
  }
];

const products: CityProduct[] = [
  {
    id: 'chautauqua-blend',
    name: 'Chautauqua Blend',
    category: 'coffee',
    description: 'High-altitude solar roast — citrus, honey, clean alpine finish.',
    shortDescription: 'Solar-assisted high-altitude roast, 12oz',
    detail: 'Roasted at 5,430 feet using a solar concentrator. Lower boiling point = brighter acids preserved. Ethiopian, Colombian, Mexican. 12oz whole bean. A portion supports Chautauqua Park preservation.',
    image: '/images/products/boulder/chautauqua.webp',
    alt: 'Coffee bag with Flatirons silhouette and solar diagram',
    makerId: 'flatirons-coffee',
    priceRange: '$$',
    tags: ['solar', 'high-altitude', 'chautauqua', 'bright'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'flatiron-mug',
    name: 'Flatiron Mug',
    category: 'ceramics',
    description: 'Angular mug echoing the Flatirons\' tilted slabs — reduction fired.',
    shortDescription: 'Geometric reduction-fired mug, 12oz',
    detail: 'Colorado clay, cone 10 reduction. The form mirrors the Flatirons\' 55-degree tilt. Shino glaze — white where thick, rust where thin. 12oz. The geometry fits the hand like the rocks fit the sky.',
    image: '/images/products/boulder/flatiron-mug.webp',
    alt: 'Angular ceramic mug with shino glaze variation',
    makerId: 'rocky-mtn-ceramics',
    priceRange: '$$$',
    tags: ['reduction', 'shino', 'flatirons', 'geometric'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'alpine-meadow-bowl',
    name: 'Alpine Meadow Bowl',
    category: 'ceramics',
    description: 'Wide bowl with celadon glaze — the color of July wildflowers at 10,000 feet.',
    shortDescription: 'Celadon-glazed meadow bowl, 12 inches',
    detail: 'Porcelain, reduction fired to cone 10. Celadon glaze — iron in reduction creates the jade-green. Wide, shallow — for summer salads or ramen. 12" diameter. The color lives in the mountains.',
    image: '/images/products/boulder/meadow-bowl.webp',
    alt: 'Wide porcelain bowl with jade-green celadon glaze',
    makerId: 'rocky-mtn-ceramics',
    priceRange: '$$$',
    tags: ['porcelain', 'celadon', 'reduction', 'alpine'],
    isHero: false,
    isExclusive: true
  },
  {
    id: 'alpine-tea',
    name: 'High Alpine Herbal Tea',
    category: 'tea',
    description: 'Osha root, yarrow, rosehip, mint — wildcrafted above treeline.',
    shortDescription: 'Alpine herb blend, 1.5oz tin',
    detail: 'Hand-harvested above 8,000 feet in the Indian Peaks Wilderness. Osha (bear root) for lungs, yarrow for circulation, rosehip for vitamin C, mint for digestion. 1.5oz loose leaf. Brew strong. Tastes like: pine, earth, sunshine, thin air.',
    image: '/images/products/boulder/alpine-tea.webp',
    alt: 'Loose herbal tea in a tin with alpine illustration',
    makerId: 'peak-apothecary',
    priceRange: '$$',
    tags: ['wildcrafted', 'alpine', 'medicinal', 'high-altitude'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'arnica-salve',
    name: 'Arnica Mountain Salve',
    category: 'skincare',
    description: 'Arnica montana infused in olive oil, beeswax — for sore mountain muscles.',
    shortDescription: 'Arnica salve, 2oz tin',
    detail: 'Arnica wildcrafted at 9,000+ feet. Slow-infused 6 weeks in organic olive oil. Beeswax from local hives. 2oz. For bruises, strains, altitude aches. The mountain\'s first aid.',
    image: '/images/products/boulder/arnica.webp',
    alt: 'Golden salve in a small tin with mountain label',
    makerId: 'peak-apothecary',
    priceRange: '$$',
    tags: ['arnica', 'wildcrafted', 'topical', 'mountain-first-aid'],
    isHero: false,
    isExclusive: true
  },
  {
    id: 'granola',
    name: 'Trailhead Granola',
    category: 'snack',
    description: 'Oats, Colorado nuts, honey, dried berries — fuel for the approach.',
    shortDescription: 'Small-batch granola, 12oz bag',
    detail: 'Gluten-free oats, Piñon nuts, pumpkin seeds, Colorado honey, dried Palisade peaches, Saskatoon berries. Baked in small batches. 12oz. The breakfast of Boulder — whether you\'re climbing or coding.',
    image: '/images/products/boulder/granola.webp',
    alt: 'Golden granola clusters with visible nuts and fruit',
    makerId: 'boulder-bakery',
    priceRange: '$$',
    tags: ['granola', 'trail-food', 'colorado-honey', 'gluten-free'],
    isHero: true,
    isExclusive: false
  }
];

const highlights: CityHighlight[] = [
  {
    title: 'Altitude as Ingredient',
    text: 'Boulder sits at 5,430 feet against the Flatirons — the iconic tilted sandstone slabs. The altitude changes everything: water boils at 201°F, coffee roasts faster, UV is 30% stronger, the growing season is short and intense. The makers here don\'t just tolerate altitude; they design for it. Solar roasting. High-altitude herbs. Ceramics fired thin for quick cooling. The mountain is in every product.',
    icon: 'Mountain'
  },
  {
    title: 'Where Science Meets Wild',
    text: 'Boulder is a paradox: a national lab town, a climbing mecca, a farming community. NIST, NOAA, CU Boulder sit against the foothills. The makers bridge both worlds — Flatirons Coffee uses solar concentrators (engineering) for beans (agriculture). Peak Apothecary uses phytochemistry (science) for wildcrafted herbs (tradition). Rocky Mountain Ceramics uses materials science (reduction firing) for local clay (place). This box holds that bridge.',
    icon: 'FlaskConical'
  },
  {
    title: 'The Flatirons Are a Clock',
    text: 'The Flatirons catch the light differently every hour — pink at dawn, gold at noon, purple at dusk, black at night. Boulder people orient by them. The mug\'s shino glaze does the same: white where the glaze pools, rust where it breaks. The bowl\'s celadon shifts jade to grey. The products don\'t just sit on a shelf; they tell time by the mountain\'s light.',
    icon: 'Sun'
  }
];

const story: CityStory = {
  title: 'The Rocks That Tilt',
  content: 'The Flatirons aren\'t mountains — they\'re the upturned edges of the Fountain Formation, sandstone laid down 290 million years ago, tilted vertical by the uplift of the Rockies 70 million years ago. They\'re the earth\'s spine, exposed. Rocky Mountain Ceramics\' Flatiron Mug takes that geometry: 55 degrees, the same tilt. The shino glaze is a traditional Japanese glaze — but here, fired in Colorado reduction, it does something new. The iron in the clay reduces, migrates, crystallizes. Where the glaze is thick: white as snow on the summits. Where thin: rust as the rock\'s iron heart. The mug doesn\'t depict the Flatirons. It *is* the Flatirons — the same materials, the same forces, the same tilt. In a future real box, the ceramicist would tell you about the firing where the kiln stalled and they fed it aspen all night. The mugs from that firing have a particular warmth. Here, the mug holds that possibility. A reminder that the oldest rocks can still teach us new forms.',
  image: '/images/makers/rocky-mtn-ceramics.webp',
  imageAlt: 'Ceramicist removing a Flatiron Mug from a reduction kiln'
};

const sources: CitySource[] = [
  { name: 'Visit Boulder', url: 'https://www.visitboulder.com/', type: 'tourism' },
  { name: 'Boulder Arts Commission', url: 'https://bouldercolorado.gov/arts-culture', type: 'cultural' }
];

const seo: CitySEO = {
  title: 'Boulder Preview Box | Marlowby',
  description: 'Explore the Boulder preview: solar coffee, Flatiron ceramics, alpine herbs, trail granola. An editorial concept — no release date announced.',
  ogImage: '/images/cities/boulder-og.webp'
};

export const boulder: City = {
  id: 'boulder',
  slug: 'boulder',
  name: 'Boulder',
  state: 'Colorado',
  abbreviation: 'CO',
  region: 'mountain',
  status: 'preview',
  order: 9,
  description: 'Solar-roasted coffee, Flatiron geometry ceramics, alpine herbs, and trail fuel at 5,430 feet.',
  intro: 'Where the Flatirons catch the light, altitude shapes the roast, and science meets the wild. This preview explores the makers at the foot of the Rockies.',
  themes: ['food', 'arts', 'outdoors', 'design'],
  tags: ['coffee', 'ceramics', 'solar', 'flatirons', 'alpine', 'herbs', 'climbing', 'science'],
  heroImage: '/images/cities/boulder.webp',
  heroImageAlt: 'The Flatirons rising above Boulder at golden hour',
  heroImageMobile: '/images/cities/boulder-mobile.webp',
  galleryImages: [
    '/images/cities/boulder-gallery-1.webp',
    '/images/cities/boulder-gallery-2.webp',
    '/images/cities/boulder-gallery-3.webp'
  ],
  colorPalette: {
    primary: '#6B4423',      // Sandstone
    secondary: '#7BA05B',    // Meadow green
    background: '#F5F2ED'    // Rock dust
  },
  tagline: 'Tilted rocks & solar roasts',
  highlights,
  products,
  makers,
  story,
  sources,
  seo,
  productIds: products.map(p => p.id),
  relatedCityIds: ['denver', 'santa-fe', 'seattle'],
  boxConfig: {
    estimatedShipDate: 'Preview — no date announced',
    productCount: 6,
    includesPostcard: true,
    includesStoryInsert: true,
    specialItems: ['trail-map', 'solar-schematic']
  }
};