import type { GlobalConfig } from 'payload'

import { controlledBlocks } from '@/blocks/definitions'
import { createEditorialGlobal } from '@/collections/fields/editorial'
import { createPreviewURL } from '@/lib/preview/urls'

export const HomePage: GlobalConfig = createEditorialGlobal({
  slug: 'home-page',
  dbName: 'home',
  admin: {
    description:
      'Constrained homepage composition. Final rendering and visual validation belong to Phase 4.',
  },
  fields: [
    {
      name: 'internalTitle',
      type: 'text',
      defaultValue: 'Homepage',
      required: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: controlledBlocks,
      maxRows: 16,
    },
    {
      name: 'featuredServices',
      type: 'relationship',
      hasMany: true,
      maxRows: 4,
      relationTo: 'services',
    },
    {
      name: 'featuredDishes',
      type: 'relationship',
      hasMany: true,
      maxRows: 8,
      relationTo: 'menu-items',
    },
    {
      name: 'featuredFreshProducts',
      type: 'relationship',
      hasMany: true,
      maxRows: 6,
      relationTo: 'fresh-products',
    },
  ],
  includeSEO: true,
  label: 'Homepage',
  preview: createPreviewURL(({ locale }) => `/${locale}`),
})
