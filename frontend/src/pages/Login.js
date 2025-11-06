import React from "react";
import { Link } from "react-router-dom";
import Botao from "../components/Botao";
import CampoSenha from "../components/CampoSenha";
import CampoTexto from "../components/Campos";
import Label from "../components/Label";
import Title from "../components/Title";
import DarkModeToggle from "../components/DarkModeToggle";


function Login() {
  return (
    <div className="p-4 flex flex-col items-center min-h-screen justify-center bg-white dark:bg-neutral-800 transition-colors duration-300">
      <div className="absolute top-4 right-4">
        <DarkModeToggle />
      </div>
      
      <Title>denunc.ia</Title>

      <div className="flex flex-col items-center gap-3 border-2 border-gray-300 dark:border-neutral-600 rounded-lg p-4 sm:p-6 w-full max-w-[400px] bg-white dark:bg-neutral-900 shadow-lg">
        <h1 className="font-semibold text-2xl sm:text-3xl text-gray-900 dark:text-white">Login</h1>
        <div className="flex flex-col items-start w-full">
          <Label>CPF<br /></Label>
          <CampoTexto placeholder="XXX.XXX.XXX-XX" className="mb-3 dark:bg-neutral-800 dark:text-white" />
          <Label>Senha<br /></Label>
          <CampoSenha className="mb-1 dark:bg-neutral-800 dark:text-white" />
          <Link to="/esqueci-senha" className="text-sm sm:text-base mb-3 text-[#086FC7] dark:text-[#5f6ded] no-underline hover:underline">
            Esqueci a senha
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center w-full">
          <Botao to="/" variant="cancel" className="hover:bg-[#ececec] dark:hover:bg-neutral-700 w-full">
            Cancelar
          </Botao>
          <Botao variant="confirm" className="hover:bg-[#002a72] dark:hover:bg-[#22335a] w-full">
            Confirmar
          </Botao>
        </div>
        <Link to="/cadastro" className="text-sm sm:text-base text-gray-500 dark:text-gray-300 no-underline hover:underline">
          Não tenho uma conta
        </Link>
      </div>
    </div>
  );
}

export default Login;

