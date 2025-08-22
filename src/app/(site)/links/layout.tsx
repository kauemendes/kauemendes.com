import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kaue Code - Links',
  description: 'Quick links to connect with Kaue Mendes',
  keywords: ['Kaue Mendes', 'Links', 'Contact', 'Social Media'],
  publisher: 'Kaue Mendes',
  creator: 'Kaue Mendes',
};

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}