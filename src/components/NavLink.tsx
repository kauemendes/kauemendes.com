'use client';

import type { ReactNode } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  prefetch?: boolean;
}

export default function NavLink({ href, children, prefetch }: NavLinkProps) {
  const pathname = usePathname();
  const isNotActive = pathname === href;
  if (isNotActive) {
    return (
      <span
        className="text-rose-700 hover:text-stone-200 cursor-not-allowed">
        {children}
      </span>
    );
  }
  return (
    <Link href={href} prefetch={prefetch}
      className="text-stone-400 hover:text-sky-500 hover:underline">
      {children}
    </Link>
  );
}