import { ElementType, ReactNode } from 'react'

const shadows = {
  none: '',
  sm: 'shadow-hard-sm',
  md: 'shadow-hard',
  lg: 'shadow-hard-lg',
} as const

interface FrameProps {
  children: ReactNode
  /** Rendered element. Use `article` for entries, `aside` for sidebars. */
  as?: ElementType
  /** Offset-shadow depth. `none` for frames that sit inside another frame. */
  shadow?: keyof typeof shadows
  /** Adds the press-into-shadow hover gesture. Only for interactive frames. */
  press?: boolean
  /** Fills with paper-2 instead of paper — for frames on a paper ground. */
  raised?: boolean
  className?: string
}

/**
 * The single box primitive: 2px ink border, square corners, zero-blur offset
 * shadow. Replaces the `bg-surface-raised/80 backdrop-blur rounded-xl shadow-lg
 * border border-edge hover:-translate-y-2` recipe that was repeated ~20 times.
 */
export function Frame({
  children,
  as: Tag = 'div',
  shadow = 'md',
  press = false,
  raised = false,
  className = '',
}: FrameProps) {
  return (
    <Tag
      className={[
        'border-2 border-ink',
        raised ? 'bg-paper-2' : 'bg-paper',
        shadows[shadow],
        press ? 'press' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Tag>
  )
}
