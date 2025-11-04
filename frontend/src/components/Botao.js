import { twMerge } from 'tailwind-merge';

const baseStyles = [ 
  'font-normal', 
  'text-[15px]', 
  'rounded-[31px]',
  'w-[148px]', 
  'h-[38px]',
  'cursor-pointer'];

const variants = {
  confirm: 'text-white bg-[#1351B4] border-none',
  cancel: 'bg-white border-2 border-[#1351B4] text-[#1351B4]'
};

function Botao({ children, className, variant = 'confirm', ...props }) {
  
  const variantStyles = variants[variant] || variants.confirm;

  const mergedClasses = twMerge(
    baseStyles,
    variantStyles,
    className
  );
  
  return (
    <button className={mergedClasses} {...props}>
      {children}
    </button>
  );
}

export default Botao;