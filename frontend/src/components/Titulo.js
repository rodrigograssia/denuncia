import React from "react";

const baseStyles = [
  'font-bold',
  'text-[#4c71a6]',
  'text-4xl',
  'sm:text-5xl',
  'mb-6'
];

function Titulo({ children, className, ...props }){
  
  const mergedClasses = [
    ...baseStyles,
    className
  ].filter(Boolean).join(' ');

  return (
    <h1 className={mergedClasses} {...props}>
      {children}
    </h1>
  );
}

export default Titulo;

