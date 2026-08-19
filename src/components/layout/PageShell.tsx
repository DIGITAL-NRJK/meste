import type { ReactNode } from 'react'

import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { getAlternateLocale, type Locale } from '@/lib/i18n/config'
import { routePath, type RouteKey } from '@/lib/routes'
import type { SiteChrome } from '@/lib/site/types'

type PageShellProps = {
  children: ReactNode
  chrome: SiteChrome
  locale: Locale
  /** Rendered above the page, outside the inert backdrop — the entry veil. */
  overlay?: ReactNode
  route: RouteKey
  skipLabel: string
  /** Rendered after the shell, outside the backdrop — structured data. */
  trailing?: ReactNode
}

/**
 * Skip link, header, main landmark and footer — the frame every page shares.
 *
 * `data-entry-backdrop` marks everything the entry veil makes inert while it is
 * open. It is present on every page even though only the homepage can carry the
 * veil, so the contract stays one attribute rather than a special case.
 */
export function PageShell({
  children,
  chrome,
  locale,
  overlay,
  route,
  skipLabel,
  trailing,
}: PageShellProps) {
  const alternateLocale = getAlternateLocale(locale)

  return (
    <>
      {overlay}

      <div data-entry-backdrop="">
        <a className="meste-skip-link" href="#main">
          {skipLabel}
        </a>

        <SiteHeader
          alternateHref={routePath(route, alternateLocale)}
          chrome={chrome}
          locale={locale}
          menuLabel="Menu"
          navLabel={locale === 'fr' ? 'Navigation principale' : 'Primary navigation'}
        />

        <main id="main" tabIndex={-1}>
          {children}
        </main>

        <SiteFooter chrome={chrome} locale={locale} />
      </div>

      {trailing}
    </>
  )
}
