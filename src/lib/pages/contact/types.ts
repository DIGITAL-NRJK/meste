import type { PageClosing, PageIntro, PageMeta } from '@/lib/pages/types'

/**
 * Labels only. Not a single contact value lives here: the page renders whatever
 * `ContactSettings` has verified and hides everything else, so an unfilled CMS
 * can never produce a labelled gap or an invented detail.
 */
export type ContactChannels = {
  addressLabel: string
  emailLabel: string
  eyebrow: string
  heading: string
  hoursLabel: string
  phoneLabel: string
  serviceAreaLabel: string
  socialLabel: string
  whatsAppLabel: string
}

export type ContactContent = {
  channels: ContactChannels
  closing: PageClosing
  intro: PageIntro
  meta: PageMeta
  skipToContent: string
}
