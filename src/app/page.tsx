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
      <div className="flex m-auto flex-wrap text-left">
        <Heading>KAUECODE<span className="font-bold text-amber-300 animate-pulse">.</span>COM</Heading>
        <div className="w-full py-4 px-3 mt-1 rounded">
          <DoubleQuotes />
          <p className="font-sans font-bold text-2xl text-left m-4 md:text-6xl lg:text-8xl">
            {randomMessage}
          </p>
        </div>
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
