import { menuFamilies } from '@/collections/MenuCategories'
import type { culinaryLevels } from '@/collections/MenuItems'
import { serviceCategories } from '@/collections/Services'

export const menuCategorySeed = menuFamilies.map((family, index) => ({
  family,
  name: family
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' '),
  seedKey: `menu-category:${family}`,
  slug: family,
  sortOrder: (index + 1) * 10,
}))

export const serviceSeed = [
  {
    category: serviceCategories[0],
    positioning: 'Weddings, birthdays, baptisms and private receptions.',
    seedKey: 'service:celebrations',
    slug: 'celebrations',
    sortOrder: 10,
    title: 'Celebrations',
  },
  {
    category: serviceCategories[1],
    positioning: 'Launches, business lunches, cocktails, conferences and corporate dinners.',
    seedKey: 'service:corporate',
    slug: 'corporate',
    sortOrder: 20,
    title: 'Corporate',
  },
  {
    category: serviceCategories[2],
    positioning: 'Embassies, consulates, institutions and official receptions.',
    seedKey: 'service:institutional-diplomatic',
    slug: 'institutional-diplomatic',
    sortOrder: 30,
    title: 'Institutional & Diplomatic',
  },
  {
    category: serviceCategories[3],
    positioning: 'Private dining, VIP events and custom culinary concepts.',
    seedKey: 'service:bespoke-experiences',
    slug: 'bespoke-experiences',
    sortOrder: 40,
    title: 'Bespoke Experiences',
  },
] as const

export const receptionFormatSeed = ['Cocktail', 'Buffet', 'Table Service', 'Brunch', 'Bespoke'].map(
  (name, index) => ({
    name,
    seedKey: `reception-format:${name.toLowerCase().replaceAll(' ', '-')}`,
    slug: name.toLowerCase().replaceAll(' ', '-'),
    sortOrder: (index + 1) * 10,
  }),
)

export const signatureMenuSeed = [
  'Heritage Contemporary',
  'Between Accra & Brazzaville',
  'Fire & Heritage',
  'Garden & Coast',
  'Roots & Garden',
].map((title, index) => ({
  seedKey: `signature-menu:${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
  slug: title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, ''),
  sortOrder: (index + 1) * 10,
  title,
}))

export const freshProductSeed = [
  { accentColor: 'pineapple-gold', name: 'Pineapple' },
  { accentColor: 'bissap-burgundy', name: 'Hibiscus / Bissap' },
  { accentColor: 'ginger-amber', name: 'Ginger' },
  { accentColor: 'beetroot-ruby', name: 'Pineapple & Beetroot' },
  { accentColor: 'orange-citrus', name: 'Pineapple & Orange' },
  { accentColor: 'watermelon-coral', name: 'Pineapple & Watermelon' },
].map((product, index) => ({
  ...product,
  seedKey: `fresh:${product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
  slug: product.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, ''),
  sortOrder: (index + 1) * 10,
}))

type CulinaryLevel = (typeof culinaryLevels)[number]
type MenuFamily = (typeof menuFamilies)[number]

export type MenuItemSeed = {
  category: MenuFamily
  composition?: string[]
  level: CulinaryLevel
  name: string
}

export const menuItemSeed: MenuItemSeed[] = [
  {
    category: 'starters',
    composition: ['smoked fish', 'lime', 'pickled red onion', 'green herb oil'],
    level: 'signature',
    name: 'Croustillant de chikwangue & smoked fish',
  },
  {
    category: 'chef-cocktail-creations',
    composition: ['crispy jollof', 'braised chicken centre', 'smoked tomato', 'herbs'],
    level: 'signature',
    name: 'Jollof Arancini',
  },
  {
    category: 'chef-cocktail-creations',
    composition: ['cassava leaves', 'melting centre', 'ginger-lime cream'],
    level: 'signature',
    name: 'Saka-Saka Croquette',
  },
  {
    category: 'starters',
    composition: ['spiced plantain', 'lime avocado', 'roasted peanuts'],
    level: 'signature',
    name: 'Kelewele Mille-Feuille',
  },
  {
    category: 'poultry',
    composition: ['ginger', 'lime', 'spiced glaze', 'roasted peanuts', 'fresh herbs'],
    level: 'signature',
    name: 'Mama Emma Chicken 2.0',
  },
  {
    category: 'starters',
    composition: ['creamy saka-saka', 'braised prawn', 'green oil', 'cassava crisp'],
    level: 'signature',
    name: 'Saka-Saka & Prawn',
  },
  {
    category: 'fish-seafood',
    composition: ['fish', 'confit tomato', 'ginger', 'aromatics', 'cooking jus'],
    level: 'signature',
    name: 'Maboké MESTE',
  },
  {
    category: 'poultry',
    composition: [
      'braised or roasted chicken',
      'reduced moambé jus',
      'smoked sweet potato',
      'glazed vegetables',
    ],
    level: 'signature',
    name: 'Chicken Supreme with Moambé Reduction',
  },
  {
    category: 'sides',
    composition: ['pressed ripe plantain', 'golden crisp exterior'],
    level: 'signature',
    name: 'Pressed Alloco',
  },
  {
    category: 'desserts',
    composition: ['light mikate', 'vanilla cream', 'dark chocolate', 'ginger'],
    level: 'signature',
    name: 'Mikate Profiterole',
  },
  {
    category: 'desserts',
    composition: ['mango', 'pineapple', 'coconut', 'bissap', 'plantain crumble'],
    level: 'signature',
    name: 'Accra Sunset',
  },
  {
    category: 'desserts',
    composition: ['coconut biscuit', 'pineapple insert', 'light coconut mousse', 'lime'],
    level: 'signature',
    name: 'Coco · Pineapple · Lime',
  },
  ...[
    'Chicken Skewers — Mama Emma Style',
    'Braised Chicken Wings',
    'Spiced Beef Meatballs',
    'Braised Sausages',
    'Alloco Bites',
    'Mama Emma Canapés',
    'Pastel',
    'Banana fritters',
    'Sweet croquettes',
  ].map((name): MenuItemSeed => ({ category: 'cocktail-classics', level: 'classic', name })),
  ...[
    'Pastel de poisson fumé',
    'Plantain Cannelloni',
    'Bissap Glazed Beef',
    'Mini-Maboké',
    'Cassava Taco',
    'Sweet Potato Pavé',
  ].map((name): MenuItemSeed => ({
    category: 'chef-cocktail-creations',
    level: 'chef-creation',
    name,
  })),
  {
    category: 'starters',
    composition: ['avocado cream', 'bissap reduction', 'roasted cashew'],
    level: 'signature',
    name: 'Betterave rôtie',
  },
  {
    category: 'starters',
    composition: [
      'young leaves',
      'mango',
      'avocado',
      'cucumber',
      'roasted plantain',
      'peanuts',
      'pickles',
      'bissap-lime dressing',
    ],
    level: 'signature',
    name: 'Congo-Ghana Garden',
  },
  ...['Avocado & Mango Tartare', 'Smoked Sweet Potato Velouté', 'Smoked Fish & Cassava'].map(
    (name): MenuItemSeed => ({ category: 'starters', level: 'classic', name }),
  ),
  ...['Tilapia au feu', 'Smoked catfish', 'Braised prawns', 'Grilled fish & bissap butter'].map(
    (name): MenuItemSeed => ({ category: 'fish-seafood', level: 'classic', name }),
  ),
  ...['Ginger Fire Chicken', 'Chicken Heritage', 'Braised Chicken & Pineapple'].map(
    (name): MenuItemSeed => ({ category: 'poultry', level: 'classic', name }),
  ),
  ...[
    'Braised lamb · aubergine · bissap · plantain',
    'Beef & Penja',
    'Slow Cooked Beef',
    'Tamarind Ginger Pork',
    'Lamb & Jollof',
  ].map((name): MenuItemSeed => ({ category: 'meat', level: 'classic', name })),
  ...[
    'Saka-Saka Ballotine',
    'Fire-Roasted Aubergine',
    'Braised Cabbage',
    'Cassava & Beans',
    'Plantain Steak',
    'Sweet Potato & Greens',
  ].map((name): MenuItemSeed => ({ category: 'vegetable-table', level: 'signature', name })),
  ...[
    'Grilled Chikwangue',
    'Herb Attiéké',
    'Smoked Jollof',
    'Coconut Lime Rice',
    'Crispy Cassava',
    'Roasted Sweet Potato',
    'Seasonal Fire Vegetables',
  ].map((name): MenuItemSeed => ({ category: 'sides', level: 'classic', name })),
  ...[
    'Bissap Banana',
    'Dark Chocolate & Ginger',
    'Coconut Flan 2.0',
    'Cassava Cake',
    'Tropical Pavlova',
    'Classical Mikate',
    'Fruit',
    'Banana Cake',
    'Coconut Flan',
  ].map((name): MenuItemSeed => ({ category: 'desserts', level: 'classic', name })),
]
