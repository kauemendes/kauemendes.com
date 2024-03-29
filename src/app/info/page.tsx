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
      <Heading>Personal Info</Heading>
      <div className="w-auto m-auto h-12">
        <ul className="flex flex-wrap w-fit m-auto flex-grow gap-3">
          <li className="bg-white border w-32 shadow hover:shadow-xl">
            <Link href="/info/personal">
              <Image src="/images/avatar_vermelho.png" width={140} height={140} className='bg-red-600 rounded' alt='Kaue with a smile in gray scale in a red background'/>
              <h2 className='py-1 text-center'>Personal</h2>
            </Link>
          </li>
          <li className="bg-white border w-32 shadow hover:shadow-xl">
            <Link href="/info/professional">
              <Image src="/images/avatar.png" width={140} height={140} className='bg-yellow-500 rounded' alt='Kaue in gray scale in a yellow background' />
              <h2 className='py-1 text-center'>Professional</h2>
            </Link>
          </li>
        </ul>
      </div>

    </>
  );
}
