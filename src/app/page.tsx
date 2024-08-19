import Link from "next/link";

import Heading from "@/components/Heading"
import DoubleQuotes from "@/components/DoubleQuotes"
import { getFeaturedPost } from "@/lib/content";

export default async function Home() {
  const post = await getFeaturedPost();
  return (
    <>
      <Heading>kauecode.com</Heading>
      <div className="flex mb-4 flex">
        <div className="w-auto m-auto h-12 font-bold flex-col">
          <div className="w-full py-4 px-3 mt-1 rounded">
            <DoubleQuotes />
            <p className="text-center m-4">
              Coding the Future, Soaring with DevOps: Cloud-Ready, Developer-Driven Excellence
            </p>
          </div>
          <div className="w-full py-4 px-3 mt-1 rounded">
            <p>
              Featured blog post:
            </p>
            <div className="bg-stone-100 border w-full shadow hover:shadow-xl py-4 px-3 mt-1 rounded"  key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-stone-600 font-bold">{post.title}</h2>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
