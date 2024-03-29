import { Roboto, Source_Code_Pro, EB_Garamond } from 'next/font/google'

export const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto'
})
export const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro'
})

export const ebgaramond = EB_Garamond({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-ebgaramond'
})
