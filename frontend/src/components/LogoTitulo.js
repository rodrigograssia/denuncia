import { twMerge } from "tailwind-merge";

const baseStyles = [
  'font-normal',
  'text-[70px]',
  'text-[#426192]',
  'font-bold'
];

function LogoTitulo({ children, className, ...props }){

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


export default LogoTitulo;