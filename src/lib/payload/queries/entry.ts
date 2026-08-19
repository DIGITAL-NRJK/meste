import { unstable_cache } from 'next/cache'

import { getEntryBaseline } from '@/lib/entry/content'
import type { EntryContent } from '@/lib/entry/types'
import type { Locale } from '@/lib/i18n/config'
import { getPayloadClient } from '@/lib/payload/client'
import { readString } from '@/lib/payload/records'

/**
 * The veil only appears when an editor has explicitly enabled it. Any field left
 * empty keeps the approved baseline wording, and an unreachable database leaves
 * the veil off rather than blocking the homepage behind a broken threshold.
 */
async function queryEntryContent(locale: Locale): Promise<EntryContent> {
  const baseline = getEntryBaseline(locale)

  try {
    const payload = await getPayloadClient()
    const global = await payload.findGlobal({
      slug: 'entry-screen',
      depth: 0,
      draft: false,
      fallbackLocale: false,
      locale,
      overrideAccess: false,
    })

    if (global.enabled !== true) {
      return { ...baseline, enabled: false }
    }

    return {
      body: readString(global.body) ?? baseline.body,
      ctaLabel: readString(global.ctaLabel) ?? baseline.ctaLabel,
      enabled: true,
      eyebrow: readString(global.eyebrow) ?? baseline.eyebrow,
      heading: readString(global.heading) ?? baseline.heading,
      location: baseline.location,
      signature: baseline.signature,
    }
  } catch (error) {
    console.error('[entry] keeping the veil disabled', error)
    return { ...baseline, enabled: false }
  }
}

export function getEntryContent(locale: Locale): Promise<EntryContent> {
  return unstable_cache(() => queryEntryContent(locale), ['entry-screen', locale], {
    tags: ['global:entry-screen'],
  })()
}
