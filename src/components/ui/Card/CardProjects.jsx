'use client';

import { Maximize2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

const CardProjects = ({ project, }) => {
  const router = useRouter();
  const OnRedirectDetails = (e) => {
    e.preventDefault();
    router.push(`/projects/${project.id}`);
  }
  return (
    <div className="flex flex-col gap-4 w-full max-w-lg mx-auto transform transition-all hover:-translate-y-2 duration-300">
      <aside className="bg-black text-white p-6 rounded-lg w-full font-mono shadow-xl border border-slate-800 flex flex-col h-full justify-between">
        <div>
          <div className="flex justify-between items-center mb-4 border-b border-gray-800 pb-2">
            <div className="flex space-x-2">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
              <div className="w-4 h-4 rounded-full bg-green-500 flex justify-center items-center">
              
              </div>{" "}
            </div>
            <p className="text-xs text-gray-500">
              bash -- {project.name.toLowerCase().replace(/\s/g, "-")}
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <div>
              <p className="text-green-400 font-bold">
                $ init project{" "}
                <span className="text-white">{project.name}</span>
              </p>
              <p className="text-gray-300 mt-1 pl-2 border-l-2 border-gray-700 italic">
                "{project.description}"
              </p>
            </div>

            <div>
              <p className="text-green-400 font-bold">$ npm i stack.js</p>
              <div className="text-gray-300 pl-2">
                <span className="text-yellow-500">{"["}</span>
                {project.stack.map((tech, index) => (
                  <span key={index} className="text-blue-300">
                    "{tech}"{index < project.stack.length - 1 ? ", " : ""}
                  </span>
                ))}
                <span className="text-yellow-500">{"]"}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-800">
          <p className="text-green-400 mb-2">$ open links</p>
          <div className="flex gap-4">
            {project.url && project.url.trim() !== "" && (
              <Link
                href={project.url}
                target="_blank"
                className="flex items-center text-white bg-slate-800 hover:bg-slate-700 px-3 py-1 rounded text-xs transition-colors"
              >
                <FaLink className="mr-2" />
                <span>Ver site</span>
              </Link>
            )}
            {project.repository && (
              <Link
                href={project.repository}
                target="_blank"
                className="flex items-center text-white bg-slate-800 hover:bg-slate-700 px-3 py-1 rounded text-xs transition-colors"
              >
                <FaGithub className="mr-2" />
                <span>Repositorio</span>
              </Link>
            )}
            {!project.repository && !project.url && (
              <span className="text-gray-500 text-xs">
                // Em desenvolvimento ou privado
              </span>
            )}
          </div>
          <p className="text-green-400 mt-3 text-xs">
            $ <span onClick={OnRedirectDetails} className=" cursor-pointer">_ Ver Detalhes</span>
          </p>
        </div>
      </aside>
    </div>
  );
};

export default CardProjects;
