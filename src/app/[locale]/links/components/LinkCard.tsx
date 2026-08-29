import Link from 'next/link';
import {
  BriefcaseIcon,
  CodeBracketIcon,
  ChatBubbleLeftRightIcon,
  PencilSquareIcon,
  UserIcon,
  CommandLineIcon,
  WrenchScrewdriverIcon,
  RocketLaunchIcon,
  DocumentTextIcon,
  LinkIcon,
} from '@heroicons/react/24/outline';

import { LinkItem } from '@/content/data/links';
import { Frame } from '@/components/ui';

/**
 * Line icons replacing the emoji map this component used to render at text-4xl.
 * Keys match the `icon` field in src/content/data/links.ts.
 */
const iconMap = {
  linkedin: BriefcaseIcon,
  github: CodeBracketIcon,
  whatsapp: ChatBubbleLeftRightIcon,
  blog: PencilSquareIcon,
  user: UserIcon,
  code: CommandLineIcon,
  tool: WrenchScrewdriverIcon,
  consulting: RocketLaunchIcon,
  resume: DocumentTextIcon,
} as const;

interface LinkCardProps {
  link: LinkItem;
  locale: string;
}

export default function LinkCard({ link, locale }: LinkCardProps) {
  const Icon = iconMap[link.icon as keyof typeof iconMap] ?? LinkIcon;
  // Internal paths need the locale prefix; external ones are used verbatim.
  const href = link.external ? link.url : `/${locale}${link.url}`;

  const body = (
    <>
      <span className="shrink-0 border-2 border-ink p-2 bg-paper-2">
        <Icon className="h-5 w-5 text-ink" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block font-display text-[1.25rem] leading-[1.15] text-ink mb-0.5">
          {link.name}
        </span>
        {link.description && (
          <span className="block font-text text-[13.5px] leading-[1.55] text-ink-soft">
            {link.description}
          </span>
        )}
      </span>
      <span
        className="ml-auto shrink-0 self-center font-mono text-[13px] text-ink-muted"
        aria-hidden="true"
      >
        {link.external ? '↗' : '→'}
      </span>
    </>
  );

  const className = 'flex items-start gap-4 p-4 no-underline w-full';

  return (
    <Frame shadow="sm" press>
      {link.external ? (
        <a href={link.url} target="_blank" rel="noopener noreferrer" className={className}>
          {body}
        </a>
      ) : (
        <Link href={href} className={className}>
          {body}
        </Link>
      )}
    </Frame>
  );
}
