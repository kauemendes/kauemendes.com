'use client'

import { useEffect } from 'react'
import { useTranslations } from 'next-intl'
import type { ResumeData, SocialProfile } from '@/lib/types/resume'

interface PrintResumeProps {
  data: ResumeData
  locale: string
}

const ACCENT = '#0891B2'

function formatMonthYear(date: Date | string, locale: string): string {
  const d = new Date(date)
  return d
    .toLocaleDateString(locale === 'pt' ? 'pt-BR' : 'en-US', {
      month: 'short',
      year: 'numeric',
    })
    .replace('.', '')
}

function formatYear(date: Date | string): string {
  return new Date(date).getFullYear().toString()
}

const SHORTLINK_PATHS: Record<string, string> = {
  linkedin: '/linkedin',
  github: '/github',
  whatsapp: '/whatsapp',
}

function socialDisplay(s: SocialProfile): string {
  const key = s.platform.toLowerCase()
  const shortPath = SHORTLINK_PATHS[key]
  if (shortPath) return `kauecode.com${shortPath}`
  if (s.username) return s.username
  try {
    const u = new URL(s.url)
    return (u.hostname + u.pathname).replace(/^www\./, '').replace(/\/$/, '')
  } catch {
    return s.url
  }
}

export function PrintResume({ data, locale }: PrintResumeProps) {
  const t = useTranslations('resume')

  useEffect(() => {
    document.title = `Kaue-Mendes-CV-${locale.toUpperCase()}`
    const trigger = () => {
      const id = setTimeout(() => window.print(), 300)
      return () => clearTimeout(id)
    }
    if (document.fonts && document.fonts.ready) {
      let cleanup: (() => void) | undefined
      document.fonts.ready.then(() => {
        cleanup = trigger()
      })
      return () => cleanup?.()
    }
    return trigger()
  }, [locale])

  const { personal, social, experience, education, skills } = data
  const featuredSocial = social.filter((s) => s.featured)
  const present = t('present')

  return (
    <div className="print-page mx-auto max-w-[780px] bg-white text-gray-900 font-roboto text-[9.5pt] leading-[1.35] p-10 print:p-0">
      {/* Header */}
      <header className="mb-4 pb-3 border-b-2" style={{ borderColor: ACCENT }}>
        <div className="flex items-baseline justify-between gap-6 flex-wrap">
          <div>
            <h1
              className="text-[22pt] font-semibold tracking-tight leading-none"
              style={{ color: ACCENT }}
            >
              {personal.name}
            </h1>
            <p className="text-[11pt] text-gray-700 mt-1">{personal.title}</p>
          </div>
          <div className="text-[8.5pt] text-gray-700 text-right leading-[1.5] min-w-[40%]">
            <div>{personal.location}</div>
            <div>{personal.email}</div>
            {personal.phone && <div>{personal.phone}</div>}
            {featuredSocial.map((s) => (
              <div key={s.platform}>
                <span className="text-gray-500">{s.platform}: </span>
                <span style={{ color: ACCENT }}>{socialDisplay(s)}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Summary */}
      {personal.summary && (
        <Section title={t('summary')}>
          <p>{personal.summary}</p>
        </Section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <Section title={t('experience')}>
          <div className="space-y-2.5">
            {experience.map((e, i) => (
              <article key={e.id}>
                <div className="flex justify-between items-baseline gap-4">
                  <h3 className="font-semibold text-[10.5pt]">
                    {e.position}
                    <span className="font-normal text-gray-700"> — {e.company}</span>
                  </h3>
                  <span className="text-[8.5pt] text-gray-600 whitespace-nowrap">
                    {formatMonthYear(e.startDate, locale)} –{' '}
                    {e.endDate ? formatMonthYear(e.endDate, locale) : present}
                  </span>
                </div>
                {e.location && (
                  <p className="text-[8.5pt] text-gray-500 italic -mt-0.5">{e.location}</p>
                )}
                {e.description && <p className="mt-1">{e.description}</p>}
                {e.responsibilities && e.responsibilities.length > 0 && (
                  <ul className="list-disc ml-4 mt-0.5 space-y-0 marker:text-gray-400">
                    {e.responsibilities.slice(0, i < 3 ? 3 : 2).map((r, idx) => (
                      <li key={idx}>{r}</li>
                    ))}
                  </ul>
                )}
                {e.technologies && e.technologies.length > 0 && (
                  <p className="mt-1 text-[8pt] text-gray-500">
                    {e.technologies.join(' · ')}
                  </p>
                )}
              </article>
            ))}
          </div>
        </Section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <Section title={t('education')}>
          <div className="space-y-1.5">
            {education.map((ed) => (
              <article key={ed.id} className="break-inside-avoid">
                <div className="flex justify-between items-baseline gap-4">
                  <h3 className="font-semibold text-[10.5pt]">
                    {ed.degree}
                    {ed.field && <span className="font-normal">, {ed.field}</span>}
                  </h3>
                  <span className="text-[8.5pt] text-gray-600 whitespace-nowrap">
                    {formatYear(ed.startDate)}
                    {ed.endDate ? ` – ${formatYear(ed.endDate)}` : ` – ${present}`}
                  </span>
                </div>
                <p className="text-[9pt] text-gray-700">
                  {ed.institution}
                  {ed.location && <span className="text-gray-500"> · {ed.location}</span>}
                </p>
              </article>
            ))}
          </div>
        </Section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <Section title={t('skills')}>
          <div className="space-y-0.5">
            {skills.map((cat) => (
              <p key={cat.name} className="break-inside-avoid">
                <span className="font-semibold">{cat.name}: </span>
                <span className="text-gray-800">
                  {cat.skills.map((s) => s.name).join(', ')}
                </span>
              </p>
            ))}
          </div>
        </Section>
      )}

      {/* Screen-only fallback trigger */}
      <button
        type="button"
        onClick={() => window.print()}
        className="print:hidden fixed bottom-6 right-6 px-4 py-2 rounded-full shadow-lg text-white font-medium"
        style={{ backgroundColor: ACCENT }}
      >
        {t('saveAsPdf')}
      </button>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-3">
      <h2
        className="text-[10pt] font-semibold uppercase tracking-[0.12em] mb-1.5 pb-0.5 border-b border-gray-300"
        style={{ color: ACCENT }}
      >
        {title}
      </h2>
      {children}
    </section>
  )
}
