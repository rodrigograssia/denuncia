import './Button.css';

function Botao({titulo,classe}){
    return <button className={classe} type="submit">{titulo}</button>
}
export default Botao;