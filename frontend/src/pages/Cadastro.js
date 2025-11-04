import React from "react";
import { useNavigate } from "react-router-dom";
import Botao from "../components/Botao";
import CampoSenha from "../components/CampoSenha";
import CampoTexto from "../components/Campos";
import Label from "../components/Label";
import LogoTitulo from "../components/LogoTitulo";
import { Link } from "react-router-dom";

function Cadastro() {
  return (
    <div className="p-4 flex flex-col items-center">
      <LogoTitulo className="mb-3">denunc.ia</LogoTitulo>

      <div className="flex flex-col items-center gap-3 border-2 border-gray-300 rounded-lg p-6">
        <h1 className="font-semibold text-[38px]">Cadastro</h1>
        
        <div className="flex flex-col items-start">
            <Label>CPF<br></br></Label>
            <CampoTexto placeholder="XXX.XXX.XXX-XX" className="mb-3"/>
            <Label>Nome Completo<br></br></Label>
            <CampoTexto placeholder="Fulano de Tal" className="mb-3"/>
            <Label>Telefone<br></br></Label>
            <CampoTexto placeholder="(11) 98765-4321" className="mb-3"/>
            <Label>Email<br></br></Label>
            <CampoTexto placeholder="fulano@gmail.com" className="mb-3"/>
            <Label>Criar senha<br></br></Label>
            <CampoSenha className="mb-3"/>
            <Label>Confirmar senha<br></br></Label>
            <CampoSenha className="mb-3"/>
        </div>
        <div className>
          <Botao variant="confirm" className="hover:bg-[#002a72] m-2">
            Confirmar
          </Botao>
          <Botao variant="cancel" className="hover:bg-[#ececec] m-2">
            Cancelar
          </Botao>
        </div>
        <Link to="/login" className="text-[16px] text-gray-500">
          Já tenho uma conta
        </Link>
      </div>
    </div>
  );
}

export default Cadastro;