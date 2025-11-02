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

function Login() {
  const navigate = useNavigate();

  const handleCancelar = () => {
    navigate("/");
  };

  return (
    <div className="auth-page-wrapper">

      <LogoTitulo titulo={"denunc.ia"} />
      <Titulo titulo={"Login"} /><br />

      <div className="auth-container container-login">

        <div className="camposContainer">
          <Label texto={"CPF"} />
          <CampoTexto texto={"XXX.XXX.XXX-XX"} />
          <Label texto={"Senha"} />
          <CampoSenha />
        </div>

        <Links
          style={{ alignSelf: "flex-start" }}
          link={"https://www.youtube.com/"}
          texto={"Esqueci minha senha"}
        />

        <div className="botoesContainer">
          <Botao titulo={"Cancelar"} classe={"botaoCanc"} onClick={handleCancelar} />
          <Botao titulo={"Enviar"} classe={"botaoConf"} />
        </div>

        <Links
          style={{ color: "#686868ff", alignSelf: "center", marginTop: "10px" }}
          link={"/cadastro"}
          texto={"Ainda não tenho uma conta"}
        />
      </div>
    </div>
  );
}

export default Login;