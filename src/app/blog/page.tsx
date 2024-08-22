import Heading from "@/components/Heading";
import { getPosts } from "@/lib/content";
import Link from "next/link";
import Image from "next/image"; // Import the Image component from the correct module

export default async function BlogPage() {
  const posts = await getPosts(10);
  return (
    <>
      <div className="border-b">
        <Heading>Personal Blog</Heading>
      </div>
      <ul className="flex w-3/4 m-auto flex-wrap text-left sm:w-1/2 gap-3">
        { posts.map((post, index) => (
          <li className="border rounded shadow w-80 hover:shadow-xl sm:w-full bg-gradient-to-r from-cyan-400 to-blue-500"  key={post.post}>
            <Link href={`/blog/${post.post}`}>
              <Image src={post.image_banner} alt={post.title} width={640} height={360} priority={index === 0} className="mb-2 rounded" />
              <h1 className="text-stone-900 font-bold py-1 text-center mb-2">{post.title}</h1>
            </Link>
          </li>
        )) }
      </ul>
    </>
  );
}
