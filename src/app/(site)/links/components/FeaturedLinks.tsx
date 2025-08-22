import { featuredLinks } from '@/content/data/links';
import { LinkCard } from './LinkCard';

interface FeaturedLinksProps {
  onLinkClick?: (linkName: string) => void;
}

export function FeaturedLinks({ onLinkClick }: FeaturedLinksProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Quick Links
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {featuredLinks.map((link) => (
          <LinkCard
            key={link.name}
            link={link}
            onClick={() => onLinkClick?.(link.name)}
          />
        ))}
      </div>
    </div>
  );
}