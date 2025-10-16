import * as React from "react";
import './CardNosotros.scss'
import { Imagen } from "@/components/base";
import { nosotrosFondoShow } from "@/assets/img/personajes";
nosotrosFondoShow;
interface ICardNosotrosProps {
  label: string;
  text: string;
  girar?: boolean;
}

const CardNosotros: React.FunctionComponent<ICardNosotrosProps> = ({
  label,
  text,
  girar = false,
}) => {
  return (
    <div className={`cardServicio w-full h-full flex flex-row justify-center p-[4%5%] ${girar ? "flex-row-reverse" : ""}`}>
      <div className={`w-[50%] h-full text-start flex flex-col items-start rounded-[30px] p-[5%] m-[0%2%]`}>
        <h2 className="">{label}</h2>
        <p className="">{text}</p>
      </div>
      <Imagen url="./" ancho="20%" alto="100%%" />
    </div>
  );
};

export default CardNosotros;
