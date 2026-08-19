import type { MenusContent } from '@/lib/pages/menus/types'

/**
 * French baseline for the menu collection.
 *
 * Dish names are proper names and stay exactly as the approved material writes
 * them — several are already French. Compositions are translated ingredient
 * lists; nothing is added to them. No allergen, dietary label or price appears
 * here any more than in the English baseline.
 */
export const menusCopyFR: MenusContent = {
  meta: {
    title: 'Collection de menus',
    description:
      'Une collection culinaire enracinée en Afrique et ouverte sur le monde : classiques, signatures et créations du chef, de la bouchée au dessert.',
  },
  skipToContent: 'Aller au contenu',
  intro: {
    eyebrow: 'La collection',
    headingLead: 'Un livre de cuisine,',
    headingAccent: 'pas une carte de prix.',
    lede: 'Des plats enracinés en Afrique — du Congo au Ghana — en dialogue avec les cuisines, les techniques et les voyages qui ont façonné cette maison. Chaque menu se compose avec vous.',
  },
  levels: {
    eyebrow: 'Trois niveaux',
    heading: 'Une même cuisine,',
    headingAccent: 'trois registres.',
    items: [
      {
        name: 'MESTE Classics',
        body: 'Des plats familiers, généreux, exécutés avec précision.',
        list: [],
      },
      {
        name: 'MESTE Signatures',
        body: 'Des plats reconnaissables, élevés par :',
        list: ['la technique', 'le dressage', 'la texture', 'la sauce', 'la composition'],
      },
      {
        name: 'Chef’s Creations',
        body: 'Des créations plus artistiques, audacieuses ou expérimentales.',
        list: [],
      },
    ],
  },
  signatureDishes: {
    eyebrow: 'Plats signature',
    heading: 'Douze assiettes qui disent',
    headingAccent: 'ce qu’est cette maison.',
    intro: 'La composition est indiquée telle qu’elle est servie. Les photographies sont en cours.',
    items: [
      {
        name: 'Croustillant de chikwangue & smoked fish',
        composition: 'poisson fumé / citron vert / oignon rouge mariné / huile d’herbes',
      },
      {
        name: 'Jollof Arancini',
        composition: 'jollof croustillant / cœur de poulet braisé / tomate fumée / herbes',
      },
      {
        name: 'Saka-Saka Croquette',
        composition: 'feuilles de manioc / cœur coulant / crème gingembre-citron vert',
      },
      {
        name: 'Kelewele Mille-Feuille',
        composition: 'plantain épicé / avocat au citron vert / arachides torréfiées',
      },
      {
        name: 'Mama Emma Chicken 2.0',
        composition:
          'gingembre / citron vert / laque épicée / arachides torréfiées / herbes fraîches',
      },
      {
        name: 'Saka-Saka & Prawn',
        composition: 'saka-saka crémeux / gambas braisée / huile verte / chips de manioc',
      },
      {
        name: 'Maboké MESTE',
        composition: 'poisson / tomate confite / gingembre / aromates / jus de cuisson',
      },
      {
        name: 'Chicken Supreme with Moambé Reduction',
        composition:
          'poulet braisé ou rôti / jus de moambé réduit / patate douce fumée / légumes glacés',
      },
      {
        name: 'Pressed Alloco',
        composition: 'plantain mûr pressé / extérieur doré et croustillant',
      },
      {
        name: 'Mikate Profiterole',
        composition: 'mikate léger / crème vanille / chocolat noir / gingembre',
      },
      {
        name: 'Accra Sunset',
        composition: 'mangue / ananas / coco / bissap / crumble de plantain',
      },
      {
        name: 'Coco · Pineapple · Lime',
        composition: 'biscuit coco / insert ananas / mousse légère coco / citron vert',
      },
    ],
  },
  families: {
    eyebrow: 'Familles',
    heading: 'Du premier plateau',
    headingAccent: 'à la dernière cuillère.',
    items: [
      {
        name: 'Cocktail Classics',
        note: 'Ces plats restent des pièces commerciales importantes.',
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
        name: 'Entrées — fraîches et élégantes',
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
        name: 'Poissons & fruits de mer',
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
        name: 'Volailles',
        note: null,
        dishes: [
          'Chicken Supreme with Moambé Reduction',
          'Ginger Fire Chicken',
          'Chicken Heritage',
          'Braised Chicken & Pineapple',
        ],
      },
      {
        name: 'Viandes',
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
        name: 'La table végétale',
        note: 'La cuisine végétarienne est traitée comme une expérience culinaire à part entière, jamais comme le même repas sans la viande.',
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
        name: 'Accompagnements signature',
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
    eyebrow: 'Menus signature',
    heading: 'Cinq compositions',
    headingAccent: 'complètes.',
    note: 'Chacune se construit service après service avec vous, et s’adapte à votre format, à votre lieu et à vos convives.',
    items: [
      'Heritage Contemporary',
      'Between Accra & Brazzaville',
      'Fire & Heritage',
      'Garden & Coast',
      'Roots & Garden',
    ],
  },
  closing: {
    heading: 'Votre menu s’écrit avec vous.',
    body: 'Dites-nous l’occasion et le format, et nous le composerons service après service.',
    action: { label: 'Demander un devis', route: 'quote' },
  },
}
