/**
 * The entry veil is a threshold, not a page: it renders over the homepage at the
 * same URL. Crawlers and visitors without JavaScript receive the homepage
 * itself, so nothing about this feature costs the site an indexable page.
 */
export type EntryContent = {
  body: string
  ctaLabel: string
  enabled: boolean
  eyebrow: string
  heading: string
  location: string
  signature: string
}
