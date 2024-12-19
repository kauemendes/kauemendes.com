
import Image from 'next/image';
import Heading from "@/components/Heading";
import ShareLinkButton from "@/components/ShareLinkButton";
import { getPostContent, getPostsList } from "@/lib/content";
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = await getPostsList();
  return posts.map((post) => ({ post: post.post }));
}

export async function generateMetadata(props) {
  const params = await props.params;

  const {
    post
  } = params;

  const content = await getPostContent(post);
  if (!content) {
    return notFound();
  }
  return {
    title: content.title,
  }
}

export default async function PostPage(props) {
  const params = await props.params;
  const content  = await getPostContent(params.post);
  if (!content) {
    return notFound();
  }
  return (
    <>
      <Heading>{content.title}</Heading>
      <div className='flex'>
        <Image src={content.image_post} alt={content.title}  width={640} height={360} className="mb-2 object-cover w-full" />
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