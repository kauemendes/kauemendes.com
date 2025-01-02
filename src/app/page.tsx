import Link from "next/link";
import Image from "next/image";

import Heading from "@/components/Heading"
import DoubleQuotes from "@/components/DoubleQuotes"
import { getRandomMessage } from "@/lib/content";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kaue Code - Developer|DevOps|Tech Enthusiast',
  description:
    'kauecode.com: Coding - the art, the science, and the passion.',
  keywords: ['Kaue Mendes', 'Kaue Mendes de Freitas', 'Developer', 'DevOps', 'Tech Enthusiast', 'Software Engineer', 'Cloud Engineer', 'Software Architect'],
  publisher: 'Kaue Mendes',
  creator: 'Kaue Mendes',
};

export default async function Home() {
  const randomMessage = await getRandomMessage();
  return (
    <>
      <section className="bg-cover bg-no-repeat bg-[url('/images/bluehack.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">We are coding around the world</h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">{randomMessage}</p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                KAUECODE<span className="font-bold text-amber-300 animate-pulse">.</span>COM
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
            <Link href="/blog" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
              Blog more
            </Link>  
          </div>
        </div>
      </section>
      <div className="flex m-auto flex-wrap text-left">
        <div className="flex flex-col w-full m-auto text-left font-sans tracking-tight font-semiBold md:w-1/5">
          <div className="flex m-auto flex-col space-y-4 p-4">
            <h1 className="text-lg text-center items-align font-extrabold">
              Wanna get in touch?
            </h1>
            <p className="text-xs text-left">
              I am always thrilled to connect with fellow developers and tech enthusiasts. Feel free to reach out through any of the platforms below!
            </p>
          </div>
          <ul className="flex m-auto flex-col space-y-4 p-4">
            <li className="">
              <Link href="https://www.linkedin.com/in/kauemendes/" target="_blank" className="flex text-left items-center hover:text-red-600 dark:hover:text-red-400">
                <Image src="/icons/icon-linkedin.svg" className="" height={30} width={30} alt={"LinkedIn page for Kaue Freitas"} />
                <span className="pl-2">Kaue Freitas</span>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/kauemendes/" target="_blank" className="flex text-center items-center hover:text-red-600 dark:hover:text-red-400">
                <Image src="/icons/icon-github.svg" height={30} width={30} alt={""} />
                <span className="pl-2">@kauemendes</span>
              </Link>
            </li>
            <li>
              <Link href="https://telegram.me/kauemendes" target="_blank" className="flex text-center items-center hover:text-red-600 dark:hover:text-red-400">
                <Image src="/icons/icon-telegram.svg" height={30} width={30} alt={""} />
                <span className="pl-2">@kauemendes</span>
              </Link>
            </li>
            <li>
              <Link href="https://wa.me/351965613249" target="_blank" className="flex text-center items-center hover:text-red-600 dark:hover:text-red-400">
                <Image src="/icons/icon-whatsapp.svg" height={30} width={30} alt={""} />
                <span className="pl-2">+351 965 613 249</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full py-4 px-3 mt-1 rounded text-center space-y-10">
          <p className="m-auto font-semibold font-mono">
           with root in kauecode.com ¤ main ➜ <span className="font-bold font-mono animate-blink">_</span>
          </p>
        </div>
      </div>
    </>
  )
}
