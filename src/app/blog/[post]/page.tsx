
import Image from 'next/image';
import Heading from "@/components/Heading";
import ShareLinkButton from "@/components/ShareLinkButton";
import { getSlugs, getPost } from "@/lib/content";

export async function generateStaticParams() {
  const posts = await getSlugs();
  console.log('[generateStaticParams] posts', posts);
  return posts.map((post) => post);
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
      <div className='flex'>
        <Image src={content.image_banner} alt={content.title}  width={640} height={360} className="mb-2 object-cover w-full" />
      </div>
      <div className="flex flex-row-reverse max-w-md mx-auto items-right gap-4 items-baseline mb-4 pt-4 md:max-w-3xl">
        <ShareLinkButton />
        <p className=' text-xs text-stone-500'>Posted on {content.date}</p>
      </div>
      <div className='ma x-w-md mx-auto overflow-hidden p-4 m-auto text-left md:max-w-3xl'>
        <article dangerouslySetInnerHTML={{ __html: content.body }}
          className="max-w-screen-md prose prose-slate"
        />
      </div>
    </>
  );
}
