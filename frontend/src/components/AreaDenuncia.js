import React, { useState } from 'react';
import Botao from './Botao';
import Label from './Label';
import CampoTexto from './Campos';
import axios from 'axios';


function AreaDenuncia() {
  const [visivel, setVisivel] = useState(false);
  const [categoria, setCategoria] = useState('');
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEnviar = async () => {
    if (!titulo || !categoria) {
      alert('Preencha os campos obrigatórios (categoria e título).');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      alert('Você precisa estar logado para criar uma denúncia.');
      return;
    }

    setLoading(true);
    try {
      const body = {
        titulo: titulo,
        categoria: categoria,
        descricao: descricao,
        nomeEmpresa: nomeEmpresa
      };

      const res = await axios.post('http://localhost:8081/denuncia/cadastrar', body, {
        headers: { Authorization: `Bearer ${token}` }
      });

      console.log('Denúncia criada:', res.data);
      alert('Denúncia criada com sucesso.');
      // reset
      setCategoria('');
      setNomeEmpresa('');
      setTitulo('');
      setDescricao('');
      setVisivel(false);
    } catch (err) {
      console.error('Erro ao criar denúncia:', err?.response?.data || err.message);
      if (err?.response?.status === 401) {
        localStorage.removeItem('token');
        alert('Sessão expirada. Faça login novamente.');
        window.location.href = '/login';
      } else if (err?.request) {
        alert('Erro de conexão. Tente novamente.');
      } else {
        alert('Erro no servidor. Tente novamente mais tarde.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Você precisa estar LOGADO para criar uma denúncia.');
      // após OK do alert, redireciona para login
      window.location.href = '/login';
      return;
    }
    setVisivel(true);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {!visivel && (
        <Botao variant="confirm" className="w-[200px] md:w-[240px] h-[45px] md:h-[60px] text-base md:text-lg lg:text-xl rounded-lg" onClick={handleOpen}>
          Criar uma reclamação
        </Botao>
      )}

      {visivel && (
        <div className="flex flex-col items-center">
          <div className="w-full max-w-md lg:max-w-lg text-left">
              <Label className="text-base md:text-lg text-left block mb-2">Categoria (como ocorreu o golpe/tentativa)*</Label>
              <select
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                className="w-full font-normal rounded-md border-2 border-gray-300 dark:border-neutral-600 bg-[#E8F0FE] dark:bg-neutral-800 text-gray-800 dark:text-white py-2 sm:py-3 px-3 sm:px-4 text-base sm:text-[17px] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 mb-4 md:mb-5 h-12 md:h-14"
              >
                <option value="">Selecione uma opção</option>
                <option value="Presencialmente">Presencialmente</option>
                <option value="Email">Email</option>
                <option value="Telefone">Telefone</option>
                <option value="Whatsapp">Whatsapp</option>
                <option value="Redes Sociais">Redes Sociais</option>
                <option value="Outros">Outros</option>
              </select>
            <Label className="text-base md:text-lg text-left block mb-2">Usaram o nome de alguma empresa? Se sim, qual?</Label>
            <CampoTexto placeholder="Nome da empresa" className="mb-4 md:mb-5 text-base md:text-lg h-12 md:h-14 w-full" value={nomeEmpresa} onChange={e => setNomeEmpresa(e.target.value)} /> 
            <Label className="text-base md:text-lg text-left block mb-2">Título*</Label>
            <CampoTexto placeholder="Título da reclamação" className="mb-4 md:mb-5 text-base md:text-lg h-12 md:h-14 w-full" value={titulo} onChange={e => setTitulo(e.target.value)} />
            <Label className="text-base md:text-lg text-left block mb-2">Descrição*</Label>
            <CampoTexto 
              as="textarea" 
              placeholder="Conte como tudo ocorreu" 
              className="mb-4 md:mb-5 text-base md:text-lg h-40 md:h-60 w-full"
              value={descricao}
              onChange={e => setDescricao(e.target.value)}
            />
          </div>
          <Botao variant="confirm" className="w-60 text-base md:text-lg h-12 md:h-14 px-6 md:px-8 whitespace-nowrap" onClick={handleEnviar} disabled={loading}>
            {loading ? 'Enviando...' : 'Enviar reclamação'}
          </Botao>
          <h3 className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2">
          Os campos com * são obrigatórios
          </h3>
        </div>
      )}
    </div>
  );
}

export default AreaDenuncia;