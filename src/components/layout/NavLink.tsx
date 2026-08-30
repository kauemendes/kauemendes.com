'use client';

import type { ReactNode } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from 'next-intl';

interface NavLinkProps {
  href: string;
  children: ReactNode;
  prefetch?: boolean;
  /** Called after navigation — used to close the mobile menu. */
  onNavigate?: () => void;
}

const base = 'font-mono text-[11px] tracking-[0.1em] uppercase transition-colors duration-150';

export default function NavLink({ href, children, prefetch, onNavigate }: NavLinkProps) {
  const pathname = usePathname();
  const locale = useLocale();

  const localizedHref = href === '/' ? `/${locale}` : `/${locale}${href}`;

  const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
  // Section links stay active on their detail pages (/blog matches /blog/slug).
  const isActive =
    href === '/'
      ? pathWithoutLocale === '/'
      : pathWithoutLocale === href || pathWithoutLocale.startsWith(`${href}/`);

  if (isActive) {
    return (
      <span
        className={`${base} block text-ink font-bold shadow-[0_2px_0_0_var(--accent)]`}
        aria-current="page"
      >
        {children}
      </span>
    );
  }

  return (
    <Link
      href={localizedHref}
      prefetch={prefetch}
      onClick={onNavigate}
      className={`${base} block text-ink-muted hover:text-ink`}
    >
      {children}
    </Link>
  );
}
