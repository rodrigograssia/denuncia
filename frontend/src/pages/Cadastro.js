import React from "react";
import { Link } from "react-router-dom";
import Botao from "../components/Botao";
import CampoSenha from "../components/CampoSenha";
import CampoTexto from "../components/Campos";
import Label from "../components/Label";
import Title from "../components/Title";
import DarkModeToggle from "../components/DarkModeToggle";


function Cadastro() {
  return (
    <div className="p-4 flex flex-col items-center min-h-screen justify-center bg-white dark:bg-neutral-800 transition-colors duration-300">
      <div className="absolute top-4 right-4">
        <DarkModeToggle />
      </div>
      
      <Title>denunc.ia</Title>

      <div className="flex flex-col items-center gap-3 border-2 border-gray-300 dark:border-neutral-600 rounded-lg p-4 sm:p-6 w-full max-w-[400px] bg-white dark:bg-neutral-900 shadow-lg">
        <h1 className="font-semibold text-2xl sm:text-3xl text-gray-900 dark:text-white">Cadastro</h1>
        <div className="flex flex-col items-start w-full">
          <Label>CPF<br /></Label>
          <CampoTexto placeholder="XXX.XXX.XXX-XX" className="mb-3 dark:bg-neutral-800 dark:text-white" />
          <Label>Nome Completo<br /></Label>
          <CampoTexto placeholder="Fulano de Tal" className="mb-3 dark:bg-neutral-800 dark:text-white" />
          <Label>Telefone<br /></Label>
          <CampoTexto placeholder="(11) 98765-4321" className="mb-3 dark:bg-neutral-800 dark:text-white" />
          <Label>Email<br /></Label>
          <CampoTexto placeholder="fulano@gmail.com" className="mb-3 dark:bg-neutral-800 dark:text-white" />
          <Label>Criar senha<br /></Label>
          <CampoSenha className="mb-3 dark:bg-neutral-800 dark:text-white" />
          <Label>Confirmar senha<br /></Label>
          <CampoSenha className="mb-3 dark:bg-neutral-800 dark:text-white" />
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center w-full">
          <Botao to="/" variant="cancel" className="hover:bg-[#ececec] dark:hover:bg-neutral-700 w-full">
            Cancelar
          </Botao>
          <Botao variant="confirm" className="hover:bg-[#002a72] dark:hover:bg-[#22335a] w-full">
            Confirmar
          </Botao>
        </div>
        <Link to="/login" className="text-sm sm:text-base text-gray-500 dark:text-gray-300 no-underline hover:underline">
          Já tenho uma conta
        </Link>
      </div>
    </div>
  );
}

export default Cadastro;

