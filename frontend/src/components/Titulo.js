import React from "react";
import { twMerge } from 'tailwind-merge';

const baseStyles = [
  'font-bold',
  'text-[#4c71a6]',
  'text-6xl',
  'sm:text-7xl',
  'mb-6'
];

function Titulo({ children, className, ...props }){
  
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

export default Titulo;

