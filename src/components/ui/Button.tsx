import Link from 'next/link'
import { ReactNode } from 'react'

const variants = {
  /** Default: paper fill, ink border. */
  default: 'bg-paper text-ink',
  /** Emphasis: solid ink. One per view at most. */
  solid: 'bg-ink text-paper',
  /** Accent: reserved for the single primary action on a page. */
  accent: 'bg-accent text-accent-ink',
} as const

interface BaseProps {
  children: ReactNode
  variant?: keyof typeof variants
  className?: string
}

const base =
  'inline-block font-mono text-[12px] font-bold tracking-[0.1em] uppercase ' +
  'px-4 py-2.5 border-2 border-ink shadow-hard-sm press no-underline'

/** Internal navigation. */
export function ButtonLink({
  href,
  children,
  variant = 'default',
  className = '',
  ...rest
}: BaseProps & { href: string; prefetch?: boolean }) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </Link>
  )
}

/** External destinations — always opens in a new tab. */
export function ButtonExternal({
  href,
  children,
  variant = 'default',
  className = '',
}: BaseProps & { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}

/** Actions that are not navigation. */
export function Button({
  children,
  variant = 'default',
  className = '',
  ...rest
}: BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  )
}
