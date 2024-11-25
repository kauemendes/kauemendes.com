import 'server-only';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile, readdir } from 'node:fs/promises';
import matter from 'gray-matter';
import { marked } from 'marked';
import qs from 'qs';

export const CACHE_TAG_POSTS = 'posts';
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

export interface PaginatedPosts {
  pageCount: number;
  posts: Post[];
}

// legacy for info content
export async function getContent(slug: string): Promise<Review> {
  console.log("process.cwd()", process.cwd())
  console.log("__dirname", __dirname)
  console.log(__dirname + `/src/content/${slug}.md`)
  console.log('pathjoin', path.join(process.cwd(), `/src/content/${slug}.md`))
  const text = await readFile(path.join(process.cwd(), `/src/content/${slug}.md`), 'utf8');
  const { content, data: { title, date, image } } = matter(text);
  const body = marked(content);
  return { title, date, image, body };
}

// getSlugs
export async function getSlugs(): Promise<string[]> {
  const { data } = await fetchPosts({
    fields: ['post'],
    sort: ['publishedAt:desc'],
    pagination: { pageSize: 100 },
  });
  return data.map((item) => item.attributes.post);
}

// getReview
export async function getPost(slug: string): Promise<Post> {
  const { data } = await fetchPosts({
    filters: { post: { $eq: slug}},
    fields: ['id', 'title', 'post', 'bodyOld', 'body', 'publishedAt'],
    populate: { banner: { fields: ['url'] } },
    pagination: { pageSize: 1, withCount: false },
  });
  if (data.length === 0) {
    return null;
  }
  const item = data[0];
  // console.log('[getPost]:', item);
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
  const { data, meta } = body;
  return {
    pageCount: meta.pagination.pageCount,
    posts: data.map(toPost)
  }
}

async function fetchPosts(parameters: any) {
  const url = `${CMS_URL}/api/posts?` + qs.stringify(parameters, { encodeValuesOnly: true });
  // console.log('[fetchPosts]:', url);
  // console.log('[CACHE_TAG_POSTS]:', CACHE_TAG_POSTS);
  const response = await fetch(url, {
    next: {
      tags: [CACHE_TAG_POSTS],
    },
  });
  // console.log('CMS repsonse status:', response.status);
  if (!response.ok) {
    throw new Error(`CMS returned ${response.status} for ${url}`);
  }
  return await response.json();
}

function toPost(item: any) {
  const { attributes } = item;

  const image_banner = (attributes.banner.data?.attributes?.url.includes(CMS_URL) ? attributes.banner.data?.attributes?.url :  new URL(attributes.banner.data?.attributes?.url, CMS_URL).href)

  return {
    post: attributes.post,
    title: attributes.title,
    date: attributes.publishedAt.slice(0, 'yyyy-mm-dd'.length),
    image_banner: image_banner,
    image_post: null,
    body: null,
  }
}
