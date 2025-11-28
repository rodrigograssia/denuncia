import React, { useState } from 'react';
import CampoTexto from './Campos';
import Botao from './Botao';
import axios from 'axios';

const normalizePhone = (phone) => (phone || '').toString().replace(/\D/g, '').slice(0, 15);


function handleRequestError(err, defaultMsg = 'Ocorreu um erro. Tente novamente mais tarde.') {
  console.error(defaultMsg, err?.response?.data || err?.message || err);
  if (err?.request) {
    alert('Erro de conexão. Tente novamente.');
    return;
  }
  alert('Erro no servidor. Tente novamente mais tarde.');
}

function AreaTelefone() {
  const [visivel, setVisivel] = useState(false);
  const [telefone, setTelefone] = useState('');
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState(null);

  const handleEnviar = async () => {
    const numero = normalizePhone(telefone);
    if (!numero) {
      alert('Digite um número válido.');
      return;
    }

    setLoading(true);
    setResultado(null);
    try {
      const res = await axios.get('http://localhost:8081/denuncia/verificar-reputacao', {
        params: { telefone: numero }
      });

      setResultado(res.data);
    } catch (err) {
      handleRequestError(err, 'Erro ao verificar reputação.');
    } finally {
      setLoading(false);
    }
  };

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
            <CampoTexto
              placeholder="Coloque o número"
              className="flex-1 text-base md:text-lg h-12 md:h-14"
              mask="phone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
            <Botao
              variant="confirm"
              className="text-base md:text-lg h-12 md:h-14 px-6 md:px-8 whitespace-nowrap"
              onClick={handleEnviar}
              disabled={loading}
            >
              {loading ? 'Verificando...' : 'Enviar'}
            </Botao>
          </div>

          {resultado && (
            <div className="mt-4 p-3 bg-white dark:bg-neutral-900 dark:text-white border rounded">
              <p>Nível de fraude: {resultado.fraudScore ?? resultado.fraud_score ?? '—'}</p>
              <p>Abuso recente: {resultado.recentAbuse ?? resultado.recent_abuse ? 'Sim' : 'Não'}</p>
              <p>VOIP (tecnologia que converte a voz em dados digitais, que são transmitidos pela internet em pacotes.): {resultado.VOIP ?? resultado.voip ? 'Sim' : 'Não'}</p>
              <p>Ativo: {resultado.active ? 'Sim' : 'Não'}</p>
              <p>Spam: {resultado.spammer ? 'Sim' : 'Não'}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AreaTelefone;