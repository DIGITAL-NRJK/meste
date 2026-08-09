import { revalidateTag } from 'next/cache'
import type { CollectionConfig, GlobalConfig } from 'payload'

function shouldSkip(context: Record<string, unknown>): boolean {
  return context.skipRevalidation === true
}

function invalidate(tags: string[]): void {
  for (const tag of new Set([...tags, 'sitemap'])) {
    revalidateTag(tag, 'max')
  }
}

export function createCollectionHooks(slug: string): CollectionConfig['hooks'] {
  return {
    afterChange: [
      ({ context, doc }) => {
        if (!shouldSkip(context)) {
          invalidate([`collection:${slug}`, `document:${slug}:${String(doc.id)}`])
        }

        return doc
      },
    ],
    afterDelete: [
      ({ context, doc }) => {
        if (!shouldSkip(context)) {
          invalidate([`collection:${slug}`, `document:${slug}:${String(doc.id)}`])
        }

        return doc
      },
    ],
  }
}

export function createGlobalHooks(slug: string): GlobalConfig['hooks'] {
  return {
    afterChange: [
      ({ context, doc }) => {
        if (!shouldSkip(context)) {
          invalidate([`global:${slug}`])
        }

        return doc
      },
    ],
  }
}
