import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Botao from "../components/Botao";
import CampoTexto from "../components/Campos";
import Titulo from "../components/Titulo";
import DarkModeToggle from "../components/DarkMode";

function EsqueciSenha() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSolicitarReset = async () => {
    if (!email || !/.+@.+\..+/.test(email)) {
      alert('Informe um e-mail válido.');
      return;
    }

    try {
      setLoading(true);
      await axios.post(`http://localhost:8080/usuario/solicitar-reset?email=${encodeURIComponent(email)}`);
      alert('Se o e-mail estiver cadastrado, você receberá um link para resetar a senha. Verifique a caixa de spam.');
      navigate('/login');
    } catch (error) {
      console.error('Erro ao solicitar reset:', error?.response?.data || error.message);
      if (error?.request) {
        alert('Erro de conexão. Tente novamente.');
      } else {
        alert(error?.response?.data?.error || 'Erro no servidor.');
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
        <h1 className="font-semibold text-2xl text-gray-900 dark:text-white">Esqueci a senha</h1>
        <p className="text-sm text-gray-600 dark:text-gray-300">Informe seu e-mail e enviaremos um link para redefinir sua senha.</p>

        <div className="w-full mt-4">
          <CampoTexto
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-3 dark:bg-neutral-800 dark:text-white"
          />
        </div>

        <div className="flex gap-3 w-full">
          <Botao to="/" variant="cancel" className="w-full">Cancelar</Botao>
          <Botao variant="confirm" className="w-full" onClick={handleSolicitarReset}>
            {loading ? 'Enviando...' : 'Enviar'}
          </Botao>
        </div>
      </div>
    </div>
  );
}

export default EsqueciSenha;
