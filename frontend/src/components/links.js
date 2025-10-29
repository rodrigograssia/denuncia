import "../components/link.css";

function Links({ link, texto, ...props }) {

  const combinedClassName = `link ${props.className || ''}`.trim();

  return (
    <a href={link} {...props} className={combinedClassName}>
      {texto}
    </a>
  );
}

export default Links;