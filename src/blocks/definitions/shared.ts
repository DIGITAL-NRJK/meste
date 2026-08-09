import type { Field } from 'payload'

export const headingFields: Field[] = [
  {
    name: 'eyebrow',
    type: 'text',
    localized: true,
  },
  {
    name: 'heading',
    type: 'text',
    localized: true,
    required: true,
  },
  {
    name: 'headingLevel',
    type: 'select',
    admin: {
      description: 'Preserve a logical heading outline; this is not a visual size control.',
    },
    defaultValue: 'h2',
    enumName: 'block_heading_level',
    options: ['h2', 'h3'],
    required: true,
  },
]

export const blockCTAFields: Field = {
  name: 'action',
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
  label: 'Action',
}

export const restrainedToneField: Field = {
  name: 'tone',
  type: 'select',
  defaultValue: 'ivory',
  enumName: 'block_tone',
  options: [
    { label: 'Ivory', value: 'ivory' },
    { label: 'Forest', value: 'forest' },
    { label: 'Burgundy', value: 'burgundy' },
    { label: 'Charcoal', value: 'charcoal' },
  ],
  required: true,
}
