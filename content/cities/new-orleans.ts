import type { City, CityProduct, CityHighlight, CityMaker, CityStory, CitySource, CitySEO } from '../cities-v2';

const makers: CityMaker[] = [
  {
    id: 'crescent-table-coffee',
    name: 'Crescent Table Coffee',
    role: 'Coffee Roaster',
    bio: 'Rooftop micro-roaster in the Bywater. They source from women-led cooperatives in Haiti and Colombia, roasting to highlight the unique terroir of Caribbean and Latin American beans.',
    image: '/images/makers/crescent-table.webp',
    website: 'https://example.com/crescent-table',
    instagram: '@crescenttable',
    products: ['crescent-coffee'],
    location: 'New Orleans, LA',
    isReal: false
  },
  {
    id: 'bayou-pantry',
    name: 'Bayou Pantry',
    role: 'Preserves Maker',
    bio: 'Small-batch preserves using Gulf Coast fruit and heirloom recipes. Their fig jam has been a New Orleans farmers market staple for 15 years.',
    image: '/images/makers/bayou-pantry.webp',
    website: 'https://example.com/bayou-pantry',
    instagram: '@bayoupantry',
    products: ['fig-jam', 'pepper-jelly'],
    location: 'New Orleans, LA',
    isReal: false
  },
  {
    id: 'riverbend-paper',
    name: 'Riverbend Paper Studio',
    role: 'Stationer',
    bio: 'Letterpress studio in the Irish Channel creating stationery inspired by New Orleans architecture. Each card is printed on 1920s Heidelberg presses.',
    image: '/images/makers/riverbend-paper.webp',
    website: 'https://example.com/riverbend-paper',
    instagram: '@riverbendpaper',
    products: ['architecture-cards', 'mardi-gras-notebook'],
    location: 'New Orleans, LA',
    isReal: false
  }
];

const products: CityProduct[] = [
  {
    id: 'crescent-coffee',
    name: 'Café au Lait Blend',
    category: 'coffee',
    description: 'Medium-dark roast designed for café au lait — stands up to milk and chicory.',
    shortDescription: 'New Orleans-style coffee blend with chicory',
    detail: 'Blend of Haitian Blue Mountain and Colombian Supremo beans with 15% French chicory root. Roasted to Vienna level for low acidity and rich body. 12oz bag, whole bean. The traditional way to drink it: half coffee, half steamed milk.',
    image: '/images/products/new-orleans/coffee.webp',
    alt: 'Kraft bag with hand-drawn streetcar illustration',
    makerId: 'crescent-table-coffee',
    priceRange: '$$',
    tags: ['chicory', 'new-orleans-style', 'medium-dark'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'fig-jam',
    name: 'Celeste Fig Preserves',
    category: 'pantry',
    description: 'Whole Celeste figs slow-cooked with cane sugar and a hint of lemon.',
    shortDescription: 'Whole fig preserves, 8oz jar',
    detail: 'Made from Celeste figs grown in St. Francisville, LA. Cooked in copper kettles in small batches. No pectin added — the figs\' natural pectin sets the jam. 8oz jar. Refrigerate after opening.',
    image: '/images/products/new-orleans/fig-jam.webp',
    alt: 'Jar of amber fig preserves with whole fruit visible',
    makerId: 'bayou-pantry',
    priceRange: '$$',
    tags: ['local-fruit', 'copper-kettle', 'no-pectin'],
    isHero: true,
    isExclusive: false
  },
  {
    id: 'pepper-jelly',
    name: 'Creole Pepper Jelly',
    category: 'condiment',
    description: 'Sweet-heat jelly with bell peppers, jalapeños, and Creole seasoning.',
    shortDescription: 'Sweet-spicy pepper jelly, 6oz jar',
    detail: 'Based on a 1950s family recipe. Red and green bell peppers, jalapeños, apple cider vinegar, and a proprietary Creole spice blend. Excellent on biscuits, with cream cheese, or as a glaze. 6oz jar.',
    image: '/images/products/new-orleans/pepper-jelly.webp',
    alt: 'Jewel-toned pepper jelly in a hexagonal jar',
    makerId: 'bayou-pantry',
    priceRange: '$',
    tags: ['creole', 'sweet-heat', 'versatile'],
    isHero: false,
    isExclusive: true
  },
  {
    id: 'architecture-cards',
    name: 'Ironwork Notecard Set',
    category: 'paper-goods',
    description: 'Set of 8 letterpress cards featuring French Quarter balcony details.',
    shortDescription: 'Letterpress notecards, set of 8 with envelopes',
    detail: 'Each card features a different historic balcony pattern from the French Quarter. Printed on Crane\'s Lettra 110lb cotton paper. Includes 8 matching envelopes. Packaged in a reusable kraft box.',
    image: '/images/products/new-orleans/ironwork-cards.webp',
    alt: 'Letterpress cards with intricate ironwork designs',
    makerId: 'riverbend-paper',
    priceRange: '$$',
    tags: ['letterpress', 'architecture', 'cotton-paper'],
    isHero: true,
    isExclusive: true
  },
  {
    id: 'mardi-gras-notebook',
    name: 'Krewe Pocket Notebook',
    category: 'stationery',
    description: 'Pocket notebook with Mardi Gras Indian beadwork pattern cover.',
    shortDescription: 'Dot-grid pocket notebook, 64 pages',
    detail: 'Cover design licensed from Big Chief Demond Melancon. 64 pages of 70gsm dot-grid paper. Sewn binding lays flat. 3.5 x 5.5 inches — fits in a back pocket. Made in New Orleans.',
    image: '/images/products/new-orleans/krewe-notebook.webp',
    alt: 'Pocket notebook with colorful beadwork pattern',
    makerId: 'riverbend-paper',
    priceRange: '$',
    tags: ['mardi-gras', 'indigenous-art', 'dot-grid'],
    isHero: false,
    isExclusive: true
  },
  {
    id: 'praline',
    name: 'Bourbon Street Pralines',
    category: 'confection',
    description: 'Creamy pecan pralines made with Louisiana cane sugar and butter.',
    shortDescription: 'Traditional creamy pralines, box of 6',
    detail: 'Recipe from a 1920s French Market vendor. Georgia pecans, Louisiana cane sugar, cream, butter, vanilla. Cooked to soft-ball stage and spooned onto marble. Box of 6. Best eaten within 10 days.',
    image: '/images/products/new-orleans/pralines.webp',
    alt: 'Creamy pecan pralines on wax paper',
    makerId: 'lorettas-pralines',
    priceRange: '$$',
    tags: ['traditional', 'pecans', 'creamy'],
    isHero: true,
    isExclusive: false
  }
];

const highlights: CityHighlight[] = [
  {
    title: 'Music in the Everyday',
    text: 'The performing arts form an important part of New Orleans\' cultural life. Music belongs to communities, histories, and individual voices, not a single postcard image. Our preview starts with listening: noticing how a place can be understood through what people create, share, and carry forward. The box concept is an invitation to learn more, without claiming to represent every tradition.',
    icon: 'Music'
  },
  {
    title: 'Flavors with a Story',
    text: 'Culinary arts are part of the city\'s cultural economy, alongside music, design, and preservation. This preview uses coffee, a seasoning concept, and a confection as prompts for discovery. These fictional products do not stand in for verified regional recipes or actual makers. A real offering would require careful sourcing and clear ingredient information before any food reached a customer.',
    icon: 'Utensils'
  },
  {
    title: 'Details Worth a Slower Look',
    text: 'Architecture and preservation are also part of New Orleans\' creative life. A balcony, a doorway, or a carefully drawn street scene can invite a closer look. Our paper-goods concept follows that instinct: pause, notice, and keep a small record. It leaves room for learning about the people and histories behind a place rather than reducing the city to a single image.',
    icon: 'Home'
  }
];

const story: CityStory = {
  title: 'A Postcard Worth Keeping',
  content: 'A postcard can be more than a message sent home. It can become a small record of something you noticed: the curve of a balcony, a doorway in afternoon light, or a color that stays in your memory. Riverbend Paper Studio is a fictional paper-goods concept for this preview. Imagine a set of illustrated cards with space for your own observations on the reverse. The story is about the act of looking, not a real studio\'s history or a claim of collaboration. In a future box, the artist\'s own perspective would matter as much as the finished object. For now, the concept makes room for that conversation, one small piece of paper at a time.',
  image: '/images/makers/riverbend-paper.webp',
  imageAlt: 'Letterpress printer pulling a card on a Heidelberg press'
};

const sources: CitySource[] = [
  { name: 'City of New Orleans Cultural Economy', url: 'https://nola.gov/next/cultural-economy/', type: 'government' },
  { name: 'New Orleans Tourism', url: 'https://www.neworleans.com/', type: 'tourism' }
];

const seo: CitySEO = {
  title: 'New Orleans Preview Box | Marlowby',
  description: 'Explore the New Orleans preview: chicory coffee, fig preserves, letterpress cards, and Creole flavors. An editorial concept — no release date announced.',
  ogImage: '/images/cities/new-orleans-og.webp'
};

export const newOrleans: City = {
  id: 'new-orleans',
  slug: 'new-orleans',
  name: 'New Orleans',
  state: 'Louisiana',
  abbreviation: 'LA',
  region: 'south',
  status: 'preview',
  order: 1,
  description: 'Culture, culinary soul, music, and architectural detail in every corner.',
  intro: 'A place to follow the sound, linger over a flavor, and notice the details. This editorial preview explores the city\'s rich cultural character.',
  themes: ['food', 'arts', 'music', 'history'],
  tags: ['jazz', 'creole', 'french-quarter', 'mardi-gras', 'architecture', 'preservation'],
  heroImage: '/images/cities/new-orleans.webp',
  heroImageAlt: 'Historic French Quarter buildings with wrought-iron balconies',
  heroImageMobile: '/images/cities/new-orleans-mobile.webp',
  galleryImages: [
    '/images/cities/new-orleans-gallery-1.webp',
    '/images/cities/new-orleans-gallery-2.webp',
    '/images/cities/new-orleans-gallery-3.webp'
  ],
  colorPalette: {
    primary: '#8B4A3C',      // Deep brick
    secondary: '#C8A85E',    // Aged gold
    background: '#F0EBE3'    // Warm parchment
  },
  tagline: 'Culture & culinary soul',
  highlights,
  products,
  makers,
  story,
  sources,
  seo,
  productIds: products.map(p => p.id),
  relatedCityIds: ['charleston', 'savannah', 'austin'],
  boxConfig: {
    estimatedShipDate: 'Preview — no date announced',
    productCount: 6,
    includesPostcard: true,
    includesStoryInsert: true,
    specialItems: ['playlist-qr', 'architecture-guide']
  }
};