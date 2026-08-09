import type { Block } from 'payload'

import { blockCTAFields, headingFields, restrainedToneField } from './shared'

function relationshipShowcase(options: {
  dbName: string
  maxRows: number
  relationTo: 'fresh-products' | 'menu-items' | 'services' | 'signature-menus'
  slug: string
}): Block {
  return {
    slug: options.slug,
    dbName: options.dbName,
    fields: [
      ...headingFields,
      {
        name: 'items',
        type: 'relationship',
        hasMany: true,
        maxRows: options.maxRows,
        relationTo: options.relationTo,
      },
      {
        name: 'layout',
        type: 'select',
        defaultValue: 'editorial',
        options: ['editorial', 'immersive', 'compact'],
        required: true,
      },
      restrainedToneField,
      blockCTAFields,
    ],
  }
}

export const ServiceShowcaseBlock = relationshipShowcase({
  dbName: 'service_showcase',
  maxRows: 4,
  relationTo: 'services',
  slug: 'serviceShowcase',
})

export const MenuShowcaseBlock = relationshipShowcase({
  dbName: 'menu_showcase',
  maxRows: 5,
  relationTo: 'signature-menus',
  slug: 'menuShowcase',
})

export const SignatureDishesBlock = relationshipShowcase({
  dbName: 'signature_dishes',
  maxRows: 8,
  relationTo: 'menu-items',
  slug: 'signatureDishes',
})

export const FreshProductsBlock = relationshipShowcase({
  dbName: 'fresh_products_block',
  maxRows: 6,
  relationTo: 'fresh-products',
  slug: 'freshProducts',
})

export const ProcessBlock: Block = {
  slug: 'process',
  dbName: 'process',
  fields: [
    ...headingFields,
    {
      name: 'steps',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          localized: true,
        },
      ],
      maxRows: 6,
      minRows: 2,
      required: true,
    },
    restrainedToneField,
  ],
}

export const MamaEmmaExperienceTeaserBlock: Block = {
  slug: 'mamaEmmaExperienceTeaser',
  dbName: 'experience_teaser',
  fields: [
    ...headingFields,
    {
      name: 'description',
      type: 'textarea',
      localized: true,
      required: true,
    },
    {
      name: 'disclaimer',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    blockCTAFields,
  ],
}

export const CTABlock: Block = {
  slug: 'cta',
  dbName: 'cta',
  fields: [...headingFields, restrainedToneField, blockCTAFields],
  labels: { plural: 'Calls to action', singular: 'Call to action' },
}
