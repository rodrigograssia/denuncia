import React, { useState } from 'react';
import CampoTexto from './Campos';
import Botao from './Botao';

function AreaTelefone() {
  const [visivel, setVisivel] = useState(false);

  return (
    <div className="w-full flex flex-col items-center">
      {!visivel && (
        <Botao variant="confirm" className="w-[200px] md:w-[240px] h-[45px] md:h-[60px] text-base md:text-lg lg:text-xl rounded-lg" onClick={() => setVisivel(true)}>
          Verificar
        </Botao>
      )}

      {visivel && (
        <div className="w-full max-w-md lg:max-w-lg">
          <div className="flex gap-3 items-center">
            <CampoTexto placeholder="Coloque o número" className="flex-1 text-base md:text-lg h-12 md:h-14" />
            <Botao variant="confirm" className="text-base md:text-lg h-12 md:h-14 px-6 md:px-8 whitespace-nowrap">Enviar</Botao>
          </div>
        </div>
      )}
    </div>
  );
}

export default AreaTelefone;