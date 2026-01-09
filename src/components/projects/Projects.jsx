import Link from 'next/link';
import { projectsRepository } from './repository/projects';
import CardProjects from '@/components/ui/Card/CardProjects';
import { FaArrowRight } from "react-icons/fa";

export const Projects = () => {
    const projects = projectsRepository.slice(0, 6);
    
  return (
    <div className=" relative w-full flex flex-col items-center justify-center py-20 px-4 bg-slate-100" id='projects'>
        <h2 className="text-4xl font-bold mb-14 text-slate-900">Meus Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
            {projects.map((project, index) => (
                <CardProjects key={index} project={project} />
            ))}
        </div>
        <Link
            href="/projects"
            className="mt-12 bg-slate-900 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-slate-800 transition-colors duration-300"
        >
           
            Ver todos os meus projetos
             <FaArrowRight fontSize={14} className="inline-block ml-2" />
        </Link>
    </div>
  );
}