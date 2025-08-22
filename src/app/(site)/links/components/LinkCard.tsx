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
        p-6 rounded-lg border transition-all duration-200 cursor-pointer
        bg-white dark:bg-gray-800 
        border-gray-200 dark:border-gray-700
        hover:border-blue-300 dark:hover:border-blue-600
        hover:shadow-lg hover:scale-105
        ${link.featured ? 'ring-2 ring-blue-100 dark:ring-blue-900' : ''}
      `}
      onClick={handleClick}
    >
      <div className="flex items-center gap-4">
        <div className="text-3xl">{icon}</div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 dark:text-white truncate">
            {link.name}
          </h3>
          {link.description && (
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              {link.description}
            </p>
          )}
        </div>
        {link.external && (
          <div className="text-gray-400 text-sm">↗</div>
        )}
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