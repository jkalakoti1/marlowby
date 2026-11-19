export type City = {
  id: string;
  slug: string;
  name: string;
  state: string;
  abbreviation: string;
  status: "current" | "preview";
  order: number;
  description: string;
  intro: string;
  themes: string[];
  image: string;
  alt: string;
  tagline: string;
  highlights: { title: string; text: string }[];
  products: string[];
  source: string;
  sourceName: string;
  storyTitle: string;
  story: string;
};
export const cities: City[] = [
  {
    id: "austin",
    slug: "austin",
    name: "Austin",
    state: "Texas",
    abbreviation: "TX",
    status: "current",
    order: 0,
    description:
      "Live music, local flavor, coffee, and creative outdoor afternoons.",
    intro:
      "Live music, open-air afternoons, and a creative spirit. Our current box concept takes its cue from the textures and everyday discoveries of Austin.",
    themes: ["food", "arts", "outdoors"],
    image: "/images/austin.webp",
    alt: "The Austin skyline beside Lady Bird Lake in warm afternoon light",
    tagline: "Live music & local flavor",
    highlights: [
      {
        title: "A city with a soundtrack",
        text: "Music gives Austin a rhythm of its own. The Red River Cultural District brings venues and listeners together, while the broader city makes room for sounds across genres. For this concept, that sense of gathering is the starting point: a postcard to keep, a cup to pour, and a story that invites another listen.",
      },
      {
        title: "A taste for something local",
        text: "Food is a useful way to begin noticing a place. Austin’s mix of food trucks, restaurants, and coffee stops inspires a box built around everyday rituals. Our coffee, honey, and snack concepts are fictional examples of that idea, not products from verified local partners. Think of them as an invitation to explore, rather than a guide to actual ingredients or vendors.",
      },
      {
        title: "Room for creative routines",
        text: "Lady Bird Lake brings an outdoor pause into the heart of the city. The Butler Trail follows the water past neighborhoods and the downtown skyline. That contrast between activity and breathing room shapes our Austin concept: something for a slow morning, something to share, and something worth keeping on an everyday shelf.",
      },
    ],
    products: ["coffee", "honey", "pecans", "ceramic"],
    source: "https://www.austintexas.org/things-to-do/",
    sourceName: "Visit Austin",
    storyTitle: "Something for the everyday shelf",
    story:
      "Imagine a cup you reach for without thinking: a comfortable handle, a quiet glaze, and enough character to make the morning feel your own. South Congress Studio is our fictional ceramics concept, created to explore how a small object can hold the feeling of a place. The design begins with familiar materials and an unhurried ritual. It is not a claim about an actual Austin maker or a promise of handmade production. In a future real box, meeting the person behind an object would be part of the discovery. Here, the cup gives that idea a visible form — a reminder that the things we keep often begin with a moment of curiosity.",
  },
  {
    id: "new-orleans",
    slug: "new-orleans",
    name: "New Orleans",
    state: "Louisiana",
    abbreviation: "LA",
    status: "preview",
    order: 1,
    description:
      "Culture, culinary soul, music, food and architectural detail.",
    intro:
      "A place to follow the sound, linger over a flavor, and notice the details. This editorial preview explores the city’s rich cultural character.",
    themes: ["food", "arts"],
    image: "/images/new-orleans.webp",
    alt: "Historic French Quarter buildings and iron balconies in New Orleans",
    tagline: "Culture & culinary soul",
    highlights: [
      {
        title: "Music in the everyday",
        text: "The performing arts form an important part of New Orleans’ cultural life. Music belongs to communities, histories, and individual voices, not a single postcard image. Our preview starts with listening: noticing how a place can be understood through what people create, share, and carry forward. The box concept is an invitation to learn more, without claiming to represent every tradition.",
      },
      {
        title: "Flavors with a story",
        text: "Culinary arts are part of the city’s cultural economy, alongside music, design, and preservation. This preview uses coffee, a seasoning concept, and a confection as prompts for discovery. These fictional products do not stand in for verified regional recipes or actual makers. A real offering would require careful sourcing and clear ingredient information before any food reached a customer.",
      },
      {
        title: "Details worth a slower look",
        text: "Architecture and preservation are also part of New Orleans’ creative life. A balcony, a doorway, or a carefully drawn street scene can invite a closer look. Our paper-goods concept follows that instinct: pause, notice, and keep a small record. It leaves room for learning about the people and histories behind a place rather than reducing the city to a single image.",
      },
    ],
    products: ["crescent", "bayou", "sweets", "postcards"],
    source: "https://nola.gov/next/cultural-economy/",
    sourceName: "City of New Orleans Cultural Economy",
    storyTitle: "A postcard worth keeping",
    story:
      "A postcard can be more than a message sent home. It can become a small record of something you noticed: the curve of a balcony, a doorway in afternoon light, or a color that stays in your memory. Riverbend Paper Studio is a fictional paper-goods concept for this preview. Imagine a set of illustrated cards with space for your own observations on the reverse. The story is about the act of looking, not a real studio’s history or a claim of collaboration. In a future box, the artist’s own perspective would matter as much as the finished object. For now, the concept makes room for that conversation, one small piece of paper at a time.",
  },
  {
    id: "portland",
    slug: "portland",
    name: "Portland",
    state: "Oregon",
    abbreviation: "OR",
    status: "preview",
    order: 2,
    description: "Creative ideas, coffee rituals, parks and outdoor spirit.",
    intro:
      "Independent ideas, slow coffee rituals, and a little room to breathe. This editorial preview follows Portland’s creative and outdoor spirit.",
    themes: ["food", "arts", "outdoors"],
    image: "/images/portland.webp",
    alt: "Portland cityscape with bridges and green riverbanks",
    tagline: "Creativity & outdoor spirit",
    highlights: [
      {
        title: "A creative point of view",
        text: "Portland’s arts districts make space for galleries, shops, and independent ideas. Our preview takes that variety as a starting point for a few useful objects: a ceramic dish, a notebook, and a coffee concept. These are illustrative goods rather than real partnerships. The thread connecting them is curiosity about how design can become part of an ordinary day.",
      },
      {
        title: "The ritual of a good cup",
        text: "For this concept, coffee offers a reason to slow down and pay attention. Rainline Coffee is a fictional example, with no sourcing, roasting, or sustainability claims attached. Alongside a notebook and a small dish, it suggests a tabletop scene rather than a verified selection from Portland businesses. A future real box would tell a specific maker’s story in their own words.",
      },
      {
        title: "Space for an outdoor pause",
        text: "Portland’s parks range from large wooded landscapes to small places to pause in the city. Forest Park is one example of that connection to green space. Our preview carries the idea into a pocket notebook: a place to jot down a walk, a detail, or an unexpected thought. It is an editorial connection, not a claim that every resident experiences the city the same way.",
      },
    ],
    products: ["rainline", "evergreen", "dish", "notebook"],
    source: "https://www.travelportland.com/attractions/",
    sourceName: "Travel Portland",
    storyTitle: "A small notebook for noticing more",
    story:
      "Some discoveries are easy to walk past. A hand-painted sign, the shape of a leaf, a sentence overheard on a coffee break — each can be a reason to open a notebook. Trailnote Press is a fictional stationery concept that gives those small observations a place to land. Picture a simple pocket book, comfortable to carry, with enough blank space to make it your own. This is not a real publisher’s story, and no materials or environmental certifications are claimed. The idea is more modest: a useful object that encourages attention. In a destination box, it could connect the experience of opening something new with the habit of looking a little more closely at what is already around you.",
  },
];
export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  detail: string;
};
export const products: Product[] = [
  {
    id: "coffee",
    name: "Hill Country Coffee",
    category: "Craft coffee",
    description: "A little ritual. A whole new morning.",
    image: "/images/coffee.webp",
    detail:
      "A sample small-batch coffee concept for slow mornings and new discoveries. Warm packaging and a familiar daily ritual give this illustrative product its place in the Austin box. The name and maker are fictional; no roast, origin, ingredient, or sourcing claims are made.",
  },
  {
    id: "honey",
    name: "Golden Grove Honey",
    category: "Pantry",
    description: "A golden moment for the everyday.",
    image: "/images/honey.webp",
    detail:
      "An illustrative jar of honey inspired by the warm textures of a local pantry. This concept brings a rich amber color and a familiar kitchen object into the box’s story. It does not represent an actual producer or establish a floral origin, ingredient list, or food safety assurance.",
  },
  {
    id: "pecans",
    name: "Lone Star Pantry",
    category: "Regional snack",
    description: "A savory idea with Texas character.",
    image: "/images/pecans.webp",
    detail:
      "A sample savory pecan snack concept with a little Texas character. The pouch is a visual starting point for imagining a regional discovery, rather than an item available to purchase. Ingredients, quantities, allergens, and preparation details are not established for this fictional product.",
  },
  {
    id: "ceramic",
    name: "South Congress Studio",
    category: "Ceramics",
    description: "Something lovely for your daily ritual.",
    image: "/images/ceramic.webp",
    detail:
      "An illustrative ceramic cup designed around a familiar daily ritual. A tactile surface and quiet silhouette suggest an object worth keeping after the box is opened. South Congress Studio is a fictional maker concept, with no claim about an actual workshop or handmade production.",
  },
  ...[
    {
      id: "crescent",
      name: "Crescent Table Coffee",
      category: "Coffee concept",
      image: "coffee",
    },
    {
      id: "bayou",
      name: "Bayou Pantry Blend",
      category: "Seasoning concept",
      image: "pecans",
    },
    {
      id: "sweets",
      name: "Courtyard Sweets",
      category: "Confection concept",
      image: "honey",
    },
    {
      id: "postcards",
      name: "Riverbend Paper Studio",
      category: "Postcard concept",
      image: "paper",
    },
    {
      id: "rainline",
      name: "Rainline Coffee",
      category: "Coffee concept",
      image: "coffee",
    },
    {
      id: "evergreen",
      name: "Evergreen Pantry",
      category: "Snack concept",
      image: "pecans",
    },
    {
      id: "dish",
      name: "Bridgework Studio",
      category: "Ceramic dish concept",
      image: "ceramic",
    },
    {
      id: "notebook",
      name: "Trailnote Press",
      category: "Pocket notebook concept",
      image: "paper",
    },
  ].map((p) => ({
    ...p,
    image: `/images/${p.image}.webp`,
    description: "A fictional product concept for a future discovery.",
    detail:
      "An illustrative idea for a possible future destination box. This fictional maker and product are not available to order. The image is a material and mood reference, not a photograph of a finished product or a claim of a maker partnership.",
  })),
];
