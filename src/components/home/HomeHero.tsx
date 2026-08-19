import { ActionLink, ActionTextLink } from '@/components/ui/Action'
import { Container } from '@/components/ui/Container'
import { Frame } from '@/components/ui/Frame'
import { Accent, BodyCopy, DisplayHeading } from '@/components/ui/Typography'
import type { HeroContent } from '@/lib/home/types'
import type { Locale } from '@/lib/i18n/config'

type HomeHeroProps = {
  content: HeroContent
  headingId: string
  locale: Locale
}

export function HomeHero({ content, headingId, locale }: HomeHeroProps) {
  return (
    <section aria-labelledby={headingId}>
      <Container className="meste-hero">
        <div className="meste-hero__body">
          <p className="meste-hero__meta">
            {content.metaLeft}
            <span aria-hidden="true" data-rule="" />
            {content.metaRight}
          </p>

          <DisplayHeading id={headingId}>
            {content.headingLead}
            <br />
            <Accent>{content.headingAccent}</Accent>
          </DisplayHeading>

          <BodyCopy className="meste-muted">{content.body}</BodyCopy>

          <div className="meste-actions">
            <ActionLink action={content.action} locale={locale} />
            <ActionTextLink action={content.secondaryAction} locale={locale} />
          </div>
        </div>

        <div className="meste-hero__figure">
          <Frame
            media={content.media}
            priority
            ratio="portrait"
            sizes="(max-width: 68rem) 100vw, 40vw"
          />
          <div className="meste-hero__note">
            <span className="meste-hero__note-label">{content.note.label}</span>
            <p>{content.note.text}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
