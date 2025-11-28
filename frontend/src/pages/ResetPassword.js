import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import Botao from "../components/Botao";
import CampoSenha from "../components/CampoSenha";
import Titulo from "../components/Titulo";
import DarkModeToggle from "../components/DarkMode";

function ResetPassword() {
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      alert('Token ausente na URL. Use o link enviado por e-mail.');
      navigate('/login');
    }
  }, [token, navigate]);

  const handleReset = async () => {
    if (!novaSenha || novaSenha.length < 6) {
      alert('Senha deve ter pelo menos 6 caracteres.');
      return;
    }
    if (novaSenha !== confirmSenha) {
      alert('As senhas não conferem.');
      return;
    }

    try {
      setLoading(true);
      await axios.post(`http://localhost:8080/usuario/reset?token=${encodeURIComponent(token)}`, { novaSenha });
      alert('Senha alterada com sucesso. Faça login com a nova senha.');
      navigate('/login');
    } catch (error) {
      console.error('Erro ao resetar senha:', error?.response?.data || error.message);
      if (error?.response) {
        alert(error.response.data?.error || 'Erro ao resetar senha.');
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
        <h1 className="font-semibold text-2xl text-gray-900 dark:text-white">Redefinir senha</h1>
        <p className="text-sm text-gray-600 dark:text-gray-300">Insira sua nova senha abaixo.</p>

        <div className="w-full mt-4">
          <CampoSenha 
            placeholder="Nova senha"
            value={novaSenha} 
            onChange={(e) => setNovaSenha(e.target.value)} 
            className="mb-3 dark:bg-neutral-800 dark:text-white" 
          />
          <CampoSenha 
            placeholder="Confirmar nova senha"
            value={confirmSenha} 
            onChange={(e) => setConfirmSenha(e.target.value)} 
            className="mb-3 dark:bg-neutral-800 dark:text-white" 
          />
        </div>

        <div className="flex gap-3 w-full">
          <Botao to="/" variant="cancel" className="w-full">Cancelar</Botao>
          <Botao variant="confirm" className="w-full" onClick={handleReset}>{loading ? 'Enviando...' : 'Salvar'}</Botao>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
