import { twMerge } from 'tailwind-merge';

const baseStyles = [
  'font-normal',
  'text-[16px]',
  'text-black'
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