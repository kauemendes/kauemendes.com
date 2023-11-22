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
      <body className='bg-stone-50 flex flex-col min-h-screen  font-roboto'>
        <header className='bg-stone-100 border-b-2 border-stone-200 px-4 py-2'>
          <NavBar />
        </header>
        <main className="grow py-3 text-center">
          {children}
        </main>
        <footer className="w-full bg-stone-900 border-t py-3 text-center text-xs text-white">
          Made with <span className='text-red-600'>❤</span> and{' '}<a href="https://vercel.com/solutions/nextjs" className="text-gray-400 hover:underline">Next.JS</a> by Vercel
        </footer>
        </body>
    </html>
  )
}
