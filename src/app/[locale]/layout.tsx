import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ThemeProvider } from "next-themes"
import { GoogleAnalytics } from '@next/third-parties/google'

import { NavBar, Footer } from '@/components'
import { roboto, sourceCodePro, ebgaramond } from '@/styles/fonts'
import { locales, Locale } from '@/i18n'

import '@/styles/globals.css'

interface LayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isPortuguese = locale === 'pt';

  return {
    title: {
      default: 'kauecode.com',
      template: '%s | kauecode.com'
    },
    description: isPortuguese
      ? 'Site pessoal de Kaue Mendes de Freitas, blog pessoal e portfólio.'
      : 'Personal Kaue Mendes de Freitas website, personal blog and portfolio.',
    keywords: ['Kaue Mendes', 'Kaue Mendes de Freitas', 'Kaue Mendes Portfolio', 'Kaue Mendes Blog', 'Kaue Mendes Personal Portfolio', 'Kaue Mendes Blog'],
    publisher: 'Kaue Mendes',
    creator: 'Kaue Mendes',
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'pt-BR': '/pt',
        'en': '/en'
      }
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: LayoutProps) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${roboto.variable} ${sourceCodePro.variable} ${ebgaramond.variable}`} suppressHydrationWarning>
      <body className='bg-stone-50 flex flex-col min-h-screen font-roboto'>
        <ThemeProvider attribute="class">
          <NextIntlClientProvider messages={messages}>
            <NavBar />
            <main className="">
              {children}
            </main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
        <GoogleAnalytics gaId="G-5D50WB6BVV" />
      </body>
    </html>
  )
}
