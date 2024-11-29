import Heading from "@/components/Heading";
import Image from 'next/image';
import Link from "next/link";

export const metadata = {
  title: 'LinkTree Kaue Code',
  description: 'About PinguimCast.',
  keywords: ['Kaue Mendes', 'Freitas', 'Kaue Mendes de Freitas', 'LinkTree Kaue Code', 'Kaue Code Link Tree', 'Author Kaue'],
  publisher: 'Kaue Mendes',
  creator: 'Kaue Mendes',
}

export default function LinkTree() {
  return (
    <div className="flex flex-col m-auto space-y-10 md:max-w-6xl sm:max-w-lg">
      <Heading>LinkTree</Heading>
      <div className="flex flex-wrap w-full space-y-4 md:flex-nowrap md:space-x-8">
        
      </div>
    </div>
  );
}
