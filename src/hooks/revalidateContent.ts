import { revalidateTag } from 'next/cache'
import { after } from 'next/server'
import type { CollectionConfig, GlobalConfig } from 'payload'

function shouldSkip(context: Record<string, unknown>): boolean {
  return context.skipRevalidation === true
}

/**
 * Tells the cache what changed, once the response is out of the way.
 *
 * Next.js refuses `revalidateTag` while a route is rendering — the guard tests
 * `workUnitStore.phase === 'render'` and nothing else. Payload's admin writes
 * during a render: opening a create form autosaves a draft, and saving an
 * existing document goes the same way. Calling it directly therefore threw on
 * every write from the admin, which killed the render and left the editor
 * looking at a blank screen.
 *
 * `after` is the mechanism built for this. It queues the work until the request
 * closes and flips the phase to `'after'` first, so the same call is accepted
 * on the other side of the response. The revalidation genuinely happens — it is
 * not swallowed, merely postponed by a few milliseconds.
 */
function invalidate(tags: string[]): void {
  const unique = [...new Set([...tags, 'sitemap'])]

  try {
    after(() => {
      for (const tag of unique) {
        revalidateTag(tag, 'max')
      }
    })
  } catch (error) {
    // `after` needs a request to attach itself to. A document written outside
    // one — the seed, a migration, a script — has no rendered page to
    // invalidate, so there is nothing to do but say so. A write must never fail
    // because a cache could not be notified.
    console.warn('[revalidate] no request to defer to', error)
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
