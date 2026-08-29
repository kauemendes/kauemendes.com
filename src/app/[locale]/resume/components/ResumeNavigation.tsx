'use client'

interface ResumeNavigationProps {
  sections: { id: string; label: string }[]
  activeSection: string
  onSectionChange: (id: string) => void
}

export function ResumeNavigation({ sections, activeSection, onSectionChange }: ResumeNavigationProps) {
  return (
    <nav className="border-2 border-ink shadow-hard-sm bg-paper">
      <ul>
        {sections.map((section, index) => {
          const isActive = activeSection === section.id
          return (
            <li key={section.id} className="border-b-2 border-ink last:border-b-0">
              <button
                type="button"
                onClick={() => onSectionChange(section.id)}
                aria-current={isActive ? 'true' : undefined}
                className={`w-full flex items-baseline gap-3 px-3.5 py-2.5 text-left cursor-pointer transition-colors duration-150 ${
                  isActive ? 'bg-ink text-paper' : 'bg-paper text-ink-muted hover:text-ink'
                }`}
              >
                <span
                  className={`font-mono text-[10px] font-bold ${isActive ? 'text-paper' : 'text-accent'}`}
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-mono text-[11px] tracking-[0.1em] uppercase">
                  {section.label}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
