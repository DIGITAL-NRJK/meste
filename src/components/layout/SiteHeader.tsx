'use client'

import Link from 'next/link'
import { useEffect, useId, useState } from 'react'

import { LogoMark } from '@/components/layout/LogoMark'
import { ActionLink } from '@/components/ui/Action'
import { Container } from '@/components/ui/Container'
import { getAlternateLocale, type Locale } from '@/lib/i18n/config'
import { routePath } from '@/lib/routes'
import type { SiteChrome } from '@/lib/site/types'

type SiteHeaderProps = {
  alternateHref: string
  chrome: SiteChrome
  locale: Locale
  menuCloseLabel: string
  menuOpenLabel: string
  navLabel: string
}

export function SiteHeader({
  alternateHref,
  chrome,
  locale,
  menuCloseLabel,
  menuOpenLabel,
  navLabel,
}: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const panelId = useId()
  const alternateLocale = getAlternateLocale(locale)

  useEffect(() => {
    if (!isOpen) {
      return
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  return (
    <header className="meste-header">
      <Container className="meste-header__inner">
        <Link className="meste-brand" href={routePath('home', locale)}>
          <LogoMark className="meste-brand__mark" priority size={40} />
          <span>
            <span className="meste-brand__name">{chrome.brand.name}</span>
            <span className="meste-brand__descriptor">{chrome.brand.descriptor}</span>
          </span>
        </Link>

        <nav aria-label={navLabel} className="meste-nav">
          {chrome.nav.map((item) => (
            <Link href={routePath(item.route, locale)} key={`${item.route}-${item.label}`}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="meste-header__aside">
          <p className="meste-locale-switch">
            <span className="meste-locale-switch__current">{locale.toUpperCase()}</span>
            <span aria-hidden="true" className="meste-locale-switch__divider">
              /
            </span>
            <Link href={alternateHref} hrefLang={alternateLocale}>
              {alternateLocale.toUpperCase()}
            </Link>
          </p>

          <ActionLink
            action={chrome.primaryAction}
            className="meste-header__cta"
            locale={locale}
            variant="compact"
          />

          {/* Icon-only, so the accessible name comes from aria-label and
              changes with the state. The bars themselves are decorative. */}
          <button
            aria-controls={panelId}
            aria-expanded={isOpen}
            aria-label={isOpen ? menuCloseLabel : menuOpenLabel}
            className="meste-header__toggle"
            onClick={() => setIsOpen((open) => !open)}
            type="button"
          >
            <span aria-hidden="true" className="meste-burger" />
          </button>
        </div>
      </Container>

      <div className="meste-mobile-nav" data-open={isOpen} id={panelId}>
        <Container>
          <ul aria-label={navLabel}>
            {chrome.nav.map((item) => (
              <li key={`mobile-${item.route}-${item.label}`}>
                <Link href={routePath(item.route, locale)} onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ActionLink action={chrome.primaryAction} locale={locale} />
        </Container>
      </div>
    </header>
  )
}
