import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Botao from "../components/Botao";
import CampoTexto from "../components/Campos";
import Titulo from "../components/Titulo";
import DarkModeToggle from "../components/DarkMode";


function Verificacao() {
  const [codigo, setCodigo] = useState("");
  const navigate = useNavigate();

  const handleVerificacao = async () => {
    try {
      await axios.post(`http://localhost:8080/usuario/verificar?codigo=${codigo}`);
      alert('Conta verificada com sucesso!');
      navigate("/login");
    } catch (error) {
      console.error("Erro na verificação:", error);
  alert('Código de verificação incorreto ou expirado!');
    }
  };

  return (
    <div className="p-4 flex flex-col items-center min-h-screen justify-center bg-white dark:bg-neutral-800 transition-colors duration-300">
      <div className="absolute top-4 right-4">
        <DarkModeToggle />
      </div>
      
      <Titulo>denunc.ia</Titulo>

      <div className="flex flex-col items-center gap-3 border-2 border-gray-300 dark:border-neutral-600 rounded-lg p-4 sm:p-6 w-full max-w-[400px] bg-white dark:bg-neutral-900 shadow-lg">
        <h1 className="font-semibold text-2xl sm:text-3xl text-gray-900 dark:text-white">Insira seu código</h1>
        <h3 className="mb-6 dark:text-white">(Verifique a caixa de spam)</h3>
        <div className="flex flex-col items-start w-full">
          <CampoTexto 
            className="mb-3 dark:bg-neutral-800 dark:text-white"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center w-full">
          <Botao to="/" variant="cancel" className="hover:bg-[#ececec] dark:hover:bg-neutral-700 w-full">
            Cancelar
          </Botao>
          <Botao 
            variant="confirm" 
            className="hover:bg-[#002a72] dark:hover:bg-[#22335a] w-full"
            onClick={handleVerificacao}
          >
            Enviar
          </Botao>
        </div>
      </div>
    </div>
  );
}

export default Verificacao;

