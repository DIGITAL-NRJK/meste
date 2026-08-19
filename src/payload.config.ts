import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'node:path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

import { Media } from './collections/Media'
import { Events } from './collections/Events'
import { ExperienceInterest } from './collections/ExperienceInterest'
import { FreshProducts } from './collections/FreshProducts'
import { Gallery } from './collections/Gallery'
import { JournalPosts } from './collections/JournalPosts'
import { Leads } from './collections/Leads'
import { MenuCategories } from './collections/MenuCategories'
import { MenuItems } from './collections/MenuItems'
import { Pages } from './collections/Pages'
import { ReceptionFormats } from './collections/ReceptionFormats'
import { Redirects } from './collections/Redirects'
import { References } from './collections/References'
import { Services } from './collections/Services'
import { SignatureMenus } from './collections/SignatureMenus'
import { Testimonials } from './collections/Testimonials'
import { Users } from './collections/Users'
import { ContactSettings } from './globals/ContactSettings'
import { Footer } from './globals/Footer'
import { Header } from './globals/Header'
import { HomePage } from './globals/HomePage'
import { SEOSettings } from './globals/SEOSettings'
import { SiteSettings } from './globals/SiteSettings'
import { getServerEnvironment } from './lib/env/server'
import { createR2StoragePlugin } from './lib/storage/r2'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const environment = getServerEnvironment()
const r2Storage = createR2StoragePlugin()
const databaseCommand = process.argv.find((argument) => argument.startsWith('migrate'))
const requiresDirectDatabase = Boolean(databaseCommand && databaseCommand !== 'migrate:create')

if (requiresDirectDatabase && !environment.DATABASE_URL_UNPOOLED) {
  throw new Error('DATABASE_URL_UNPOOLED is required for Payload migration commands')
}

const databaseURL = requiresDirectDatabase
  ? environment.DATABASE_URL_UNPOOLED!
  : environment.DATABASE_URL

export default buildConfig({
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      description: "MESTE's private editorial workspace",
      titleSuffix: '— MESTE',
    },
    user: Users.slug,
  },
  collections: [
    Users,
    Media,
    Pages,
    Services,
    ReceptionFormats,
    MenuCategories,
    MenuItems,
    SignatureMenus,
    FreshProducts,
    Events,
    References,
    Testimonials,
    Gallery,
    JournalPosts,
    Redirects,
    Leads,
    ExperienceInterest,
  ],
  cors: [environment.NEXT_PUBLIC_SERVER_URL],
  csrf: [environment.NEXT_PUBLIC_SERVER_URL],
  db: postgresAdapter({
    migrationDir: path.resolve(dirname, 'migrations'),
    pool: {
      connectionString: databaseURL,
      connectionTimeoutMillis: 10_000,
      idleTimeoutMillis: 30_000,
      max: 5,
    },
  }),
  editor: lexicalEditor(),
  graphQL: {
    disable: true,
  },
  globals: [SiteSettings, Header, Footer, HomePage, ContactSettings, SEOSettings],
  localization: {
    defaultLocale: 'en',
    fallback: false,
    locales: [
      { code: 'en', label: 'English' },
      { code: 'fr', label: 'Français' },
    ],
  },
  plugins: r2Storage ? [r2Storage] : [],
  secret: environment.PAYLOAD_SECRET,
  serverURL: environment.NEXT_PUBLIC_SERVER_URL,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
