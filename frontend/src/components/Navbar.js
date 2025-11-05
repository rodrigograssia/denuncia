import React, { forwardRef } from "react";
import { HashLink } from "react-router-hash-link";
import { twMerge } from "tailwind-merge";

const linkBaseStyles = [
  'text-gray-700', 
  'dark:text-gray-300',
  'no-underline', 
  'font-medium',
  'py-1', 
  'hover:text-[#4a55c7]',
  'dark:hover:text-[#5f6ded]',
  'text-[clamp(0.85rem,2vw,1rem)]' 
];

const Navbar = forwardRef(({ className = "" }, ref) => {
  
  const wrapperClasses = twMerge(
    'sticky top-0 z-50',
    'bg-transparent',
    'text-center',
    'py-4', 
    'w-full',
    'box-border',
    className
  );

  const navClasses = [
    'w-11/12',
    'max-w-[34rem]',
    'inline-flex',
    'items-center',
    'gap-8', 
    'bg-white',
    'dark:bg-neutral-700',
    'p-3', 
    'sm:py-4', 
    'rounded-xl', 
    'border',
    'border-gray-200',
    'dark:border-neutral-500',
    'shadow-lg',
    'flex-nowrap', 
    'justify-center',
  ];

  return (
    <div className={wrapperClasses} ref={ref}>
      <nav className={twMerge(navClasses)}>
        <HashLink smooth to="/#sobre-denuncia" className={twMerge(linkBaseStyles)}>
          Sobre o denunc.ia
        </HashLink>
        <HashLink smooth to="/#o-que-e-golpe" className={twMerge(linkBaseStyles)}>
          O que é o "Golpe do Presente"?
        </HashLink>
        <HashLink smooth to="/#dicas" className={twMerge(linkBaseStyles)}>
          Dicas
        </HashLink>
      </nav>
    </div>
  );
});

export default Navbar;