import Botao from "../Components/Button";
import CampoSenha from "../Components/CampoSenha";
import CampoTexto from "../Components/Campos";
import "../Components/Container.css";
import Label from "../Components/Label";
import LogoTitulo from "../Components/LogoTitulo";
import Links from "../Components/links";
import Titulo from "../Components/titulo";
import "../styles/Cadastro.css";


function Cadastro() {
    return (
            <div>
            <LogoTitulo titulo={"denunc.ia"}></LogoTitulo>
            <Titulo titulo={"Cadastro"}></Titulo>
        <div className="container-cadastro">
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
            <Links link={"https://www.youtube.com/"} texto={"Já tenho uma conta"}></Links>
            <div className="botoesContainer">
                <Botao titulo={"Cancelar"} classe={"botaoCanc"}></Botao>
                <Botao titulo={"Enviar"} classe={"botaoConf"}></Botao>
            </div>
        </div>
        </div>
    );
    
}
export default Cadastro;