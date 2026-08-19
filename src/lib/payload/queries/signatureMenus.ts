import { unstable_cache } from 'next/cache'

import type { Locale } from '@/lib/i18n/config'
import { getPayloadClient } from '@/lib/payload/client'
import { mapSignatureMenu, type PublicSignatureMenu } from '@/lib/payload/mappers'

/** Publication filtering comes from collection access control; see services.ts. */
async function queryPublishedSignatureMenu(
  locale: Locale,
  slug: string,
): Promise<PublicSignatureMenu | null> {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'signature-menus',
    depth: 1,
    draft: false,
    fallbackLocale: false,
    limit: 1,
    locale,
    overrideAccess: false,
    pagination: false,
    where: { slug: { equals: slug } },
  })

  const doc = result.docs[0]
  return doc ? mapSignatureMenu(doc) : null
}

export function getPublishedSignatureMenu(
  locale: Locale,
  slug: string,
): Promise<PublicSignatureMenu | null> {
  return unstable_cache(
    () => queryPublishedSignatureMenu(locale, slug),
    ['signature-menu', locale, slug],
    {
      tags: ['collection:signature-menus', `signature-menu:${locale}:${slug}`],
    },
  )()
}
