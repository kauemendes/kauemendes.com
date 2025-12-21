'use client';

import Link from 'next/link';
import { LinkItem } from '@/content/data/links';

interface LinkCardProps {
  link: LinkItem;
  onClick?: () => void;
}

const iconMap: Record<string, string> = {
  linkedin: '💼',
  github: '🐙',
  whatsapp: '💬',
  blog: '📝',
  user: '👤',
  code: '💻',
  tool: '🔧',
  consulting: '🚀',
  resume: '📄'
};

export function LinkCard({ link, onClick }: LinkCardProps) {
  const icon = iconMap[link.icon || ''] || '🔗';
  
  const handleClick = () => {
    onClick?.();
  };

  const cardContent = (
    <div 
      className={`
        group p-6 rounded-xl border transition-all duration-300 cursor-pointer
        bg-brand-secondary/80 backdrop-blur-sm
        border-brand-secondary
        hover:border-brand-accent1/30
        hover:shadow-2xl hover:-translate-y-2
        ${link.featured ? 'ring-2 ring-brand-accent1/20' : ''}
      `}
      onClick={handleClick}
    >
      <div className="flex items-center gap-6">
        <div className="relative">
          <div className="absolute -inset-3 bg-brand-accent1/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative text-4xl">{icon}</div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-brand-neutral-light text-lg truncate group-hover:text-brand-accent1 transition-colors duration-300">
            {link.name}
          </h3>
          {link.description && (
            <p className="text-sm text-brand-neutral-light/70 mt-2 leading-relaxed">
              {link.description}
            </p>
          )}
          {link.featured && (
            <div className="mt-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-accent1/10 text-brand-accent1 border border-brand-accent1/20">
                Featured
              </span>
            </div>
          )}
        </div>
        <div className="text-brand-accent1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          {link.external ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          )}
        </div>
      </div>
    </div>
  );

  if (link.external) {
    return (
      <a href={link.url} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </a>
    );
  }

  return (
    <Link href={link.url}>
      {cardContent}
    </Link>
  );
}