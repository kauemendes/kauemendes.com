import 'server-only';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile, readdir } from 'node:fs/promises';
import matter from 'gray-matter';
import { marked } from 'marked';
import qs from 'qs';

export const CACHE_TAG_POSTS = 'posts';
export const RANDOM_HOME_MESSAGE = 'home-random-message';
const CMS_URL = process.env.CMS_URL;
const __dirname = dirname(fileURLToPath(import.meta.url));

export interface Review {
  title: string;
  date: string;
  image: string;
  body: string;
}
export interface Post {
  post: string;
  title: string;
  date: string;
  image_banner: string;
  image_post: string;
  body: string;
}
export interface PostMarkdown {
  post: string;
  title: string;
  date: string;
  image_banner: string;
  image_post: string;
  body: string;
}

export interface PaginatedPosts {
  pageCount: number;
  posts: Post[];
}

export async function getRandomMessage(): Promise<string> {
  const messages = [
    "It works on my machine! – The battle cry of developers everywhere.",
    "99 little bugs in the code, take one down, patch it around, 127 bugs in the code…",
    "I don't need Google, my code is self-documented.",
    "Programming is 10% writing code and 90% figuring out why it doesn't work.",
    "My code is compiling. I am now a philosopher.",
    "Debugging: like being the detective in a crime movie where you are also the murderer.",
    "Why fix it today when you can refactor it tomorrow?",
    "I'd explain my code, but I left the comments for future me, and future me is not here yet.",
    "The code is perfect. The users are wrong.",
    "'Temporary' is the most permanent thing in software development.",
    "We don't make mistakes, just undocumented features.",
    "Working on legacy code feels like fixing someone else's time travel paradox.",
    "Version 1.0 is like your first pancake: nobody eats it, but you learn a lot.",
    "Programming is just typing random symbols until it works, and then pretending you knew what you were doing.",
    "I have a degree in computer science, but Stack Overflow is my true alma mater."
  ];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  return randomMessage;
}

// legacy for info content
export async function getContent(slug: string): Promise<Review> {
  // https://vercel.com/guides/loading-static-file-nextjs-api-route
  const text = await readFile(path.join(process.cwd(), `/src/content/${slug}.md`), 'utf8');
  const { content, data: { title, date, image } } = matter(text);
  const body = marked(content);
  return { title, date, image, body };
}

// get All posts
export async function getPostsList(): Promise<Post[]> {
  const files = await readdir(path.join(process.cwd(), '/src/content/blog/post'), 'utf8');
  const slugs = files.filter((file) => file.endsWith('.md')).map((slug) => slug.slice(0, -'.md'.length));
  const posts = []
  for (const slug of slugs) {
    const post = await getPostContent(slug)
    posts.push(post)
  }
  posts.sort((a, b) => b.date.localeCompare(a.date))
  return posts
}

// getBlogPost
export async function getPostContent(slug: string): Promise<PostMarkdown> {
  // https://vercel.com/guides/loading-static-file-nextjs-api-route
  const text = await readFile(path.join(process.cwd(), `/src/content/blog/post/${slug}.md`), 'utf8');
  const { content, data: { post, title, date, image_banner, image_post } } = matter(text);
  const body = marked(content);
  return { post, title, date, image_banner, image_post, body };
}

// getSlugs
export async function getSlugs(): Promise<string[]> {
  const { data } = await fetchPosts({
    fields: ['post'],
    sort: ['publishedAt:desc'],
    pagination: { pageSize: 100 },
  });
  const slugs = data.map((item) => item.post);
  return slugs;
}

// getReview
export async function getPost(slug: string): Promise<Post> {
  const { data } = await fetchPosts({
    filters: { post: { $eq: slug }},
    fields: ['id', 'title', 'post', 'bodyOld', 'body', 'publishedAt'],
    populate: { banner: { fields: ['url'] } },
    pagination: { pageSize: 1, withCount: false },
  });

  if (data.length === 0) {
    return null;
  }
  const item = data[0];
  return {
    ...toPost(item),
    body: marked(item.attributes.body),
  };
}

// getReviews
export async function getPosts(pageSize: number, page?: number): Promise<PaginatedPosts> {
  const body = await fetchPosts({
    fields: ['id', 'title', 'post', 'publishedAt'],
    populate: { banner: { fields: ['url'] } },
    pagination: { pageSize, page: page || 1 },
    sort: 'publishedAt:desc',
  });
  // console.log('[getPosts]:', data[0].banner.url);
  const { data, meta } = body;
  return {
    pageCount: meta.pagination.pageCount,
    posts: data.map(toPost)
  }
}

async function fetchPosts(parameters: any) {
  console.log('[fetchPosts] 1:', parameters);
  console.log('[fetchPosts] 2:', qs.stringify(parameters, { encodeValuesOnly: true }));
  const url = `${CMS_URL}/api/posts?` + qs.stringify(parameters, { encodeValuesOnly: true });
  console.log('[fetchPosts] 3:', url);
  // console.log('[CACHE_TAG_POSTS]:', CACHE_TAG_POSTS);
  const response = await fetch(url, {
    next: {
      tags: [CACHE_TAG_POSTS],
    },
  });
  console.log('CMS repsonse status:', response.status);
  if (!response.ok) {
    throw new Error(`CMS returned ${response.status} for ${url}`);
  }
  console.log('response - OK', response.ok);
  // console.log('response - json', await response.json());
  return await response.json();
}

function toPost(item: any) {
  const image_banner = (item.banner.url.includes(CMS_URL) ? item.banner.url :  new URL(item.banner.url, CMS_URL).href)

  return {
    post: item.post,
    title: item.title,
    date: item.publishedAt.slice(0, 'yyyy-mm-dd'.length),
    image_banner: image_banner,
    image_post: null,
    body: null,
  }
}
