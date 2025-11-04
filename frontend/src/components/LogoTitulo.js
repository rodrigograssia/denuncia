import React from "react";
import { twMerge } from 'tailwind-merge';

const baseStyles = [
  'font-bold',
  'text-[#093f9e]',
  'text-4xl',
  'sm:text-5xl',
];

function LogoTitulo({ children, className, ...props }){

  const mergedClasses = twMerge(
    baseStyles,
    className
  );

  return (
    <h1 className={mergedClasses} {...props}>
      {children}
    </h1>
  );
}

export default LogoTitulo;
