import type { Access, FieldAccess, PayloadRequest } from 'payload'

import { isLocale, type Locale } from '@/lib/i18n/config'

export const userRoles = ['admin', 'editor'] as const

export type UserRole = (typeof userRoles)[number]

type UserWithRole = NonNullable<PayloadRequest['user']> & {
  role?: UserRole | null
}

export function getUserRole(user: PayloadRequest['user']): UserRole | undefined {
  const role = (user as UserWithRole | null)?.role
  return userRoles.includes(role as UserRole) ? (role as UserRole) : undefined
}

export function isAdminUser(user: PayloadRequest['user']): boolean {
  return getUserRole(user) === 'admin'
}

export const authenticated: Access = ({ req }) => Boolean(req.user)

export const adminOnly: Access = ({ req }) => isAdminUser(req.user)

export const adminPanelOnly = ({ req }: { req: PayloadRequest }): boolean => isAdminUser(req.user)

export const adminFieldAccess: FieldAccess = ({ req }) => isAdminUser(req.user)

function requestLocale(req: PayloadRequest): Locale {
  const locale = String(req.locale ?? 'en')
  return isLocale(locale) ? locale : 'en'
}

export const publishedOrAuthenticated: Access = ({ req }) => {
  if (req.user) {
    return true
  }

  const locale = requestLocale(req)

  return {
    _status: {
      equals: 'published',
    },
    [`localeReadiness.${locale}`]: {
      equals: true,
    },
  }
}

export const permittedPublishedOrAuthenticated: Access = ({ req }) => {
  if (req.user) {
    return true
  }

  const locale = requestLocale(req)

  return {
    _status: {
      equals: 'published',
    },
    [`localeReadiness.${locale}`]: {
      equals: true,
    },
    permissionToDisplay: {
      equals: true,
    },
  }
}

export const adminOrFirstUser: Access = async ({ req }) => {
  if (isAdminUser(req.user)) {
    return true
  }

  const { totalDocs } = await req.payload.count({
    collection: 'users',
    overrideAccess: true,
  })

  return totalDocs === 0
}

export const adminOrSelf: Access = ({ id, req }) => {
  if (isAdminUser(req.user)) {
    return true
  }

  return Boolean(req.user && id && String(req.user.id) === String(id))
}
