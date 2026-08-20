import { PageShell } from '@/components/layout/PageShell'
import { PageOpening } from '@/components/pages/PageOpening'
import { QuoteForm } from '@/components/quote/QuoteForm'
import { Section } from '@/components/ui/Section'
import type { Locale } from '@/lib/i18n/config'
import type { QuotePageData } from '@/lib/pages/quote/types'
import type { SiteChrome } from '@/lib/site/types'

type QuoteCompositionProps = {
  chrome: SiteChrome
  data: QuotePageData
  locale: Locale
}

/**
 * The conversion page. It carries no closing call to action of its own: the
 * visitor is already where every other page was sending them.
 */
export function QuoteComposition({ chrome, data, locale }: QuoteCompositionProps) {
  return (
    <PageShell chrome={chrome} locale={locale} route="quote" skipLabel={data.content.skipToContent}>
      <PageOpening content={data.content.intro} headingId="quote-intro" />

      <Section className="meste-quote" ruled tone="alt">
        <div className="meste-quote__split">
          <QuoteForm data={data} locale={locale} />

          {chrome.contact.phone ? (
            <aside className="meste-quote__aside">
              <h2 className="meste-quote__aside-title">{data.content.aside.heading}</h2>
              <p className="meste-quote__aside-body">{data.content.aside.body}</p>
              <a className="meste-button" href={`tel:${chrome.contact.phone.replace(/\s/g, '')}`}>
                {chrome.contact.phone}
              </a>
            </aside>
          ) : null}
        </div>
      </Section>
    </PageShell>
  )
}
