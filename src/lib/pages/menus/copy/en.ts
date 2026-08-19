import type { MenusContent } from '@/lib/pages/menus/types'

/**
 * English baseline for the menu collection.
 *
 * Every dish name, composition, culinary level and signature menu title is the
 * approved menu material, verbatim. Nothing is described beyond what that
 * material states: no allergen, no dietary label, no provenance claim and no
 * price — the brief forbids inferring any of them, and a unit test enforces the
 * price rule.
 *
 * The dishes render as an editorial list rather than a photographic rail
 * because no approved dish photography exists yet.
 */
export const menusCopyEN: MenusContent = {
  meta: {
    title: 'Menu collection',
    description:
      'A culinary collection rooted in Africa and open to the world: classics, signatures and chef’s creations, from cocktail bites to desserts.',
  },
  skipToContent: 'Skip to content',
  intro: {
    eyebrow: 'The collection',
    headingLead: 'A culinary book,',
    headingAccent: 'not a price list.',
    lede: 'Dishes rooted in Africa — from Congo to Ghana — in dialogue with the cuisines, techniques and travels that shaped this house. Every menu is composed with you.',
  },
  levels: {
    eyebrow: 'Three levels',
    heading: 'The same kitchen,',
    headingAccent: 'three registers.',
    items: [
      {
        name: 'MESTE Classics',
        body: 'Familiar dishes, generous, precisely executed.',
        list: [],
      },
      {
        name: 'MESTE Signatures',
        body: 'Recognisable dishes elevated through:',
        list: ['technique', 'presentation', 'texture', 'sauce', 'composition'],
      },
      {
        name: 'Chef’s Creations',
        body: 'More artistic, audacious or experimental creations.',
        list: [],
      },
    ],
  },
  signatureDishes: {
    eyebrow: 'Signature dishes',
    heading: 'Twelve plates that say',
    headingAccent: 'what this house is.',
    intro: 'Composition is listed as it is served. Photography is being shot.',
    items: [
      {
        name: 'Croustillant de chikwangue & smoked fish',
        composition: 'smoked fish / lime / pickled red onion / green herb oil',
      },
      {
        name: 'Jollof Arancini',
        composition: 'crispy jollof / braised chicken centre / smoked tomato / herbs',
      },
      {
        name: 'Saka-Saka Croquette',
        composition: 'cassava leaves / melting centre / ginger-lime cream',
      },
      {
        name: 'Kelewele Mille-Feuille',
        composition: 'spiced plantain / lime avocado / roasted peanuts',
      },
      {
        name: 'Mama Emma Chicken 2.0',
        composition: 'ginger / lime / spiced glaze / roasted peanuts / fresh herbs',
      },
      {
        name: 'Saka-Saka & Prawn',
        composition: 'creamy saka-saka / braised prawn / green oil / cassava crisp',
      },
      {
        name: 'Maboké MESTE',
        composition: 'fish / confit tomato / ginger / aromatics / cooking jus',
      },
      {
        name: 'Chicken Supreme with Moambé Reduction',
        composition:
          'braised or roasted chicken / reduced moambé jus / smoked sweet potato / glazed vegetables',
      },
      {
        name: 'Pressed Alloco',
        composition: 'pressed ripe plantain / golden crisp exterior',
      },
      {
        name: 'Mikate Profiterole',
        composition: 'light mikate / vanilla cream / dark chocolate / ginger',
      },
      {
        name: 'Accra Sunset',
        composition: 'mango / pineapple / coconut / bissap / plantain crumble',
      },
      {
        name: 'Coco · Pineapple · Lime',
        composition: 'coconut biscuit / pineapple insert / light coconut mousse / lime',
      },
    ],
  },
  families: {
    eyebrow: 'Families',
    heading: 'From the first tray',
    headingAccent: 'to the last spoon.',
    items: [
      {
        name: 'Cocktail Classics',
        note: 'These remain important commercial dishes.',
        dishes: [
          'Chicken Skewers — Mama Emma Style',
          'Braised Chicken Wings',
          'Spiced Beef Meatballs',
          'Braised Sausages',
          'Alloco Bites',
          'Mama Emma Canapés',
          'Pastel',
          'Banana fritters',
          'Sweet croquettes',
        ],
      },
      {
        name: 'Chef’s Cocktail Creations',
        note: null,
        dishes: [
          'Pastel de poisson fumé',
          'Plantain Cannelloni',
          'Bissap Glazed Beef',
          'Mini-Maboké',
          'Cassava Taco',
          'Sweet Potato Pavé',
        ],
      },
      {
        name: 'Starters — Fresh & Elegant',
        note: null,
        dishes: [
          'Betterave rôtie',
          'Congo-Ghana Garden',
          'Saka-Saka & Prawn',
          'Avocado & Mango Tartare',
          'Smoked Sweet Potato Velouté',
          'Smoked Fish & Cassava',
        ],
      },
      {
        name: 'Fish & Seafood',
        note: null,
        dishes: [
          'Tilapia au feu',
          'Maboké MESTE',
          'Smoked catfish',
          'Braised prawns',
          'Grilled fish & bissap butter',
        ],
      },
      {
        name: 'Poultry',
        note: null,
        dishes: [
          'Chicken Supreme with Moambé Reduction',
          'Ginger Fire Chicken',
          'Chicken Heritage',
          'Braised Chicken & Pineapple',
        ],
      },
      {
        name: 'Meat',
        note: null,
        dishes: [
          'Braised lamb',
          'Beef & Penja',
          'Slow Cooked Beef',
          'Tamarind Ginger Pork',
          'Lamb & Jollof',
        ],
      },
      {
        name: 'The Vegetable Table',
        note: 'Vegetarian food is treated as a culinary experience in its own right, never as the same meal without the meat.',
        dishes: [
          'Saka-Saka Ballotine',
          'Fire-Roasted Aubergine',
          'Braised Cabbage',
          'Cassava & Beans',
          'Plantain Steak',
          'Sweet Potato & Greens',
        ],
      },
      {
        name: 'Signature Sides',
        note: null,
        dishes: [
          'Grilled Chikwangue',
          'Pressed Alloco',
          'Herb Attiéké',
          'Smoked Jollof',
          'Coconut Lime Rice',
          'Crispy Cassava',
          'Roasted Sweet Potato',
          'Seasonal Fire Vegetables',
        ],
      },
      {
        name: 'Sweet Mama Emma',
        note: null,
        dishes: [
          'Mikate Profiterole',
          'Bissap Banana',
          'Accra Sunset',
          'Coco · Pineapple · Lime',
          'Dark Chocolate & Ginger',
          'Coconut Flan 2.0',
          'Cassava Cake',
          'Tropical Pavlova',
        ],
      },
    ],
  },
  signatureMenus: {
    eyebrow: 'Signature menus',
    heading: 'Five complete',
    headingAccent: 'compositions.',
    note: 'Each is built course by course with you, and adapted to your format, your room and your guests.',
    items: [
      'Heritage Contemporary',
      'Between Accra & Brazzaville',
      'Fire & Heritage',
      'Garden & Coast',
      'Roots & Garden',
    ],
  },
  closing: {
    heading: 'Your menu is written with you.',
    body: 'Tell us the occasion and the format, and we will compose it course by course.',
    action: { label: 'Plan your event', route: 'quote' },
  },
}
