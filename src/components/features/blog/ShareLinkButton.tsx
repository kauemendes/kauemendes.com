'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ShareLinkButton() {
  const [copied, setCopied] = useState(false);
  const t = useTranslations('blog');

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard unavailable (insecure context or denied permission) — the URL
      // is in the address bar either way, so fail quietly.
    }
  };

  return (
    <button
      type="button"
      onClick={copyLink}
      className="font-mono text-[10px] tracking-[0.12em] uppercase text-ink-muted hover:text-accent transition-colors duration-150 cursor-pointer"
      aria-live="polite"
    >
      {copied ? t('shareCopied') : t('share')}
    </button>
  );
}
