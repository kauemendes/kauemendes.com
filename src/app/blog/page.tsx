import Heading from "@/components/Heading";
import { getPosts } from "@/lib/content";
import Link from "next/link";

export const metadata = {
  title: 'Blog',
  description: 'Personal Blog Kaue Mendes de Freitas.',
  keywords: ['Kaue Mendes', 'Kaue Mendes de Freitas', 'Kaue Mendes Blog', 'Kaue Mendes Personal Blog', 'Kaue Mendes Blog'],
  publisher: 'Kaue Mendes',
  creator: 'Kaue Mendes',
}

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <>
      <div className="border-b">
        <Heading>Personal Blog</Heading>
      </div>
      <div className="flex w-3/4 m-auto flex-wrap h-12 text-left sm:w-1/2">
        { posts.map((post) => (
          <div className="bg-stone-100 border w-full shadow hover:shadow-xl py-4 px-3 mt-1 rounded"  key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-stone-600 font-bold">{post.title}</h2>
            </Link>
          </div>
        )) }
      </div>
    </>
  );
}
