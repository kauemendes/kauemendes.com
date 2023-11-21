import type { Metadata } from 'next'
import Link from 'next/link'

import NavBar from '@/components/NavBar'
import { roboto, sourceCodePro, ebgaramond } from '@/app/font'

import './globals.css'

interface LayoutProps {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: LayoutProps) {
  return (
    <html lang="en" className={`${roboto.variable} ${sourceCodePro.variable} ${ebgaramond.variable}`}>
      <body className='bg-rose-50 flex flex-col min-h-screen px-4 py-2 font-roboto'>
        <header>
          <NavBar />
        </header>
        <main className="grow py-3 text-center">
          {children}
        </main>
        <footer className="border-t py-3 text-center text-xs">
          Made with ❤ and{' '}<a href="https://vercel.com/solutions/nextjs" className="text-rose-400 hover:underline">Next.JS</a> by Vercel
        </footer>
        </body>
    </html>
  )
}
