/* eslint-disable  */
import Heading from "@/components/Heading";
import ShareLinkButton from "@/components/ShareLinkButton";
import { getPosts, getPost } from "@/lib/content";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ post: post.slug }));
}

export async function generateMetadata({ params: { post }}) {
  const content = await getPost(post);
  return {
    title: content.title,
  }
}

export default async function PostsPage({ params: { post }}) {
  const content = await getPost(post);
  return (
    <>
      <Heading>{content.title}</Heading>
      <div className={`bg-no-repeat bg-center bg-[url('/images/banner2.jpg')] w-full h-[100px]`} ></div>
      <div className="flex flex-row-reverse max-w-md mx-auto items-right gap-4 items-baseline mb-4 pt-4 md:max-w-3xl">
        <ShareLinkButton />
        <p className=' text-xs text-stone-500'>Posted on {content.date}</p>
      </div>
      <div className='max-w-md mx-auto overflow-hidden p-4 m-auto text-left md:max-w-3xl'>
        <article dangerouslySetInnerHTML={{ __html: content.body }}
          className="max-w-screen-md prose prose-slate"
        />
      </div>
    </>
  );
}
