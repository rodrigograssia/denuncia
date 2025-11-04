import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Botao from "../components/Botao";
import CampoSenha from "../components/CampoSenha";
import CampoTexto from "../components/Campos";
import Label from "../components/Label";
import LogoTitulo from "../components/LogoTitulo";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="p-4 flex flex-col items-center min-h-screen justify-center">
      <LogoTitulo className="mb-3">denunc.ia</LogoTitulo>

      <div className="flex flex-col items-center gap-3 border-2 border-gray-300 rounded-lg p-4 sm:p-6 w-full max-w-[400px]">
        
        <h1 className="font-semibold text-2xl sm:text-[38px]">Login</h1>
        
        <div className="flex flex-col items-start w-full">
            <Label>CPF<br></br></Label>
            <CampoTexto placeholder="XXX.XXX.XXX-XX" className="mb-3"/>
            <Label>Senha<br></br></Label>
            <CampoSenha className="mb-1"/> 
            <Link to="/esqueci-senha" className="text-sm sm:text-[15px] mb-3 text-[#086FC7] no-underline hover:underline">
              Esqueci a senha
            </Link>
        </div>
        
        <div className="flex flex-row gap-4 justify-center w-full"> 
          <Botao variant="cancel" className="hover:bg-[#ececec]">
            Cancelar
          </Botao>
          <Botao variant="confirm" className="hover:bg-[#002a72]">
            Confirmar
          </Botao>
        </div>
        
        <Link to="/cadastro" className="text-sm sm:text-[16px] text-gray-500 no-underline hover:underline">
          Não tenho uma conta
        </Link>
      </div>
    </div>
  );
}

export default Login;

