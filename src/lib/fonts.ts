import { Cormorant_Garamond, Manrope } from 'next/font/google'

export const displayFont = Cormorant_Garamond({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600'],
})

export const interfaceFont = Manrope({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-interface',
})
