import React from "react";
import { HashLink } from "react-router-hash-link";

const linkClass = 'text-gray-700 dark:text-gray-300 no-underline font-medium py-1 hover:text-[#4a55c7] dark:hover:text-[#5f6ded] text-[clamp(0.85rem,2vw,1rem)]';

const Navbar = ({ className = "" }) => {
  const wrapperClass = `sticky top-0 z-50 bg-transparent text-center py-4 w-full box-border ${className}`;
  const navClass = 'w-11/12 max-w-[34rem] inline-flex items-center gap-8 bg-white dark:bg-neutral-700 p-3 sm:py-4 rounded-xl border border-gray-300 dark:border-neutral-500 shadow-lg flex-nowrap justify-center';

  return (
    <div className={wrapperClass}>
      <nav className={navClass}>
        <HashLink smooth to="/#sobre-denuncia" className={linkClass}>
          Sobre o denunc.ia
        </HashLink>
        <HashLink smooth to="/#o-que-e-golpe" className={linkClass}>
          O que é o "Golpe do Presente"?
        </HashLink>
        <HashLink smooth to="/#dicas" className={linkClass}>
          Dicas
        </HashLink>
      </nav>
    </div>
  );
};

export default Navbar;