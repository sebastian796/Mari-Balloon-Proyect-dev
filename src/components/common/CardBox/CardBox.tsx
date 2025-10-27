import * as React from "react";
import './CardBox.scss' // Importar el SCSS de CardBox


interface ICardBoxProps {
  obj:{titulo:string, descripcion:string, img:string};
}

const CardBox: React.FunctionComponent<ICardBoxProps> = ({
  obj,
}) => {
  return (
    <div className="card-box">
      <h2 className="card-box__titulo">{obj.titulo}</h2>
      <p className="card-box__descripcion">{obj.descripcion}</p>
      {obj.img && <img src={obj.img} alt={obj.titulo} className="card-box__img"/>}
    </div>
  );
};

export default CardBox;