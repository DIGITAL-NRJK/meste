import { unstable_cache } from 'next/cache'

import type { Locale } from '@/lib/i18n/config'
import { getServicesBaseline } from '@/lib/pages/services/content'
import type { ReceptionFormat, ServicesContent } from '@/lib/pages/services/types'
import { getPayloadClient } from '@/lib/payload/client'
import {
  mergeClosing,
  mergeIntro,
  mergeList,
  mergeStrings,
  readTextList,
} from '@/lib/payload/queries/pageContent'
import { mergePageMeta } from '@/lib/payload/queries/pageMeta'
import { readPath, readString, withImage } from '@/lib/payload/records'

const LIST_LIMIT = 12

/**
 * Published `reception-formats` replace the baseline formats wholesale, so an
 * editor never ends up with a half-CMS, half-code list in which only some
 * entries can be corrected. Anything the CMS has nothing to say about keeps the
 * approved wording, and an unreachable database degrades to it.
 *
 * `verifiedGuestRange` is deliberately not read: the brief forbids publishing a
 * guest range that has not been confirmed, and the field name says which one it
 * would take. It joins the page the day an editor fills it in.
 */
async function queryServicesContent(locale: Locale): Promise<ServicesContent> {
  const baseline = getServicesBaseline(locale)

  try {
    const payload = await getPayloadClient()
    const listOptions = {
      depth: 1,
      draft: false,
      fallbackLocale: false as const,
      limit: LIST_LIMIT,
      locale,
      overrideAccess: false,
      pagination: false as const,
      sort: 'sortOrder',
    }

    const [formats, page] = await Promise.all([
      payload.find({ ...listOptions, collection: 'reception-formats' }),
      payload.find({
        collection: 'pages',
        depth: 1,
        draft: false,
        fallbackLocale: false,
        limit: 1,
        locale,
        overrideAccess: false,
        pagination: false,
        where: { pageKind: { equals: 'services' } },
      }),
    ])

    const formatItems: ReceptionFormat[] = formats.docs.flatMap((doc, index) => {
      const name = readString(doc.name)

      if (!name) {
        return []
      }

      const fallback = baseline.formats.items[index]?.media ?? null

      return [
        {
          name,
          description: readString(doc.description) ?? '',
          media: fallback ? withImage(fallback, doc.gallery?.[0]) : null,
        },
      ]
    })

    const doc = page.docs[0]
    const editorial = readPath(doc, 'editorial')
    const content = readPath(doc, 'servicesContent')

    const worlds = mergeStrings(baseline.worlds, readPath(content, 'worlds'), [
      'eyebrow',
      'heading',
      'headingAccent',
    ])

    return {
      ...baseline,
      closing: mergeClosing(baseline.closing, readPath(editorial, 'closing')),
      formats: {
        ...mergeStrings(baseline.formats, readPath(content, 'formats'), [
          'eyebrow',
          'heading',
          'headingAccent',
          'note',
        ]),
        items: formatItems.length > 0 ? formatItems : baseline.formats.items,
      },
      intro: mergeIntro(baseline.intro, readPath(editorial, 'intro')),
      meta: mergePageMeta(baseline.meta, doc),
      references: mergeStrings(baseline.references, readPath(content, 'references'), [
        'body',
        'eyebrow',
        'heading',
      ]),
      worlds: {
        ...worlds,
        items: mergeList(baseline.worlds.items, readPath(content, 'worlds', 'items'), (entry) => {
          const title = readString(readPath(entry, 'title'))
          const items = readTextList(readPath(entry, 'items'))

          return title && items.length > 0 ? { items, title } : null
        }),
      },
    }
  } catch (error) {
    console.error('[services] falling back to the editorial baseline', error)
    return baseline
  }
}

export function getServicesContent(locale: Locale): Promise<ServicesContent> {
  return unstable_cache(() => queryServicesContent(locale), ['services-content', locale], {
    tags: ['collection:pages', 'collection:services', 'collection:reception-formats'],
  })()
}
