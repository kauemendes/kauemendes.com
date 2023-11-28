/* eslint-disable  */
import Heading from "@/components/Heading";
import { getPost } from "@/lib/content";

export default async function PostsPage({ params: { post }}) {
  const content = await getPost(post);
  return (
    <>
      <Heading>{content.title}</Heading>
      <div className={`bg-no-repeat bg-center bg-[url('/images/banner2.jpg')] w-full h-[100px]`} ></div>
      <div className='max-w-md mx-auto overflow-hidden p-4 m-auto text-left md:max-w-3xl'>
        <article dangerouslySetInnerHTML={{ __html: content.body }}
          className="max-w-screen-md prose prose-slate"
        />
      </div>
    </>
  );
}
