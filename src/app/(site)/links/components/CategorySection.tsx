import { LinkCategory } from '@/content/data/links';
import { LinkCard } from './LinkCard';

interface CategorySectionProps {
  category: LinkCategory;
  onLinkClick?: (linkName: string) => void;
}

export function CategorySection({ category, onLinkClick }: CategorySectionProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        {category.title}
      </h2>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
        {category.links.map((link) => (
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