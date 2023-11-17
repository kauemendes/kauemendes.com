import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
// import './globals.css'

const inter = Inter({ subsets: ['latin'] })

interface LayoutProps {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header style={{ border: 'solid blue 1px'}}>
          [header]
        </header>
        <main>
          {children}
        </main>
        <footer style={{ border: 'solid blue 1px'}}>
          [footer]
        </footer>
        </body>
    </html>
  )
}
