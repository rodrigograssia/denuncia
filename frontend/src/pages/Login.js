import React from "react";
import { useNavigate } from "react-router-dom"; // Importe o useNavigate
import Botao from "../components/Button";
import CampoSenha from "../components/CampoSenha";
import CampoTexto from "../components/Campos";
import "../components/Container.css";
import Label from "../components/Label";
import LogoTitulo from "../components/LogoTitulo";
import Links from "../components/links";
import Titulo from "../components/titulo";
import "../styles/Cadastro.css";

function Login() {
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
      <Titulo titulo={"Login"}></Titulo><br></br>

      <div className="auth-container container-login">

        <div className="camposContainer">
          <Label texto={"CPF"}></Label>
          <CampoTexto texto={"XXX.XXX.XXX-XX"}></CampoTexto>
          <Label texto={"Senha"}></Label>
          <CampoSenha></CampoSenha>
        </div>
        <Links
          style={{ alignSelf: "flex-start" }}
          link={"https://www.youtube.com/"}
          texto={"Esqueci minha senha"}
        ></Links>
        <div className="botoesContainer">
          <Botao titulo={"Cancelar"} classe={"botaoCanc"}></Botao>
          <Botao titulo={"Enviar"} classe={"botaoConf"}></Botao>
        </div>
        <Links
          style={{ color: "#686868ff", alignSelf: "center", marginTop: "10px" }}
          link={"/cadastro"}
          texto={"Ainda não tenho uma conta"}
        ></Links>
      </div>
    </div>
  );
}

export default Login;