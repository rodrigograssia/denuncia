import React from "react";

// Não precisa importar o Home.css, pois o Home.js (pai) já o importa.

function SecaoSobre() {
  return (
    <section id="sobre-denuncia" className="secao secao-sobre">
      <h1>Como funciona a denunc.ia?</h1>
      <p className="subtitulo">
        A <strong>denunc.ia</strong> é um site criado com o propósito de
        conscientizar a população sobre o “Golpe do Presente”, alertando sobre
        seus riscos e formas de prevenção. Além disso, a plataforma oferece um
        espaço seguro e acessível para que as pessoas possam relatar casos em
        que foram vítimas — ou quase vítimas — desse golpe, bem como denunciar
        tentativas de aplicá-lo, contribuindo assim para a proteção e
        informação de outros usuários.
      </p>
      <div className="botoes-container">
        <button className="btn-outline">
          Ver dicas para <br />
          não cair no golpe
        </button>
        <button className="btn-solid">Fazer uma denúncia</button>
      </div>
    </section>
  );
}

export default SecaoSobre;