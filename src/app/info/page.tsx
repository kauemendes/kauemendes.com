import Heading from '@/components/Heading';
import Link from 'next/link'

export default function InfoPage() {
  return (
    <>
      <Heading>Personal Info</Heading>
      <div className="flex mb-4 pt-4">
        <div className="w-1/3 h-12"></div>
        <div className="w-1/3 h-12 pr- pl-10">
          <ul className="flex flex-wrap gap-3">
          <li className="bg-white border w-32 shadow hover:shadow-xl">
            <Link href="/info/personal">
              <img src="/images/avatar_vermelho.png" width={140} height={140} className='bg-red-600 rounded'/>
              <h2 className='py-1 text-center'>Personal</h2>
            </Link>
          </li>
          <li className="bg-white border w-32 shadow hover:shadow-xl">
            <Link href="/info/professional">
              <img src="/images/avatar.png" width={140} height={140} className='bg-yellow-500 rounded'/>
              <h2 className='py-1 text-center'>Professional</h2>
            </Link>
          </li>
        </ul>
        </div>
        <div className="w-1/3 h-12"></div>
      </div>

    </>
  );
}
