import type { MediaSlot, ResolvedImage } from '@/lib/home/types'

/** Narrow, dependency-free readers for Payload documents and globals. */

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

export function readString(value: unknown): string | null {
  if (typeof value !== 'string') {
    return null
  }

  const trimmed = value.trim()
  return trimmed ? trimmed : null
}

export function readArray(value: unknown): unknown[] {
  return Array.isArray(value) ? value : []
}

export function readPath(source: unknown, ...keys: string[]): unknown {
  let current: unknown = source

  for (const key of keys) {
    if (!isRecord(current)) {
      return undefined
    }
    current = current[key]
  }

  return current
}

/**
 * Turns a Payload upload relation into a renderable image. Returns null when
 * the relation is unpopulated, missing a URL, or missing alt text — the site
 * never ships an image without an accessible description.
 */
export function resolveImage(value: unknown): ResolvedImage | null {
  if (!isRecord(value)) {
    return null
  }

  const url = readString(value.url)
  const alt = readString(value.alt)

  if (!url || !alt) {
    return null
  }

  return {
    alt,
    height: typeof value.height === 'number' ? value.height : null,
    url,
    width: typeof value.width === 'number' ? value.width : null,
  }
}

/** Keeps the baseline placeholder wording while filling in real photography. */
export function withImage(slot: MediaSlot, value: unknown): MediaSlot {
  const image = resolveImage(value)
  return image ? { ...slot, image } : slot
}
