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

  const handleVoltar = () => {
    navigate("/");
  };

  return (
    <div className="auth-page-wrapper">

      <div className="pagina-auth-voltar">
        <Botao
          titulo={"Voltar"}
          classe={"botaoVoltar"}
          onClick={handleVoltar}
        />
      </div>

      <LogoTitulo titulo={"denunc.ia"}></LogoTitulo>
      <Titulo titulo={"Cadastro"}></Titulo><br></br>

      <div className="auth-container container-cadastro">

        <div className="camposContainer">
          <Label texto={"CPF"}></Label>
          <CampoTexto texto={"XXX.XXX.XXX-XX"}></CampoTexto>
          <Label texto={"Email"}></Label>
          <CampoTexto texto={"denunc.ia@gmail.com"}></CampoTexto>
          <Label texto={"Nome"}></Label>
          <CampoTexto texto={"Guilherme Tigrinho"}></CampoTexto>
          <Label texto={"Telefone"}></Label>
          <CampoTexto texto={"(11) 98765-4321"}></CampoTexto>
          <Label texto={"Senha"}></Label>
          <CampoSenha></CampoSenha>
          <Label texto={"Confirmar Senha"}></Label>
          <CampoSenha></CampoSenha>
        </div>
        <div className="botoesContainer">
          <Botao titulo={"Cancelar"} classe={"botaoCanc"}></Botao>
          <Botao titulo={"Enviar"} classe={"botaoConf"}></Botao>
        </div>
        <Links
          style={{ color: "#686868ff", alignSelf: "center", marginTop: "10px" }}
          link={"/login"}
          texto={"Já tenho uma conta"}
        ></Links>
      </div>
    </div>
  );
}
export default Cadastro;