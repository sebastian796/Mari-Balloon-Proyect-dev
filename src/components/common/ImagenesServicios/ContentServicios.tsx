import { Imagen } from "@/components/base";
import * as React from "react";
import "./ContentServicios.scss";


interface IContentServiciosProps {
  label: string;
  listaImagenes?: Array<string>;
}

const ContentServicios: React.FunctionComponent<IContentServiciosProps> = ({
  label,
  listaImagenes = [],
}) => {
  return (
    <div
      className={`content-img-servicios gap-y-[2rem] w-[100%] p-[3%] h-[70%] flex flex-col items-start  rounded-[50px] `}
    >
      <h2 className="w-full h-1/5 text-start">{label}</h2>
      <div className="content-imagenes w-full min-h-[1rem] p-[1rem2rem] grid grid-cols-4 grid-rows-2 p-3%  gap-[1rem] ">
        {listaImagenes.map((img,key) => (
          <Imagen url={img} key={key} alto="10rem"  />
        ))}
      </div>
    </div>
  );
};

export default ContentServicios;
