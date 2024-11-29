import type { ReactNode } from 'react'

interface LayoutProps {
  children: React.ReactNode
}
export default function LinktreeLayout({
  children,
}: LayoutProps) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap w-full space-y-4 md:flex-nowrap md:space-x-8">
        {children}
      </div>
    </div>
  )
}
