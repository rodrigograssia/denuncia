import React, { useState } from 'react';
import CampoTexto from './Campos';
import Botao from './Botao';
import axios from 'axios';

// Normaliza telefone para dígitos (remove espaços, parênteses, traços e +)
function normalizePhone(phone) {
  if (!phone) return '';
  // remove tudo que não é dígito
  let digits = (phone || '').replace(/\D/g, '');
  // se usuário incluiu código do país +55 no início, remova o 55 para evitar duplicação
  if (digits.startsWith('55')) {
    digits = digits.replace(/^55/, '');
  }
  return digits;
}

function AreaTelefone() {
  const [visivel, setVisivel] = useState(false);
  const [telefone, setTelefone] = useState('');
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState(null);

  const handleEnviar = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Você precisa estar logado para verificar reputação de um telefone.');
      return;
    }

    const numero = normalizePhone(telefone);
    if (!numero) {
      alert('Digite um número válido.');
      return;
    }

    setLoading(true);
    setResultado(null);
    try {
      const res = await axios.get('http://localhost:8081/denuncia/verificar-reputacao', {
        params: { telefone: numero },
        headers: { Authorization: `Bearer ${token}` }
      });

      setResultado(res.data);
    } catch (err) {
      console.error('Erro ao verificar reputação:', err?.response?.data || err.message);
      if (err?.response?.status === 401) {
        localStorage.removeItem('token');
        alert('Sessão expirada. Faça login novamente.');
        window.location.href = '/login';
      } else if (err?.request) {
        alert('Não foi possível conectar ao servidor. Verifique sua conexão e tente novamente.');
      } else {
        alert('Erro ao verificar reputação. Tente novamente mais tarde.');
      }
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
            <div className="mt-4 p-3 bg-white dark:bg-neutral-900 border rounded">
              <p>Fraud score: {resultado.fraudScore ?? resultado.fraud_score ?? '—'}</p>
              <p>Recent abuse: {resultado.recentAbuse ?? resultado.recent_abuse ? 'Sim' : 'Não'}</p>
              <p>VOIP: {resultado.VOIP ?? resultado.voip ? 'Sim' : 'Não'}</p>
              <p>Active: {resultado.active ? 'Sim' : 'Não'}</p>
              <p>Spammer: {resultado.spammer ? 'Sim' : 'Não'}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AreaTelefone;