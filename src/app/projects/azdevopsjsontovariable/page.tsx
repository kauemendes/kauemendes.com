import Heading from "@/components/Heading";
import Image from 'next/image';
import Link from "next/link";

export const metadata = {
  title: 'Kaue Code - Azure Devops Extension - JSON To Variable',
  description: 'Project Azure Devops Extension.',
  keywords: ['Kaue Mendes', 'Kaue Mendes de Freitas', 'Azure DevOps Extension', 'AzDO', 'Author Kaue', 'Azure DevOps Pipeline Variables'],
  publisher: 'Kaue Mendes',
  creator: 'Kaue Mendes',
}

export default function AzdevopsPipelineJsonToVariable() {
  return (
    <div className="flex flex-col m-auto space-y-10 md:max-w-6xl sm:max-w-lg ">
      <div className="w-auto border-b">
        <Heading>Azure Devops Extension - JSONToVariable</Heading>
      </div>
      <div className="flex flex-col mb-4 pt-4">
        <div className="flex w-auto h-12 text-right pr-4">
          <p className="text-stone-500 font-bold">
            Extension to convert JSON to Variable.
          </p>
        </div>
        <div className="flex w-full h-12">
          <Image
            src="/images/extension-devops-jsontovariable.png"
            width={120}
            height={120}
            className='mb-4 rounded shadow-md hover:shadow-lg'
            alt='Azure Devops'
          />
        </div>
      </div>
    </div>
  );
}
