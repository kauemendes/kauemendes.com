import Heading from "@/components/Heading";
import { getPosts } from "@/lib/content";
import Link from "next/link";
import Image from "next/image"; // Import the Image component from the correct module
import PaginationBar from "@/components/PaginationBar";

const PAGE_SIZE = 3;

export default async function BlogPage({ searchParams }) {
  const page = parsePageParam(searchParams.page);
  const { pageCount, posts } = await getPosts(PAGE_SIZE, page);
  console.log('[BlogPage]', page)
  return (
    <>
      <div className="border-b">
        <Heading>Personal Blog</Heading>
      </div>
      <div className="flex w-3/4 m-auto flex-col flex-wrap">
        <div className="gap-2 pb-3">
          <PaginationBar href="/blog" page={page} pageCount={pageCount} />
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
      </div>
    </>
  );
}

function parsePageParam(paramValue) {
  if (paramValue) {
    const page = parseInt(paramValue);
    if (page > 0 && isFinite(page)) {
      return page;
    }
  }
  return 1;
}
