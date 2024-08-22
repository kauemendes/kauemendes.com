import Link from "next/link";

import Heading from "@/components/Heading"
import DoubleQuotes from "@/components/DoubleQuotes"
import { getFeaturedPost } from "@/lib/content";



export default async function Home() {
  const messages = [
    "I don't always test my code, but when I do, I do it in production.",
    "It's not a bug; it's an undocumented feature.",
    "To understand recursion, you must first understand recursion.",
    "99 little bugs in the code, 99 bugs in the code. Take one down, patch it around, 127 little bugs in the code.",
    "There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.",
    "I turned my coffee into code. Let's hope it compiles.",
    "Why do programmers prefer dark mode? Because the light attracts bugs.",
    "A good programmer is someone who looks both ways before crossing a one-way street.",
    "Programming is like a relationship—when you start ignoring things, it will eventually break down.",
    "Real programmers count from 0.",
  ];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  const post = await getFeaturedPost();
  return (
    <>
      <Heading>KAUECODE.COM</Heading>
      <div className="flex mb-4 flex">
        <div className="w-auto m-auto h-12 font-bold flex-col">
          <div className="w-full py-4 px-3 mt-1 rounded">
            <DoubleQuotes />
            <p className="text-center m-4">
              {randomMessage}
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
