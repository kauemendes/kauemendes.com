import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'kauecode.com',
    template: '%s | kauecode.com'
  },
  description: 'Personal Kaue Mendes de Freitas website, personal blog and portfolio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
