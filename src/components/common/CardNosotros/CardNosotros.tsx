import * as React from "react";
import './CardNosotros.scss'

interface ICardNosotrosProps {
  label: string;
  text: string;
  girar?: boolean;
  url?:string;
}

const CardNosotros: React.FunctionComponent<ICardNosotrosProps> = ({
  label, 
  text, 
  girar = false,
  url,
}) => {
  return (
    <div className={`card-nosotros ${girar ? "card-nosotros--girar" : ""}`}>
      {/* El SCSS maneja el diseño del contenedor de texto */}
      <div className="card-nosotros__info">
        <h2 className="card-nosotros__label">{label}</h2>
        <p className="card-nosotros__text">{text}</p>
      </div>
      
      {/* La imagen es parte integral del diseño, con estilos aplicados por SCSS */}
      <img src={url} alt={"imagen para eventos"} className="card-nosotros__img" />
    </div>
  );
};

export default CardNosotros;