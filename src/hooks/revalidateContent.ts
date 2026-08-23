import { revalidateTag } from 'next/cache'
import type { CollectionConfig, GlobalConfig } from 'payload'

function shouldSkip(context: Record<string, unknown>): boolean {
  return context.skipRevalidation === true
}

/**
 * Tells the cache what changed, and never breaks a save if it cannot.
 *
 * Next.js refuses `revalidateTag` during a render pass, and Payload's admin
 * writes during one: opening a create form autosaves a draft while the view is
 * still rendering. Letting that rejection escape kills the render — the editor
 * gets a blank screen and cannot create a document at all. That is what
 * happened the first time anyone tried to add a page.
 *
 * A save must not fail because a cache could not be told about it. The writes
 * that matter to the public site — publishing, editing a published document —
 * run through a server action rather than a render, and still revalidate
 * normally. What is skipped here is the autosaved draft, which no visitor can
 * see anyway.
 */
function invalidate(tags: string[]): void {
  for (const tag of new Set([...tags, 'sitemap'])) {
    try {
      revalidateTag(tag, 'max')
    } catch (error) {
      console.warn(`[revalidate] could not invalidate ${tag}`, error)
    }
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
