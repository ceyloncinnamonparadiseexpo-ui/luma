export interface Suite {
  id: string;
  name: string;
  category: 'villa' | 'pavilion' | 'penthouse' | 'suite';
  tagline: string;
  pricePerNight: number;
  sizeSqm: number;
  maxGuests: number;
  bedType: string;
  view: string;
  image: string;
  description: string;
  highlights: string[];
  features: {
    pool: string;
    bath: string;
    verandah: string;
    butler: boolean;
  };
}

export interface WellnessTreatment {
  id: string;
  name: string;
  sanskritName: string;
  durationMinutes: number;
  priceUsd: number;
  benefit: string;
  description: string;
  botanicals: string[];
}

export interface MenuItem {
  id: string;
  title: string;
  vernacularTitle: string;
  category: 'starters' | 'mains' | 'desserts' | 'cocktails';
  priceUsd: number;
  description: string;
  ingredients: string[];
  dietary?: string;
}

export interface Experience {
  id: string;
  title: string;
  category: 'ocean' | 'culture' | 'wellness' | 'culinary';
  duration: string;
  timeOfDay: string;
  priceUsd: number;
  description: string;
  included: string[];
}

export const RESORT_IMAGES = {
  hero: '/src/assets/images/hero_luma_cove_weligama_1793248211774.jpg',
  oceanPlunge: '/src/assets/images/suite_ocean_plunge_villa_1793248212166.jpg',
  cinnamonHeritage: '/src/assets/images/suite_cinnamon_heritage_1793248213485.jpg',
  dining: '/src/assets/images/dining_verandah_culinary_1793248214258.jpg',
  wellness: '/src/assets/images/ayurvedic_wellness_spa_1793248214222.jpg',
};

export const RESORT_SUITES: Suite[] = [
  {
    id: 'ocean-cliff-villa',
    name: 'Ocean Cliff Plunge Villa',
    category: 'villa',
    tagline: 'Private infinity plunge pool cantilevered over Weligama Bay reef',
    pricePerNight: 680,
    sizeSqm: 185,
    maxGuests: 2,
    bedType: 'California King Organic Linen Canopy',
    view: 'Panoramic Indian Ocean & Sunset Reef',
    image: RESORT_IMAGES.oceanPlunge,
    description:
      'Perched directly on the granite headland where the warm southern swell breaks against coral shelves. Features an unpolished limestone sun terrace, private infinity freshwater plunge pool, outdoor rain shower carved from local river stone, and daybeds shaded by rustling coconut fronds.',
    highlights: [
      'Private 8m freshwater plunge pool overlooking ocean',
      'Hand-chiseled river stone sunken soaking tub',
      'Dedicated Ayurvedic butler service',
      'Daily complimentary sunrise tropical fruit & herbal elixir basket',
      'Direct private footpath to secluded sand cove',
    ],
    features: {
      pool: 'Private 8m Infinity Edge Pool',
      bath: 'Indoor & Garden Open-Air Rain Showers',
      verandah: '95 sqm Limestone Sundeck with Daybed',
      butler: true,
    },
  },
  {
    id: 'cinnamon-heritage-pavilion',
    name: 'Cinnamon Heritage Pavilion',
    category: 'pavilion',
    tagline: 'Vernacular Ceylon architecture framed by fragrant spice gardens',
    pricePerNight: 520,
    sizeSqm: 145,
    maxGuests: 2,
    bedType: 'Artisan Teak 4-Poster King Bed',
    view: 'Lush Botanical Garden & Distant Bay Glimpse',
    image: RESORT_IMAGES.cinnamonHeritage,
    description:
      'A tribute to traditional southern Sri Lankan planter estates. Vaulted open timber rafters crafted from aged Jackwood, cooling hand-waxed terracotta tiles, woven natural cane headboards, and fragrant wild cinnamon bark finishes throughout. The wide louvered doors open onto an expansive private garden verandah.',
    highlights: [
      'Expansive wrap-around planter verandah with antique lounge chairs',
      'Handmade hammered brass bathroom fittings and soaking tub',
      'In-suite artisanal Ceylon cinnamon oil diffuser and bespoke teas',
      'Complimentary evening herbal foot soak ceremony',
      'Surrounded by organic vanilla, ginger, and cinnamon flora',
    ],
    features: {
      pool: 'Direct garden access to resort natural ocean pool',
      bath: 'Hammered Brass Clawfoot Soaking Tub',
      verandah: '60 sqm Shaded Teak Louver Verandah',
      butler: true,
    },
  },
  {
    id: 'palm-canopy-suite',
    name: 'Palm Canopy Verandah Suite',
    category: 'suite',
    tagline: 'Elevated tree-level hideaway nestled among coastal coconut palms',
    pricePerNight: 440,
    sizeSqm: 115,
    maxGuests: 2,
    bedType: 'Floating Teak King Bed with Gauze Netting',
    view: 'Coconut Canopy & Weligama Bay Horizon',
    image: RESORT_IMAGES.hero,
    description:
      'Resting at the gentle height of coconut fronds, this elevated suite captures continuous onshore trade breezes. Natural jute rugs, bleached linen draping, and open-air seating allow you to listen to the ocean rhythm while enjoying private morning tea above the gardens.',
    highlights: [
      'Elevated private balcony suspended in coconut palm tree canopy',
      'Open-concept living space with sliding timber shutters',
      'Organic botanical bath amenities crafted in Matara',
      'Complimentary daily yoga mat and meditation cushion set',
    ],
    features: {
      pool: 'Shared Cliffside Ocean Infinity Pool access',
      bath: 'Semi-open Rainforest Shower',
      verandah: '40 sqm Teak Treehouse Balcony',
      butler: false,
    },
  },
  {
    id: 'weligama-bay-penthouse',
    name: 'Weligama Bay Royal Penthouse',
    category: 'penthouse',
    tagline: 'The ultimate 270° vantage point over the entire crescent bay',
    pricePerNight: 890,
    sizeSqm: 260,
    maxGuests: 4,
    bedType: 'Two Master Suites with King Beds',
    view: '270° Unobstructed Weligama Bay Panorama',
    image: RESORT_IMAGES.dining,
    description:
      'Occupying the entire upper crest of the main estate house. Two grand master suites, private rooftop cocktail terrace, open-air dining pavilion for private chef suppers, and continuous horizon vistas from sunrise over the eastern headland to vibrant golden sunsets over Taprobane Island.',
    highlights: [
      'Dual master suites with custom freestanding copper tubs',
      'Private rooftop stargazing deck with telescope',
      'Dedicated private chef and sommelier available on request',
      'Complimentary airport luxury chauffeur transfer (Colombo/Mattala)',
      'Sunset champagne & canapés served daily on your terrace',
    ],
    features: {
      pool: 'Private Rooftop Hydrotherapy Spa & Bay Plunge',
      bath: 'Dual Copper Tubs + Twin Rain Showers',
      verandah: '120 sqm Panoramic Rooftop Terraces',
      butler: true,
    },
  },
];

export const WELLNESS_TREATMENTS: WellnessTreatment[] = [
  {
    id: 'abhyanga',
    name: 'Abhyanga Synchronized Botanical Massage',
    sanskritName: 'अभ्यङ्ग',
    durationMinutes: 75,
    priceUsd: 145,
    benefit: 'Deep tissue detoxification, circulation revival, and nervous system grounding',
    description:
      'Warm herbalized black sesame and Ceylon wild herb oils applied in rhythmic long strokes corresponding to energy pathways (nadis). Tailored to harmonize your dominant dosha.',
    botanicals: ['Southern Black Sesame', 'Bala Root', 'Ashwagandha', 'Wild Cinnamon Leaf'],
  },
  {
    id: 'shirodhara',
    name: 'Shirodhara Meditative Flow',
    sanskritName: 'शिरोधारा',
    durationMinutes: 60,
    priceUsd: 160,
    benefit: 'Profound mental stillness, relief from insomnia, sensory reset, and migraine relief',
    description:
      'A continuous, gentle stream of warm medicated herbal oil rhythmically flows onto the brow center (Ajna chakra) from a suspended hand-beaten bronze urn, accompanied by gentle scalp marma point pressure.',
    botanicals: ['Brahmi', 'Sandalwood', 'Vetiver Root', 'Gotu Kola'],
  },
  {
    id: 'panchakarma-ritual',
    name: 'Southern Ceylon Royal Herb Wrap & Floral Bath',
    sanskritName: 'स्वेदन व स्नान',
    durationMinutes: 105,
    priceUsd: 210,
    benefit: 'Lymphatic drainage, cellular renewal, and deep skin remineralization',
    description:
      'Begins with dry body brushing, followed by a warm paste of stone-ground Ceylon cinnamon quills, turmeric, and sandalwood bark. Culminates in an open-air stone bath steeped in freshly plucked pink lotuses and jasmine buds.',
    botanicals: ['Ceylon True Cinnamon', 'Raw Wild Turmeric', 'Pink Lotus', 'Kaffir Lime'],
  },
  {
    id: 'sound-wave-prana',
    name: 'Ocean Wave Acoustic Sound & Marma Healing',
    sanskritName: 'नाद योग',
    durationMinutes: 50,
    priceUsd: 95,
    benefit: 'Vagus nerve calibration, emotional release, and theta-state restorative rest',
    description:
      'Handcrafted antique bronze singing bowls tuned to natural resonant frequencies are placed along your spinal axis in our open-air cliffside pavilion, synchronizing acoustic vibrations with breaking bay waves.',
    botanicals: ['Frankincense Smoke', 'Sweet Orange Blossom', 'Ceylon Rose Water'],
  },
];

export const YOGA_SCHEDULE = [
  {
    time: '06:30 – 07:45 AM',
    title: 'Sunrise Prana Flow',
    instructor: 'Aravinda (Master of Hatha & Pranayama)',
    level: 'All Levels',
    focus: 'Awakening energy, diaphragmatic breathwork, sun salutations facing bay swell',
  },
  {
    time: '11:00 – 12:00 PM',
    title: 'Sound Healing & Yoga Nidra',
    instructor: 'Meera (Acoustic Sound Healer)',
    level: 'Gentle / Restorative',
    focus: 'Deep relaxation, singing bowls, somatic reset away from midday sun',
  },
  {
    time: '16:30 – 17:30 PM',
    title: 'Ayurvedic Herbal Infusion Tea Circle',
    instructor: 'Dr. Wickremasinghe (Resident Ayurvedic Vaidya)',
    level: 'Mindfulness & Talk',
    focus: 'Understanding daily circadian balance, taste therapy (shad rasa), medicinal herbs',
  },
  {
    time: '18:00 – 19:15 PM',
    title: 'Sunset Yin & Ocean Meditation',
    instructor: 'Aravinda',
    level: 'All Levels',
    focus: 'Deep hip opening, connective fascia release, twilight ocean meditation',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    title: 'Mirissa Yellowfin Tuna Crudo',
    vernacularTitle: 'කෙළවල්ලා මාළු පෙති',
    category: 'starters',
    priceUsd: 22,
    description:
      'Hand-line caught yellowfin tuna served moments from the morning boat, dressed with cold-pressed coconut oil, pickled green mango, kaffir lime zest, and crispy curry leaf salt.',
    ingredients: ['Mirissa Sashimi Tuna', 'Green Mango', 'Cold-Pressed Coconut Oil', 'Lime Zest'],
    dietary: 'Gluten-Free · Pescatarian',
  },
  {
    id: 'm2',
    title: 'Wood-Fired Southern Crab Roti',
    vernacularTitle: 'කකුළුවන් රොටී',
    category: 'starters',
    priceUsd: 24,
    description:
      'Sweet lagoon crab meat folded into flaky hand-stretched godamba flatbread with shallots, crushed black peppercorn, and roasted coconut sambol.',
    ingredients: ['Southern Lagoon Crab', 'Hand-Stretched Flatbread', 'Pol Sambol', 'Black Pepper'],
    dietary: 'Pescatarian',
  },
  {
    id: 'm3',
    title: 'Charred Spiced Rock Lobster',
    vernacularTitle: 'කුළුබඩු දැමූ පොකිරිස්සා',
    category: 'mains',
    priceUsd: 48,
    description:
      'Live Indian Ocean rock lobster basted with crushed garlic, roasted coriander seed, and Ceylon true cinnamon butter, accompanied by heirloom red samba rice and braised coconut greens.',
    ingredients: ['Whole Rock Lobster', 'Cinnamon Butter', 'Red Samba Rice', 'Organic Spinach'],
    dietary: 'Gluten-Free · Signature Catch',
  },
  {
    id: 'm4',
    title: 'Southern Cashew & Young Jackfruit Curry',
    vernacularTitle: 'පොළොස් සහ කජු වෑංජනය',
    category: 'mains',
    priceUsd: 28,
    description:
      'Tender slow-simmered young green jackfruit (polos) and raw buttery local cashews braised for 6 hours in dark roasted curry powder, thick coconut milk, and pandan leaf.',
    ingredients: ['Baby Jackfruit', 'Ceylon Raw Cashews', 'Fresh Coconut Milk', 'Roasted Spices'],
    dietary: 'Plant-Based · Vegan · Gluten-Free',
  },
  {
    id: 'm5',
    title: 'Kithul Treacle & Buffalo Curd Tart',
    vernacularTitle: 'මී කිරි සහ කිතුල් පැණි',
    category: 'desserts',
    priceUsd: 16,
    description:
      'Artisanal water buffalo curd sourced from nearby Tissamaharama, set in an almond-cardamom crust, drizzled with pure wood-smoked fishtail palm kithul syrup and roasted sea salt.',
    ingredients: ['Authentic Buffalo Curd', 'Smoked Kithul Palm Treacle', 'Almond Crust', 'Green Cardamom'],
    dietary: 'Vegetarian',
  },
  {
    id: 'm6',
    title: 'The Weligama Bay Highball',
    vernacularTitle: 'වැලිගම අරක්කු කොක්ටේල්',
    category: 'cocktails',
    priceUsd: 18,
    description:
      'Heritage Ceylon Coconut Arrack, clarified fresh king coconut water, wild cinnamon leaf cordial, splash of sparkling soda, and charred lemongrass spear.',
    ingredients: ['Single Estate Ceylon Arrack', 'King Coconut Water', 'Cinnamon Leaf', 'Lemongrass'],
    dietary: 'Signature Aperitif',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-surf',
    title: 'Private Weligama Surf & Coral Coaching',
    category: 'ocean',
    duration: '2.5 Hours',
    timeOfDay: '07:00 AM or 16:30 PM',
    priceUsd: 90,
    description:
      'Weligama is world-renowned for its gentle, long sand-bottom peeling waves. Join our resident ISA-certified surf guide for private 1-on-1 coaching, wave reading, and video analysis.',
    included: ['Custom epoxy surfboard', 'Rashguard & zinc protection', 'Cold fresh king coconut', 'GoPro photo recap'],
  },
  {
    id: 'exp-whales',
    title: 'Mirissa Blue Whale Private Catamaran Charter',
    category: 'ocean',
    duration: '4 Hours',
    timeOfDay: '06:15 AM Departure',
    priceUsd: 380,
    description:
      'Step aboard our luxury twin-hull sailing catamaran directly from Mirissa harbor to encounter magnificent blue whales, sperm whales, and spinning dolphins in their natural deep continental shelf migration channel.',
    included: ['Private catamaran & skipper', 'Gourmet breakfast onboard', 'Marine biologist guide', 'Champagne toast'],
  },
  {
    id: 'exp-cinnamon',
    title: 'Centuries-Old Cinnamon Estate & Peeling Ritual',
    category: 'culture',
    duration: '3 Hours',
    timeOfDay: '09:00 AM',
    priceUsd: 75,
    description:
      'Weligama sits at the historic heart of the true cinnamon (Cinnamomum verum) spice route. Walk through ancient shaded plantations, witness master peelers extract fragile golden quills, and distill your own aromatic oil.',
    included: ['Private estate tour', 'Hands-on quill peeling masterclass', 'Botanical oil gift flask', 'Spiced iced tea'],
  },
  {
    id: 'exp-galle',
    title: 'Historic Galle Dutch Fort Architecture Walk',
    category: 'culture',
    duration: '4.5 Hours',
    timeOfDay: '15:30 PM',
    priceUsd: 110,
    description:
      'A curated private walking exploration through the 17th-century ramparts of UNESCO-listed Galle Fort. Discover colonial ramparts, maritime antiquities, gemstone ateliers, and sunset views from the lighthouse.',
    included: ['Private air-conditioned transfer', 'Historian architectural guide', 'Heritage afternoon tea at Amangalla'],
  },
];

export const GUEST_MONOGRAPHS = [
  {
    guest: 'Clara & Julian Vance',
    location: 'Geneva, Switzerland',
    quote:
      'The morning stillness in our Cliff Villa is unlike anywhere else on earth. Watching stilt fishermen cast their silhouettes against the dawn swell while the scent of wild cinnamon drifted from the gardens felt like timeless poetry.',
    stayedIn: 'Ocean Cliff Plunge Villa',
    date: 'February 2026',
  },
  {
    guest: 'Dr. Hiroshi Tanaka',
    location: 'Kyoto, Japan',
    quote:
      'As someone deeply invested in integrative medicine, Dr. Wickremasinghe’s Ayurvedic diagnosis and the Shirodhara therapy brought my mind into a state of profound clarity that lasted for weeks.',
    stayedIn: 'Cinnamon Heritage Pavilion',
    date: 'March 2026',
  },
  {
    guest: 'Elena Rostova',
    location: 'London, United Kingdom',
    quote:
      'No gaudy hotel lobbies or loud beach clubs. Just immaculate teak woodwork, warm sand beneath your bare feet, and yellowfin tuna caught two hours prior. Pure, refined sanctuary.',
    stayedIn: 'Weligama Bay Royal Penthouse',
    date: 'April 2026',
  },
];
