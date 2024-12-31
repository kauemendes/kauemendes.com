import { CACHE_TAG_POSTS } from "@/lib/content";
import { revalidateTag } from "next/cache";

export async function POST(request) {
  console.log('[GET]:', payload);
  if (payload.model === 'post') {
    revalidateTag(CACHE_TAG_POSTS);
    console.log('revalidated:', CACHE_TAG_POSTS);
  }
  return new Response(null, { status: 204 });
}
