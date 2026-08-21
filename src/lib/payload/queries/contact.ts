import { unstable_cache } from 'next/cache'

import type { Locale } from '@/lib/i18n/config'
import { getContactBaseline } from '@/lib/pages/contact/content'
import type { ContactContent } from '@/lib/pages/contact/types'
import { getPayloadClient } from '@/lib/payload/client'
import { mergeClosing, mergeIntro } from '@/lib/payload/queries/pageContent'
import { mergePageMeta } from '@/lib/payload/queries/pageMeta'
import { readPath, readString } from '@/lib/payload/records'

/**
 * Framing copy for the contact page, merged over the approved baseline field by
 * field.
 *
 * The contact details themselves are not read here: they arrive with the site
 * chrome from `ContactSettings`, so a single query owns them and no page can
 * publish a second, divergent copy. Neither are the channel labels — Telephone,
 * Email, Address each name a value the code chooses to render or hide, and an
 * editable label could end up sitting above the wrong one.
 */
async function queryContactContent(locale: Locale): Promise<ContactContent> {
  const baseline = getContactBaseline(locale)

  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'pages',
      depth: 1,
      draft: false,
      fallbackLocale: false,
      limit: 1,
      locale,
      overrideAccess: false,
      pagination: false,
      where: { pageKind: { equals: 'contact' } },
    })

    const doc = result.docs[0]

    if (!doc) {
      return baseline
    }

    const editorial = readPath(doc, 'editorial')
    const channels = readPath(doc, 'contactChannels')

    return {
      channels: {
        ...baseline.channels,
        eyebrow: readString(readPath(channels, 'eyebrow')) ?? baseline.channels.eyebrow,
        heading: readString(readPath(channels, 'heading')) ?? baseline.channels.heading,
      },
      closing: mergeClosing(baseline.closing, readPath(editorial, 'closing')),
      intro: mergeIntro(baseline.intro, readPath(editorial, 'intro')),
      meta: mergePageMeta(baseline.meta, doc),
      skipToContent: baseline.skipToContent,
    }
  } catch (error) {
    console.error('[contact] falling back to the editorial baseline', error)
    return baseline
  }
}

export function getContactContent(locale: Locale): Promise<ContactContent> {
  return unstable_cache(() => queryContactContent(locale), ['contact-content', locale], {
    tags: ['collection:pages', 'page:contact'],
  })()
}
