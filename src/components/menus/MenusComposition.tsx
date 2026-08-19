import { PageShell } from '@/components/layout/PageShell'
import { CulinaryLevels } from '@/components/menus/CulinaryLevels'
import { MenuFamilies } from '@/components/menus/MenuFamilies'
import { SignatureDishList } from '@/components/menus/SignatureDishList'
import { SignatureMenuList } from '@/components/menus/SignatureMenuList'
import { PageClosingSection } from '@/components/pages/PageClosingSection'
import { PageOpening } from '@/components/pages/PageOpening'
import type { Locale } from '@/lib/i18n/config'
import type { MenusContent } from '@/lib/pages/menus/types'
import type { SiteChrome } from '@/lib/site/types'

type MenusCompositionProps = {
  chrome: SiteChrome
  content: MenusContent
  locale: Locale
}

export function MenusComposition({ chrome, content, locale }: MenusCompositionProps) {
  return (
    <PageShell chrome={chrome} locale={locale} route="menus" skipLabel={content.skipToContent}>
      <PageOpening content={content.intro} headingId="menus-intro" />
      <CulinaryLevels content={content.levels} headingId="menus-levels" />
      <SignatureDishList content={content.signatureDishes} headingId="menus-dishes" />
      <MenuFamilies content={content.families} headingId="menus-families" />
      <SignatureMenuList content={content.signatureMenus} headingId="menus-signature" />
      <PageClosingSection
        contact={chrome.contact}
        content={content.closing}
        headingId="menus-closing"
        locale={locale}
      />
    </PageShell>
  )
}
