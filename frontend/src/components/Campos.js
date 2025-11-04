import { twMerge } from 'tailwind-merge';

const baseStyles = [
  'font-normal',
  'text-[15px]',
  'rounded-md',
  'border-2',
  'border-gray-300',
  'w-[400px]',
  'h-[42px]',
  'bg-[#E8F0FE]',
  'pl-[10px]',
  'placeholder:text-gray-500',
  'placeholder:font-extralight',
  'placeholder:text-[15px]',
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
    <input type="text" placeholder={placeholder} className={mergedClasses} {...props}/>
  );
}

export default CampoTexto;