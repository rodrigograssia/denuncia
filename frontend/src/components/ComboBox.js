import React from "react";

function ComboBox({ className = "", value, onChange, ...props }) {
  const options = [
    { value: "", label: "Selecione uma opção" },
    { value: "opcao1", label: "Presencialmente" },
    { value: "opcao2", label: "Email" },
    { value: "opcao3", label: "Telefone" },
    { value: "opcao4", label: "Whatsapp" },
    { value: "opcao5", label: "Redes Sociais" },
    { value: "opcao6", label: "Outros" }
  ];

  return (
    <select
      className={`w-full font-normal rounded-md border-2 border-gray-300 dark:border-neutral-600 bg-[#E8F0FE] dark:bg-neutral-800 text-gray-800 dark:text-white py-2 sm:py-3 px-3 sm:px-4 text-base sm:text-[17px] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${className}`}
      value={value}
      onChange={onChange}
      {...props}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value} className="bg-white dark:bg-neutral-800">
          {opt.label}
        </option>
      ))}
    </select>
  );
}

export default ComboBox;