import { revalidateTag } from "next/cache";

const CACHE_TAG_POSTS = 'posts';

export async function POST(request) {
  const payload = await request.json();
  console.log('[POST]:', payload);
  if (payload.model === 'post') {
    revalidateTag(CACHE_TAG_POSTS);
    console.log('revalidated:', CACHE_TAG_POSTS);
  }
  return new Response(null, { status: 204 });
}
