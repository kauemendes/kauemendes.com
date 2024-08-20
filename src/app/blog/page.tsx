import Heading from "@/components/Heading";
import { getPosts } from "@/lib/content";
import Link from "next/link";

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <>
      <div className="border-b">
        <Heading>Personal Blog</Heading>
      </div>
      <div className="flex w-3/4 m-auto flex-wrap text-left sm:w-1/2">
        { posts.map((post) => (
          <div className="bg-stone-100 border w-full shadow hover:shadow-xl py-4 px-3 mt-1 rounded gap-4"  key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <img src={post.image_banner} alt={post.title} width="320" height="180" className="rounded-t w-full h-32 object-cover rounded" />
              <h1 className="text-center text-stone-900 font-bold mt-2">{post.title}</h1>
            </Link>
          </div>
        )) }
      </div>
    </>
  );
}
