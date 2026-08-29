import { Instrument_Serif, Newsreader, JetBrains_Mono } from 'next/font/google'

/**
 * Display face. High-contrast, 400-only — headlines, entry titles, drop caps.
 * Never used below 20px or for running text.
 */
export const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap'
})

/**
 * Text face. Carries article prose and ledes at 16-17px.
 * `opsz` is declared because Newsreader ships an optical-size axis alongside
 * weight, and next/font needs every non-weight axis listed explicitly.
 */
export const newsreader = Newsreader({
  subsets: ['latin'],
  axes: ['opsz'],
  variable: '--font-newsreader',
  display: 'swap'
})

/**
 * Utility face. Every label, date, tag, button, nav item and byline.
 */
export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap'
})
