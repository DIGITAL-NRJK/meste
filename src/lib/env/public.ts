const fallbackSiteURL = 'http://localhost:3000'

export function getPublicSiteURL(): URL {
  const configuredURL = process.env.NEXT_PUBLIC_SERVER_URL?.trim() || fallbackSiteURL

  return new URL(configuredURL)
}
