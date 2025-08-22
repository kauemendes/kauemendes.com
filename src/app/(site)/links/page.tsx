'use client';

import { useState } from 'react';
import { Heading } from '@/components';
import { socialLinks } from '@/content/data/social';
import { linkCategories } from '@/content/data/links';
import { FeaturedLinks, CategorySection } from './components';
import Image from 'next/image';
import Link from 'next/link';


export default function LinksPage() {
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
    <div className="m-auto mt-16 p-10 grow py-3">
      <div className="flex flex-col m-auto space-y-10 md:max-w-4xl sm:max-w-lg">
        {/* Header with existing avatar */}
        <div className="text-center">
          <Image 
            src="/images/avatars/avatar.png" 
            alt="Kaue Mendes" 
            width={120} 
            height={120}
            className="rounded-full mx-auto mb-4"
          />
          <Heading>Kaue Mendes</Heading>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            DevOps Engineer • Cloud Architect • Tech Enthusiast
          </p>
          <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
            Connect with me and explore my work
          </p>
        </div>

        {/* Featured Links */}
        <FeaturedLinks onLinkClick={handleLinkClick} />

        {/* Enhanced Social Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-4">
            Social & Professional
          </h3>
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              className="block w-full p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              onClick={() => handleLinkClick(link.name)}
            >
              <div className="flex items-center space-x-4">
                <Image 
                  src={link.icon} 
                  alt={link.name}
                  width={32} 
                  height={32}
                />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {link.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {link.username}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Categories */}
        <div className="space-y-8">
          {linkCategories.filter(cat => cat.title !== "Social & Professional").map((category) => (
            <CategorySection
              key={category.title}
              category={category}
              onLinkClick={handleLinkClick}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 pb-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Built with Next.js • Updated regularly
          </p>
        </div>
      </div>
    </div>
  );
}