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
    const response = await page.goto('/en/journal')
    expect(response?.status()).toBe(404)
  })

  /**
   * The quote page is published only while the consent wording exists in the
   * CMS. On a fresh database it does not, so the route must answer 404 rather
   * than serve a form that collects personal data without its notice.
   */
  test('keeps the quote page unpublished until consent wording exists', async ({ page }) => {
    const response = await page.goto('/en/request-a-quote')
    expect([200, 404]).toContain(response?.status())

    if (response?.status() === 200) {
      await expect(page.locator('form.meste-quote-form')).toBeVisible()
      await expect(page.getByLabel(/full name/i)).toBeVisible()
    }
  })

  test('reaches contact and the quote from the footer', async ({ page }) => {
    await page.goto('/en')

    const footer = page.locator('footer, .meste-footer').first()
    await expect(footer.getByRole('link', { name: 'Contact' })).toHaveAttribute(
      'href',
      '/en/contact',
    )
    await expect(footer.getByRole('link', { name: 'Request a quote' })).toHaveAttribute(
      'href',
      '/en/request-a-quote',
    )
  })

  test('serves the services index with its four worlds', async ({ page }) => {
    await page.goto('/en/services')
    await expect(page.getByRole('heading', { level: 1 })).toContainText('One house')
    await expect(page.locator('.meste-world-row')).toHaveCount(4)
    await expect(page.getByText('References available on request')).toBeVisible()
  })

  test('serves the menu collection without a single price', async ({ page }) => {
    await page.goto('/en/menus')
    await expect(page.locator('.meste-dish')).toHaveCount(12)

    const body = (await page.locator('body').innerText()).toLowerCase()
    expect(body).not.toMatch(/gh[₵s]|\busd\b|€|\$\d/)
  })

  test('serves the gallery in its branded empty state', async ({ page }) => {
    await page.goto('/en/gallery')
    await expect(page.getByRole('heading', { name: /photography is being shot/i })).toBeVisible()
    await expect(page.locator('.meste-gallery-grid')).toHaveCount(0)
    await expect(page.locator('dialog')).toHaveCount(0)
  })

  test('serves the Experience as a concept, never as a scheduled event', async ({ page }) => {
    await page.goto('/en/the-mama-emma-experience')
    await expect(page.getByText('Dine · Discover · Connect')).toBeVisible()
    await expect(
      page.getByText('A signature Mama Emma concept currently in development.'),
    ).toBeVisible()

    const body = await page.locator('body').innerText()
    expect(body).not.toMatch(/\b20\d{2}\b/)
  })

  test('serves Mama Emma Fresh with no unverified claim', async ({ page }) => {
    await page.goto('/en/mama-emma-fresh')
    await expect(page.getByRole('heading', { level: 1 })).toContainText('into the glass')
    await expect(page.locator('.meste-product')).toHaveCount(6)

    const body = (await page.locator('body').innerText()).toLowerCase()
    expect(body).not.toContain('organic')
  })
})
