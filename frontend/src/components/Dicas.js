import React from "react";
// import { twMerge } from "tailwind-merge";

const dicas = [
    "Nunca pague taxas antecipadas por presentes.",
    "Desconfie de mensagens de desconhecidos.",
    "Confirme a origem do presente antes de aceitar.",
    "Não forneça dados pessoais por WhatsApp ou redes sociais.",
    "Evite clicar em links suspeitos.",
    "Pesquise sobre o remetente antes de qualquer pagamento.",
    "Nunca faça pagamentos sem confirmação direta com a empresa/remetente.",
    "Converse com familiares antes de agir.",
    "Denuncie tentativas de golpe em canais oficiais (ex: Serasa, bancos).",
];

const dicaCores = [
    "#324a70", // azul escuro
    "#5c6bc0", // azul arroxeado
    "#7490b9", // azul claro
    "#1956b3", // azul médio
];

function SecaoDicas() {
    return (
        <section id="dicas" className="w-full px-4 sm:px-8 max-w-7xl mx-auto py-12 sm:py-16">
            
            <div className="flex flex-col gap-8 w-full">
                
                <h2 className="pb-4 text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-white">
                    Dicas para NÃO cair no golpe
                </h2>
                
                <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 w-full mx-auto"> 
                    {dicas.map((dica, idx) => (
                        <div
                            key={idx}
                            className="group relative aspect-square rounded-2xl shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] cursor-pointer overflow-hidden"
                            style={{
                                background: dicaCores[idx % dicaCores.length],
                            }}>
                            <div className="absolute inset-0 flex items-center justify-center p-2 md:p-6 text-center text-white font-bold text-sm sm:text-xl md:text-2xl opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                                Clique para ver a dica
                            </div>
                          
                            <div
                                className="absolute inset-0 bg-white dark:bg-neutral-500 flex items-center justify-center p-3 md:p-6 rounded-lg shadow-inner opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <p className="text-gray-800 dark:text-neutral-200 font-semibold text-xs md:text-2xl lg:text-xl leading-relaxed text-center">
                                    {dica}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SecaoDicas;