import React from "react";
import { useNavigate } from "react-router-dom";
import Botao from "../components/Button";
import CampoSenha from "../components/CampoSenha";
import CampoTexto from "../components/Campos";
import "../components/Container.css";
import Label from "../components/Label";
import LogoTitulo from "../components/LogoTitulo";
import Links from "../components/links";
import Titulo from "../components/titulo";
import "../styles/Cadastro.css";

function Cadastro() {
  const navigate = useNavigate();

  const handleCancelar = () => {
    navigate("/");
  };

  return (
    <div className="auth-page-wrapper">

      <LogoTitulo titulo={"denunc.ia"} />
      <Titulo titulo={"Cadastro"} /><br />

      <div className="auth-container container-cadastro">

        <div className="camposContainer">
          <Label texto={"CPF"} />
          <CampoTexto texto={"XXX.XXX.XXX-XX"} />
          <Label texto={"Email"} />
          <CampoTexto texto={"denunc.ia@gmail.com"} />
          <Label texto={"Nome"} />
          <CampoTexto texto={"Guilherme Tigrinho"} />
          <Label texto={"Telefone"} />
          <CampoTexto texto={"(11) 98765-4321"} />
          <Label texto={"Senha"} />
          <CampoSenha />
          <Label texto={"Confirmar Senha"} />
          <CampoSenha />
        </div>

        <div className="botoesContainer">
          <Botao titulo={"Cancelar"} classe={"botaoCanc"} onClick={handleCancelar} />
          <Botao titulo={"Enviar"} classe={"botaoConf"} />
        </div>

        <Links
          style={{ color: "#686868ff", alignSelf: "center", marginTop: "10px" }}
          link={"/login"}
          texto={"Já tenho uma conta"}
        />
      </div>
    </div>
  );
}

export default Cadastro;