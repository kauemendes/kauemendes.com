import Heading from "@/components/Heading";
import { getPostsList } from "@/lib/content";
import Link from "next/link";

import Card from "@/components/Card";

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
    <div className="m-auto mt-16 p-10 grow py-3 ">
      <div className="pb-4">
        <Heading>Personal Blog</Heading>
      </div>
      <div className="flex align-middle m-auto flex-wrap">
        <ul className="flex m-auto w-full flex-wrap align-middle text-left gap-5">
          { posts.map((post, index) => (
            <li className=""  key={post.post}>
              <Card title={post.title} body={post.description} image={post.image_banner} url={`/blog/${post.post}`}/>
            </li>
          )) }
        </ul>
      </div>
    </div>
  );
}
