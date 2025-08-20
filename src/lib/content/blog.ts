import 'server-only';
import path from 'node:path';
import { readFile, readdir } from 'node:fs/promises';
import matter from 'gray-matter';
import { marked } from 'marked';
import type { PostMarkdown } from '@/lib/types';

// Get all posts from all years
export async function getPostsList(): Promise<PostMarkdown[]> {
  const posts: PostMarkdown[] = [];
  const blogPath = path.join(process.cwd(), '/src/content/blog/posts');
  
  try {
    const years = await readdir(blogPath, 'utf8');
    
    for (const year of years) {
      const yearPath = path.join(blogPath, year);
      try {
        const files = await readdir(yearPath, 'utf8');
        const markdownFiles = files.filter((file) => file.endsWith('.md'));
        
        for (const file of markdownFiles) {
          const slug = file.slice(0, -'.md'.length);
          const post = await getPostContent(slug, year);
          posts.push(post);
        }
      } catch (error) {
        // Skip if year directory doesn't exist or can't be read
        continue;
      }
    }
  } catch (error) {
    console.error('Error reading blog posts directory:', error);
  }
  
  posts.sort((a, b) => b.date.localeCompare(a.date));
  return posts;
}

// Get blog post content by slug and year
export async function getPostContent(slug: string, year?: string): Promise<PostMarkdown> {
  let filePath: string;
  
  if (year) {
    filePath = path.join(process.cwd(), `/src/content/blog/posts/${year}/${slug}.md`);
  } else {
    // Search for the file in all year directories if year not specified
    const blogPath = path.join(process.cwd(), '/src/content/blog/posts');
    const years = await readdir(blogPath, 'utf8');
    
    for (const yearDir of years) {
      const testPath = path.join(blogPath, yearDir, `${slug}.md`);
      try {
        await readFile(testPath, 'utf8');
        filePath = testPath;
        break;
      } catch {
        continue;
      }
    }
    
    if (!filePath) {
      throw new Error(`Post not found: ${slug}`);
    }
  }
  
  const text = await readFile(filePath, 'utf8');
  const { content, data: { post, title, description, date, image_banner, image_post } } = matter(text);
  const body = marked(content);
  return { post, title, description, date, image_banner, image_post, body };
}