import { LinkCategory } from '@/content/data/links';
import { LinkCard } from './LinkCard';

interface CategorySectionProps {
  category: LinkCategory;
  onLinkClick?: (linkName: string) => void;
}

export function CategorySection({ category, onLinkClick }: CategorySectionProps) {
  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold font-poppins text-ink mb-2">
          <span className="bg-gradient-accent bg-clip-text text-transparent">
            {category.title.split(' ')[0]}
          </span>{' '}
          {category.title.split(' ').slice(1).join(' ')}
        </h2>
        <div className="h-1 w-20 bg-gradient-accent rounded-full mx-auto"></div>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
        {category.links.map((link, index) => (
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