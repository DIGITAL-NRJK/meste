import { Container } from '@/components/ui/Container'
import type { PullQuote } from '@/lib/pages/types'

type PullQuoteSectionProps = {
  content: PullQuote
}

/**
 * A single held statement between two movements. It carries no heading, so it
 * stays out of the document outline and never competes with the chapters.
 */
export function PullQuoteSection({ content }: PullQuoteSectionProps) {
  return (
    <section className="meste-section meste-section--burgundy meste-pull-quote">
      <Container>
        <figure>
          <blockquote>
            <p>{content.text}</p>
          </blockquote>
          <figcaption>{content.attribution}</figcaption>
        </figure>
      </Container>
    </section>
  )
}
