
import { stack } from "../stacks/stack";

export const Skill = () => {
    return (
        <div className="w-full min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4 md:px-20 py-20" id="skills">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Minhas Habilidades</h2>
            <p className="text-slate-600 text-center mb-16 max-w-2xl text-lg">
                Tecnologias e ferramentas que utilizo para transformar ideias em soluções reais.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full max-w-6xl">
                {stack.map((item, index) => (
                    <div 
                        key={index} 
                        className="group relative flex flex-col items-center justify-center p-6 bg-white border border-slate-200 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-slate-50"
                    >
                        <div 
                            className="absolute inset-0 rounded-xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                            style={{ borderColor: item.color }}
                        ></div>

                        <div className="transform group-hover:scale-110 transition-transform duration-300 mb-4 filter drop-shadow-lg">
                            <item.Icon size={56} color={item.color} />
                        </div>
                        
                        <span className="text-slate-600 font-medium text-lg group-hover:text-slate-900 transition-colors">
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}