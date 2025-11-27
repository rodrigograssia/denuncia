import React from 'react';
import Botao from './Botao';

function Footer({ fixed = false }) {
  const base = fixed ? 'fixed bottom-0 left-0 w-full z-50' : 'w-full mt-auto';

  return (
    <footer className={base + ' bg-[#eeeeee] dark:bg-neutral-900 py-4 px-4 md:py-5 md:px-8'}>
      <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between md:gap-4">
        <nav aria-label="Redes sociais">
          <ul className="flex flex-wrap items-center justify-center list-none m-0 p-0 gap-2 sm:gap-3 md:gap-4">
            <li className="shrink-0">
                <Botao aria-label="Youtube" variant="links" target="_blank" to="http://youtube.com">
                <img loading="lazy" width="24" height="24" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" src="/images/youtube.svg" alt="Link para o canal do Youtube"/>
              </Botao>
            </li>
            <li className="shrink-0">
                <Botao aria-label="Threads" variant="links" target="_blank" to="http://threads.com">
                <img loading="lazy" width="24" height="24" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" src="/images/threads.svg" alt="Link para o perfil do Threads"/>
              </Botao>
            </li>
            <li className="shrink-0">
                <Botao aria-label="Instagram" variant="links" target="_blank" to="http://instagram.com">
                <img loading="lazy" width="24" height="24" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" src="/images/instagram.svg" alt="Link para o perfil do Instagram"/>
              </Botao>
            </li>
            <li className="shrink-0">
                <Botao aria-label="Facebook" variant="links" target="_blank" to="http://facebook.com">
                <img loading="lazy" width="24" height="24" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" src="/images/facebook.svg" alt="Link para o perfil do Facebook"/>
              </Botao>
            </li>
            <li className="shrink-0">
                <Botao aria-label="X (Twitter)" variant="links" target="_blank" to="http://x.com">
                <img loading="lazy" width="24" height="24" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" src="/images/x.svg" alt="Link para o perfil do X"/>
              </Botao>
            </li>
          </ul>
        </nav>

        <p className="text-black dark:text-white text-xs sm:text-sm md:text-base text-center md:text-right leading-tight">© 2025 denunc.ia – Todos os direitos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
