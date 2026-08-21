'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Container } from '@/components/ui/Container'
import { localeFromPathname } from '@/lib/i18n/config'
import { getSiteDictionary } from '@/lib/i18n/site'

/**
 * The branded 404, in the language the visitor was actually asking for.
 *
 * Next.js renders `not-found.tsx` outside the matched route segment, so it
 * receives no params and a server component there cannot know the locale. The
 * pathname can, and only a client component can read it. That is the whole
 * reason this file exists.
 *
 * Before it did, the page printed both languages one after the other — which is
 * what a bilingual site looks like when it has given up on knowing who it is
 * talking to.
 */
export function NotFoundNotice() {
  const locale = localeFromPathname(usePathname() ?? '')
  const { notFound } = getSiteDictionary(locale)

  return (
    <main className="error-canvas">
      <Container>
        <span className="error-canvas__code">{notFound.code}</span>
        <h1>{notFound.title}</h1>
        <p>{notFound.body}</p>
        <Link href={`/${locale}`}>{notFound.action}</Link>
      </Container>
    </main>
  )
}
