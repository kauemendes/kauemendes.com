'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const DarkModeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="inline-flex h-[26px] w-[26px] items-center justify-center border-2 border-ink bg-paper text-ink hover:bg-ink hover:text-paper transition-colors duration-150 cursor-pointer"
      aria-label={mounted ? (isDark ? 'Switch to light mode' : 'Switch to dark mode') : 'Toggle theme'}
    >
      {mounted ? (
        isDark ? (
          <SunIcon className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
        ) : (
          <MoonIcon className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
        )
      ) : (
        <span className="h-3.5 w-3.5" aria-hidden="true" />
      )}
    </button>
  );
};

export default DarkModeButton;
