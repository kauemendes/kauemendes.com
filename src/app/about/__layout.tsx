import type { ReactNode } from 'react'

interface LayoutProps {
  children: React.ReactNode
}
export default function InfoLayout({
  children,
}: LayoutProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ border: 'solid red 1px'}}>
        [info menubar][inserted for custom layout inside info]
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}
