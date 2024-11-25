import Heading from "@/components/Heading";
import { getPosts } from "@/lib/content";
import Link from "next/link";
import Image from "next/image"; // Import the Image component from the correct module
import PaginationBar from "@/components/PaginationBar";

const PAGE_SIZE = 3;

export default async function BlogPage(props) {
  const searchParams = await props.searchParams;
  const page = parsePageParam(searchParams.page);
  const { pageCount, posts } = await getPosts(PAGE_SIZE, page);
  return (
    <>
      <div className="pb-4">
        <Heading>Personal Blog</Heading>
      </div>
      <div className="flex w-3/4 m-auto flex-col flex-wrap">
        <ul className="flex w-3/4 m-auto w-full flex-wrap text-left sm:w-1/2 gap-5">
          { posts.map((post, index) => (
            <li className="border rounded shadow w-auto hover:shadow-xl sm:w-auto bg-gradient-to-r from-pink-300 to-blue-500"  key={post.post}>
              <Link href={`/blog/${post.post}`}>
                <Image src={post.image_banner} alt={post.title} width={640} height={360} priority={index === 0} className="mb-2 rounded-t" />
                <h1 className="text-stone-900 font-bold py-1 text-center mb-2">{post.title}</h1>
              </Link>
            </li>
          )) }
        </ul>
        <div className="m-auto pt-5 gap-2 pb-3">
          <PaginationBar href="/blog" page={page} pageCount={pageCount} />
        </div>
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
