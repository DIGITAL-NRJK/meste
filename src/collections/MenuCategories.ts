import type { CollectionConfig } from 'payload'

import { createEditorialCollection } from './fields/editorial'
import { seedKeyField, sortOrderField } from './fields/shared'
import { slugField } from './fields/slug'

/**
 * The families named in the approved menu collection, in the order the brief
 * lists them. `mama-emma-fresh` is deliberately absent: the beverage range has
 * its own collection and its own page, and duplicating it here would create two
 * sources of truth for the same six products.
 */
export const menuFamilies = [
  'cocktail-classics',
  'meste-signature-cocktails',
  'chef-cocktail-creations',
  'starters',
  'heritage-african-roots',
  'fish-seafood',
  'poultry',
  'meat',
  'vegetable-table',
  'sides',
  'desserts',
] as const

export const MenuCategories: CollectionConfig = createEditorialCollection({
  slug: 'menu-categories',
  admin: {
    defaultColumns: ['name', 'family', 'sortOrder', '_status'],
    description: 'Editorial groupings and filter keys for individual menu items.',
    useAsTitle: 'name',
  },
  fields: [
    seedKeyField,
    {
      name: 'name',
      type: 'text',
      localized: true,
      required: true,
    },
    slugField(),
    {
      name: 'family',
      type: 'select',
      options: menuFamilies.map((family) => ({
        label: family.replaceAll('-', ' '),
        value: family,
      })),
      required: true,
      unique: true,
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
    },
    sortOrderField,
  ],
  includeSEO: false,
})
