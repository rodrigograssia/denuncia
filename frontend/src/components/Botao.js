import React from 'react';
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const baseStyles = [
  'font-normal',
  'cursor-pointer',
  'rounded-[31px]',
  'transition-colors',
  'duration-200',

  'py-1', 'sm:py-1.5',
  'px-3', 'sm:px-4',
  'text-sm', 'sm:text-base',
  
  'flex', 'items-center', 'justify-center', 'text-center' 
];

const variants = {
  confirm: 'text-white bg-[#1351B4] border-none hover:bg-[#002a72]',
  cancel: [
    'bg-white border-2 border-[#1351B4] text-[#1351B4] hover:bg-[#ececec]',
    'dark:bg-neutral-900 dark:border-[#5480B8] dark:text-[#5480B8] dark:hover:bg-neutral-800',
    'no-underline'
  ],
  dicas: 'bg-white dark:bg-neutral-800 border-2 border-[#4c71a6] dark:border-[#5480B8] text-[#4c71a6] dark:text-[#5480B8] hover:bg-[#ececec] dark:hover:bg-neutral-900 font-semibold',
  denuncia: 'bg-[#4c71a6] border-none text-white hover:bg-[#324b74] font-semibold',

  links: 'bg-[#4c71a6] border-none w-8 h-8 md:w-10 md:h-10 hover:bg-[#324b74] rounded-full p-0 sm:p-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4c71a6] dark:focus:ring-offset-neutral-900'
};

function Botao({ children, className, variant = 'confirm', to, ...props }) {
  const classes = twMerge(
    baseStyles,
    variants[variant],
    className
  );

  if (typeof to === 'string' && to.length > 0) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Botao;