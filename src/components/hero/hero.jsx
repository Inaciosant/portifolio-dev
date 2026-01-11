import Image from "next/image";
// minha foto
import minhaFoto from "../../../public/images/minhaFoto.png";
import { FiArrowDownCircle } from "react-icons/fi";

import StackMarquee from "@/components/stacks/StackMarquee";

const title = "Inácio Sant - Desenvolvedor Full-Stack";
const subtitle = "";
const ctaText = "Veja meus projetos";

export const Hero = () => {
  return (
    <div className="relative w-full min-h-screen bg-slate-950 overflow-hidden flex flex-col items-center justify-between pt-10 pb-10">
      <div className="absolute inset-0 h-full w-full bg-slate-950 bg-[linear-gradient(to_right,#083344_1px,transparent_1px),linear-gradient(to_bottom,#083344_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="flex flex-col items-center justify-center flex-grow w-full z-10 px-4 md:px-20 mt-10 md:mt-0">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-10 w-full">
          <div className="flex justify-center items-center flex-shrink-0  ">
            {" "}
            <Image
              width={200}
              height={200}
              src={"/images/foto.jpeg"}
              alt="Minha Foto"
              loading="lazy"
              className="z-10 h-40 w-40 md:h-52 md:w-52 rounded-full object-cover object-top border-4 border-slate-800 shadow-2xl "
            />
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-center z-10 mb-12">
          <a
            href="#projects"
            className="bg-slate-800 text-white px-6 py-3 rounded-md pt-4 text-lg font-medium hover:bg-slate-900 transition-colors duration-300 flex items-center gap-2"
          >
            <FiArrowDownCircle fontSize={30} />
            {ctaText}
          </a>
        </div>
      </div>

      <div className="z-10 w-full px-4 md:px-20 mt-auto">
        <StackMarquee />
      </div>
    </div>
  );
};
