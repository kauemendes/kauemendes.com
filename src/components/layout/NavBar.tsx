'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import NavLink from './NavLink';
import LanguageSwitcher from './LanguageSwitcher';
import { DarkModeButton } from '@/components/features/theme';

/**
 * Site rail. `sticky` rather than `fixed` so it participates in flow and pages
 * need no compensating top padding.
 */
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('navigation');
  const locale = useLocale();

  const links = [
    { href: '/', label: t('home') },
    { href: '/blog', label: t('blog') },
    { href: '/projects', label: t('projects') },
    { href: '/about', label: t('about') },
    { href: '/resume', label: t('resume') },
    { href: '/consult', label: t('consult') },
  ];

  return (
    <nav className="sticky top-0 z-30 bg-paper border-b-2 border-ink">
      <div className="max-w-(--breakpoint-xl) mx-auto px-6">
        <div className="flex items-center justify-between gap-6 py-3">

          {/* Wordmark — the slash is the only accent in the rail. */}
          <Link
            href={`/${locale}`}
            className="font-mono text-[13px] font-bold tracking-[0.06em] text-ink shrink-0"
          >
            kauecode<span className="text-accent">/</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6 mr-auto">
            {links.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href}>{link.label}</NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-2">
            <LanguageSwitcher />
            <DarkModeButton />
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <DarkModeButton />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex h-9 w-9 items-center justify-center border-2 border-ink bg-paper text-ink shadow-hard-sm press"
              aria-controls="navbar-main"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path
                  stroke="currentColor"
                  strokeLinecap="square"
                  strokeWidth="2"
                  d={isOpen ? 'M2 2l13 10M15 2L2 12' : 'M1 1h15M1 7h15M1 13h15'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div id="navbar-main" className="md:hidden border-t border-dashed border-rule animate-fadeIn">
            <ul className="flex flex-col py-2">
              {links.map((link) => (
                <li key={link.href} className="py-2 border-b border-dashed border-rule last:border-b-0">
                  <NavLink href={link.href} onNavigate={() => setIsOpen(false)}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="py-3 border-t border-dashed border-rule">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
