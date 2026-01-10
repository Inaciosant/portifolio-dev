import Link from "next/link";

export default function notFound() {
    return (
       <div className="w-full flex justify-center flex-col items-center-safe  pt-32 max-w-4xl mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Ops!</h2>
            <p className="text-gray-600 mb-8">
                Eita! O projeto que você está procurando não foi encontrado.
            </p>
            <Link 
                href="/projects" 
                className="bg-slate-950 text-white px-6 py-2 text-center mx-auto rounded w-50 hover:bg-slate-800 transition-colors"
            >
                Voltar para a lista de Projetos
            </Link>
        </div>
    );
}