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
        className="block py-2 px-3 md:p-0 text-white bg-rose-700 rounded md:bg-transparent md:text-rose-700 md:dark:text-rose-500 dark:bg-rose-600 md:dark:bg-transparent" aria-current>
        {children}
      </span>
    );
  }
  return (
    <Link href={href} prefetch={prefetch}
      className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
      {children}
    </Link>
  );
}
