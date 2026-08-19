import type { PageMeta } from '@/lib/pages/types'
import { readPath, readString } from '@/lib/payload/records'

/**
 * Interior pages all take their metadata from the same place: the controlled
 * `pages` entry that matches their `pageKind`. Keeping the merge here means one
 * precedence rule — SEO title, then page title, then the baseline — instead of
 * one per page.
 */
export function mergePageMeta(baseline: PageMeta, doc: unknown): PageMeta {
  if (!doc) {
    return baseline
  }

  const title = readString(readPath(doc, 'seo', 'title')) ?? readString(readPath(doc, 'title'))
  const description = readString(readPath(doc, 'seo', 'description'))

  return {
    description: description ?? baseline.description,
    title: title ?? baseline.title,
  }
}
