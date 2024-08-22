import Heading from "@/components/Heading";
import { getPosts } from "@/lib/content";
import Link from "next/link";
import Image from "next/image"; // Import the Image component from the correct module

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <>
      <div className="border-b">
        <Heading>Personal Blog</Heading>
      </div>
      <div className="flex w-3/4 m-auto flex-wrap text-left sm:w-1/2">
        { posts.map((post, index) => (
          <div className="bg-stone-100 border w-full shadow hover:shadow-xl py-4 px-3 mt-1 rounded gap-4 bg-gradient-to-r from-cyan-400 to-blue-500"  key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <Image src={post.image_banner} alt={post.title} width={320} height={180} priority={index === 0} className="rounded-t h-auto max-w-lg mx-auto" />
              <h1 className="text-center text-stone-900 font-bold mt-2">{post.title}</h1>
            </Link>
          </div>
        )) }
      </div>
    </>
  );
}
