import type { City, CityProduct, CityHighlight, CityMaker, CityStory, CitySource, CitySEO } from '../cities-v2';

const makers: CityMaker[] = [
  {
    id: 'pine-country-roasters',
    name: 'Pine Country Roasters',
    role: 'Coffee Roaster',
    bio: 'Roastery at 7,000 feet in a historic Route 66 building. They roast for the ponderosa air — clean, bright, fuel for the high country.',
    image: '/images/makers/pine-country.webp',
    website: 'https://example.com/pine-country',
    instagram: '@pinecountryroasters',
    products: ['ponderosa-blend'],
    location: 'Flagstaff, AZ',
    isReal: false
  },
  {
    id: 'volcanic-ceramics',
    name: 'Volcanic Ceramics',
    role: 'Ceramicist',
    bio: 'Studio in a former lumber mill. Clay from the San Francisco Volcanic Field. Wood-fired with ponderosa and piñon — the forest fires the clay.',
    image: '/images/makers/volcanic-ceramics.webp',
    website: 'https://example.com/volcanic-ceramics',
    instagram: '@volcanicceramics',
    products: ['lava-mug', 'cinder-bowl'],
    location: 'Flagstaff, AZ',
    isReal: false
  },
  {
    id: 'high-country-honey',
    name: 'High Country Honey',
    role: 'Beekeeper',
    bio: 'Apiary at 7,200 feet in the ponderosa forest. Ponderosa pine honey, wildflower, piñon — the flavors of the highest hives in Arizona.',
    image: '/images/makers/high-country-honey.webp',
    website: 'https://example.com/high-country-honey',
    instagram: '@highcountryhoney',
    products: ['ponderosa-honey', 'wildflower-honey', 'pinon-honey'],
    location: 'Flagstaff, AZ',
    isReal: false
  }
];

const products: CityProduct[] = [
  {
    id: 'ponderosa-blend',
    name: 'Ponderosa Blend',
    category: 'coffee',
    description: 'Light-medium roast — pine needle brightness, honey sweetness, clean mountain finish.',
    shortDescription: 'High-altitude light roast, 12oz',
    detail: 'Ethiopian, Colombian, Mexican — roasted at 7,000 feet where water boils at 200°F. The low boiling point preserves delicate acids. Notes of pine needle, wildflower honey, citrus. 12oz whole bean. A portion supports ponderosa restoration.',
    image: '/images/products/flagstaff/ponderosa.webp',
    alt: 'Coffee bag with ponderosa pine illustration',
    makerId: 'pine-country-roasters',
    priceRange: '$$',
    tags: ['high-altitude', 'ponderosa', 'light-roast', 'pine', 'route66'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'lava-mug',
    name: 'San Francisco Peaks Lava Mug',
    category: 'ceramics',
    description: 'Mug from volcanic clay — wood fired with ponderosa, the color of basalt and ash.',
    shortDescription: 'Wood-fired volcanic clay mug, 12oz',
    detail: 'Clay from the San Francisco Volcanic Field — cinder cones, lava flows, 600+ volcanoes. Wood-fired anagama with ponderosa pine and piñon. The flame writes: iron-black basalt, carbon-grey ash, flash-orange ember. 12oz. The volcano in your hand.',
    image: '/images/products/flagstaff/lava-mug.webp',
    alt: 'Rustic mug with volcanic black, grey, and orange fire patterning',
    makerId: 'volcanic-ceramics',
    priceRange: '$$$',
    tags: ['volcanic-clay', 'wood-fired', 'anagama', 'ponderosa', 'piñon', 'san-francisco-peaks'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'cinder-bowl',
    name: 'Cinder Cone Bowl',
    category: 'ceramics',
    description: 'Bowl with cinder-textured exterior — the field\'s rough skin.',
    shortDescription: 'Wood-fired textured bowl, 11 inches',
    detail: 'Same volcanic clay, same anagama fire. The exterior is impressed with volcanic cinder while leather-hard. 11" diameter. The interior glaze pools like a crater lake. For the meals that ground you.',
    image: '/images/products/flagstaff/cinder-bowl.webp',
    alt: 'Bowl with cinder-textured exterior and crater-glazed interior',
    makerId: 'volcanic-ceramics',
    priceRange: '$$$',
    tags: ['volcanic-clay', 'cinder', 'wood-fired', 'crater', 'texture'],
    isHero: false,
    isExclusive: true
  },
  {
    id: 'ponderosa-honey',
    name: 'Ponderosa Pine Honey',
    category: 'pantry',
    description: 'Rare honey from ponderosa pollen — resinous, vanilla, distinctly pine.',
    shortDescription: 'Ponderosa honey, 8oz jar',
    detail: 'Bees foraging ponderosa pine pollen at 7,200 feet. The only honey in the world with this profile: resinous, vanilla, pine, butterscotch. 8oz. Raw, unfiltered. Crystallizes in beautiful needles. A taste that exists nowhere else.',
    image: '/images/products/flagstaff/ponderosa-honey.webp',
    alt: 'Amber honey with pine resin illustration',
    makerId: 'high-country-honey',
    priceRange: '$$$',
    tags: ['ponderosa', 'pine-pollen', 'rare', 'high-altitude', 'unique'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'wildflower-honey',
    name: 'High Country Wildflower Honey',
    category: 'pantry',
    description: 'Lupine, penstemon, paintbrush, yarrow — the meadow in a jar.',
    shortDescription: 'Wildflower honey, 12oz jar',
    detail: 'Hives in the ponderosa-meadow ecotone. Lupine, penstemon, Indian paintbrush, yarrow, aster. 12oz. Raw, unfiltered. Light, floral, complex. The taste of a Flagstaff July.',
    image: '/images/products/flagstaff/wildflower-honey.webp',
    alt: 'Golden wildflower honey with meadow flowers',
    makerId: 'high-country-honey',
    priceRange: '$$',
    tags: ['wildflower', 'meadow', 'high-altitude', 'floral'],
    isHero: false,
    isExclusive: false
  },
  {
    id: 'pinon-honey',
    name: 'Piñon Pine Honey',
    category: 'pantry',
    description: 'From piñon pollen — nutty, resinous, the flavor of the pinyon-juniper woodland.',
    shortDescription: 'Piñon honey, 8oz jar',
    detail: 'Bees foraging piñon pine at the woodland edge. Nutty, pine resin, caramel. 8oz. Raw, unfiltered. The flavor of the Southwest\'s oldest forest. Excellent on ricotta, in tea, or by the spoon.',
    image: '/images/products/flagstaff/pinon-honey.webp',
    alt: 'Golden honey with piñon cone illustration',
    makerId: 'high-country-honey',
    priceRange: '$$$',
    tags: ['piñon', 'pine', 'woodland', 'nutty', 'resinous'],
    isHero: false,
    isExclusive: true
  }
];

const highlights: CityHighlight[] = [
  {
    title: 'The Forest Fires the Clay',
    text: 'The San Francisco Volcanic Field — 600+ volcanoes, the youngest just 1,000 years old. Volcanic Ceramics digs clay from the cinder cones. They fire with ponderosa pine and piñon from the same forest. The trees that grow on the lava become the fire that glazes the clay. The volcano makes the clay; the forest fires it. This box is a closed loop.',
    icon: 'Volcano'
  },
  {
    title: 'Altitude Is the Roastmaster',
    text: 'Flagstaff at 7,000 feet — water boils at 200°F. Coffee roasts differently here: faster development, brighter acids preserved, cleaner finish. Pine Country Roasters doesn\'t adjust for altitude; they design for it. Their light roasts taste like high-altitude sun. The same beans at sea level would be flat. Here, they\'re alive.',
    icon: 'Mountain'
  },
  {
    title: 'Route 66 Is a Current',
    text: 'The Mother Road runs through Flagstaff — historic downtown, the roastery\'s building, the neon motels. It\'s not nostalgia; it\'s a current. Travelers still stop. Locals still cruise. The coffee fuels the road. The honey sweetens the journey. The ceramics hold the dust. This box moves with the highway.',
    icon: 'Road'
  }
];

const story: CityStory = {
  title: 'The Honey That Tastes Like a Tree',
  content: 'Ponderosa pine (ponderosa pine) doesn\'t nectar — it pollens. Massive yellow clouds in June. Bees collect it not for honey but for protein. But in the high country, where the ponderosa meets the meadow, the bees mix: ponderosa pollen, lupine nectar, penstemon, paintbrush. The resulting honey is a chimera: resinous from the pine, floral from the meadow, vanilla from the sap, butterscotch from the bark. High Country Honey keeps hives at 7,200 feet — among the highest in Arizona. They harvest once a year. The honey crystallizes in needles, like the pine\'s own. In a future real box, the beekeeper would tell you about the year the monsoon failed and the ponderosa pollen was thin, and the honey tasted more meadow than pine. Here, the honey holds that possibility. A reminder that the rarest flavors are the ones the land decides to give.',
  image: '/images/makers/high-country-honey.webp',
  imageAlt: 'Beekeeper checking high-altitude hives in ponderosa forest'
};

const sources: CitySource[] = [
  { name: 'Discover Flagstaff', url: 'https://www.discoverflagstaff.com/', type: 'tourism' },
  { name: 'Museum of Northern Arizona', url: 'https://musnaz.org/', type: 'cultural' }
];

const seo: CitySEO = {
  title: 'Flagstaff Preview Box | Marlowby',
  description: 'Explore the Flagstaff preview: high-altitude coffee, volcanic wood-fired ceramics, ponderosa pine honey. An editorial concept — no release date announced.',
  ogImage: '/images/cities/flagstaff-og.webp'
};

export const flagstaff: City = {
  id: 'flagstaff',
  slug: 'flagstaff',
  name: 'Flagstaff',
  state: 'Arizona',
  abbreviation: 'AZ',
  region: 'southwest',
  status: 'preview',
  order: 17,
  description: 'High-altitude coffee, volcanic wood-fired ceramics, and the world\'s only ponderosa pine honey.',
  intro: 'Where the volcanoes make the clay, the forest fires it, and the pines flavor the honey. This preview explores the makers at 7,000 feet on Route 66.',
  themes: ['food', 'arts', 'outdoors', 'craft'],
  tags: ['coffee', 'ceramics', 'volcanic', 'wood-fired', 'ponderosa', 'honey', 'high-altitude', 'route66', 'anagama'],
  heroImage: '/images/cities/flagstaff.webp',
  heroImageAlt: 'San Francisco Peaks with ponderosa forest and Route 66',
  heroImageMobile: '/images/cities/flagstaff-mobile.webp',
  galleryImages: [
    '/images/cities/flagstaff-gallery-1.webp',
    '/images/cities/flagstaff-gallery-2.webp',
    '/images/cities/flagstaff-gallery-3.webp'
  ],
  colorPalette: {
    primary: '#3D4F3E',      // Ponderosa bark
    secondary: '#E8C56D',    // Honey gold
    background: '#F5F0E8'    // Volcanic ash
  },
  tagline: 'Volcanic clay & pine honey',
  highlights,
  products,
  makers,
  story,
  sources,
  seo,
  productIds: products.map(p => p.id),
  relatedCityIds: ['tucson', 'santa-fe', 'provo'],
  boxConfig: {
    estimatedShipDate: 'Preview — no date announced',
    productCount: 6,
    includesPostcard: true,
    includesStoryInsert: true,
    specialItems: ['volcano-map', 'honey-tasting-notes']
  }
};