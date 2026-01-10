"use client";
import Link from "next/link";
import { projectsRepository } from "@/data/projects";
import { notFound } from "next/navigation";
import { use } from "react";
import { MdArrowBack } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function PageDetailsProjects({ params }) {
    const router = useRouter();
  const { id } = use(params);
  const project = projectsRepository.find((p) => p.id.toString() === id);
  if (!project) {
    notFound();
    return null;
  }

  return (
  <div className="w-full pt-32 max-w-4xl mx-auto px-4 pb-16 font-mono">
    <span className="flex w-20 flex-row gap-2 items-center mb-8 cursor-pointer" onClick={() => router.back()}>
    <MdArrowBack size={20} className=" text-slate-900 hover:text-slate-700 cursor-pointer"  />
        Voltar
    </span>
    <div className="bg-black text-white p-8 rounded-lg border border-slate-800 shadow-2xl">
        
        <div className="flex gap-2 mb-6 border-b border-gray-800 pb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-gray-500 text-sm">inaciosant@portfolio: C:/projects/{project.name}</span>
        </div>

        <h2 className="text-4xl font-bold text-green-400 mb-6">
            $ cat {project.name}.md
        </h2>

        <p className="text-gray-300 mb-8 text-lg leading-relaxed border-l-2 border-green-900 pl-4">
            {project.description}
        </p>

        <h3 className="text-xl font-bold text-yellow-400 mb-4">$ list stack</h3>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {project.stack.map((tech, index) => (
                <li key={index} className="text-blue-300">
                    <span className="text-gray-600">-</span> {tech}
                </li>
            ))}
        </ul>

        <div className="flex gap-4 pt-6 border-t border-gray-800">
            {project.url && (
                <Link href={project.url} target="_blank" className="text-green-400 hover:underline hover:text-green-300">
                    [ Ver Site ]
                </Link>
            )}
            {project.repository && (
                <Link href={project.repository} target="_blank" className="text-white hover:underline hover:text-gray-300">
                   [ Repositório ]
                </Link>
            )}
        </div>
    </div>
</div>
  );
}
