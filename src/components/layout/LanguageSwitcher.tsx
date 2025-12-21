'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales, Locale } from '@/i18n';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: Locale) => {
    // Replace current locale in path with new locale
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    const newPath = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
    router.push(newPath);
  };

  return (
    <div className="flex items-center space-x-1 ml-4">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
            locale === loc
              ? 'bg-brand-accent1 text-brand-primary'
              : 'text-brand-neutral-light hover:bg-brand-secondary border border-brand-secondary hover:border-brand-accent1/30'
          }`}
          aria-label={loc === 'pt' ? 'Português' : 'English'}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
