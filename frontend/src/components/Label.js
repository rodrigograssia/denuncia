import React from "react";
import { twMerge } from 'tailwind-merge';

const baseStyles = [
  'font-normal',
  'text-gray-700',
  'text-xl', 
  'sm:text-[28px]',
];

function Label({ children, className, ...props }){
  const mergedClasses = twMerge(
    baseStyles,
    className
  );

  return (
    <label className={mergedClasses} {...props}>
      {children}
    </label>
  );
}

export default Label;

