import type { PageIntro, PageMeta } from '@/lib/pages/types'
import type { QuoteFieldName } from '@/lib/quote/schema'

/** One option of a select or checkbox group, sourced from the CMS. */
export type QuoteOption = {
  label: string
  value: string
}

export type QuoteContent = {
  /** Offered beside the form: the one contact route that already works. */
  aside: {
    body: string
    heading: string
  }
  errors: {
    /** Error code to sentence. The schema emits codes; this translates them. */
    codes: Record<string, string>
    summaryHeading: string
  }
  form: {
    detailsHeading: string
    detailsHint: string
    essentialsHeading: string
    hints: Partial<Record<QuoteFieldName, string>>
    labels: Record<QuoteFieldName, string>
    optionalSuffix: string
    requiredHint: string
    submitLabel: string
    submittingLabel: string
  }
  intro: PageIntro
  meta: PageMeta
  skipToContent: string
  success: {
    body: string
    heading: string
    /** States plainly that no email is sent yet, rather than implying one is. */
    note: string
  }
}

/**
 * Everything the page needs that does not come from the copy files: the consent
 * wording MESTE supplied, and the options an editor maintains in Payload.
 */
export type QuotePageData = {
  consent: {
    statement: string
    version: string
  }
  content: QuoteContent
  formats: QuoteOption[]
  services: QuoteOption[]
}
