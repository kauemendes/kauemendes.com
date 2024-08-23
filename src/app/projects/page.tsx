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
    <>
      <div className="">
        <Heading>Projects</Heading>
      </div>
      <div className="w-1/2 p-4 mx-auto">
        <ul className="flex flex-row flex-wrap gap-3">
            <li className="border rounded shadow hover:shadow-xl bg-gradient-to-r from-amber-200 to-pink-700">
              <Link href={`/projects/pinguim-cast`}>
                <Image src="/images/pinguimcastlogo.png" alt='' width={200} height={200} priority className="mb-2 rounded object-center" />
                <h1 className="text-stone-900 font-bold py-1 text-center mb-2">Pinguim Cast</h1>
              </Link>
            </li>
        </ul>
      </div>
    </>
  );
}
