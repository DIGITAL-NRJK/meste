import { ContactChannels } from '@/components/contact/ContactChannels'
import { PageShell } from '@/components/layout/PageShell'
import { PageClosingSection } from '@/components/pages/PageClosingSection'
import { PageOpening } from '@/components/pages/PageOpening'
import type { Locale } from '@/lib/i18n/config'
import type { ContactContent } from '@/lib/pages/contact/types'
import type { SiteChrome } from '@/lib/site/types'

type ContactCompositionProps = {
  chrome: SiteChrome
  content: ContactContent
  locale: Locale
}

/**
 * The verified details sit beside the invitation rather than below it. With a
 * single confirmed channel today, a full-width band of its own would leave most
 * of the page blank; as `ContactSettings` fills in, the column grows in place.
 */
export function ContactComposition({ chrome, content, locale }: ContactCompositionProps) {
  return (
    <PageShell chrome={chrome} locale={locale} route="contact" skipLabel={content.skipToContent}>
      <PageOpening
        aside={
          <ContactChannels
            contact={chrome.contact}
            content={content.channels}
            headingId="contact-channels"
          />
        }
        content={content.intro}
        headingId="contact-intro"
      />
      <PageClosingSection
        contact={chrome.contact}
        content={content.closing}
        headingId="contact-closing"
        locale={locale}
      />
    </PageShell>
  )
}
