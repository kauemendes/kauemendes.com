import Link from 'next/link'
import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

import { Frame, Eyebrow, Meta } from '@/components/ui'
import { AgentDiagram } from '@/components/features/agent/AgentDiagram'
import { howItWorks } from '@/content/data/how-it-works'
import { getAgentStatus } from '@/lib/agent/gateway'
import { buildAlternates, absoluteUrl, ogLocale, alternateOgLocales, SITE_NAME } from '@/lib/seo'

// Mesmo ritmo da home: o status do agente nesta página tem no máximo 60 s.
export const revalidate = 60

interface PageProps {
  params: Promise<{ locale: string }>
}

function pick(locale: string) {
  return howItWorks[locale === 'en' ? 'en' : 'pt']
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const c = pick(locale)

  return {
    title: c.title,
    description: c.lede,
    alternates: buildAlternates(locale, '/how-it-works'),
    openGraph: {
      type: 'article',
      title: c.title,
      description: c.lede,
      url: absoluteUrl(locale, '/how-it-works'),
      siteName: SITE_NAME,
      locale: ogLocale(locale),
      alternateLocale: alternateOgLocales(locale),
    },
    twitter: { card: 'summary_large_image', title: c.title, description: c.lede },
  }
}

function SectionTitle({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <h2 className="font-display text-[clamp(1.7rem,4vw,2.3rem)] leading-[1.05] text-ink mb-6 flex items-baseline gap-4">
      <span className="font-mono text-[11px] tracking-[0.14em] text-ink-muted">{String(n).padStart(2, '0')}</span>
      {children}
    </h2>
  )
}

const prose = 'font-text text-[16.5px] leading-[1.78] text-ink-soft max-w-[62ch]'

export default async function HowItWorksPage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const c = pick(locale)
  const online = await getAgentStatus()
  const status = locale === 'en' ? (online ? 'agent online' : 'agent offline') : online ? 'agente online' : 'agente offline'

  return (
    <div className="max-w-(--breakpoint-xl) mx-auto px-6">
      <header className="pt-14 pb-8 md:pt-20 md:pb-10">
        <Meta
          items={[
            <span key="s" className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className={`inline-block w-2 h-2 ${online ? 'bg-accent' : 'bg-ink-muted'}`}
              />
              <span className={online ? 'text-accent font-bold' : ''}>{status}</span>
            </span>,
            'kauecode.com',
          ]}
          className="mb-5"
        />
        <h1 className="font-display text-[clamp(2.4rem,7vw,4rem)] leading-[0.98] tracking-[-0.02em] text-ink mb-6">
          {c.title}
        </h1>
        <p className="font-text italic text-[17px] md:text-[18px] leading-[1.62] text-ink-soft max-w-[62ch]">{c.lede}</p>
      </header>

      {/* 1. Caminho de uma pergunta: diagrama + passos */}
      <section className="rule-solid pt-10 pb-14">
        <SectionTitle n={1}>{c.stepsTitle}</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-10 items-start">
          <div className="lg:sticky lg:top-8">
            <AgentDiagram labels={c.diagram} title={c.stepsTitle} />
          </div>
          <ol className="flex flex-col">
            {c.steps.map((s, i) => (
              <li key={s.title} className={`py-5 ${i > 0 ? 'border-t border-dashed border-rule' : 'pt-0'}`}>
                <Meta
                  size="micro"
                  items={[
                    <span key="n" className="text-accent font-bold">
                      {String(i + 1).padStart(2, '0')}
                    </span>,
                    s.where,
                    s.source && (
                      <a
                        key="src"
                        href={s.source.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2 hover:text-ink"
                      >
                        {c.sourceLabel}: {s.source.label}
                      </a>
                    ),
                  ]}
                  className="mb-2"
                />
                <h3 className="font-display text-[22px] leading-[1.15] text-ink mb-2">{s.title}</h3>
                <p className={prose}>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 2. Limites */}
      <section className="rule-solid pt-10 pb-14">
        <SectionTitle n={2}>{c.limitsTitle}</SectionTitle>
        <p className={`${prose} mb-6`}>{c.limitsNote}</p>
        <Frame shadow="sm" className="max-w-[640px]">
          <dl>
            {c.limits.map((l, i) => (
              <div
                key={l.label}
                className={`flex flex-wrap justify-between gap-x-6 gap-y-1 px-4 py-3 ${i > 0 ? 'border-t border-dashed border-rule' : ''}`}
              >
                <dt className="font-mono text-[10.5px] tracking-[0.13em] uppercase text-ink-muted">{l.label}</dt>
                <dd className="font-mono text-[12px] text-ink">{l.value}</dd>
              </div>
            ))}
          </dl>
        </Frame>
      </section>

      {/* 3. Offline e 4. Privacidade */}
      <section className="rule-solid pt-10 pb-14 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <SectionTitle n={3}>{c.offlineTitle}</SectionTitle>
          {c.offline.map((p) => (
            <p key={p} className={`${prose} mb-4`}>
              {p}
            </p>
          ))}
        </div>
        <div>
          <SectionTitle n={4}>{c.privacyTitle}</SectionTitle>
          <ul className="flex flex-col gap-3">
            {c.privacy.map((p) => (
              <li key={p} className={`${prose} pl-4 border-l-2 border-ink`}>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Decisões */}
      <section className="rule-solid pt-10 pb-14">
        <SectionTitle n={5}>{c.whyTitle}</SectionTitle>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {c.why.map((w) => (
            <div key={w.decision} className="py-4 border-t border-dashed border-rule">
              <dt className="font-display text-[20px] leading-[1.2] text-ink mb-1">{w.decision}</dt>
              <dd className={prose}>{w.reason}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 6. O que deu errado */}
      <section className="rule-solid pt-10 pb-14">
        <SectionTitle n={6}>{c.lessonsTitle}</SectionTitle>
        <ol className="flex flex-col max-w-[820px]">
          {c.lessons.map((l, i) => (
            <li key={l.what} className={`py-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 ${i > 0 ? 'border-t border-dashed border-rule' : ''}`}>
              <p className="font-text text-[16.5px] leading-[1.6] text-ink">{l.what}</p>
              <p className={prose}>{l.fix}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 7. Laboratório */}
      <section className="rule-solid pt-10 pb-20">
        <Eyebrow>{c.labTitle}</Eyebrow>
        <p className={`${prose} mb-6`}>{c.lab}</p>
        <Link
          href={c.labHref}
          className="press inline-block border-2 border-ink shadow-hard-sm bg-paper px-5 py-4 font-display text-[22px] leading-[1.2] text-ink"
        >
          {c.labLink} →
        </Link>
      </section>
    </div>
  )
}
