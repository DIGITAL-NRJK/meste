import type { QuoteContent } from '@/lib/pages/quote/types'

/**
 * English copy for the quote request.
 *
 * It promises no response time, no price and no availability — none of those is
 * verified. The success note says outright that no email is sent yet, rather
 * than letting the visitor assume one is on its way.
 */
export const quoteCopyEN: QuoteContent = {
  meta: {
    title: 'Request a quote',
    description:
      'Tell us about your event and we will come back to you with a proposal — celebrations, corporate receptions, institutional events and bespoke experiences in Accra.',
  },
  skipToContent: 'Skip to content',
  intro: {
    eyebrow: 'Request a quote',
    headingLead: 'Tell us what you',
    headingAccent: 'are hosting.',
    lede: 'The essentials take a minute. Everything below them is optional — the more you tell us, the closer the first proposal will be.',
  },
  aside: {
    heading: 'Prefer to talk it through?',
    body: 'Call us and we will take the details together.',
  },
  form: {
    essentialsHeading: 'The essentials',
    detailsHeading: 'Anything else you want us to know',
    detailsHint: 'All optional. Open this if you already have preferences in mind.',
    requiredHint: 'Required',
    optionalSuffix: 'optional',
    submitLabel: 'Design my experience',
    submittingLabel: 'Sending…',
    labels: {
      allergens: 'Allergies',
      budget: 'Budget range',
      company: 'Company or organisation',
      consent: 'I agree',
      dietaryRequirements: 'Dietary requirements',
      email: 'Email',
      eventDate: 'Event date',
      eventType: 'Type of event',
      guestCount: 'Number of guests',
      location: 'Location',
      menuPreferences: 'Menu preferences',
      name: 'Full name',
      notes: 'Additional notes',
      phone: 'Phone or WhatsApp',
      receptionFormat: 'Reception format',
      services: 'Interested in',
    },
    hints: {
      allergens: 'We will confirm every allergy with you before the menu is fixed.',
      budget: 'A range is enough, and it stays between us.',
      eventDate: 'An approximate date is fine.',
      guestCount: 'An estimate is fine.',
      phone: 'The fastest way to reach you.',
    },
  },
  errors: {
    summaryHeading: 'Your request could not be sent',
    codes: {
      consent: 'Please agree before sending your request.',
      date: 'Please use a valid date.',
      email: 'Please check this email address.',
      max: 'This number looks too high — tell us in the notes instead.',
      min: 'Please enter at least one guest.',
      number: 'Please enter a number.',
      required: 'This field is required.',
      stale: 'This page has been open for a while. Please reload it and send your request again.',
      throttled: 'Several requests just came from this connection. Please try again in a minute.',
      tooLong: 'This is longer than we can store — please shorten it.',
      unavailable: 'Something went wrong on our side. Please try again, or call us.',
      unknown: 'Something went wrong. Please try again, or call us.',
    },
  },
  success: {
    heading: 'Your request has reached us.',
    body: 'We have what we need to start. We will come back to you with a proposal built around your date, your place and your guests.',
    note: 'No confirmation email is sent for now — we will reach you using the details you left.',
  },
}
