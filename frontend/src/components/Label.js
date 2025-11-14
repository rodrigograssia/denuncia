import React from "react";
import { twMerge } from 'tailwind-merge';

const baseStyles = [
  'font-normal',
  'text-gray-700',
  'dark:text-neutral-300',
  'text-base',
];


// Label pequeno e reutilizável para inputs
function Label({ children, className, ...props }) {
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

