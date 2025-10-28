import "../Components/link.css";
function Links({link,texto}){
   return <a className="link" href={link}>{texto}</a>
}

export default Links;