import { ClosingSection } from '@/components/home/ClosingSection'
import { DishesSection } from '@/components/home/DishesSection'
import { ExperienceSection } from '@/components/home/ExperienceSection'
import { FormatsSection } from '@/components/home/FormatsSection'
import { FreshSection } from '@/components/home/FreshSection'
import { HomeHero } from '@/components/home/HomeHero'
import { ManifestoSection } from '@/components/home/ManifestoSection'
import { ProcessSection } from '@/components/home/ProcessSection'
import { PromiseSection } from '@/components/home/PromiseSection'
import { ReferencesSection } from '@/components/home/ReferencesSection'
import { SignatureBand } from '@/components/home/SignatureBand'
import { WorldsSection } from '@/components/home/WorldsSection'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { OrganizationJsonLd } from '@/components/seo/OrganizationJsonLd'
import type { HomeContent } from '@/lib/home/types'
import { getAlternateLocale, type Locale } from '@/lib/i18n/config'
import { routePath } from '@/lib/routes'
import type { SiteChrome } from '@/lib/site/types'

type HomeCompositionProps = {
  chrome: SiteChrome
  content: HomeContent
  locale: Locale
}

/**
 * The homepage visual journey. Colour alternates ivory → deep ivory → forest so
 * the page reads as a sequence of rooms rather than a stack of cards.
 */
export function HomeComposition({ chrome, content, locale }: HomeCompositionProps) {
  const alternateLocale = getAlternateLocale(locale)

  return (
    <>
      <a className="meste-skip-link" href="#main">
        {content.skipToContent}
      </a>

      <SiteHeader
        alternateHref={routePath('home', alternateLocale)}
        chrome={chrome}
        locale={locale}
        menuLabel={locale === 'fr' ? 'Menu' : 'Menu'}
        navLabel={locale === 'fr' ? 'Navigation principale' : 'Primary navigation'}
      />

      <main id="main">
        <HomeHero content={content.hero} headingId="home-hero" locale={locale} />
        <SignatureBand words={content.signatureBand} />
        <PromiseSection content={content.promise} headingId="home-promise" />
        <ManifestoSection content={content.manifesto} headingId="home-manifesto" />
        <WorldsSection content={content.worlds} headingId="home-worlds" locale={locale} />
        <FormatsSection content={content.formats} headingId="home-formats" />
        <DishesSection content={content.dishes} headingId="home-dishes" locale={locale} />
        <ExperienceSection
          content={content.experience}
          headingId="home-experience"
          locale={locale}
        />
        <ProcessSection content={content.process} headingId="home-process" />
        <FreshSection content={content.fresh} headingId="home-fresh" locale={locale} />
        <ReferencesSection content={content.references} headingId="home-references" />
        <ClosingSection
          contact={chrome.contact}
          content={content.closing}
          headingId="home-closing"
          locale={locale}
        />
      </main>

      <SiteFooter chrome={chrome} locale={locale} />

      <OrganizationJsonLd
        contact={chrome.contact}
        description={content.meta.description}
        locale={locale}
      />
    </>
  )
}
