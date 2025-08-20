import { Card } from '@/components';
import { Heading } from '@/components';
import { projects } from '@/content/data/projects';

export const metadata = {
  title: 'Kaue Code - Projects',
  description: 'Kaue Code - Portfolio of Projects',
  keywords: ['Kaue Mendes', 'Kaue Mendes de Freitas', 'Developer', 'DevOps', 'Tech Enthusiast', 'Software Engineer', 'Cloud Engineer', 'Software Architect'],
  publisher: 'Kaue Mendes',
  creator: 'Kaue Mendes',
}

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
