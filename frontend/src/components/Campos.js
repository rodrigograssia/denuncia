import './Campos.css';

function CampoTexto({texto}){
    return <div>
        <input className='campo' type = "text" placeholder = {texto}></input>
    </div>
}


export default CampoTexto;