import type { Field } from 'payload'

export const localeReadinessField: Field = {
  name: 'localeReadiness',
  type: 'group',
  admin: {
    description:
      'A locale is public only after its copy and required media have been reviewed. Publishing alone is not sufficient.',
    position: 'sidebar',
  },
  fields: [
    {
      name: 'en',
      type: 'checkbox',
      defaultValue: false,
      label: 'English ready',
    },
    {
      name: 'fr',
      type: 'checkbox',
      defaultValue: false,
      label: 'French ready',
    },
  ],
  label: 'Locale readiness',
}

export const sortOrderField: Field = {
  name: 'sortOrder',
  type: 'number',
  admin: {
    description: 'Lower numbers appear first.',
    position: 'sidebar',
  },
  defaultValue: 100,
  index: true,
  min: 0,
}

export const seedKeyField: Field = {
  name: 'seedKey',
  type: 'text',
  admin: {
    hidden: true,
    readOnly: true,
  },
  index: true,
  unique: true,
}

export const featuredField: Field = {
  name: 'featured',
  type: 'checkbox',
  defaultValue: false,
}

export const localizedTitleField: Field = {
  name: 'title',
  type: 'text',
  localized: true,
  required: true,
}

export const localizedDescriptionField: Field = {
  name: 'description',
  type: 'textarea',
  localized: true,
}

export const localeField: Field = {
  name: 'locale',
  type: 'select',
  options: [
    { label: 'English', value: 'en' },
    { label: 'French', value: 'fr' },
  ],
  required: true,
}

export const seoFields: Field = {
  name: 'seo',
  type: 'group',
  admin: {
    description: 'Optional search and sharing overrides. Empty fields use approved site defaults.',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      maxLength: 70,
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
      maxLength: 170,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'canonicalURL',
      type: 'text',
      localized: true,
    },
    {
      name: 'noIndex',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
  label: 'SEO',
}

export const ctaFields: Field = {
  name: 'cta',
  type: 'group',
  fields: [
    {
      name: 'label',
      type: 'text',
      localized: true,
    },
    {
      name: 'route',
      type: 'select',
      options: [
        { label: 'About', value: 'about' },
        { label: 'Contact', value: 'contact' },
        { label: 'Experience', value: 'experience' },
        { label: 'Fresh', value: 'fresh' },
        { label: 'Gallery', value: 'gallery' },
        { label: 'Home', value: 'home' },
        { label: 'Menus', value: 'menus' },
        { label: 'Quote', value: 'quote' },
        { label: 'Services', value: 'services' },
      ],
    },
  ],
  label: 'Call to action',
}
