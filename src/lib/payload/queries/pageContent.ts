import type { Action, MediaSlot } from '@/lib/home/types'
import type { PageClosing, PageIntro, PullQuote, StoryChapter } from '@/lib/pages/types'
import { readArray, readPath, readString, resolveImage, withImage } from '@/lib/payload/records'
import { isRouteKey } from '@/lib/routes'

/**
 * Merges Payload content over an approved editorial baseline.
 *
 * These functions are pure and take `unknown`, so they can be unit-tested
 * without a database and cannot be broken by a shape the CMS did not promise.
 * Every one of them answers the same question: did an editor actually say
 * something here? A blank field, a whitespace-only field and an absent field
 * are the same answer — no — and the baseline stands.
 */

/** Unwraps the `[{ text }]` rows Payload uses for a list of plain strings. */
export function readTextList(value: unknown): string[] {
  return readArray(value).flatMap((entry) => {
    const text = readString(readPath(entry, 'text'))
    return text ? [text] : []
  })
}

/**
 * A route is only accepted from the controlled list. An unrecognised value
 * keeps the baseline destination rather than producing a link to nowhere.
 */
function mergeAction(baseline: Action, source: unknown): Action {
  const route = readPath(source, 'route')

  return {
    label: readString(readPath(source, 'label')) ?? baseline.label,
    route: isRouteKey(route) ? route : baseline.route,
  }
}

/**
 * Generic over the intro shape so the About page, whose intro also carries a
 * media slot, keeps that slot untouched instead of losing it to the spread.
 */
export function mergeIntro<T extends PageIntro>(baseline: T, source: unknown): T {
  return {
    ...baseline,
    eyebrow: readString(readPath(source, 'eyebrow')) ?? baseline.eyebrow,
    headingAccent: readString(readPath(source, 'headingAccent')) ?? baseline.headingAccent,
    headingLead: readString(readPath(source, 'headingLead')) ?? baseline.headingLead,
    lede: readString(readPath(source, 'lede')) ?? baseline.lede,
  }
}

export function mergeClosing(baseline: PageClosing, source: unknown): PageClosing {
  return {
    action: mergeAction(baseline.action, readPath(source, 'action')),
    body: readString(readPath(source, 'body')) ?? baseline.body,
    heading: readString(readPath(source, 'heading')) ?? baseline.heading,
  }
}

export function mergePullQuote(baseline: PullQuote, source: unknown): PullQuote {
  return {
    attribution: readString(readPath(source, 'attribution')) ?? baseline.attribution,
    text: readString(readPath(source, 'text')) ?? baseline.text,
  }
}

/**
 * An uploaded image fills the baseline frame and keeps its placeholder wording
 * for the day the image is removed. Where the baseline had no frame at all, one
 * is created only if a real image with alt text exists — an empty slot would
 * render a placeholder naming a shoot nobody ever planned.
 */
function mergeChapterMedia(baseline: MediaSlot | null, source: unknown): MediaSlot | null {
  if (baseline) {
    return withImage(baseline, source)
  }

  const image = resolveImage(source)
  return image ? { caption: '', image, slot: '' } : null
}

/**
 * Chapters are replaced as a set, never interleaved. A row without a title or
 * without a single paragraph is not a chapter and is dropped; if that leaves
 * nothing, the approved narrative stands untouched.
 */
export function mergeChapters(baseline: StoryChapter[], source: unknown): StoryChapter[] {
  const chapters = readArray(source).flatMap((entry, index) => {
    const title = readString(readPath(entry, 'title'))
    const body = readTextList(readPath(entry, 'body'))

    if (!title || body.length === 0) {
      return []
    }

    return [
      {
        body,
        label: readString(readPath(entry, 'label')) ?? '',
        list: readTextList(readPath(entry, 'list')),
        media: mergeChapterMedia(baseline[index]?.media ?? null, readPath(entry, 'image')),
        title,
      },
    ]
  })

  return chapters.length > 0 ? chapters : baseline
}
