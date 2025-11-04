import { twMerge } from 'tailwind-merge';

const baseStyles = [
  'font-normal',
  'text-base',
  'sm:text-[17px]',
  'rounded-md',
  'border-2',
  'border-gray-300',
  'w-full', 
  'bg-[#E8F0FE]',
  'py-2',
  'px-3',
  
  'placeholder:text-gray-500',
  'placeholder:font-extralight',
  'placeholder:text-base',
  'sm:placeholder:text-[17px]',
  
  'focus:outline-none',
  'focus:border-blue-500',
  'focus:ring-1',
  'focus:ring-blue-500',
];

function CampoTexto({ placeholder, className, ...props }) {
  
  const mergedClasses = twMerge(
    baseStyles,
    className
  );
  
  return (
    <input 
      type="text" 
      placeholder={placeholder} 
      className={mergedClasses}
      {...props} 
    />
  );
}

export default CampoTexto;

