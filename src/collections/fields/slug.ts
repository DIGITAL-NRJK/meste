import type { Field } from 'payload'

const systemReservedSlugs = new Set(['admin', 'api', 'en', 'fr'])

export function normalizeSlug(value: string): string {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function slugField(options?: {
  description?: string
  localized?: boolean
  reserved?: readonly string[]
}): Field {
  const reserved = new Set([...systemReservedSlugs, ...(options?.reserved ?? [])])

  return {
    name: 'slug',
    type: 'text',
    admin: {
      description:
        options?.description ??
        'URL segment. Lowercase letters, numbers, and hyphens only; changes may create redirects.',
      position: 'sidebar',
    },
    hooks: {
      beforeValidate: [({ value }) => (typeof value === 'string' ? normalizeSlug(value) : value)],
    },
    index: true,
    localized: options?.localized ?? true,
    required: true,
    unique: true,
    validate: (value: null | string | undefined) => {
      if (typeof value !== 'string' || value.length < 1) {
        return 'A slug is required.'
      }

      if (reserved.has(value)) {
        return `“${value}” is reserved by the application.`
      }

      return true
    },
  }
}
