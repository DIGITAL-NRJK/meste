import type { GlobalConfig } from 'payload'

import { createEditorialGlobal } from '@/collections/fields/editorial'
import { createPreviewURL } from '@/lib/preview/urls'

/**
 * The threshold shown over the homepage on a visitor's first arrival.
 *
 * It is disabled by default: enabling it is an editorial decision, and the site
 * behaves exactly as before until someone makes it. Empty text fields fall back
 * to the approved wording in `src/lib/entry/copy`, so the veil can never render
 * blank.
 */
export const EntryScreen: GlobalConfig = createEditorialGlobal({
  slug: 'entry-screen',
  admin: {
    description:
      'Optional threshold shown over the homepage on first arrival. Disabled by default. It never replaces the homepage: the address stays the same and search engines always receive the homepage itself.',
  },
  fields: [
    {
      name: 'enabled',
      type: 'checkbox',
      admin: {
        description:
          'When off, visitors land directly on the homepage. When on, they see this threshold once per browsing session.',
      },
      defaultValue: false,
    },
    {
      name: 'eyebrow',
      type: 'text',
      admin: {
        description: 'Small line above the headline. Leave empty to use the approved default.',
      },
      localized: true,
      maxLength: 90,
    },
    {
      name: 'heading',
      type: 'text',
      admin: { description: 'The headline. Leave empty to use the approved default.' },
      localized: true,
      maxLength: 90,
    },
    {
      name: 'body',
      type: 'textarea',
      admin: { description: 'One or two sentences. Leave empty to use the approved default.' },
      localized: true,
      maxLength: 240,
    },
    {
      name: 'ctaLabel',
      type: 'text',
      admin: { description: 'Label of the button that opens the site.' },
      localized: true,
      maxLength: 40,
    },
  ],
  label: 'Entry screen',
  preview: createPreviewURL(({ locale }) => `/${locale}`),
})
