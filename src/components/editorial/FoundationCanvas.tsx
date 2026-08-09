import Link from 'next/link'

import { LogoFull } from '@/components/layout/LogoFull'
import { Container } from '@/components/ui/Container'
import { KenteDivider } from '@/components/ui/KenteDivider'
import { BodyCopy, DisplayHeading, Eyebrow } from '@/components/ui/Typography'
import { getAlternateLocale, getLocalePath, type Locale } from '@/lib/i18n/config'
import { getFoundationDictionary } from '@/lib/i18n/dictionaries'

type FoundationCanvasProps = {
  locale: Locale
}

export function FoundationCanvas({ locale }: FoundationCanvasProps) {
  const copy = getFoundationDictionary(locale)
  const alternateLocale = getAlternateLocale(locale)

  return (
    <div className="foundation-canvas">
      <header className="foundation-header">
        <Container className="foundation-header__inner">
          <LogoFull />
          <Link
            className="language-link"
            href={getLocalePath(alternateLocale)}
            hrefLang={alternateLocale}
          >
            {copy.alternateLanguageLabel}
          </Link>
        </Container>
      </header>

      <main className="foundation-main">
        <Container className="foundation-composition">
          <div className="foundation-composition__index" aria-hidden="true">
            MESTE
          </div>

          <section className="foundation-composition__content" aria-labelledby="foundation-heading">
            <Eyebrow>{copy.eyebrow}</Eyebrow>
            <DisplayHeading id="foundation-heading">{copy.headline}</DisplayHeading>
            <BodyCopy>{copy.body}</BodyCopy>

            <div className="foundation-composition__status">
              <span>{copy.status}</span>
              <span className="foundation-composition__location">{copy.location}</span>
            </div>
          </section>

          <aside className="foundation-composition__signature">
            <KenteDivider />
            <p>{copy.signature}</p>
          </aside>
        </Container>
      </main>

      <footer className="foundation-footer">
        <Container>
          <p>{copy.footer}</p>
        </Container>
      </footer>
    </div>
  )
}
