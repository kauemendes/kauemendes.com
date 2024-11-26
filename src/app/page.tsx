import Link from "next/link";
import Image from "next/image";

import Heading from "@/components/Heading"
import DoubleQuotes from "@/components/DoubleQuotes"
import { getPosts } from "@/lib/content";

export default async function Home() {
  const messages = [
    "It works on my machine! – The battle cry of developers everywhere.",
    "99 little bugs in the code, take one down, patch it around, 127 bugs in the code…",
    "I don't need Google, my code is self-documented.",
    "Programming is 10% writing code and 90% figuring out why it doesn't work.",
    "My code is compiling. I am now a philosopher.",
    "Debugging: like being the detective in a crime movie where you are also the murderer.",
    "Why fix it today when you can refactor it tomorrow?",
    "I'd explain my code, but I left the comments for future me, and future me is not here yet.",
    "The code is perfect. The users are wrong.",
    "'Temporary' is the most permanent thing in software development.",
    "We don't make mistakes, just undocumented features.",
    "Working on legacy code feels like fixing someone else's time travel paradox.",
    "Version 1.0 is like your first pancake: nobody eats it, but you learn a lot.",
    "Programming is just typing random symbols until it works, and then pretending you knew what you were doing.",
    "I have a degree in computer science, but Stack Overflow is my true alma mater."
  ];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  const { posts } = await getPosts(3);
  return (
    <>
      <Heading>KAUECODE<span className="font-bold font-mono animate-pulse">.</span>COM</Heading>
      <div className="flex w-3/4 m-auto flex-wrap text-left sm:w-1/2">
        <div className="w-full py-4 px-3 mt-1 rounded">
          <DoubleQuotes />
          <p className="font-sans font-bold text-6xl text-left m-4">
            {randomMessage}
          </p>
        </div>
        <div className="flex w-1/2 m-auto flex-wrap text-left sm:w-1/2 font-sans tracking-tight font-semiBold">
          <div className="flex flex-col space-y-4 w-full p-4">
            <h1 className="text-lg text-center items-align font-extrabold">
              Wanna get in touch?
            </h1>
            <p className="text-xs text-left">
              I am always thrilled to connect with fellow developers and tech enthusiasts. Feel free to reach out through any of the platforms below!
            </p>
          </div>
          <ul className="flex flex-col space-y-4 w-full">
            <li className="">
              <Link href="https://www.linkedin.com/in/kauemendes/" target="_blank" className="flex text-left items-center hover:text-red-600">
                <Image src="/icons/icon-linkedin.svg" className="" height={30} width={30} alt={"LinkedIn page for Kaue Freitas"} />
                <span className="pl-2">Kaue Freitas</span>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/kauemendes/" target="_blank" className="flex text-center items-center hover:text-red-600">
                <Image src="/icons/icon-github.svg" height={30} width={30} alt={""} />
                <span className="pl-2">@kauemendes</span>
              </Link>
            </li>
            <li>
              <Link href="https://telegram.me/kauemendes" target="_blank" className="flex text-center items-center hover:text-red-600">
                <Image src="/icons/icon-telegram.svg" height={30} width={30} alt={""} />
                <span className="pl-2">@kauemendes</span>
              </Link>
            </li>
            <li>
              <Link href="https://wa.me/351965613249" target="_blank" className="flex text-center items-center hover:text-red-600">
                <Image src="/icons/icon-whatsapp.svg" height={30} width={30} alt={""} />
                <span className="pl-2">+351 965 613 249</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full py-4 px-3 mt-1 rounded text-center">
          <p className="m-auto font-semibold font-mono">
           with root in kauecode.com ¤ main ➜ <span className="font-bold font-mono animate-blink">_</span>
          </p>
        </div>
      </div>
    </>
  )
}
