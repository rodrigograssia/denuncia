import React from 'react';
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const baseStyles = [
  'font-normal',
  'cursor-pointer',
  'rounded-[31px]',
  'transition-colors',
  'duration-200',

  'py-1.5',
  'px-4',
  'text-base',
  
  'flex', 'items-center', 'justify-center', 'text-center' 
];

const variants = {
  confirm: 'text-white bg-[#1351B4] border-none hover:bg-[#002a72]',
  cancel: [
    'bg-white border-2 border-[#1351B4] text-[#1351B4] hover:bg-[#ececec]',
    'dark:bg-neutral-900 dark:border-[#5480B8] dark:text-[#5480B8] dark:hover:bg-neutral-800',
    'no-underline'
  ],
  back: [
    'border-2 border-[#1351B4] text-[#1351B4] hover:bg-[#ececec] dark:hover:bg-neutral-900 no-underline w-28 h-10 mb-12'
  ],
  dicas: 'border-2 border-[#4c71a6] text-[#4c71a6] hover:bg-[#ececec] dark:hover:bg-neutral-900 font-semibold',
  denuncia: 'bg-[#4c71a6] border-none text-white hover:bg-[#324b74] font-semibold',

  links: 'bg-[#4c71a6] border-none w-8 h-8 md:w-10 md:h-10 hover:bg-[#324b74] rounded-full p-0 sm:p-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4c71a6] dark:focus:ring-offset-neutral-900'
};

function Botao({ children, className, variant = 'confirm', to, ...props }) {
  const classes = twMerge(
    baseStyles,
    variants[variant],
    className
  );

  const renderInner = () => {
    if (typeof to === 'string' && /^(https?:)?\/\//i.test(to)) {
      const { target, rel, ...rest } = props;
      return (
        <a href={to} className={classes} target={target || '_blank'} rel={rel || 'noopener noreferrer'} {...rest}>
          {children}
        </a>
      );
    }

    if (typeof to === 'string' && to.length > 0) {
      return (
        <Link to={to} className={classes} {...props}>
          {children}
        </Link>
      );
    }

    return (
      <button className={classes} {...props}>
        {children}
      </button>
    );
  };

  if (variant === 'back') {
    return (
      <div className="self-start">
        {renderInner()}
      </div>
    );
  }

  return renderInner();
}

export default Botao;