import type { Metadata } from 'next'
import Link from 'next/link'
import { ThemeProvider } from "next-themes"

import NavBar from '@/components/NavBar'
import { roboto, sourceCodePro, ebgaramond } from '@/app/font'

import './globals.css'

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
          <main className="m-auto mt-16 p-10 grow py-3">
            {children}
          </main>
          <footer className="w-full h-10 bg-stone-900 dark:bg-slate-100 border-t dark:border-gray-800 py-3 text-center text-xs text-white dark:text-gray-900">
            Made with <span className='text-red-600 dark:text-red-400'>❤</span> and{' '}<a href="https://vercel.com/solutions/nextjs" className="text-gray-400 hover:underline dark:text-gray-900">Next.JS</a> by KaueCode.Com - <a href="https://github.com/kauemendes/kauemendes.com" target='_blank'>OpenSource Code</a> - 2024
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
