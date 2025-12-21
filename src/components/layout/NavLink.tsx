'use client';

import type { ReactNode } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from 'next-intl';

interface NavLinkProps {
  href: string;
  children: ReactNode;
  prefetch?: boolean;
}

export default function NavLink({ href, children, prefetch }: NavLinkProps) {
  const pathname = usePathname();
  const locale = useLocale();

  // Build locale-prefixed href
  const localizedHref = href === '/' ? `/${locale}` : `/${locale}${href}`;

  // Check if current path matches (accounting for locale prefix)
  const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
  const isActive = pathWithoutLocale === href || (href === '/' && pathWithoutLocale === '');

  if (isActive) {
    return (
      <span
        className="block py-2 px-3 md:p-0 text-brand-accent1 bg-brand-secondary rounded md:bg-transparent font-semibold relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-accent1 after:rounded-full"
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
      className="block py-2 px-3 md:p-0 text-brand-neutral-light rounded transition-all duration-300 hover:bg-brand-secondary md:hover:bg-transparent md:border-0 md:hover:text-brand-accent1 hover:text-brand-accent3 font-medium relative group"
    >
      {children}
      {/* Hover underline effect */}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-accent1 to-brand-accent3 rounded-full transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}
