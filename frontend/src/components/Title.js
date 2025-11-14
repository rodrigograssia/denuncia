import React from "react";
import { twMerge } from 'tailwind-merge';

const baseStyles = [
  'font-bold',
  'text-[#4c71a6]',
  'text-7xl',
  'mb-6'
];

function Title({ children, className, ...props }){
  
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

export default Title;

