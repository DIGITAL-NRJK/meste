import type { CollectionConfig, Field, GlobalConfig } from 'payload'

import {
  publishedConfigOrAuthenticated,
  publishedOrAuthenticated,
} from '@/collections/access/roles'
import { createCollectionHooks, createGlobalHooks } from '@/hooks/revalidateContent'

import { localeReadinessField, seoFields } from './shared'

const draftConfiguration = {
  autosave: {
    interval: 1_500,
    showSaveDraftButton: true,
  },
  schedulePublish: true,
}

/**
 * A document filtered on locale readiness must actually carry the field, or
 * Payload rejects the access constraint at query time. Deriving the policy from
 * the same flag that adds the field keeps the two in step for every future
 * collection and global.
 */
function readPolicy(includeLocaleReadiness: boolean) {
  return includeLocaleReadiness ? publishedOrAuthenticated : publishedConfigOrAuthenticated
}

type EditorialCollectionOptions = {
  admin: NonNullable<CollectionConfig['admin']>
  fields: Field[]
  includeLocaleReadiness?: boolean
  includeSEO?: boolean
  labels?: CollectionConfig['labels']
  preview?: NonNullable<CollectionConfig['admin']>['preview']
  slug: string
}

export function createEditorialCollection({
  admin,
  fields,
  includeLocaleReadiness = true,
  includeSEO = true,
  labels,
  preview,
  slug,
}: EditorialCollectionOptions): CollectionConfig {
  return {
    slug,
    access: {
      create: ({ req }) => Boolean(req.user),
      delete: ({ req }) => Boolean(req.user),
      read: readPolicy(includeLocaleReadiness),
      readVersions: ({ req }) => Boolean(req.user),
      update: ({ req }) => Boolean(req.user),
    },
    admin: {
      group: 'Content',
      ...admin,
      preview,
    },
    fields: [
      ...fields,
      ...(includeLocaleReadiness ? [localeReadinessField] : []),
      ...(includeSEO ? [seoFields] : []),
    ],
    hooks: createCollectionHooks(slug),
    labels,
    versions: {
      drafts: draftConfiguration,
      maxPerDoc: 25,
    },
  }
}

type EditorialGlobalOptions = {
  admin?: GlobalConfig['admin']
  dbName?: string
  fields: Field[]
  includeLocaleReadiness?: boolean
  includeSEO?: boolean
  label: string
  preview?: NonNullable<GlobalConfig['admin']>['preview']
  slug: string
}

export function createEditorialGlobal({
  admin,
  dbName,
  fields,
  includeLocaleReadiness = true,
  includeSEO = false,
  label,
  preview,
  slug,
}: EditorialGlobalOptions): GlobalConfig {
  return {
    slug,
    access: {
      read: readPolicy(includeLocaleReadiness),
      readVersions: ({ req }) => Boolean(req.user),
      update: ({ req }) => Boolean(req.user),
    },
    admin: {
      group: 'Site',
      ...admin,
      preview,
    },
    dbName,
    fields: [
      ...fields,
      ...(includeLocaleReadiness ? [localeReadinessField] : []),
      ...(includeSEO ? [seoFields] : []),
    ],
    hooks: createGlobalHooks(slug),
    label,
    versions: {
      drafts: draftConfiguration,
      max: 25,
    },
  }
}
