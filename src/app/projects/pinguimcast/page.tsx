import Heading from "@/components/Heading";
import Image from 'next/image';
import Link from "next/link";

export const metadata = {
  title: 'Pinguim Cast',
  description: 'About PinguimCast.',
  keywords: ['Kaue Mendes', 'Kaue Mendes de Freitas', 'Pinguim Cast', 'Pinguim Cast About', 'Author Kaue'],
  publisher: 'Kaue Mendes',
  creator: 'Kaue Mendes',
}

export default function PinguimCastPage() {
  return (
    <div className="flex flex-col m-auto space-y-10">
      <div className="w-auto border-b">
        <Heading>Pinguim Cast</Heading>
      </div>
      <div className="flex flex-col mb-4 pt-4">
        <div className="flex w-auto h-12 text-right pr-4">
          <p className="text-stone-500 font-bold">
            Podcast voltado para tecnologia,
          </p>
          <p className='font-semibold'>
            cultura pop e política.
          </p>
          <p className='font-semibold'>
            &nbsp;
          </p>

          <p className='font-semibold'>
            &nbsp;
          </p>
          <p className='font-semibold'>
            Low Earth orbit @ Lisbon
          </p>
          <p className='text-stone-300 text-sm'>
            Voltaremos a Terra em breve
          </p>
        </div>
        <div className="flex w-full h-12">
          <Image
            src="/images/pinguimcastlogo.png"
            width={290}
            height={290}
            className='mb-4 rounded shadow-md hover:shadow-lg'
            alt='Pinguim Cast Logo with a penguing posing in yellow and red background'
          />
        </div>
        <div className="w-full h-12">
          <p className='font-semibold'>
            <iframe className="border-rounded" src="https://open.spotify.com/embed/episode/4E6Z5P41n758yRgQqoieXl?utm_source=generator" width="100%" height="100%" frameBorder="0" allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </p>
        </div>
      </div>
    </div>
  );
}
