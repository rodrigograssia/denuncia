import React from "react";
import { useNavigate } from "react-router-dom";
import Botao from "../components/Botao";
import CampoSenha from "../components/CampoSenha";
import CampoTexto from "../components/Campos";
import Label from "../components/Label";
import LogoTitulo from "../components/LogoTitulo";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="p-4 flex flex-col items-center">
      <LogoTitulo className="mb-3">denunc.ia</LogoTitulo>

      <div className="flex flex-col items-center gap-3 border-2 border-gray-300 rounded-lg p-6">
        <h1 className="font-semibold text-[38px]">Login</h1>
        
        <div className="flex flex-col items-start">
            <Label>CPF<br></br></Label>
            <CampoTexto placeholder="XXX.XXX.XXX-XX" className="mb-3"/>
            <Label>Senha<br></br></Label>
            <CampoSenha className="mb-1"/>
            <Link to="https://www.example.com" className="text-[15px] mb-3 text-[#086FC7]">
            Esqueci a senha
            </Link>
        </div>
        <div className> 
          <Botao variant="confirm" className="hover:bg-[#002a72] m-2">
            Confirmar
          </Botao>
          <Botao variant="cancel" className="hover:bg-[#ececec] m-2">
            Cancelar
          </Botao>
        </div>
        <Link to="/cadastro" className="text-[16px] text-gray-500">
          Não tenho uma conta
        </Link>
      </div>
    </div>
  );
}

export default Login;