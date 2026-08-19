import { ActionLink } from '@/components/ui/Action'
import { Container } from '@/components/ui/Container'
import type { ClosingContent } from '@/lib/home/types'
import type { Locale } from '@/lib/i18n/config'
import type { ContactDetails } from '@/lib/site/types'

type ClosingSectionProps = {
  contact: ContactDetails
  content: ClosingContent
  headingId: string
  locale: Locale
}

export function ClosingSection({ contact, content, headingId, locale }: ClosingSectionProps) {
  const secondaryHref =
    contact.whatsAppHref ?? (contact.phone ? `tel:${contact.phone.replace(/\s/g, '')}` : null)
  const secondaryLabel = contact.whatsAppHref
    ? content.secondaryLabel
    : contact.phone
      ? contact.phone
      : null

  return (
    <section aria-labelledby={headingId} className="meste-section meste-closing">
      <Container>
        <p className="meste-closing__rule">
          <span aria-hidden="true" data-rule="" />
          {content.rule}
          <span aria-hidden="true" data-rule="" />
        </p>

        <p aria-hidden="true" className="meste-closing__wordmark">
          {content.wordmark}
        </p>

        <h2 className="meste-closing__line" id={headingId}>
          {content.line}
        </h2>

        <p className="meste-closing__copy">{content.body}</p>

        <div className="meste-actions">
          <ActionLink action={content.action} locale={locale} />
          {secondaryHref && secondaryLabel ? (
            <a className="meste-button" href={secondaryHref}>
              {secondaryLabel}
            </a>
          ) : null}
        </div>
      </Container>
    </section>
  )
}
