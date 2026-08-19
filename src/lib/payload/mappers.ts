import type { Page, Service, SignatureMenu } from '@/payload-types'

export type PublicPage = Pick<Page, 'id' | 'layout' | 'pageKind' | 'seo' | 'slug' | 'title'>

export type PublicService = Pick<
  Service,
  'category' | 'cta' | 'id' | 'positioning' | 'seo' | 'slug' | 'story' | 'title'
>

export type PublicSignatureMenu = Pick<
  SignatureMenu,
  | 'availability'
  | 'courses'
  | 'dietaryNotes'
  | 'id'
  | 'intro'
  | 'seo'
  | 'slug'
  | 'subtitle'
  | 'title'
  | 'welcome'
>

export function mapPage(doc: Page): PublicPage {
  return {
    id: doc.id,
    layout: doc.layout,
    pageKind: doc.pageKind,
    seo: doc.seo,
    slug: doc.slug,
    title: doc.title,
  }
}

export function mapService(doc: Service): PublicService {
  return {
    category: doc.category,
    cta: doc.cta,
    id: doc.id,
    positioning: doc.positioning,
    seo: doc.seo,
    slug: doc.slug,
    story: doc.story,
    title: doc.title,
  }
}

export function mapSignatureMenu(doc: SignatureMenu): PublicSignatureMenu {
  return {
    availability: doc.availability,
    courses: doc.courses,
    dietaryNotes: doc.dietaryNotes,
    id: doc.id,
    intro: doc.intro,
    seo: doc.seo,
    slug: doc.slug,
    subtitle: doc.subtitle,
    title: doc.title,
    welcome: doc.welcome,
  }
}
