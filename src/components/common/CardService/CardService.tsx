import "./CardService.scss";
import { Enlace, Imagen } from "@/components/base";
import * as React from "react";

interface ICardServiceProps {
  subTitulo: string;
  parrafo?: string;
  img?: string;
  to?: string;
  label: string;
  anchoImg: string;
  altoImg: string;
}

const CardService: React.FunctionComponent<ICardServiceProps> = ({
  subTitulo,
  parrafo,
  img,
  to,
  label,
  anchoImg = "20%",
  altoImg = "20%",
}) => {
  return (
    <div className="cardServicio rounded-[25px] p-[10%] m-[10px] mp-0 text-center gap-2rem flex flex-col justify-between items-center">
      <h3>{subTitulo}</h3>
      <Imagen url={img} ancho={anchoImg} alto={altoImg} />
      <p>{parrafo}</p>
      <Enlace to={to} label={label} />
    </div>
  );
};

export default CardService;
