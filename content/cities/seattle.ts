import type { City, CityProduct, CityHighlight, CityMaker, CityStory, CitySource, CitySEO } from '../cities-v2';

const makers: CityMaker[] = [
  {
    id: 'elliott-bay-roasters',
    name: 'Elliott Bay Roasters',
    role: 'Coffee Roaster',
    bio: 'Waterfront roastery with views of the Olympics. They focus on Pacific Northwest terroir — coffees that taste like the region: evergreen, rain, salt air.',
    image: '/images/makers/elliott-bay.webp',
    website: 'https://example.com/elliott-bay',
    instagram: '@elliottbayroasters',
    products: ['salish-blend'],
    location: 'Seattle, WA',
    isReal: false
  },
  {
    id: 'puget-sound-ceramics',
    name: 'Puget Sound Ceramics',
    role: 'Ceramicist',
    bio: 'Studio on the Duwamish River. Functional pottery using local clay and glazes derived from Pacific Northwest minerals — iron, copper, ash.',
    image: '/images/makers/puget-ceramics.webp',
    website: 'https://example.com/puget-ceramics',
    instagram: '@pugetsoundceramics',
    products: ['tide-mug', 'driftwood-bowl'],
    location: 'Seattle, WA',
    isReal: false
  },
  {
    id: 'evergreen-textiles',
    name: 'Evergreen Textiles',
    role: 'Weaver',
    bio: 'Handwoven goods on floor looms in Ballard. Wool from Skagit Valley sheep, dyed with foraged plants — lichen, madder, indigo.',
    image: '/images/makers/evergreen-textiles.webp',
    website: 'https://example.com/evergreen-textiles',
    instagram: '@evergreentextiles',
    products: ['moss-scarf', 'rain-throw'],
    location: 'Seattle, WA',
    isReal: false
  }
];

const products: CityProduct[] = [
  {
    id: 'salish-blend',
    name: 'Salish Sea Blend',
    category: 'coffee',
    description: 'Medium roast with notes of cedar, dark cherry, and sea salt caramel.',
    shortDescription: 'Pacific Northwest terroir blend, 12oz',
    detail: 'Blend of Papua New Guinea and Colombian coffees. Roasted to highlight savory-sweet notes reminiscent of the region. 12oz whole bean. A portion of proceeds supports Salish Sea conservation.',
    image: '/images/products/seattle/salish-blend.webp',
    alt: 'Coffee bag with topographic ocean map',
    makerId: 'elliott-bay-roasters',
    priceRange: '$$',
    tags: ['terroir', 'conservation', 'medium-roast'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'tide-mug',
    name: 'Tide Line Mug',
    category: 'ceramics',
    description: 'Mug with a glazed "tide line" — where the glaze breaks like waves on shore.',
    shortDescription: 'Stoneware mug with reactive tide glaze',
    detail: 'Local clay body, reduction fired. The "Tide Line" glaze uses iron and ash to create a natural breaking pattern. No two mugs have the same tide line. Holds 12oz. Microwave safe.',
    image: '/images/products/seattle/tide-mug.webp',
    alt: 'Stoneware mug with organic blue-brown glaze break',
    makerId: 'puget-sound-ceramics',
    priceRange: '$$$',
    tags: ['local-clay', 'reactive-glaze', 'unique'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'driftwood-bowl',
    name: 'Driftwood Serving Bowl',
    category: 'ceramics',
    description: 'Large shallow bowl with ash glaze — looks like weathered driftwood.',
    shortDescription: 'Ash-glazed serving bowl, 14 inches',
    detail: 'Wood-fired to cone 10. Ash from local apple wood creates the surface. Wide and shallow — perfect for salads or fruit. 14" diameter. Each piece unique.',
    image: '/images/products/seattle/driftwood-bowl.webp',
    alt: 'Large ceramic bowl with organic ash glaze patterns',
    makerId: 'puget-sound-ceramics',
    priceRange: '$$$',
    tags: ['wood-fired', 'ash-glaze', 'serving'],
    isHero: false,
    isExclusive: true
  },
  {
    id: 'moss-scarf',
    name: 'Olympic Moss Scarf',
    category: 'textiles',
    description: 'Handwoven wool scarf dyed with Oregon lichen — soft greens and greys.',
    shortDescription: 'Lichen-dyed wool scarf, 12 x 60 inches',
    detail: 'Skagit Valley wool, handwoven on a 4-harness floor loom. Dyed with ethically foraged wolf lichen (Letharia vulpina) and oak galls. 12 x 60 inches. Dry clean or hand wash cold.',
    image: '/images/products/seattle/moss-scarf.webp',
    alt: 'Woven wool scarf in muted forest greens',
    makerId: 'evergreen-textiles',
    priceRange: '$$$$',
    tags: ['handwoven', 'natural-dyes', 'lichen', 'wool'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'rain-throw',
    name: 'Rain Shadow Throw',
    category: 'textiles',
    description: 'Woven cotton throw in the colors of the Olympic rain shadow.',
    shortDescription: 'Cotton throw blanket, 50 x 70 inches',
    detail: 'Organic cotton, woven on a dobby loom. Pattern represents the rain shadow effect — dry east, wet west. 50 x 70 inches. Machine washable. Made in Ballard.',
    image: '/images/products/seattle/rain-throw.webp',
    alt: 'Cotton throw with gradient blue-grey pattern',
    makerId: 'evergreen-textiles',
    priceRange: '$$$',
    tags: ['cotton', 'rain-shadow', 'dobby-loom'],
    isHero: false,
    isExclusive: true
  },
  {
    id: 'smoked-salmon',
    name: 'Alder-Smoked Salmon',
    category: 'pantry',
    description: 'Wild sockeye smoked over red alder — the traditional Pacific Northwest way.',
    shortDescription: 'Wild sockeye, alder-smoked, 8oz',
    detail: 'Bristol Bay sockeye, dry-cured with sea salt and brown sugar, cold-smoked 12 hours over red alder. No preservatives. 8oz vacuum-sealed. Keep frozen until ready to eat.',
    image: '/images/products/seattle/smoked-salmon.webp',
    alt: 'Rich red smoked salmon slices',
    makerId: 'lumi-smokehouse',
    priceRange: '$$$',
    tags: ['wild', 'sockeye', 'alder-smoked', 'traditional'],
    isHero: true,
    isExclusive: false
  }
];

const highlights: CityHighlight[] = [
  {
    title: 'Where Water Shapes Life',
    text: 'Seattle is defined by its relationship to water — Puget Sound, Lake Washington, the Duwamish River, and the ever-present rain. This box explores how water shapes the materials, flavors, and rhythms of the place. From alder-smoked salmon to tide-line ceramics, each piece carries the imprint of the Salish Sea.',
    icon: 'Waves'
  },
  {
    title: 'A City of Makers',
    text: 'Seattle\'s industrial past created space for a thriving maker culture. Former warehouses in SoDo and Ballard now house ceramic studios, textile looms, and micro-roasteries. The makers in this box work in that lineage — using local materials, traditional techniques, and contemporary design.',
    icon: 'Factory'
  },
  {
    title: 'Green in Every Direction',
    text: 'The "Emerald City" nickname isn\'t marketing — it\'s ecology. From the Olympic rainforest to the Cascades, green is the constant. This box captures that green in lichen-dyed wool, moss-glazed ceramics, and the evergreen notes in the coffee. A reminder that nature isn\'t outside the city here — it\'s woven through it.',
    icon: 'TreePine'
  }
];

const story: CityStory = {
  title: 'The Tide Line Between Land and Sea',
  content: 'On a Puget Sound beach at low tide, there\'s a line where the water stops — a band of wet sand, kelp, shells, the day\'s offerings. Puget Sound Ceramics\' "Tide Line" mug captures that moment in glaze: where iron meets ash, where control meets chance. The studio sits on the Duwamish River, on Coast Salish land. The clay they use comes from deposits left by glaciers. The ash in their glazes comes from apple wood pruned in Wenatchee orchards. Every mug holds a map of the region: the river, the orchards, the mountains, the sound. In a future real box, the ceramicist would speak for themselves — about the 4am kiln checks, the failed firings, the day the tide line came out perfect. Here, the mug holds that story in potentia. A reminder that the most meaningful objects are often collaborations between human intention and the larger forces that shape a place.',
  image: '/images/makers/puget-ceramics.webp',
  imageAlt: 'Ceramicist pulling a tide-line mug from a wood-fired kiln'
};

const sources: CitySource[] = [
  { name: 'Visit Seattle', url: 'https://www.visitseattle.org/', type: 'tourism' },
  { name: 'Seattle Office of Arts & Culture', url: 'https://www.seattle.gov/arts', type: 'government' }
];

const seo: CitySEO = {
  title: 'Seattle Preview Box | Marlowby',
  description: 'Explore the Seattle preview: Salish Sea coffee, tide-line ceramics, lichen-dyed wool, alder-smoked salmon. An editorial concept — no release date announced.',
  ogImage: '/images/cities/seattle-og.webp'
};

export const seattle: City = {
  id: 'seattle',
  slug: 'seattle',
  name: 'Seattle',
  state: 'Washington',
  abbreviation: 'WA',
  region: 'pacific-northwest',
  status: 'upcoming',
  order: 3,
  launchDate: '2025-06-15',
  description: 'Salish Sea flavors, tide-line ceramics, lichen-dyed textiles, and rain-forest green.',
  intro: 'Where mountains meet sound, and rain feeds a quiet creativity. This upcoming box explores the materials and makers shaped by the Pacific Northwest coast.',
  themes: ['food', 'arts', 'outdoors', 'design'],
  tags: ['coffee', 'ceramics', 'textiles', 'salmon', 'rain', 'mountains', 'sound', 'indigenous'],
  heroImage: '/images/cities/seattle.webp',
  heroImageAlt: 'Seattle skyline with Mount Rainier and Elliott Bay',
  heroImageMobile: '/images/cities/seattle-mobile.webp',
  galleryImages: [
    '/images/cities/seattle-gallery-1.webp',
    '/images/cities/seattle-gallery-2.webp',
    '/images/cities/seattle-gallery-3.webp'
  ],
  colorPalette: {
    primary: '#2D4A5E',      // Deep sound blue
    secondary: '#7A9E7E',    // Moss green
    background: '#E8EBED'    // Misty grey
  },
  tagline: 'Sound, forest & maker culture',
  highlights,
  products,
  makers,
  story,
  sources,
  seo,
  productIds: products.map(p => p.id),
  relatedCityIds: ['portland', 'boulder', 'denver'],
  boxConfig: {
    estimatedShipDate: 'Ships June 15, 2025',
    productCount: 6,
    includesPostcard: true,
    includesStoryInsert: true,
    specialItems: ['tide-chart', 'foraging-guide']
  }
};