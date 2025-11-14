import React, { useState } from 'react';
import CampoTexto from './Campos';

function CampoSenha({ placeholder = "************", className, ...props }) {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => setVisible((v) => !v);

  return (
    <div className="relative w-full">
      <CampoTexto
        type={visible ? 'text' : 'password'}
        placeholder={placeholder}
        className={className}
        {...props}
      />

      <button
        type="button"
        onClick={toggleVisible}
        aria-label={visible ? 'Ocultar senha' : 'Mostrar senha'}
        className="absolute right-2 translate-y-[70%]"
      >
          <img
            src={visible ? 'images/olho_aberto.svg' : 'images/olho_fechado.svg'}
            alt={visible ? 'Ocultar senha' : 'Mostrar senha'}
            className="w-5 h-5 block filter dark:invert"
          />
      </button>
    </div>
  );
}

export default CampoSenha;

