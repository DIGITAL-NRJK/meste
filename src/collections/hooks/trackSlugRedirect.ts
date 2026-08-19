import type { CollectionAfterChangeHook, CollectionConfig } from 'payload'

import { isLocale } from '@/lib/i18n/config'

type Prefixes = Record<'en' | 'fr', string>

export function trackSlugRedirect(options: {
  prefixes: Prefixes
  sourceCollection: string
}): CollectionAfterChangeHook {
  return async ({ context, doc, previousDoc, req }) => {
    if (context.skipRedirects === true) {
      return doc
    }

    const oldSlug = typeof previousDoc?.slug === 'string' ? previousDoc.slug : undefined
    const newSlug = typeof doc.slug === 'string' ? doc.slug : undefined
    const localeValue = String(req.locale ?? 'en')

    if (
      !oldSlug ||
      !newSlug ||
      oldSlug === newSlug ||
      previousDoc?._status !== 'published' ||
      !isLocale(localeValue)
    ) {
      return doc
    }

    const prefix = options.prefixes[localeValue]
    const fromPath = `/${localeValue}${prefix}/${oldSlug}`
    const toPath = `/${localeValue}${prefix}/${newSlug}`

    const existing = await req.payload.find({
      collection: 'redirects',
      limit: 1,
      overrideAccess: true,
      where: { fromPath: { equals: fromPath } },
    })

    const data = {
      fromPath,
      locale: localeValue,
      permanent: true,
      sourceCollection: options.sourceCollection,
      sourceDocumentID: String(doc.id),
      toPath,
    }

    if (existing.docs[0]) {
      await req.payload.update({
        id: existing.docs[0].id,
        collection: 'redirects',
        data,
        overrideAccess: true,
      })
    } else {
      await req.payload.create({
        collection: 'redirects',
        data,
        overrideAccess: true,
      })
    }

    return doc
  }
}

export function withSlugRedirects(config: CollectionConfig, prefixes: Prefixes): CollectionConfig {
  return {
    ...config,
    hooks: {
      ...config.hooks,
      afterChange: [
        ...(config.hooks?.afterChange ?? []),
        trackSlugRedirect({ prefixes, sourceCollection: config.slug }),
      ],
    },
  }
}
