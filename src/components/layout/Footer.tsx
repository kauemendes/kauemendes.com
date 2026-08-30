'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { socialLinks } from '@/content/data/social';
import BackToTop from './BackToTop';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('navigation');
  const locale = useLocale();
  const year = new Date().getFullYear();

  const columns = [
    {
      title: t('content'),
      links: [
        { label: tNav('home'), href: `/${locale}` },
        { label: tNav('blog'), href: `/${locale}/blog` },
        { label: tNav('projects'), href: `/${locale}/projects` },
        { label: tNav('about'), href: `/${locale}/about` },
      ],
    },
    {
      title: t('professional'),
      links: [
        { label: t('consulting'), href: `/${locale}/consult` },
        { label: tNav('resume'), href: `/${locale}/resume` },
        { label: tNav('links'), href: `/${locale}/links` },
      ],
    },
  ];

  const expertise = [t('azureCloud'), t('devopsCiCd'), t('kubernetes'), t('iac')];

  return (
    <footer className="border-t-2 border-ink bg-paper mt-24">
      <div className="max-w-(--breakpoint-xl) mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-12">

          {/* Colophon */}
          <div className="md:col-span-5">
            <p className="font-mono text-[13px] font-bold tracking-[0.06em] text-ink mb-4">
              kauecode<span className="text-accent">/</span>
            </p>
            <p className="font-text text-[15px] leading-[1.7] text-ink-soft max-w-[42ch]">
              {t('description')}
            </p>
          </div>

          {/* Link columns */}
          {columns.map((column) => (
            <nav key={column.title} className="md:col-span-2">
              <h2 className="font-mono text-[10px] tracking-[0.16em] uppercase text-ink-muted pb-3 mb-3 border-b border-dashed border-rule">
                {column.title}
              </h2>
              <ul className="flex flex-col gap-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-mono text-[11px] tracking-[0.06em] text-ink-soft hover:text-accent transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Expertise — labels, not links */}
          <div className="md:col-span-3">
            <h2 className="font-mono text-[10px] tracking-[0.16em] uppercase text-ink-muted pb-3 mb-3 border-b border-dashed border-rule">
              {t('expertise')}
            </h2>
            <ul className="flex flex-col gap-2">
              {expertise.map((item) => (
                <li key={item} className="font-mono text-[11px] tracking-[0.06em] text-ink-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Elsewhere — set as mono labels rather than brand-coloured icons. */}
        <div className="border-t border-dashed border-rule py-6 flex flex-wrap gap-x-6 gap-y-2">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-[0.08em] uppercase text-ink-soft hover:text-accent transition-colors duration-150"
            >
              {link.name} <span aria-hidden="true">&#8599;</span>
            </a>
          ))}
        </div>

        {/* Bottom rail */}
        <div className="border-t-2 border-ink py-5 flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-ink-muted">
            &copy; {year} Kaue Mendes de Freitas
          </p>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}
