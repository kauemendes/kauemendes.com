'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales, Locale } from '@/i18n';

/** Segmented EN / PT pair sharing one ink border. */
export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: Locale) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    const newPath = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
    router.push(newPath);
  };

  return (
    <div className="inline-flex border-2 border-ink divide-x-2 divide-ink">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`px-2 py-1 font-mono text-[10px] font-bold tracking-[0.1em] uppercase transition-colors duration-150 cursor-pointer ${
            locale === loc
              ? 'bg-ink text-paper'
              : 'bg-paper text-ink-muted hover:text-ink'
          }`}
          aria-label={loc === 'pt' ? 'Português' : 'English'}
          aria-current={locale === loc ? 'true' : undefined}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
