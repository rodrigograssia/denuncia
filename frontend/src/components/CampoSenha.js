import React from 'react';
import CampoTexto from './Campos';

function CampoSenha({ placeholder = "************", className, ...props }) {
  
  return (
    <CampoTexto type="password" placeholder={placeholder} className={className} {...props}/>
  );
}

export default CampoSenha;

