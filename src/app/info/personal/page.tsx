/* eslint-disable  */
import Heading from "@/components/Heading";
import { getContent } from "@/lib/content";

export default async function PersonalPage() {
  const person = await getContent('personal');
  return (
    <>
      <Heading>{person.title}</Heading>
      <div className={`bg-no-repeat bg-center bg-[url('/images/banner2.jpg')] w-full h-[100px]`} ></div>
      <div className='max-w-md mx-auto overflow-hidden p-4 m-auto text-left md:max-w-3xl'>
        <article dangerouslySetInnerHTML={{ __html: person.body }}
          className="max-w-screen-md prose prose-slate"
        />
      </div>
    </>
  );
}
