import Heading from "@/components/Heading";
import Image from 'next/image';
import Link from "next/link";

export const metadata = {
  title: 'Projects',
  description: 'Kaue Projects.',
  keywords: ['Kaue Mendes', 'Kaue Mendes de Freitas', 'Projects', 'Project', 'Author Kaue'],
  publisher: 'Kaue Mendes',
  creator: 'Kaue Mendes',
}

export default function PinguimCastPage() {
  return (
    <div className="flex flex-col m-auto space-y-10 md:max-w-6xl sm:max-w-lg ">
      <Heading>Projects</Heading>
      <div className="flex flex-wrap w-full space-y-4 md:flex-nowrap md:space-x-8">
        <ul className="flex flex-row flex-wrap mx-auto">
            <li className="border dark:border-gray-800 rounded shadow hover:shadow-xl bg-gradient-to-r from-amber-200 to-pink-700 dark:from-indigo-500 dark:to-amber-700">
              <Link href={`/projects/pinguim-cast`}>
                <Image src="/images/pinguimcastlogo.png" alt='' width={200} height={200} priority className="mb-2 rounded object-center" />
                <h1 className="text-stone-900 font-bold py-1 text-center mb-2">Pinguim Cast</h1>
              </Link>
            </li>
        </ul>
      </div>
    </div>
  );
}
