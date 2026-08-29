import { ReactNode } from 'react'

interface MetaProps {
  /** Items are joined with a middot separator. Falsy entries are dropped. */
  items: ReactNode[]
  /** Larger, higher-contrast variant for page-level metadata rails. */
  size?: 'micro' | 'small'
  className?: string
}

/**
 * The mono metadata rail: uppercase, letterspaced, muted. Dates, kinds, read
 * times, locales, tags. Replaces the repeated stat-card block.
 */
export function Meta({ items, size = 'small', className = '' }: MetaProps) {
  const visible = items.filter(Boolean)

  return (
    <p
      className={[
        'font-mono uppercase text-ink-muted flex flex-wrap items-center gap-x-3 gap-y-1',
        size === 'micro' ? 'text-[9.5px] tracking-[0.14em]' : 'text-[10.5px] tracking-[0.13em]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {visible.map((item, i) => (
        <span key={i} className="flex items-center gap-x-3">
          {i > 0 && <span aria-hidden="true">&middot;</span>}
          {item}
        </span>
      ))}
    </p>
  )
}

interface LabelProps {
  children: ReactNode
  className?: string
}

/** Section eyebrow: mono caps with a dashed rule running to the right edge. */
export function Eyebrow({ children, className = '' }: LabelProps) {
  return (
    <p
      className={[
        'font-mono text-[11px] font-medium tracking-[0.14em] uppercase text-ink-muted',
        'flex items-center gap-3 mb-4',
        'after:content-[""] after:flex-1 after:border-t after:border-dashed after:border-rule',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </p>
  )
}

/**
 * Three tag species, never mixed in one row:
 * `kind` (filled) = essay/project, `tech` (outline) = technology,
 * `status` (accent outline) = live state only.
 */
export function Tag({
  children,
  variant = 'tech',
}: {
  children: ReactNode
  variant?: 'kind' | 'tech' | 'status'
}) {
  const styles = {
    kind: 'border-ink bg-ink text-paper',
    tech: 'border-rule text-ink-muted',
    status: 'border-accent text-accent font-bold',
  }

  return (
    <span
      className={`font-mono text-[9.5px] tracking-[0.1em] uppercase border px-1.5 py-[3px] ${styles[variant]}`}
    >
      {children}
    </span>
  )
}
