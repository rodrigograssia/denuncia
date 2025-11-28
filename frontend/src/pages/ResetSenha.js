import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import Botao from "../components/Botao";
import CampoSenha from "../components/CampoSenha";
import CampoTexto from "../components/Campos";
import Titulo from "../components/Titulo";
import DarkModeToggle from "../components/DarkMode";

function ResetSenha() {
  const [token, setToken] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Tenta pegar o token da URL se estiver presente
    const tokenFromUrl = searchParams.get('token');
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
    }
  }, [searchParams]);

  const handleResetSenha = async () => {
    if (!token || token.length !== 6) {
      alert('Informe um token válido de 6 dígitos.');
      return;
    }

    if (!novaSenha || novaSenha.length < 6) {
      alert('A nova senha deve ter pelo menos 6 caracteres.');
      return;
    }

    if (novaSenha !== confirmarSenha) {
      alert('As senhas não coincidem.');
      return;
    }

    try {
      setLoading(true);
      await axios.post(`http://localhost:8080/usuario/reset?token=${token}`, {
        novaSenha: novaSenha
      });
      alert('Senha alterada com sucesso! Você será redirecionado para o login.');
      navigate('/login');
    } catch (error) {
      console.error('Erro ao resetar senha:', error?.response?.data || error.message);
      if (error?.response?.data?.error) {
        alert(error.response.data.error);
      } else if (error?.request) {
        alert('Erro de conexão. Tente novamente.');
      } else {
        alert('Erro no servidor.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 flex flex-col items-center min-h-screen justify-center bg-white dark:bg-neutral-800 transition-colors duration-300">
      <div className="absolute top-4 right-4">
        <DarkModeToggle />
      </div>

      <Titulo>denunc.ia</Titulo>

      <div className="flex flex-col items-center gap-3 border-2 border-gray-300 dark:border-neutral-600 rounded-lg p-6 w-full max-w-[400px] bg-white dark:bg-neutral-900 shadow-lg">
        <h1 className="font-semibold text-2xl text-gray-900 dark:text-white">Redefinir Senha</h1>
        <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
          Digite o código de 6 dígitos recebido por e-mail e sua nova senha.
        </p>

        <div className="w-full mt-4 space-y-3">
          <CampoTexto
            placeholder="Código de 6 dígitos"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            maxLength="6"
            className="dark:bg-neutral-800 dark:text-white"
          />
          
          <CampoSenha
            placeholder="Nova senha"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
            className="dark:bg-neutral-800 dark:text-white"
          />
          
          <CampoSenha
            placeholder="Confirmar nova senha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            className="dark:bg-neutral-800 dark:text-white"
          />
        </div>

        <div className="flex gap-3 w-full mt-4">
          <Botao to="/login" variant="cancel" className="w-full">Cancelar</Botao>
          <Botao variant="confirm" className="w-full" onClick={handleResetSenha} disabled={loading}>
            {loading ? 'Alterando...' : 'Alterar Senha'}
          </Botao>
        </div>

        <div className="text-center mt-3">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Não recebeu o código?{' '}
            <button 
              onClick={() => navigate('/esqueci-senha')}
              className="text-blue-500 hover:underline"
            >
              Solicitar novo código
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResetSenha;
