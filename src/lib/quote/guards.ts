/**
 * Submission guards for the quote form.
 *
 * Deliberately privacy-preserving: nothing here records an IP address, a
 * fingerprint or any other identifier. The brief keeps the site free of
 * unnecessary personal data, and a lead is not the place to start collecting
 * it.
 *
 * The trade-off is stated plainly: the throttle below lives in the memory of a
 * single serverless instance. It slows a naive flood on a warm instance and
 * does nothing against a distributed one. It is a speed bump, not a wall, and
 * it should be replaced by a shared store the day submissions justify it.
 */

const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 3

/** Milliseconds a human needs at minimum to fill the form in good faith. */
const MIN_FILL_MS = 3_000

/** How long a rendered form stays submittable, so a stale page is refused. */
const MAX_FORM_AGE_MS = 6 * 60 * 60 * 1000

let bucket: { count: number; startedAt: number } = { count: 0, startedAt: 0 }

export function resetThrottle(): void {
  bucket = { count: 0, startedAt: 0 }
}

export function isThrottled(now: number): boolean {
  if (now - bucket.startedAt > WINDOW_MS) {
    bucket = { count: 1, startedAt: now }
    return false
  }

  bucket.count += 1
  return bucket.count > MAX_PER_WINDOW
}

/**
 * A field no human sees. Anything filled in it came from something that fills
 * every input it finds.
 */
export function isHoneypotFilled(value: unknown): boolean {
  return typeof value === 'string' && value.trim() !== ''
}

/**
 * Judges how long the visitor took.
 *
 * A missing or unreadable stamp returns `ok` on purpose. The stamp is written
 * by JavaScript after mount, so a visitor without it has none — and silently
 * discarding their enquiry to catch a few more bots would be the worse trade.
 * The honeypot and the throttle still apply to them.
 */
export type TimingVerdict = 'ok' | 'stale' | 'tooFast'

export function judgeTiming(renderedAt: unknown, now: number): TimingVerdict {
  const stamp = typeof renderedAt === 'string' ? Number.parseInt(renderedAt, 10) : Number.NaN

  if (!Number.isFinite(stamp)) {
    return 'ok'
  }

  const elapsed = now - stamp

  if (elapsed < MIN_FILL_MS) {
    return 'tooFast'
  }

  if (elapsed > MAX_FORM_AGE_MS) {
    return 'stale'
  }

  return 'ok'
}
