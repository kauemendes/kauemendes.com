import Heading from '@/components/Heading';
import Link from 'next/link'

export default function InfoPage() {
  return (
    <>
      <Heading>Personal Info</Heading>
      <div className="w-auto m-auto h-12 border-1 border-stone-900">
        <ul className="flex flex-wrap w-fit m-auto flex-grow gap-3">
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

    </>
  );
}
