import Botao from "../Components/Button";
import CampoSenha from "../Components/CampoSenha";
import CampoTexto from "../Components/Campos";
import "../Components/Container.css";
import Label from "../Components/Label";
import LogoTitulo from "../Components/LogoTitulo";
import Links from "../Components/links";
import Titulo from "../Components/titulo";
import "../styles/Login.css";


function Login() {
    return (
        <div>
            <LogoTitulo titulo={"denunc.ia"}></LogoTitulo>
            <Titulo titulo={"Login"}></Titulo>
        <div className="container-login">
            <div className="camposContainer">
            <Label texto={"CPF"}></Label>
            <CampoTexto texto = {"XXX.XXX.XXX-XX"}></CampoTexto>
            <Label texto={"Senha"}></Label>
            <CampoSenha></CampoSenha>
            </div>
            <Links link={"https://www.youtube.com/"} texto={"Esqueci minha senha"}></Links>
            <div className="botoesContainer">
                <Botao titulo={"Cancelar"} classe={"botaoCanc"}></Botao>
                <Botao titulo={"Enviar"} classe={"botaoConf"}></Botao>
            </div>
        </div>
        </div>
    );

}

export default Login;