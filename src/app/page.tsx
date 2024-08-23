import Link from "next/link";
import Image from "next/image";

import Heading from "@/components/Heading"
import DoubleQuotes from "@/components/DoubleQuotes"
import { getPosts } from "@/lib/content";

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
  const { posts } = await getPosts(3);
  return (
    <>
      <Heading>KAUECODE.COM</Heading>
      <div className="flex w-3/4 m-auto flex-wrap text-left sm:w-1/2">
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
          <ul className="flex flex-col gap-3">
            { posts.map((post, index) => (
              <li key={post.post} className="border rounded shadow w-80 hover:shadow-xl sm:w-full bg-gradient-to-r from-cyan-400 to-blue-500">
                <Link href={`/blog/${post.post}`}>
                  <Image src={post.image_banner} alt={post.title} width={640} height={360} priority={index === 0} className="mb-2 rounded" />
                  <h1 className="text-stone-900 font-bold py-1 text-center mb-2">{post.title}</h1>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
