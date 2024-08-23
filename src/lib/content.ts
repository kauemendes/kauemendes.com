import 'server-only';
import { readFile, readdir } from 'node:fs/promises';
import matter from 'gray-matter';
import { marked } from 'marked';
import qs from 'qs';

export const CACHE_TAG_REVIEWS = 'posts';
const CMS_URL = process.env.CMS_URL;

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


// legacy for info content
export async function getContent(slug: string): Promise<Review> {
  console.log(__dirname)
  const text = await readFile(__dirname + `/../../../../../src/content/${slug}.md`, 'utf8');
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
export async function getPosts(pageSize: number, page?: number): Promise<Post[]> {
  const body = await fetchPosts({
    fields: ['id', 'title', 'post', 'publishedAt'],
    populate: { banner: { fields: ['url'] } },
    pagination: { pageSize, page },
    sort: 'publishedAt:desc',
  });
  const { data } = body;
  return data.map(toPost);
}

async function fetchPosts(parameters: any) {
  const url = `${CMS_URL}/api/posts?` + qs.stringify(parameters, { encodeValuesOnly: true });
  // console.log('[fetchPosts]:', url);
  const response = await fetch(url, {
    next: {
      tags: [CACHE_TAG_REVIEWS],
    },
  });
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
