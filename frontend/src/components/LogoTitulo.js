import React from "react";
import { twMerge } from 'tailwind-merge';

const baseStyles = [
  'font-bold',
  'text-[#4c71a6]',
  'text-5xl',
  'sm:text-6xl',
  'mb-[30px]'
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

