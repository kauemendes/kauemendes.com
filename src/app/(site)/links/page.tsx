import { Heading } from '@/components';
import { socialLinks } from '@/content/data/social';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Kaue Code - Links',
  description: 'Quick links to connect with Kaue Mendes',
  keywords: ['Kaue Mendes', 'Links', 'Contact', 'Social Media'],
  publisher: 'Kaue Mendes',
  creator: 'Kaue Mendes',
};

export default function LinksPage() {
  return (
    <div className="m-auto mt-16 p-10 grow py-3">
      <div className="flex flex-col m-auto space-y-10 md:max-w-4xl sm:max-w-lg">
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
            Developer | DevOps | Tech Enthusiast
          </p>
        </div>
        
        <div className="space-y-4">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              className="block w-full p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
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
          
          <Link
            href="/blog"
            className="block w-full p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">📝</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Blog
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Latest thoughts on tech & development
                </p>
              </div>
            </div>
          </Link>
          
          <Link
            href="/projects"
            className="block w-full p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🚀</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Projects
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Showcase of recent work
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}