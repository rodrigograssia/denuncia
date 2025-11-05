import React from "react";
import Topbar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Botao from "../components/Botao";
import Dicas from "../components/Dicas";

function Home() {
  return (
    <div class="darkMode" className="m-0 p-0 min-h-screen dark:bg-neutral-800">
      <header><Topbar className="mb-10"/></header>
      
      <div className="pt-8 flex flex-col items-center"> 
        <Navbar /> 
        
        <div className="w-full border-b border-gray-300 pb-6 dark:border-neutral-600 ">
            <div id="sobre-denuncia" className="flex flex-col gap-4 sm:gap-6 px-6 max-w-7xl mx-auto mt-[-4rem] pt-20">
              
              <h1 className="dark:text-white font-bold text-xl sm:text-3xl text-center">Como funciona a denunc.ia?</h1>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-400 leading-relaxed text-justify">
                A <strong>denunc.ia</strong> é um site criado com o propósito de
                conscientizar a população sobre o “Golpe do Presente”, alertando sobre
                seus riscos e formas de prevenção. Além disso, a plataforma oferece um
                espaço seguro e acessível para que as pessoas possam relatar casos em
                que foram vítimas — ou quase vítimas — desse golpe, bem como denunciar
                tentativas de aplicá-lo, contribuindo assim para a proteção e
                informação de outros usuários.
              </p>
              
              <div className="grid grid-cols-2 gap-4 w-full max-w-lg mx-auto mb-4">
                <Botao variant="dicas" className="w-full">
                  Ver dicas para <br />
                  não cair no golpe
                </Botao>
                <Botao variant="denuncia" className="w-full">
                  Fazer uma denúncia
                </Botao>
              </div>

            </div>
        </div>

        <div className="w-full border-b border-gray-300 dark:border-neutral-600 pb-6">
            <div id="o-que-e-golpe" className="px-4 max-w-7xl mx-auto mt-[-4rem] pt-16"> 
                <section className="flex flex-col md:flex-row gap-8 md:gap-12 items-center py-6 sm:py-10">
                    <div className="flex flex-col gap-4 md:w-3/5">
                        <h2 className="dark:text-white text-xl sm:text-3xl font-bold text-black"> 
                            Mas, afinal, o que é o "Golpe do Presente"?
                        </h2>
                        <div className="flex flex-col gap-4 text-base sm:text-lg text-gray-700 dark:text-gray-400 leading-relaxed text-justify">
                            <p>
                                Imagine a situação: é seu aniversário e um presente chegou na sua
                                casa. Ao receber a surpresa, o entregador diz que só pode liberar o
                                produto caso você pague uma taxa de entrega usando o seu cartão. É
                                assim que o golpe do presente falso acontece.
                            </p>
                            <p>
                                Ele também pode ser aplicado pela internet. Neste caso, os golpistas
                                entram em contato por mensagens, nas redes sociais ou no WhatsApp,
                                dizendo que a vítima tem um presente a receber, mas que é necessário
                                pagar pela taxa de entrega.
                            </p>
                            <p>
                                Durante a conversa, eles confirmam suas informações e te orientam a
                                fazer a transação via Pix ou link de pagamento. Depois do envio do
                                dinheiro, o contato te bloqueia e some com o valor transferido.
                            </p>
                            <p>
                                Os criminosos usam táticas de convencimento e engenharia social para
                                fazer com que a vítima ache que está recebendo uma surpresa, mas
                                tudo não passa do golpe do presente.
                            </p>
                        </div>
                    </div>
                    <div className="w-[70%] md:w-2/5 flex justify-center"> 
                        <img 
                            src="/images/presente.png" 
                            alt="Presente do golpe" 
                            className="w-full"
                        />
                    </div>
                </section>
            </div>
        </div>

        <div className="w-full border-b border-gray-300 dark:border-neutral-600 pb-6 p-4 flex items-center ">
            <div id="dicas" className="px-10 w-md sm:max-w-4xl mx-auto mt-6 scroll-mt-12 border border-gray-300 dark:border-neutral-600 w-full rounded-2xl shadow-lg">
                <Dicas />
            </div>
        </div>
        
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default Home;