import './Button.css';

function Botao({ titulo, classe, ...props }) { 
  return (
    <button className={classe} {...props}> 
      {titulo}
    </button>
  );
}
export default Botao;