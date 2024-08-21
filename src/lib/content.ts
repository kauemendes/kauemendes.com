import { readFile, readdir } from 'node:fs/promises';
import matter from 'gray-matter';
import { marked } from 'marked';
import qs from 'qs';

const CMS_URL = process.env.CMS_IMAGE_PATTERN;

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
  const item = data[0];
  return {
    ...toReview(item),
    body: marked(item.attributes.body),
  };
}

// getReviews
export async function getPosts() {
  const body = await fetchPosts({
    fields: ['id', 'title', 'post', 'publishedAt'],
    populate: { banner: { fields: ['url'] } },
    pagination: { pageSize: 6 },
    sort: 'publishedAt:desc',
  });
  const { data } = body;
  return data.map(toReview);
}

async function fetchPosts(parameters: any) {
  const url = `${CMS_URL}/api/posts?` + qs.stringify(parameters, { encodeValuesOnly: true });
  // console.log('[fetchPosts]:', url);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`CMS returned ${response.status} for ${url}`);
  }
  return await response.json();
}

function toReview(item: any) {
  const { attributes } = item;
  return {
    slug: attributes.post,
    title: attributes.title,
    date: attributes.publishedAt.slice(0, 'yyyy-mm-dd'.length),
    image_banner: CMS_URL + attributes.banner.data?.attributes?.url,
    image_post: null,
    body: null,
  }
}
