import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Botao from "../components/Botao";
import CampoSenha from "../components/CampoSenha";
import CampoTexto from "../components/Campos";
import Label from "../components/Label";
import Titulo from "../components/Titulo";
import DarkModeToggle from "../components/DarkMode";

// Normaliza CPF (remove qualquer caractere que não seja dígito)
function normalizeCpf(cpf) {
  return (cpf || "").replace(/\D/g, "");
}

function Login() {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Normaliza o CPF removendo qualquer caractere que não seja dígito
      const cpfNormalizado = normalizeCpf(cpf);
      const response = await axios.post("http://localhost:8080/usuario/login", {
        cpfUsuario: cpfNormalizado,
        senhaUsuario: senha
      });
      console.log("Login bem-sucedido:", response.data);
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      // Log para desenvolvedor (não expor ao usuário)
      console.error("Erro no login:", error);
      if (error?.response) {
        // Erro retornado pelo servidor — mostra mensagem amigável do back (se existir)
        const serverMsg = error.response.data?.error || error.response.data || error.message;
        alert(`Erro: ${serverMsg}`);
      } else if (error?.request) {
        // Problema de rede / não foi possível contatar o servidor
        alert('Não foi possível conectar ao servidor. Verifique sua conexão e tente novamente.');
      } else {
        // Erro inesperado
        alert('Ocorreu um erro inesperado. Tente novamente mais tarde.');
      }
      }
  };

  return (
    // pega CPF + senha e salva o token em localStorage
    <div className="p-4 flex flex-col items-center min-h-screen justify-center bg-white dark:bg-neutral-800 transition-colors duration-300">
      <div className="absolute top-4 right-4">
        <DarkModeToggle />
      </div>
      
      <Titulo>denunc.ia</Titulo>

      <div className="flex flex-col items-center gap-3 border-2 border-gray-300 dark:border-neutral-600 rounded-lg p-6 w-full max-w-[400px] bg-white dark:bg-neutral-900 shadow-lg">
        <h1 className="font-semibold text-3xl text-gray-900 dark:text-white">Login</h1>
        <div className="flex flex-col items-start w-full">
          <Label>CPF<br /></Label>
          <CampoTexto placeholder="XXX.XXX.XXX-XX" className="mb-3 dark:bg-neutral-800 dark:text-white" mask="cpf" value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          />
          <Label>Senha<br /></Label>
          <CampoSenha 
            className="mb-1 dark:bg-neutral-800 dark:text-white" value={senha} onChange={(e) => setSenha(e.target.value)}
            />
          <Link to="/esqueci-senha" className="text-base mb-3 text-[#086FC7] dark:text-[#5f6ded] no-underline hover:underline">
            Esqueci a senha
          </Link>
        </div>
        <div className="flex flex-row gap-4 justify-center w-full">
          <Botao to="/" variant="cancel" className="hover:bg-[#ececec] dark:hover:bg-neutral-700 w-full">
            Cancelar
          </Botao>
          <Botao variant="confirm" className="hover:bg-[#002a72] dark:hover:bg-[#22335a] w-full" onClick={handleLogin}>
            Confirmar
          </Botao>
        </div>
        <Link to="/cadastro" className="text-base text-gray-500 dark:text-gray-300 no-underline hover:underline">
          Não tenho uma conta
        </Link>
      </div>
    </div>
  );
}

export default Login;

