import type { Metadata } from 'next'
import Link from 'next/link'
import { ThemeProvider } from "next-themes"
import { GoogleAnalytics } from '@next/third-parties/google'

import NavBar from '@/components/NavBar'
import { roboto, sourceCodePro, ebgaramond } from '@/app/font'

import './globals.css'
import Footer from '@/components/Footer'

interface LayoutProps {
  children: React.ReactNode
}

export const metadata = {
  title: {
    default: 'kauecode.com',
    template: '%s | kauecode.com'
  },
  description: 'Personal Kaue Mendes de Freitas website, personal blog and portfolio.',
  keywords: ['Kaue Mendes', 'Kaue Mendes de Freitas', 'Kaue Mendes Portfolio', 'Kaue Mendes Blog', 'Kaue Mendes Personal Portfolio', 'Kaue Mendes Blog'],
  publisher: 'Kaue Mendes',
  creator: 'Kaue Mendes',
}


export default function RootLayout({
  children,
}: LayoutProps) {
  return (
    <html lang="en" className={`${roboto.variable} ${sourceCodePro.variable} ${ebgaramond.variable}`}>
      <body className='bg-stone-50 flex flex-col min-h-screen font-roboto'>
        <ThemeProvider attribute="class">
          <NavBar />
          <main className="">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <GoogleAnalytics gaId="G-5D50WB6BVV" />
      </body>
    </html>
  )
}
