import React from "react";
import Botao from "./Botao";

function LinksFooter() {
  return (
    <div>
    <ul className="flex items-center justify-center list-none m-0 p-0 flex-nowrap gap-5">
        <Botao variant="links" target="_blank" to="http://youtube.com">
      <img className="w-4 h-4 md:w-6 md:h-6" src="/images/youtube.svg" alt="Link para o canal do Youtube"/>
        </Botao>
        <Botao variant="links" target="_blank" to="http://threads.com">
      <img className="w-4 h-4 md:w-6 md:h-6" src="/images/threads.svg" alt="Link para o perfil do Threads"/>
        </Botao>
        <Botao variant="links" target="_blank" to="http://instagram.com">
      <img className="w-4 h-4 md:w-6 md:h-6" src="/images/instagram.svg" alt="Link para o perfil do Instagram"/>
        </Botao>
        <Botao variant="links" target="_blank" to="http://facebook.com">
      <img className="w-4 h-4 md:w-6 md:h-6" src="/images/facebook.svg" alt="Link para o perfil do Facebook"/>
        </Botao>
        <Botao variant="links" target="_blank" to="http://x.com">
      <img className="w-4 h-4 md:w-5 md:h-5" src="/images/x.svg" alt="Link para o perfil do X"/>
        </Botao>
      </ul>
    </div>
  );
}

export default LinksFooter;