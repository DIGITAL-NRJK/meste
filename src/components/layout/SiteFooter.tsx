import Link from 'next/link'

import { Container } from '@/components/ui/Container'
import type { Locale } from '@/lib/i18n/config'
import { routePath } from '@/lib/routes'
import type { SiteChrome } from '@/lib/site/types'

type SiteFooterProps = {
  chrome: SiteChrome
  locale: Locale
}

/**
 * Contact details render only when a verified value exists in Payload. Empty
 * groups disappear entirely rather than leaving labelled gaps.
 */
export function SiteFooter({ chrome, locale }: SiteFooterProps) {
  const { contact, footer } = chrome
  const hasContact =
    Boolean(contact.phone) ||
    Boolean(contact.email) ||
    Boolean(contact.whatsAppHref) ||
    Boolean(contact.serviceArea) ||
    contact.addressLines.length > 0 ||
    contact.hours.length > 0 ||
    contact.social.length > 0

  return (
    <footer className="meste-footer">
      <Container className="meste-footer__top">
        <div>
          <p className="meste-eyebrow">{chrome.brand.signature}</p>
          <p className="meste-footer__statement">{footer.statement}</p>
        </div>

        {footer.columns.map((column) => (
          <div className="meste-footer__column" key={column.title}>
            <h2>{column.title}</h2>
            <ul>
              {column.items.map((item) => (
                <li key={`${column.title}-${item.route}-${item.label}`}>
                  <Link href={routePath(item.route, locale)}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {hasContact ? (
          <div className="meste-footer__column">
            <h2>{footer.contactTitle}</h2>
            <ul>
              {contact.phone ? (
                <li>
                  <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
                </li>
              ) : null}
              {contact.whatsAppHref ? (
                <li>
                  <a href={contact.whatsAppHref} rel="noreferrer" target="_blank">
                    WhatsApp
                  </a>
                </li>
              ) : null}
              {contact.email ? (
                <li>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </li>
              ) : null}
              {contact.addressLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
              {contact.serviceArea ? <li>{contact.serviceArea}</li> : null}
              {contact.hours.map((entry) => (
                <li key={`${entry.label}-${entry.value}`}>
                  {entry.label} · {entry.value}
                </li>
              ))}
              {contact.social.map((entry) => (
                <li key={entry.url}>
                  <a href={entry.url} rel="noreferrer" target="_blank">
                    {entry.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Container>

      <Container className="meste-footer__bar">
        <span>{footer.copyright}</span>
        {footer.legalLinks.length > 0 ? (
          <span>
            {footer.legalLinks.map((link) => (
              <Link href={link.path} key={link.path} style={{ marginRight: '1rem' }}>
                {link.label}
              </Link>
            ))}
          </span>
        ) : null}
        <strong>{chrome.brand.signature}</strong>
      </Container>
    </footer>
  )
}
