import Link from 'next/link'

import type { Action } from '@/lib/home/types'
import type { Locale } from '@/lib/i18n/config'
import { routePath } from '@/lib/routes'

type ActionLinkProps = {
  action: Action
  className?: string
  locale: Locale
  variant?: 'outline' | 'solid' | 'compact'
}

export function ActionLink({
  action,
  className = '',
  locale,
  variant = 'outline',
}: ActionLinkProps) {
  const modifier =
    variant === 'solid'
      ? 'meste-button--solid'
      : variant === 'compact'
        ? 'meste-button--compact'
        : ''

  return (
    <Link
      className={`meste-button ${modifier} ${className}`.trim()}
      href={routePath(action.route, locale)}
    >
      {action.label}
    </Link>
  )
}

export function ActionTextLink({
  action,
  className = '',
  locale,
}: Omit<ActionLinkProps, 'variant'>) {
  return (
    <Link className={`meste-text-link ${className}`.trim()} href={routePath(action.route, locale)}>
      {action.label}
    </Link>
  )
}
