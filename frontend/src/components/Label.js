import React from "react";

const baseStyles = 'font-normal text-gray-700 dark:text-neutral-300 text-base';

// Label pequeno e reutilizável para inputs
function Label({ children, className, ...props }) {
  const mergedClasses = [baseStyles, className || ''].filter(Boolean).join(' ');
  return (
    <label className={mergedClasses} {...props}>
      {children}
    </label>
  );
}

export default Label;

