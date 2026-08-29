import Link from 'next/link'
import Image from 'next/image'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Metadata } from 'next'

import { Frame } from '@/components'

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  return {
    title: t('title'),
    description: t('paragraph1'),
    keywords: ['Kaue Mendes', 'Kaue Mendes de Freitas', 'Kaue Mendes Profile', 'Kaue Mendes Personal Website', 'Profile'],
    publisher: 'Kaue Mendes',
    creator: 'Kaue Mendes',
    alternates: {
      canonical: `/${locale}/about`,
      languages: { 'pt-BR': '/pt/about', en: '/en/about' },
    },
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'about' });

  const profiles = [
    { slug: 'personal', label: t('personal'), image: '/images/avatar_vermelho.png' },
    { slug: 'professional', label: t('professional'), image: '/images/avatars/avatar.png' },
  ];

  return (
    <div className="max-w-(--breakpoint-xl) mx-auto px-6">

      <header className="pt-14 pb-8 md:pt-20 md:pb-10">
        <h1 className="font-display text-[clamp(2.4rem,7vw,4rem)] leading-[0.98] tracking-[-0.02em] text-ink">
          {t('title')}
        </h1>
      </header>

      <section className="rule-solid pt-10 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-10 items-start">
          <div>
            <p className="font-display text-[clamp(2rem,5vw,3rem)] leading-[1.05] text-ink mb-6">
              {t('greeting')}
            </p>
            <p className="font-text text-[16.5px] leading-[1.78] text-ink-soft mb-4 max-w-[62ch]">
              {t('paragraph1')}
            </p>
            <p className="font-text text-[16.5px] leading-[1.78] text-ink-soft max-w-[62ch]">
              {t('paragraph2')}
            </p>

            <p className="font-mono text-[10.5px] tracking-[0.13em] uppercase text-ink-muted mt-8 pt-4 border-t border-dashed border-rule flex flex-wrap gap-x-4 gap-y-1">
              <span>{t('tagline1')}</span>
              <span aria-hidden="true">&middot;</span>
              <span>{t('tagline2')}</span>
            </p>
          </div>

          <div className="border-2 border-ink shadow-hard overflow-hidden">
            <Image
              src="/images/hero_3.jpg"
              width={640}
              height={640}
              className="w-full h-auto block"
              alt="Kaue posing in a black shirt against a blueish background"
              priority
            />
          </div>
        </div>
      </section>

      <section className="rule-solid pt-4 pb-20">
        <h2 className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-ink font-bold pb-6">
          {t('profiles')}
        </h2>

        <ul className="flex flex-wrap gap-5">
          {profiles.map((profile) => (
            <li key={profile.slug}>
              <Frame as="div" shadow="sm" press className="w-36 overflow-hidden">
                <Link href={`/${locale}/about/${profile.slug}`} className="group block no-underline">
                  <Image
                    src={profile.image}
                    width={144}
                    height={144}
                    className="w-full h-auto block border-b-2 border-ink bg-paper-2"
                    alt={profile.label}
                  />
                  <span className="block py-2 text-center font-mono text-[10px] tracking-[0.12em] uppercase text-ink group-hover:text-accent transition-colors duration-150">
                    {profile.label}
                  </span>
                </Link>
              </Frame>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
