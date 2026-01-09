"use client";
import React, { useState } from "react";
import Link from "next/link";

import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { BsList } from "react-icons/bs";

const navbarlinks = [
  { name: "Home", href: "/" },
  { name: "Projetos", href: "/#projects" },
  { name: "Sobre", href: "/#about" },
  { name: "Skills", href: "/#skills" },
];
const ListMobile = ({ onClose }) => {
  return (
    <div className="absolute top-full left-0 right-0 w-full bg-white shadow-lg rounded-b-md z-50 flex flex-col p-4 gap-4">
      
      <ul className="pt-6 flex flex-col gap-3">
        {navbarlinks.map((link) => (
          <li key={link.name} className="">
            <Link
              href={link.href}
              className="text-slate-950 font-medium hover:text-blue-700 transition-colors duration-200"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex flex-row justify-around items-center pt-4 border-t border-gray-200">
        <Link 
          href="/documents/Curriculo.pdf" 
          target="_blank" 
          className="hover:scale-110 transition-transform duration-200"
        >
          <FaDownload className="text-3xl text-slate-950 hover:text-blue-700 transition-colors duration-200" title="Download CV" />
        </Link>
        <Link
          href="https://github.com/Inaciosant"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-200"
        >
          <FaGithub
            className="text-3xl text-slate-950 hover:text-black transition-colors duration-200"
            title="GitHub"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/inaciosant/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-200"
        >
          <FaLinkedin
            className="text-3xl text-slate-950 hover:text-blue-700 transition-colors duration-200"
            title="LinkedIn"
          />
        </Link>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <nav className="flex flex-row items-center fixed justify-around w-full  z-40 gap-8 p-4 bg-white shadow-md">
      <h3 className="text-slate-950  flex-row flex items-center-safe text-xl font-semibold">
        <MdArrowBackIosNew /> Inácio Sant / <MdArrowForwardIos />
      </h3>
      <ul className="hidden flex-row lg:flex justify-center-safe gap-6 text-[#2D3142] font-medium">
        {navbarlinks.map((link) => (
          <li key={link.name}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <div className="lg:flex hidden flex-row items-center justify-center-safe gap-8">
        <Link
          href="/documents/Curriculo.pdf"
          target="_blank"
          className="bg-slate-950 text-white md:flex hidden  flex-row justify-center items-center-safe px-4 py-2 rounded-md hover:bg-slate-900 transition-colors duration-300"
        >
          <FaDownload className="mr-2" />
          Download CV
        </Link>

        <Link
          href="https://github.com/Inaciosant"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="md:ml-2 md:text-4xl text-2xl text-slate-950 hover:text-black transition-colors duration-300" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/inacio-santana/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="md:ml-1 md:text-4xl text-2xl text-slate-950 hover:text-blue-700 transition-colors duration-300" />
        </Link>
      </div>
      {/* haborgue */}
      <div className="lg:hidden">
        <button
          className="text-slate-950 focus:outline-none"
          onClick={isOpen ? handleClose : handleOpen}
        >
          {isOpen ? <FaTimes className="text-2xl" /> : <BsList className="text-3xl" />}
        </button>
      </div>
      {isOpen && <ListMobile onClose={handleClose} />}
    </nav>
  );
};

export default Navbar;
