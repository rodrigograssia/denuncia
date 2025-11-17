import React from "react";
import Topbar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Botao from "../components/Botao";
import Dicas from "../components/Dicas";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="m-0 p-0 min-h-screen dark:bg-neutral-800 flex flex-col">
      <header><Topbar/></header>

      <div className="flex-grow flex flex-col items-center">
        <Navbar className="w-full my-20" />
        
        <div className="w-full border-b border-gray-300 pb-6 dark:border-neutral-600 ">
            <div id="sobre-denuncia" className="flex flex-col gap-4 sm:gap-6 px-6 max-w-screen-2xl mx-auto mt-[-5rem] pt-20">
              
              <h1 className="dark:text-white font-bold text-xl sm:text-4xl text-center">Como funciona a denunc.ia?</h1>
              <div className="flex flex-col gap-4 text-base sm:text-xl text-gray-700 dark:text-gray-400 leading-relaxed text-justify">
                <p>A <strong>denunc.ia</strong> é um site criado com o propósito de
                conscientizar a população sobre o "Golpe do Presente", alertando sobre
                seus riscos e formas de prevenção. Além disso, a plataforma oferece um
                espaço seguro e acessível para que as pessoas possam relatar casos em
                que foram vítimas — ou quase vítimas — desse golpe, bem como denunciar
                tentativas de aplicá-lo, contribuindo assim para a proteção e
                informação de outros usuários. 
                </p>
                <p>
                As denúncias são analisadas por nossa equipe para garantir a veracidade e a segurança da plataforma e, após as análises, são marcadas como "Concluídas".
                Nossa equipe trabalha diariamente para manter um ambiente confiável e proteger a comunidade.
                </p>
                <p>
                Além disso, a plataforma possibilita que os usuários possam verificar telefones, a fim de descobrir se estão associados à empresas, spam e/ou fraudes.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 w-full max-w-lg mx-auto m-10">
                <Botao variant="dicas" className="w-full py-1 sm:py-1.5 px-4 sm:px-10 text-sm sm:text-base" onClick={() => document.getElementById('dicas').scrollIntoView({ behavior: 'smooth' })}>
                  Ver dicas para
                  não cair no golpe
                </Botao>
                <Botao variant="denuncia" className="w-full py-1 sm:py-1.5 px-3 sm:px-4 text-sm sm:text-base" to="/denuncia">
                  Fazer uma denúncia
                </Botao>
              </div>

            </div>
        </div>

        <div className="w-full border-b border-gray-300 dark:border-neutral-600 pb-6">
            <div id="o-que-e-golpe" className="px-6 max-w-screen-2xl mx-auto mt-[-4rem] pt-16"> 
                <section className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center py-6 sm:py-10">
                    <div className="flex flex-col gap-4 lg:w-3/5">
                        <h2 className="dark:text-white text-xl sm:text-4xl font-bold text-black"> 
                            Mas, afinal, o que é o "Golpe do Presente"?
                        </h2>
                        <div className="flex flex-col gap-4 text-base sm:text-xl text-gray-700 dark:text-gray-400 leading-relaxed text-justify">
                            <p>
                                Imagine a situação: é seu aniversário e um presente chegou na sua
                                casa. Ao receber a surpresa, o entregador diz que só pode liberar o
                                produto caso você pague uma taxa de entrega usando o seu cartão. É
                                assim que o golpe do presente falso acontece.
                            </p>
                            <p>
                                Segundo a Federação Brasileira de Bancos (Febraban), esse tipo de fraude 
                                tem crescido significativamente no Brasil. Os golpistas se aproveitam de 
                                datas comemorativas e da expectativa de receber presentes para aplicar o golpe.
                                O número de casos aumenta especialmente em épocas como Natal, Dia das Mães e aniversários.
                            </p>
                            <p>
                                Ele também pode ser aplicado pela internet. Neste caso, os golpistas
                                entram em contato por mensagens, nas redes sociais ou no WhatsApp,
                                dizendo que a vítima tem um presente a receber, mas que é necessário
                                pagar pela taxa de entrega. Muitas vezes, se passam por empresas conhecidas 
                                de e-commerce ou pelos Correios para ganhar credibilidade.
                            </p>
                            <p>
                                Durante a conversa, eles confirmam suas informações e te orientam a
                                fazer a transação via Pix ou link de pagamento. Depois do envio do
                                dinheiro, o contato te bloqueia e some com o valor transferido. Em casos mais 
                                graves, os criminosos podem clonar cartões ou roubar dados bancários completos.
                            </p>
                            <p>
                                Os valores cobrados costumam ser baixos propositalmente, geralmente entre 
                                R$ 10 e R$ 50, para não levantar grandes suspeitas. Porém, quando multiplicado 
                                por centenas de vítimas, o prejuízo total é significativo.
                            </p>
                            <p>
                                Os criminosos usam táticas de convencimento e engenharia social para
                                fazer com que a vítima aja por impulso, criando um senso de urgência. 
                                De acordo com o Banco Central, desconfiar de cobranças inesperadas e 
                                verificar sempre a procedência de contatos suspeitos são medidas essenciais 
                                para evitar prejuízos. Nunca forneça dados bancários ou pessoais sem confirmar a origem da solicitação.
                            </p>
                        </div>
                    </div>
                    <div className="w-4/5 lg:w-2/5 flex justify-center"> 
                        <img 
                            src="/images/presente.png" 
                            alt="Presente do golpe" 
                            className="w-full"
                        />
                    </div>
                </section>
            </div>
        </div>

        <div className="w-full pb-20 p-4 flex items-center">
            <div id="dicas" className="px-10 w-md sm:max-w-4xl mx-auto my-6 scroll-my-12 border border-gray-300 dark:border-neutral-600 w-full rounded-2xl shadow-lg">
                <Dicas />
            </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;