import React from "react";

function SecaoGolpe() {
  return (
    <section id="o-que-e-golpe" className="secao secao-golpe">
      <div className="texto-coluna">
        <h2>Mas, afinal, o que é o "Golpe do Presente"?</h2>
        <p>
          Imagine a situação: é seu aniversário e um presente chegou na sua
          casa. Ao receber a surpresa, o entregador diz que só pode liberar o
          produto caso você pague uma taxa de entrega usando o seu cartão. É
          assim que o golpe do presente falso acontece.
          <br />
          <br />
          Ele também pode ser aplicado pela internet. Neste caso, os golpistas
          entram em contato por mensagens, nas redes sociais ou no WhatsApp,
          dizendo que a vítima tem um presente a receber, mas que é necessário
          pagar pela taxa de entrega.
          <br />
          <br />
          Durante a conversa, eles confirmam suas informações e te orientam a
          fazer a transação via Pix ou link de pagamento. Depois do envio do
          dinheiro, o contato te bloqueia e some com o valor transferido.
          <br />
          <br />
          Os criminosos usam táticas de convencimento e engenharia social para
          fazer com que a vítima ache que está recebendo uma surpresa, mas
          tudo não passa do golpe do presente.
        </p>
      </div>
      <div className="imagem-coluna">
        {/* O caminho /images/... funciona se a pasta 'images' 
            estiver dentro da pasta 'public' do seu projeto */}
        <img src="/images/presente.jpg" alt="Presente do golpe" />
      </div>
    </section>
  );
}

export default SecaoGolpe;