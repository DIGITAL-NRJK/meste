import { Heading } from '@/components/ui/Typography'
import type { ContactChannels as ContactChannelsCopy } from '@/lib/pages/contact/types'
import type { ContactDetails } from '@/lib/site/types'

type ContactChannelsProps = {
  contact: ContactDetails
  content: ContactChannelsCopy
  headingId: string
}

type Entry = {
  key: string
  label: string
  value: React.ReactNode
}

const socialLabels: Record<string, string> = {
  facebook: 'Facebook',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  tiktok: 'TikTok',
  youtube: 'YouTube',
}

/**
 * Verified details only.
 *
 * Every entry is built from a value that exists; an absent value produces no
 * entry at all, so the page never shows a label with nothing behind it and
 * never implies a channel the house has not confirmed.
 */
export function ContactChannels({ contact, content, headingId }: ContactChannelsProps) {
  const entries: Entry[] = []

  if (contact.phone) {
    entries.push({
      key: 'phone',
      label: content.phoneLabel,
      value: <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>,
    })
  }

  if (contact.whatsAppHref) {
    entries.push({
      key: 'whatsapp',
      label: content.whatsAppLabel,
      value: (
        <a href={contact.whatsAppHref} rel="noreferrer" target="_blank">
          {content.whatsAppLabel}
        </a>
      ),
    })
  }

  if (contact.email) {
    entries.push({
      key: 'email',
      label: content.emailLabel,
      value: <a href={`mailto:${contact.email}`}>{contact.email}</a>,
    })
  }

  if (contact.addressLines.length > 0) {
    entries.push({
      key: 'address',
      label: content.addressLabel,
      value: (
        <address className="meste-contact__address">
          {contact.addressLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </address>
      ),
    })
  }

  if (contact.serviceArea) {
    entries.push({
      key: 'service-area',
      label: content.serviceAreaLabel,
      value: contact.serviceArea,
    })
  }

  if (contact.hours.length > 0) {
    entries.push({
      key: 'hours',
      label: content.hoursLabel,
      value: (
        <ul className="meste-contact__hours">
          {contact.hours.map((line) => (
            <li key={line.label}>
              <span>{line.label}</span>
              <span>{line.value}</span>
            </li>
          ))}
        </ul>
      ),
    })
  }

  if (contact.social.length > 0) {
    entries.push({
      key: 'social',
      label: content.socialLabel,
      value: (
        <ul className="meste-contact__social">
          {contact.social.map((account) => (
            <li key={account.url}>
              <a href={account.url} rel="noreferrer" target="_blank">
                {socialLabels[account.platform] ?? account.platform}
              </a>
            </li>
          ))}
        </ul>
      ),
    })
  }

  if (entries.length === 0) {
    return null
  }

  return (
    <div className="meste-contact">
      <p className="meste-eyebrow meste-contact__eyebrow">{content.eyebrow}</p>
      <Heading className="meste-contact__title" id={headingId}>
        {content.heading}
      </Heading>

      <dl className="meste-contact__list">
        {entries.map((entry) => (
          <div className="meste-contact__entry" key={entry.key}>
            <dt>{entry.label}</dt>
            <dd>{entry.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
