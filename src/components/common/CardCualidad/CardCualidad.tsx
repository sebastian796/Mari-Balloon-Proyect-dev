import "./CardCualidad.scss";
import * as React from "react";
import { Imagen } from "@/components/base";

interface ICardCualidadProps {
  styleExtra: string;
  titulo: string;
  parrafo: string;
  url: string;
  largoImagen?: string;
  anchoImagen?: string;
}

const CardCualidad: React.FunctionComponent<ICardCualidadProps> = ({
  styleExtra,
  titulo,
  parrafo,
  url,
  largoImagen = "200px",
  anchoImagen = "200px",
}) => {
  return (
    <div className="content-cualid w-[70%] h-[30%] p-[5%] flex justify-around flex-row ">
      <Imagen url={url} alto={largoImagen} ancho={anchoImagen} />
      <div className={styleExtra + 'w-3/5 h-4/5'}>
        <h4>{titulo}</h4>
        <p>{parrafo}</p>
      </div>
    </div>
  );
};

export default CardCualidad;
