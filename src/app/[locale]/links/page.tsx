'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { socialLinks } from '@/content/data/social';
import { linkCategories } from '@/content/data/links';
import { FeaturedLinks, CategorySection } from './components';
import Image from 'next/image';
import Link from 'next/link';


export default function LinksPage() {
  const t = useTranslations('links');
  const params = useParams();
  const locale = params.locale as string;
  const [clickCounts, setClickCounts] = useState<Record<string, number>>({});

  const handleLinkClick = (linkName: string) => {
    setClickCounts(prev => ({
      ...prev,
      [linkName]: (prev[linkName] || 0) + 1
    }));
    
    // Store in localStorage for basic analytics
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('link-analytics');
      const analytics = stored ? JSON.parse(stored) : {};
      analytics[linkName] = (analytics[linkName] || 0) + 1;
      analytics.lastUpdated = new Date().toISOString();
      localStorage.setItem('link-analytics', JSON.stringify(analytics));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-brand">
      <div className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-16 pt-16">
          <div className="mb-6">
            <span className="bg-brand-accent2/10 text-brand-accent2 text-sm font-medium px-4 py-2 rounded-full border border-brand-accent2/20">
              {t('connectWithMe')}
            </span>
          </div>

          <div className="mb-8">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-accent1 to-brand-accent2 rounded-full opacity-20 blur-lg"></div>
              <Image
                src="/images/avatars/avatar.png"
                alt="Kaue Mendes"
                width={150}
                height={150}
                className="relative rounded-full mx-auto border-4 border-brand-accent1/30 shadow-2xl"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-brand-neutral-light mb-4">
            <span className="bg-gradient-accent bg-clip-text text-transparent">Kaue</span> Mendes
          </h1>

          <p className="text-brand-neutral-light/90 text-lg mb-4 max-w-2xl mx-auto leading-relaxed">
            {t('role')}
          </p>

          <p className="text-brand-neutral-light/70 text-base max-w-xl mx-auto">
            {t('intro')}
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-brand-secondary/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-brand-secondary">
            <div className="text-3xl font-bold text-brand-accent1 mb-2 font-poppins">
              10+
            </div>
            <div className="text-brand-neutral-medium text-sm font-medium">
              {t('stats.platforms')}
            </div>
          </div>

          <div className="bg-brand-secondary/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-brand-secondary">
            <div className="text-3xl font-bold text-brand-accent2 mb-2 font-poppins">
              5k+
            </div>
            <div className="text-brand-neutral-medium text-sm font-medium">
              {t('stats.connections')}
            </div>
          </div>

          <div className="bg-brand-secondary/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-brand-secondary">
            <div className="text-3xl font-bold text-brand-accent3 mb-2 font-poppins">
              24/7
            </div>
            <div className="text-brand-neutral-medium text-sm font-medium">
              {t('stats.available')}
            </div>
          </div>

          <div className="bg-brand-secondary/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-brand-secondary">
            <div className="text-3xl font-bold text-brand-accent1 mb-2 font-poppins">
              100%
            </div>
            <div className="text-brand-neutral-medium text-sm font-medium">
              {t('stats.responseRate')}
            </div>
          </div>
        </div>

        {/* Featured Links */}
        <FeaturedLinks onLinkClick={handleLinkClick} />

        {/* Enhanced Social Links */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold font-poppins text-brand-neutral-light mb-8 text-center">
            <span className="bg-gradient-accent bg-clip-text text-transparent">{t('socialProfessional').split(' ')[0]}</span> {t('socialProfessional').split(' ').slice(1).join(' ')}
          </h2>
          <div className="space-y-4">
            {socialLinks.map((link, index) => (
              <div key={link.name} className="animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                <Link
                  href={link.url}
                  target="_blank"
                  className="group block w-full p-6 bg-brand-secondary/80 backdrop-blur-sm rounded-xl border border-brand-secondary hover:border-brand-accent1/30 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
                  onClick={() => handleLinkClick(link.name)}
                >
                  <div className="flex items-center space-x-6">
                    <div className="relative">
                      <div className="absolute -inset-2 bg-brand-accent1/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Image 
                        src={link.icon} 
                        alt={link.name}
                        width={40} 
                        height={40}
                        className="relative"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-brand-neutral-light text-lg group-hover:text-brand-accent1 transition-colors duration-300">
                        {link.name}
                      </h3>
                      <p className="text-brand-neutral-light/70 text-sm mt-1">
                        {link.username}
                      </p>
                    </div>
                    <div className="text-brand-accent1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Categories */}
        <div className="space-y-12 mb-16">
          {linkCategories.filter(cat => cat.title !== "Social & Professional").map((category, categoryIndex) => (
            <div key={category.title} className="animate-fadeIn" style={{ animationDelay: `${(categoryIndex + socialLinks.length) * 0.1}s` }}>
              <CategorySection
                category={category}
                onLinkClick={handleLinkClick}
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="relative bg-gradient-to-r from-brand-accent1/20 to-brand-accent2/20 rounded-2xl p-8 md:p-12 text-center border border-brand-accent1/30 overflow-hidden mb-16">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300E5FF' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-brand-neutral-light mb-4">
              {t('letsWorkTogether')}
            </h2>
            <p className="text-lg text-brand-neutral-light/80 mb-8 max-w-2xl mx-auto">
              {t('ctaDescription')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/consult`}
                className="group inline-flex justify-center items-center py-4 px-8 text-base font-semibold text-center text-brand-primary rounded-lg bg-brand-accent1 hover:bg-brand-accent2 focus:ring-4 focus:ring-brand-accent1/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {t('startProject')}
                <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </Link>

              <Link
                href={`/${locale}/projects`}
                className="group inline-flex justify-center items-center py-4 px-8 text-base font-semibold text-center text-brand-neutral-light rounded-lg border-2 border-brand-accent1 hover:bg-brand-accent1 hover:text-brand-primary focus:ring-4 focus:ring-brand-accent1/30 transition-all duration-300"
              >
                {t('viewMyWork')}
                <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pb-8">
          <p className="font-mono text-brand-neutral-medium">
            with root in kauecode.com/links ¤ main ➜ <span className="font-bold animate-pulse">_</span>
          </p>
          <p className="text-brand-neutral-light/60 text-sm mt-2">
            {t('footerBuiltWith')}
          </p>
        </div>
      </div>
    </div>
  );
}