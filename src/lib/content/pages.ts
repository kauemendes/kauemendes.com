import 'server-only';
import path from 'node:path';
import { readFile } from 'node:fs/promises';
import matter from 'gray-matter';
import { marked } from 'marked';
import type { Review } from '@/lib/types';

// Legacy for info content
export async function getContent(slug: string): Promise<Review> {
  // https://vercel.com/guides/loading-static-file-nextjs-api-route
  const text = await readFile(path.join(process.cwd(), `/src/content/${slug}.md`), 'utf8');
  const { content, data: { title, date, image } } = matter(text);
  const body = marked(content);
  return { title, date, image, body };
}