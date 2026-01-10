import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full mt-auto bottom-0 bg-slate-950 text-gray-400 py-6 ">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} npm init portifolio</p>
        </div>
        <div className="flex flex-row pt-5  gap-2 justify-center items-center"> 
            <Link href="https://github.com/inaciosant" target="_blank" rel="noopener noreferrer" className="text-white"><FaGithub /></Link>
            <Link href="https://www.linkedin.com/in/inacio-santana/" target="_blank" rel="noopener noreferrer" className="text-white"><FaLinkedin /></Link>
        </div>
    </footer>
  );
}