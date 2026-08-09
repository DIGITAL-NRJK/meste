import type { Locale } from './config'

type FoundationDictionary = {
  alternateLanguageLabel: string
  body: string
  eyebrow: string
  footer: string
  headline: string
  location: string
  signature: string
  status: string
}

const dictionaries: Record<Locale, FoundationDictionary> = {
  en: {
    alternateLanguageLabel: 'Lire en français',
    body: 'A cuisine rooted in Africa, shaped by experience and presented with contemporary elegance.',
    eyebrow: "Mama Emma · Service Traiteur d'Excellence",
    footer: 'A cuisine inherited from family. Hospitality turned into a profession.',
    headline: 'The art of African hospitality.',
    location: 'Accra · Ghana',
    signature: 'Taste · Elegance · Hospitality',
    status: 'The full experience is being prepared.',
  },
  fr: {
    alternateLanguageLabel: 'Read in English',
    body: "Une cuisine enracinée en Afrique, façonnée par l'expérience et présentée avec une élégance contemporaine.",
    eyebrow: "Mama Emma · Service Traiteur d'Excellence",
    footer: "Une cuisine héritée de la famille. L'hospitalité devenue un métier.",
    headline: "L'art de l'hospitalité africaine.",
    location: 'Accra · Ghana',
    signature: 'Goût · Élégance · Hospitalité',
    status: "L'expérience complète se prépare.",
  },
}

export function getFoundationDictionary(locale: Locale): FoundationDictionary {
  return dictionaries[locale]
}
