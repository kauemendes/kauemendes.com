import Heading from "@/components/Heading";
import { getPostsList } from "@/lib/content";
import Link from "next/link";
import Image from "next/image"; // Import the Image component from the correct module

const PAGE_SIZE = 3;

export async function generateMetadata() {
  return {
    title: 'Kaue Code - Blogs',
    description: 'Kaue Code - Blogs',
    keywords: ['Kaue Mendes', 'Kaue Mendes de Freitas', 'Developer', 'DevOps', 'Tech Enthusiast', 'Software Engineer', 'Cloud Engineer', 'Software Architect', 'Blog'],
    publisher: 'Kaue Mendes',
    creator: 'Kaue Mendes',
  }
}

export default async function BlogPage(props) {
  const posts = await getPostsList();
  return (
    <>
      <div className="pb-4">
        <Heading>Personal Blog</Heading>
      </div>
      <div className="flex w-3/4 m-auto flex-col flex-wrap">
        <ul className="flex w-3/4 m-auto w-full flex-wrap text-left sm:w-1/2 gap-5">
          <p>Found: #<span>{posts.length}</span></p>
          { posts.map((post, index) => (
            <li className="border rounded shadow w-auto hover:shadow-xl w-auto bg-gradient-to-r from-pink-300 to-blue-500"  key={post.post}>
              <Link href={`/blog/${post.post}`}>
                <Image src={post.image_banner} alt={post.title} width={640} height={360} priority={index === 0} className="mb-2 rounded-t" />
                <h1 className="flex text-stone-900 font-bold py-1 text-center mb-2">{post.title}</h1>
              </Link>
            </li>
          )) }
        </ul>
      </div>
    </>
  );
}
