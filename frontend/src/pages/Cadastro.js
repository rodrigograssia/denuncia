import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Botao from "../components/Botao";
import CampoSenha from "../components/CampoSenha";
import CampoTexto from "../components/Campos";
import Label from "../components/Label";
import Title from "../components/Title";
import DarkModeToggle from "../components/DarkModeToggle";


function Cadastro() {
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const navigate = useNavigate();

  const handleCadastro = async () => {
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/usuario/cadastro", {
        cpfUsuario: cpf,
        nomeUsuario: nome,
        telefoneUsuario: telefone,
        emailUsuario: email,
        senhaUsuario: senha
      });
      console.log("Cadastro bem-sucedido:", response.data);
      alert("Cadastro realizado! Verifique seu e-mail para ativar sua conta.");
      navigate("/verificacao");
    } catch (error) {
      console.error("Erro completo:", error);
      console.error("Resposta do servidor:", error.response?.data);
      const mensagemErro = error.response?.data?.message || error.response?.data || "Erro ao realizar cadastro. Verifique os dados e tente novamente.";
      alert(mensagemErro);
    }
  };

  return (
    <div className="p-4 flex flex-col items-center min-h-screen justify-center bg-white dark:bg-neutral-800 transition-colors duration-300">
      <div className="absolute top-4 right-4">
        <DarkModeToggle />
      </div>
      
      <Title>denunc.ia</Title>

      <div className="flex flex-col items-center gap-3 border-2 border-gray-300 dark:border-neutral-600 rounded-lg p-4 sm:p-6 w-full max-w-[400px] bg-white dark:bg-neutral-900 shadow-lg">
        <h1 className="font-semibold text-2xl sm:text-3xl text-gray-900 dark:text-white">Cadastro</h1>
        <div className="flex flex-col items-start w-full">
          <Label>CPF*<br /></Label>
          <CampoTexto placeholder="XXX.XXX.XXX-XX" className="mb-3 dark:bg-neutral-800 dark:text-white" mask="cpf" value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          />
          <Label>Nome Completo*<br /></Label>
          <CampoTexto placeholder="Fulano de Tal" className="mb-3 dark:bg-neutral-800 dark:text-white" value={nome}
          onChange={(e) => setNome(e.target.value)}
          />
          <Label>Telefone*<br /></Label>
          <CampoTexto placeholder="(11) 98765-4321" className="mb-3 dark:bg-neutral-800 dark:text-white" mask="phone" value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          />
          <Label>Email*<br /></Label>
          <CampoTexto placeholder="fulano@gmail.com" className="mb-3 dark:bg-neutral-800 dark:text-white" value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <Label>Criar senha*<br /></Label>
          <CampoSenha className="mb-3 dark:bg-neutral-800 dark:text-white" value={senha} 
          onChange={(e) => setSenha(e.target.value)}
          />
          <Label>Confirmar senha*<br /></Label>
          <CampoSenha className="mb-3 dark:bg-neutral-800 dark:text-white" value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center w-full">
          <Botao to="/" variant="cancel" className="hover:bg-[#ececec] dark:hover:bg-neutral-700 w-full">
            Cancelar
          </Botao>
          <Botao variant="confirm" className="hover:bg-[#002a72] dark:hover:bg-[#22335a] w-full" onClick={handleCadastro}>
            Confirmar
          </Botao>
        </div>
        <Link to="/login" className="text-sm sm:text-base text-gray-500 dark:text-gray-300 no-underline hover:underline">
          Já tenho uma conta
        </Link>
      </div>
      <h3 className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2">
          Os campos com * são obrigatórios
        </h3>
    </div>
  );
}

export default Cadastro;

