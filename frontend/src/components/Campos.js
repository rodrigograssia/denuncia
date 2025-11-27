// no twMerge - keep classes simple and static for performance and clarity

// Simplified local formatters (inlined for simplicity)
const onlyDigits = (v = '') => (v || '').toString().replace(/\D/g, '');
const formatCpf = (cpf = '') => {
  const d = onlyDigits(cpf).slice(0, 11);
  let out = d;
  if (d.length > 3) out = d.slice(0,3) + '.' + d.slice(3);
  if (d.length > 6) out = d.slice(0,3) + '.' + d.slice(3,6) + '.' + d.slice(6);
  if (d.length > 9) out = d.slice(0,3) + '.' + d.slice(3,6) + '.' + d.slice(6,9) + '-' + d.slice(9);
  return out;
};
const formatPhone = (v = '') => onlyDigits(v).slice(0, 15);

const baseStyles = [
  'rounded-md',
  'border-2',
  'border-gray-300',
  'dark:border-neutral-600',
  'w-full',
  'bg-[#E8F0FE]',
  'dark:bg-neutral-800',
  'text-gray-800',
  'dark:text-white',
  
  'p-1.5',
  'text-md',
  
  'placeholder:text-gray-500',
  'placeholder:font-extralight',
  'placeholder:text-md',
  
  'focus:outline-none',
  'focus:border-blue-500',
  'focus:ring-1',
  'focus:ring-blue-500',
];

function CampoTexto({ placeholder, className, as = "input", mask = null, onChange, value, type, ...props }) {
  const mergedClasses = [
    Array.isArray(baseStyles) ? baseStyles.join(' ') : baseStyles,
    as === "textarea" ? 'align-top resize-none' : '',
    className || ''
  ].filter(Boolean).join(' ');
  const Component = as === "textarea" ? "textarea" : "input";

  // formatters inlined above to keep this file self-contained

  const applyMask = (raw) => {
    if (!mask) return raw;
    if (mask === 'cpf') return formatCpf(raw);
    if (mask === 'phone' || mask === 'telefone') return formatPhone(raw);
    return raw;
  };

  const handleChange = (e) => {
    const raw = e.target.value;
    const formatted = applyMask(raw);
    if (typeof onChange === 'function') {
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

