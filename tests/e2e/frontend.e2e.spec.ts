import { expect, test } from '@playwright/test'

test.describe('bilingual homepage', () => {
  test('redirects the root route to English', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveURL('/en')
  })

  test('renders the English homepage and switches to French', async ({ page }) => {
    await page.goto('/en')
    await expect(page).toHaveTitle(/MESTE/)
    await expect(page.getByRole('heading', { level: 1 })).toContainText('The art of hosting')

    await page.getByRole('link', { name: 'FR', exact: true }).click()
    await expect(page).toHaveURL('/fr')
    await expect(page.getByRole('heading', { level: 1 })).toContainText("L'art de recevoir")
  })

  test('exposes the whole editorial journey', async ({ page }) => {
    await page.goto('/en')

    for (const heading of [
      'Your event deserves more than a meal.',
      'One house. Many ways to host.',
      'Choose your way to celebrate.',
      'The Mama Emma Experience',
      'Simple for you.',
    ]) {
      await expect(page.getByRole('heading', { name: new RegExp(heading, 'i') })).toBeVisible()
    }
  })

  test('routes the primary conversion to the quote page', async ({ page }) => {
    await page.goto('/fr')
    const cta = page.getByRole('link', { name: 'Demander un devis' }).first()
    await expect(cta).toHaveAttribute('href', '/fr/demande-de-devis')
  })

  test('shows no testimonial until one is approved', async ({ page }) => {
    await page.goto('/en')
    await expect(page.getByText('References available on request')).toBeVisible()
  })

  /**
   * The entry veil ships disabled. Merging it must not change what a visitor
   * sees until an editor turns it on in Payload.
   */
  test('does not show the entry veil until it is enabled', async ({ page }) => {
    await page.goto('/en')

    await expect(page.getByRole('dialog')).toHaveCount(0)
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  })

  test('returns the branded not-found state for an unsupported locale', async ({ page }) => {
    const response = await page.goto('/de')
    expect(response?.status()).toBe(404)
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(
      'This place is not set at our table.',
    )
  })
})

test.describe('interior pages', () => {
  test('serves the story page in both locales', async ({ page }) => {
    await page.goto('/en/about')
    await expect(page).toHaveTitle(/Our story — MESTE/)
    await expect(page.getByRole('heading', { level: 1 })).toContainText('A cuisine inherited')

    await page.getByRole('link', { name: 'FR', exact: true }).click()
    await expect(page).toHaveURL('/fr/a-propos')
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Une cuisine héritée')
  })

  test('tells the six approved chapters', async ({ page }) => {
    await page.goto('/en/about')
    await expect(page.locator('.meste-chapter')).toHaveCount(6)
    await expect(page.getByText('Maya-Maya International Airport')).toBeVisible()
  })

  /**
   * The English segment under the French locale would be a duplicate
   * untranslated page, which the brief forbids.
   */
  test('rejects a segment belonging to the other locale', async ({ page }) => {
    const response = await page.goto('/fr/about')
    expect(response?.status()).toBe(404)
  })

  test('publishes the verified phone number and nothing else', async ({ page }) => {
    await page.goto('/en/contact')

    await expect(page.getByRole('link', { name: '0537464516' }).first()).toHaveAttribute(
      'href',
      'tel:0537464516',
    )
    await expect(page.getByText('Email', { exact: true })).toHaveCount(0)
    await expect(page.getByText('Hours', { exact: true })).toHaveCount(0)
  })

  test('returns the branded not-found state for a page that is not built yet', async ({ page }) => {
    const response = await page.goto('/en/services')
    expect(response?.status()).toBe(404)
  })
})
