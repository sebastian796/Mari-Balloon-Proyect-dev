import "./CardCualidad.scss";
import * as React from "react";

interface ICardCualidadProps {
  styleExtra: string;
  titulo: string;
  parrafo: string;
  url: string;
  alt?: string;
}

const CardCualidad: React.FunctionComponent<ICardCualidadProps> = ({
  styleExtra,
  titulo,
  parrafo,
  url,
  alt = "img cualidad",
}) => {
  return (
    <div className="content-cualid w-full h-[20rem] flex justify-around flex-row ">
      <div className="cualidad-img w-[35%] h-full flex justify-center items-center">
        <img className="w-[50%] " src={url} alt={alt} />
      </div>
      <div
        className={"cualidad-infor " + styleExtra + "w-[65%] h-full p-[3%7%]"}
      >
        <h4>{titulo}</h4>
        <p>{parrafo}</p>
      </div>
    </div>
  );
};

export default CardCualidad;
