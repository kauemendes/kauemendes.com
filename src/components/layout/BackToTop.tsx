'use client';

import { useTranslations } from 'next-intl';

export default function BackToTop() {
  const t = useTranslations('common');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="font-mono text-[10px] tracking-[0.12em] uppercase text-ink-muted hover:text-ink transition-colors duration-150 cursor-pointer"
    >
      &uarr; {t('backToTop')}
    </button>
  );
}
