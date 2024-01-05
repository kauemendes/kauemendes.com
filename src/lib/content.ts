import { readFile, readdir } from 'node:fs/promises';
import matter from 'gray-matter';
import { marked } from 'marked';

export interface Review {
  title: string;
  date: string;
  image: string;
  body: string;
}
export interface Post {
  slug: string;
  title: string;
  date: string;
  image_banner: string;
  image_post: string;
  body: string;
}

export async function getFeaturedPost(): Promise<Post> {
  return getPosts().then((posts) => posts[0]);
}

export async function getContent(slug: string): Promise<Review> {
  console.log(__dirname)
  const text = await readFile(__dirname + `/../../../../../src/content/${slug}.md`, 'utf8');
  const { content, data: { title, date, image } } = matter(text);
  const body = marked(content);
  return { title, date, image, body };
}

export async function getPost(slug: string): Promise<Post> {
  const text = await readFile(`./src/content/blog/post/${slug}.md`, 'utf8');
  const { content, data: { title, date, image_banner, image_post } } = matter(text);
  const body = marked(content);
  return { slug, title, date, image_banner, image_post, body };
}

export async function getPosts() {
  const files = await readdir('./src/content/blog/post')
  const slugs = files.filter((file) => file.endsWith('.md')).map((slug) => slug.slice(0, -'.md'.length));
  const posts = []
  for (const slug of slugs) {
    const post = await getPost(slug)
    posts.push(post)
  }
  posts.sort((a, b) => b.date.localeCompare(a.date))
  return posts
}
