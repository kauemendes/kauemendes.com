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
      <div className="flex flex-col m-auto space-y-10 md:max-w-6xl sm:max-w-lg ">
        <div className="flex flex-wrap p-10 w-full space-y-4 md:flex-nowrap md:space-x-8">
          <div className="text-left">
            <p className="text-stone-900 dark:text-red-600 font-bold text-6xl">
              <span className="text-red-600 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-300">Hi,</span> I'm Kauê
            </p>
            <p className='text-justify font-semi text-lg tracking-tight'>
              I am a software developer with a passion for making developers lives easier. I've been in the software development game for over 15 years, and let me tell you, I've seen more code than a coffee machine sees coffee beans!
            </p>
            <p className='text-justify font-semi text-lg tracking-tight'>
              Currently, I'm working as a DevOps Engineer, and I'm thrilled by the magic of automation and the endless possibilities it brings. From frontend to backend, I've had my hands on a plethora of technologies, always eager to learn and innovate.
            </p>
            <p className='text-right font-semibold tracking-wide hover:scale-150 hover:text-amber-600 duration-300'>
              Passion for the future
            </p>
            <p className='text-right font-semibold tracking-wide hover:scale-150 hover:text-lime-500 duration-300'>
              Geostationary orbit @ Lisbon
            </p>
          </div>
          <div className="text-left">
            <Image
              src="/images/hero_3.jpg"
              width={640}
              height={640}
              className='align-middle m-auto rounded-full shadow-md hover:shadow-lg'
              alt='Kaue faces posing with black shirt and blueish background'
            />
          </div>
        </div>
        <div className='flex flex-row m-auto border-t-2 border-gray-100 text-center'>
          <span className='text-4xl text-center pt-4 pb-4'>Profiles</span>
        </div>
        <div className="flex flex-row w-auto m-auto">
          <ul className="flex flex-wrap w-fit m-auto flex-grow gap-3">
            <li className="bg-white dark:bg-gray-800 border rounded dark:border-gray-950 w-32 shadow hover:shadow-xl hover:shadow-sm">
              <Link href="/about/personal">
                <Image src="/images/avatar_vermelho.png" width={140} height={140} className='bg-red-600 rounded' alt='Kaue with a smile in gray scale in a red background'/>
                <h2 className='py-1 text-center'>Personal</h2>
              </Link>
            </li>
            <li className="bg-white dark:bg-gray-800 border rounded dark:border-gray-950 w-32 shadow hover:shadow-xl hover:shadow-sm">
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
