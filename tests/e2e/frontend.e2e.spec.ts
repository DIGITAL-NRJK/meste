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

  test('returns the branded not-found state for an unsupported locale', async ({ page }) => {
    const response = await page.goto('/de')
    expect(response?.status()).toBe(404)
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(
      'This place is not set at our table.',
    )
  })
})
