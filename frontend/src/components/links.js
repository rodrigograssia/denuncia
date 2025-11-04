import { twMerge } from 'tailwind-merge';
const baseStyles = [
  'no-underline',
  'text-[#086FC7]'
];

function Links({ href, children, className, ...props }) {

  const mergedClasses = twMerge(
    baseStyles,
    className
  );

  return (
    <a href={href} {...props} className={mergedClasses}>
      {children}
    </a>
  );
}

export default Links;