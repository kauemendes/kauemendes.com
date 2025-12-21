'use client';

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';
import { socialLinks } from '@/content/data/social';
import BackToTop from './BackToTop';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations('footer');
  const tNav = useTranslations('navigation');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  return (
    <footer className="bg-brand-primary border-t border-brand-secondary">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="md:flex md:justify-between mb-12">
          {/* Brand Section */}
          <div className="mb-12 md:mb-0 md:max-w-md">
            <Link href={`/${locale}`} className="flex items-center mb-6">
              <Image
                src="/logo_novo.svg"
                width={48}
                height={48}
                className="h-12 w-12 me-4"
                alt="KaueCode Logo"
              />
              <div>
                <span className="text-2xl font-bold font-poppins text-brand-neutral-light">
                  KAUE<span className="bg-gradient-accent bg-clip-text text-transparent">CODE</span>
                </span>
                <div className="text-brand-neutral-light/60 text-sm font-medium">.COM</div>
              </div>
            </Link>
            <p className="text-brand-neutral-light/80 leading-relaxed mb-6">
              {t('description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.slice(0, 4).map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  className="group p-2 bg-brand-secondary rounded-lg border border-brand-secondary hover:border-brand-accent1/30 transition-all duration-300 hover:shadow-lg"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={20}
                    height={20}
                    className="opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-3">
            {/* Content Links */}
            <div>
              <h3 className="mb-6 text-sm font-bold font-poppins text-brand-neutral-light uppercase tracking-wider">
                {t('content')}
              </h3>
              <ul className="text-brand-neutral-light/70 font-medium space-y-3">
                <li>
                  <Link href={`/${locale}`} className="hover:text-brand-accent1 transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-brand-accent1 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {tNav('home')}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/blog`} className="hover:text-brand-accent1 transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-brand-accent1 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {tNav('blog')}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/projects`} className="hover:text-brand-accent1 transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-brand-accent1 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {tNav('projects')}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/about`} className="hover:text-brand-accent1 transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-brand-accent1 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {tNav('about')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Professional Links */}
            <div>
              <h3 className="mb-6 text-sm font-bold font-poppins text-brand-neutral-light uppercase tracking-wider">
                {t('professional')}
              </h3>
              <ul className="text-brand-neutral-light/70 font-medium space-y-3">
                <li>
                  <Link href={`/${locale}/consult`} className="hover:text-brand-accent2 transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-brand-accent2 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {t('consulting')}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/resume`} className="hover:text-brand-accent2 transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-brand-accent2 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {tNav('resume')}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/links`} className="hover:text-brand-accent2 transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-brand-accent2 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {tCommon('allLinks')}
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/kauemendes" target="_blank" className="hover:text-brand-accent2 transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-brand-accent2 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="mb-6 text-sm font-bold font-poppins text-brand-neutral-light uppercase tracking-wider">
                {t('expertise')}
              </h3>
              <ul className="text-brand-neutral-light/70 font-medium space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-accent3 rounded-full mr-3"></span>
                  {t('azureCloud')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-accent3 rounded-full mr-3"></span>
                  {t('devopsCiCd')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-accent3 rounded-full mr-3"></span>
                  {t('kubernetes')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-accent3 rounded-full mr-3"></span>
                  {t('iac')}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-brand-accent1/10 to-brand-accent2/10 rounded-2xl p-8 md:p-12 mb-12 border border-brand-accent1/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold font-poppins text-brand-neutral-light mb-4">
              {t('stayUpdated')}
            </h3>
            <p className="text-brand-neutral-light/80 mb-6 max-w-2xl mx-auto">
              {t('newsletterDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder={tCommon('enterEmail')}
                className="flex-1 px-4 py-3 rounded-lg bg-brand-secondary border border-brand-secondary focus:border-brand-accent1 focus:outline-none text-brand-neutral-light placeholder-brand-neutral-light/50"
              />
              <button className="px-6 py-3 bg-brand-accent1 text-brand-primary rounded-lg hover:bg-brand-accent2 transition-colors duration-300 font-semibold">
                {tCommon('subscribe')}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-brand-secondary pt-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <span className="text-sm text-brand-neutral-light/60">
                © {currentYear} <span className="font-semibold text-brand-neutral-light">KaueCode™</span>. {tCommon('allRightsReserved')}.
              </span>
              <div className="flex space-x-6 text-sm">
                <Link href="#" className="text-brand-neutral-light/60 hover:text-brand-accent1 transition-colors duration-300">
                  {tCommon('privacyPolicy')}
                </Link>
                <Link href="#" className="text-brand-neutral-light/60 hover:text-brand-accent1 transition-colors duration-300">
                  {tCommon('termsOfService')}
                </Link>
              </div>
            </div>

            <div className="mt-4 sm:mt-0">
              <p className="text-xs text-brand-neutral-light/40 font-mono">

              </p>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <BackToTop />
      </div>
    </footer>
  )
}
