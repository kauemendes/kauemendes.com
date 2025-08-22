import { featuredLinks } from '@/content/data/links';
import { LinkCard } from './LinkCard';

interface FeaturedLinksProps {
  onLinkClick?: (linkName: string) => void;
}

export function FeaturedLinks({ onLinkClick }: FeaturedLinksProps) {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold font-poppins text-brand-neutral-light mb-8 text-center">
        <span className="bg-gradient-accent bg-clip-text text-transparent">Quick</span> Access
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {featuredLinks.map((link, index) => (
          <div key={link.name} className="animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
            <LinkCard
              link={link}
              onClick={() => onLinkClick?.(link.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}