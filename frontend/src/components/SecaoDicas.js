import React from "react";

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
  "#426192", // azul escuro
  "#5c6bc0", // azul arroxeado
  "#a7c7f7", // azul claro
  "#1956b3", // azul médio
];

function SecaoDicas() {
  return (
    <section id="dicas" className="secao secao-dicas">
      <div className="dicas-area">
        <h2>Dicas para NÃO cair no golpe</h2>
        <div className="grid-dicas">
          {dicas.map((dica, idx) => (
            <div
              className="card-dica"
              key={idx}
              style={{
                background: dicaCores[idx % dicaCores.length],
              }}
            >
              <div className="dica-overlay">{dica}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SecaoDicas;