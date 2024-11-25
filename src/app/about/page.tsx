import Link from 'next/link'
import Image from 'next/image'
import Heading from '@/components/Heading';

export const metadata = {
  title: 'Info',
  description: 'Info for Kaue Mendes de Freitas.',
  keywords: ['Kaue Mendes', 'Kaue Mendes de Freitas', 'Kaue Mendes Blog', 'Kaue Mendes Personal Blog', 'Kaue Mendes Blog'],
  publisher: 'Kaue Mendes',
  creator: 'Kaue Mendes',
}

export default function InfoPage() {
  return (
    <>
      <Heading>About me</Heading>
      <div className="flex w-3/4 m-auto flex-col flex-wrap">
        <div className="flex flex-row w-auto m-auto">
          <div className="text-right pr-4">
            <p className="text-stone-500 font-bold">
              Kauê Mendes de Freitas
            </p>
            <p className='font-semibold'>
              35y
            </p>
            <p className='font-semibold'>
              Developer
            </p>
            <p className='font-semibold'>
              Passion for the future
            </p>
            <p className='font-semibold'>
              Geostationary orbit @ Lisbon
            </p>
          </div>
          <div className="">
            <Image
              src="/images/hero_1.png"
              width={300}
              height={300}
              className='mb-4 rounded shadow-md hover:shadow-lg'
              alt='Kaue faces posing with black shirt and blueish background'
            />
          </div>
        </div>
        <div className='flex flex-row w-auto m-auto border-t-2 border-red-900'>
          <h2>Little more</h2>
        </div>
        <div className="flex flex-row w-auto m-auto">
          <ul className="flex flex-wrap w-fit m-auto flex-grow gap-3">
            <li className="bg-white border w-32 shadow hover:shadow-xl">
              <Link href="/about/personal">
                <Image src="/images/avatar_vermelho.png" width={140} height={140} className='bg-red-600 rounded' alt='Kaue with a smile in gray scale in a red background'/>
                <h2 className='py-1 text-center'>Personal</h2>
              </Link>
            </li>
            <li className="bg-white border w-32 shadow hover:shadow-xl">
              <Link href="/about/professional">
                <Image src="/images/avatar.png" width={140} height={140} className='bg-yellow-500 rounded' alt='Kaue in gray scale in a yellow background' />
                <h2 className='py-1 text-center'>Professional</h2>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
