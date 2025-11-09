import React, { useState } from 'react';
import Botao from './Botao';
import Label from './Label';
import CampoTexto from './Campos';
import ComboBox from './ComboBox';

function AreaDenuncia() {
  const [visivel, setVisivel] = useState(false);

  return (
    <div className="w-full flex flex-col items-center">
      {!visivel && (
        <Botao variant="confirm" className="w-[200px] md:w-[240px] h-[45px] md:h-[60px] text-base md:text-lg lg:text-xl rounded-lg" onClick={() => setVisivel(true)}>
          Criar uma reclamação
        </Botao>
      )}

      {visivel && (
        <div className="flex flex-col items-center">
          <div className="w-full max-w-md lg:max-w-lg text-left">
            <Label className="text-base md:text-lg text-left block mb-2">Categoria (como ocorreu o golpe/tentativa)</Label>
            <ComboBox className="mb-4 md:mb-5 text-base md:text-lg h-12 md:h-14 w-full"
            />
            <Label className="text-base md:text-lg text-left block mb-2">Título</Label>
            <CampoTexto placeholder="Tentativa de golpe" className="mb-4 md:mb-5 text-base md:text-lg h-12 md:h-14 w-full"
            />
            <Label className="text-base md:text-lg text-left block mb-2">Descrição</Label>
            <CampoTexto 
              as="textarea" 
              placeholder="Conte como tudo ocorreu" 
              className="mb-4 md:mb-5 text-base md:text-lg h-40 md:h-60 w-full"
            />
          </div>
          <Botao variant="confirm" className="w-60 text-base md:text-lg h-12 md:h-14 px-6 md:px-8 whitespace-nowrap">
            Enviar reclamação
          </Botao>
        </div>
      )}
    </div>
  );
}

export default AreaDenuncia;