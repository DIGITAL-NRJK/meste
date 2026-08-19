import { expect, test } from '@playwright/test'

test.describe('bilingual frontend foundation', () => {
  test('redirects the root route to English', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveURL('/en')
  })

  test('renders the English foundation and switches to French', async ({ page }) => {
    await page.goto('/en')
    await expect(page).toHaveTitle(/MESTE/)
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(
      'The art of African hospitality.',
    )

    await page.getByRole('link', { name: 'Lire en français' }).click()
    await expect(page).toHaveURL('/fr')
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(
      "L'art de l'hospitalité africaine.",
    )
  })

  test('returns the branded not-found state for an unsupported locale', async ({ page }) => {
    const response = await page.goto('/de')
    expect(response?.status()).toBe(404)
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(
      'This place is not set at our table.',
    )
  })
})
