import Link from 'next/link'
import { Meta } from './Meta'

interface EntryProps {
  href: string
  /** Sequence number when the entry has one, otherwise a kind word. */
  marker: string
  /** Date stamp beneath the marker: `2026.07.19` or `2026`. */
  stamp: string
  /** Mono rail above the title: kind, read time, locales. */
  meta: string[]
  title: string
  description: string
  /** Accents the marker — used for numbered essays, not for projects. */
  numbered?: boolean
}

/**
 * One row of the index. The marker column carries the entry number parsed off
 * the post title, which is real sequence information rather than decoration.
 */
export function Entry({ href, marker, stamp, meta, title, description, numbered = false }: EntryProps) {
  return (
    <article className="rule-dash first:border-t-0">
      <Link
        href={href}
        className="group grid grid-cols-1 sm:grid-cols-[80px_1fr] gap-x-5 gap-y-2 py-4 px-2 -mx-2 hover:bg-paper-2 transition-colors duration-150 no-underline"
      >
        <div className="flex sm:block items-baseline gap-3 font-mono text-[10px] tracking-[0.06em] text-ink-muted sm:pt-[5px]">
          <span className={`block font-bold text-[11px] ${numbered ? 'text-accent' : 'text-ink-muted'}`}>
            {marker}
          </span>
          <span>{stamp}</span>
        </div>

        <div>
          <Meta items={meta} size="micro" className="mb-1.5" />
          <h3 className="font-display text-[1.3rem] sm:text-[1.55rem] leading-[1.12] text-ink group-hover:text-accent transition-colors duration-150 mb-1">
            {title}
          </h3>
          <p className="font-text text-[14.5px] leading-[1.6] text-ink-soft max-w-[62ch]">
            {description}
          </p>
        </div>
      </Link>
    </article>
  )
}
