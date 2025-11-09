import { twMerge } from 'tailwind-merge';

const baseStyles = [
  'font-normal',
  'rounded-md',
  'border-2',
  'border-gray-300',
  'dark:border-neutral-600',
  'w-full',
  'bg-[#E8F0FE]',
  'dark:bg-neutral-800',
  'text-gray-800',
  'dark:text-white',
  
  'py-1',
  'sm:py-2',

  'px-2',
  'sm:px-3',

  'text-base',
  'sm:text-[17px]',
  
  'placeholder:text-gray-500',
  'placeholder:font-extralight',
  'placeholder:text-base',
  'sm:placeholder:text-[17px]',
  
  'focus:outline-none',
  'focus:border-blue-500',
  'focus:ring-1',
  'focus:ring-blue-500',
];

function CampoTexto({ placeholder, className, as = "input", ...props }) {
  
  const mergedClasses = twMerge(
    baseStyles,
    as === "textarea" && "align-top resize-none",
    className
  );
  
  const Component = as === "textarea" ? "textarea" : "input";
  
  return (
    <Component 
      type={as === "input" ? "text" : undefined}
      placeholder={placeholder} 
      className={mergedClasses} 
      {...props} 
    />
  );
}

export default CampoTexto;

