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
  
  'p-2',
  'text-lg',
  
  'placeholder:text-gray-500',
  'placeholder:font-extralight',
  'placeholder:text-lg',
  
  'focus:outline-none',
  'focus:border-blue-500',
  'focus:ring-1',
  'focus:ring-blue-500',
];

function CampoTexto({ placeholder, className, as = "input", mask = null, onChange, value, type, ...props }) {
  const mergedClasses = twMerge(
    baseStyles,
    as === "textarea" && "align-top resize-none",
    className
  );
  const Component = as === "textarea" ? "textarea" : "input";

  // Helper: remove non-digit characters
  const onlyDigits = (v = '') => (v + '').replace(/\D/g, '');

  // Formata CPF como 000.000.000-00
  const formatCpf = (v = '') => {
    const d = onlyDigits(v).slice(0, 11);
    let out = d;
    if (d.length > 3) out = d.slice(0,3) + '.' + d.slice(3);
    if (d.length > 6) out = d.slice(0,3) + '.' + d.slice(3,6) + '.' + d.slice(6);
    if (d.length > 9) out = d.slice(0,3) + '.' + d.slice(3,6) + '.' + d.slice(6,9) + '-' + d.slice(9);
    return out;
  };

  // Formata telefone brasileiro: (00) 00000-0000 ou (00) 0000-0000
  const formatPhone = (v = '') => {
    const d = onlyDigits(v).slice(0, 11);
    if (d.length === 0) return '';
    if (d.length <= 2) return '(' + d;
    if (d.length <= 6) return '(' + d.slice(0,2) + ') ' + d.slice(2);
    if (d.length <= 10) return '(' + d.slice(0,2) + ') ' + d.slice(2,6) + '-' + d.slice(6);
    return '(' + d.slice(0,2) + ') ' + d.slice(2,7) + '-' + d.slice(7);
  };

  const applyMask = (raw) => {
    if (!mask) return raw;
    if (mask === 'cpf') return formatCpf(raw);
    if (mask === 'phone' || mask === 'telefone') return formatPhone(raw);
    return raw;
  };

  // Intercepta onChange para formatar antes de repassar ao pai
  const handleChange = (e) => {
    const raw = e.target.value;
    const formatted = applyMask(raw);
    if (typeof onChange === 'function') {
      // simula evento para compatibilidade com setState(e.target.value)
      onChange({ target: { value: formatted } });
    }
  };

  const displayValue = mask ? applyMask(value || '') : value;

  const inputType = type ? type : (as === "input" ? "text" : undefined);

  return (
    <Component
      type={inputType}
      placeholder={placeholder}
      className={mergedClasses}
      onChange={mask ? handleChange : onChange}
      value={displayValue}
      {...props}
    />
  );
}

export default CampoTexto;

