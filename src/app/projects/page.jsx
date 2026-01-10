import { projectsRepository } from "@/data/projects";
import CardProjects from "@/components/ui/Card/CardProjects";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

export default function Projects() {
    return (
        <div id="projects" className="w-full pt-30 max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">Meus Projetos</h2>
            <Suspense fallback={
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <Skeleton key={index} className="h-64 w-full" />
                    ))}
                </div>
            }>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsRepository.map((project, index) => (
                        <CardProjects project={project} key={index} />
                    ))}
                </div>
            </Suspense>
        </div>
    );
}