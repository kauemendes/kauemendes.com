import Card from "@/components/Card";
import Heading from "@/components/Heading";
import Image from 'next/image';
import Link from "next/link";

export const metadata = {
  title: 'Kaue Code - Projects',
  description: 'Kaue Code - Portfolio of Projects',
  keywords: ['Kaue Mendes', 'Kaue Mendes de Freitas', 'Developer', 'DevOps', 'Tech Enthusiast', 'Software Engineer', 'Cloud Engineer', 'Software Architect'],
  publisher: 'Kaue Mendes',
  creator: 'Kaue Mendes',
}

const projects = [
  {
    title: 'Azure DevOps - Pipeline Variables',
    description: 'Azure DevOps Microsoft Extension to show all the pipeline variables.',
    image_banner: '/images/extension-devops-printvariables.png',
    id: 'azdevopspipelinevariables',
  },
  {
    title: 'Azure DevOps - Convert JSON to Variables',
    description: 'Azure DevOps Microsoft Extension that allows users to convert JSON files to Azure DevOps pipeline variables.',
    image_banner: '/images/extension-devops-jsontovariable.png',
    id: 'azdevopsjsontovariable',
  },
  {
    title: 'PinguimCast',
    description: 'PinguimCast is a podcast about culture, technology and other stuffs.',
    image_banner: '/images/pinguimcastlogo.png',
    id: 'pinguimcast',
  }
]

export default function PinguimCastPage() {
  return (
    <div className="m-auto mt-16 p-10 grow py-3 ">
      <div className="flex flex-col m-auto space-y-10 md:max-w-6xl sm:max-w-lg ">
        <Heading>Projects</Heading>
        <div className="flex flex-wrap w-full space-y-4 md:flex-nowrap md:space-x-8">
          <ul className="flex flex-row flex-wrap mx-auto space-x-5">
              { projects.map((prj, index) => (
                <li className="" key={prj.id}>
                  <Card title={prj.title} body={prj.description} image={prj.image_banner} url={`/projects/${prj.id}`}/>
                </li>
              )) }
          </ul>
        </div>
      </div>
    </div>
  );
}
