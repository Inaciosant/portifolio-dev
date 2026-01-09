import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaWhatsapp } from "react-icons/fa6";
import { TimelineItem } from "./timeline/timeline";

const MinhasInfos = {
  title:
    "Olá me chamo Inacio Santana, e sou um Desenvolvedor Full Stack, seja bem vindo ao meu portifólio!",
  description:
    "Desde muito novo apaixonado por tecnologia e inovação, estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente. Com habilidades em diversas tecnologias, estou pronto para contribuir com projetos inovadores e impactantes. Vamos construir o futuro juntos!",
};
const Links = {
  linkedin: "https://www.linkedin.com/in/inacio-santana/",
  github: "https://github.com/Inaciosant/",
  email: "mailto:inacio.sant55@gmail.com",
  zap: "https://wa.me/5516988675073",
};
const timeline = [
  {
    id: 1,
    type: "study",
    title: "Ensino Médio Integrado ao Curso Tecnico de Desenvolvimento de Sistemas",
    institution: "Escola Técnica Estadual Doutor Júlio Cardoso",
    startDate: "2020-02",
    endDate: "2022-12",
    description: "Curso Técnico focado em desenvolvimento de sistemas",
  },
  {
    id: 2,
    type: "study",
    title: "Desenvolvimento de Software Multiplataforma",
    institution: "Fatec Franca - Faculdade de Tecnologia Dr. Thomaz Novelino",
    startDate: "2023-06",
    endDate: null,
    description: "Graduação focada em desenvolvimento de software",
  },
   {
    id: 3,
    type: "work",
    title: "Atendente de Call Center",
    institution: "Magazine Luiza",
    startDate: "2022-12",
    endDate: "2024-05",
    description:
      "Realizar atendimento ao cliente, solucionar problemas e fornecer informações sobre produtos e serviços.",
  },
   {
    id: 4,
    type: "work",
    title: "Estagiário de Suporte Técnico",
    institution: "Empresa IbSystem",
    startDate: "2024-06",
    endDate: "2024-10",
    description:
      "Realizar atendimento ao cliente, solucionar problemas técnicos relacionados ao sistema.",
  },
  {
    id: 5,
    type: "work",
    title: "Desenvolvedor Frontend",
    institution: "Empresa IbSystem",
    startDate: "2024-11",
    endDate: null,
    description:
      "Desenvolver Soluções Frontend e colaborando junto ao time de desenvolvimento utilizando React.js, Next.js, CSS, HTML, JavaScript, TypeScript, Vite, React Router, React Query, Tailwind CSS",
  },
];

export const About = () => {
    const sortedTimeline = [...timeline].sort((a, b) => {
    return new Date(a.startDate) - new Date(b.startDate);
  });
  return (
    <div
      id="about"
      className="w-full min-h-screen bg-slate-950 flex flex-col items-center justify-center px-4 md:px-20 py-20 text-center"
    >
      <h2 className="text-4xl font-bold mb-8 text-white">Sobre Mim</h2>
      <p className="text-lg text-gray-300 max-w-3xl mb-10">
        {MinhasInfos.description}
      </p>
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        <Link
          href={Links.linkedin}
          target="_blank"
          className="text-sky-400 px-6 py-3 rounded-md text-lg font-medium hover:bg-sky-900 transition-colors duration-300 flex items-center gap-2"
        >
          <FaLinkedinIn />
          LinkedIn
        </Link>
        <Link
          href={Links.github}
          target="_blank"
          className="bg-black text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition-colors duration-300 flex items-center gap-2"
        >
          <FaGithub />
          GitHub
        </Link>
        <Link
          href={Links.email}
          className="bg-slate-800 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-slate-900 transition-colors duration-300 flex items-center gap-2"
        >
          <FaEnvelope />
          E-mail
        </Link>
        <Link
          href={Links.zap}
          target="_blank"
          className="bg-green-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-green-800 transition-colors duration-300 flex items-center gap-2"
        >
          <FaWhatsapp />
          WhatsApp
        </Link>
      </div>
      
      <div className="w-full max-w-6xl mx-auto relative px-4">
         <h3 className="text-2xl font-bold text-white mb-12 border-b border-gray-800 pb-2 text-center md:text-left">Minha Jornada</h3>
         
         <div className="absolute left-8 md:left-1/2 top-16 bottom-0 w-0.5 bg-slate-700 md:-ml-0.5 h-[calc(100%-100px)]"></div>
         
         <div className="flex flex-col gap-8 relative">
            {sortedTimeline.map((item) => (
                <TimelineItem key={item.id} item={item}/>
            ))}
         </div>
      </div>
    </div>
  );
};
