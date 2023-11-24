import { getContent } from '@/lib/content';
import Heading from '@/components/Heading'

export default async function ProfessionalPage() {
  const pro = await getContent('professional');
  return (
    <>
      <Heading>{pro.title}</Heading>
      <div className={`bg-no-repeat bg-center bg-[url('/images/banner1.jpg')] w-full h-[100px]`} ></div>
      <div className='w-full p-4 m-auto text-left sm:w-2/4'>
        <article dangerouslySetInnerHTML={{ __html: pro.body }}
          className="max-w-screen-sm prose prose-slate"
        />
      </div>
    </>
  );
}
