import { ActionLink } from '@/components/ui/Action'
import { Section } from '@/components/ui/Section'
import { BodyCopy, Heading } from '@/components/ui/Typography'
import type { Locale } from '@/lib/i18n/config'
import type { PageClosing } from '@/lib/pages/types'
import type { ContactDetails } from '@/lib/site/types'

type PageClosingSectionProps = {
  contact: ContactDetails
  content: PageClosing
  headingId: string
  locale: Locale
}

/**
 * Closing invitation of an interior page.
 *
 * The secondary route is the verified telephone number, and only when one
 * exists: a WhatsApp link is offered solely if `ContactSettings` holds an
 * explicit international number, and the local number is never given a guessed
 * country prefix.
 */
export function PageClosingSection({
  contact,
  content,
  headingId,
  locale,
}: PageClosingSectionProps) {
  const telHref = contact.phone ? `tel:${contact.phone.replace(/\s/g, '')}` : null
  const secondaryHref = contact.whatsAppHref ?? telHref

  return (
    <Section className="meste-page-closing" labelledBy={headingId} tone="forest">
      <Heading className="meste-page-closing__title" id={headingId}>
        {content.heading}
      </Heading>

      <BodyCopy className="meste-page-closing__body">{content.body}</BodyCopy>

      <div className="meste-actions">
        <ActionLink action={content.action} locale={locale} />
        {secondaryHref && contact.phone ? (
          <a className="meste-button" href={secondaryHref}>
            {contact.phone}
          </a>
        ) : null}
      </div>
    </Section>
  )
}
