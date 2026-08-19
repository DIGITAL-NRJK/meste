import type { Action } from '@/lib/home/types'
import type { RouteKey } from '@/lib/routes'

export type NavItem = {
  label: string
  route: RouteKey
}

export type FooterColumn = {
  items: NavItem[]
  title: string
}

export type ContactLine = {
  label: string
  value: string
}

/**
 * Verified contact details only. Every field is nullable and components must
 * hide anything that is empty rather than inventing a value.
 */
export type ContactDetails = {
  addressLines: string[]
  email: string | null
  hours: ContactLine[]
  phone: string | null
  serviceArea: string | null
  social: { platform: string; url: string }[]
  whatsAppHref: string | null
}

export type SiteChrome = {
  brand: {
    descriptor: string
    name: string
    signature: string
  }
  contact: ContactDetails
  footer: {
    columns: FooterColumn[]
    contactTitle: string
    copyright: string
    legalLinks: { label: string; path: string }[]
    statement: string
  }
  localeLabel: string
  nav: NavItem[]
  primaryAction: Action
}
