import "./Servicios.scss";
import * as React from "react";

import { CardBox } from "@/components/common";
import { arrServiciosInfor } from "@/assets/img/personajes";
interface IServicioProps {}

const Servicio: React.FunctionComponent<IServicioProps> = () => {
  return (
    <section
      id="ServiciosBox"
      className="text-center w-full p-[3%5%] flex flex-col items-center gap-y-[2rem] bg-blue-50"
    >
      <h2 className="mx-[5%] text-[2.5rem] font-serif" style={{color:'$color-text-principal'}}>Servicios de Entretenimiento</h2>
      <p className="mx-[15%] text-[1.2rem]">
        Estás a un paso de encontrar los servicios estratégicos que tu negocio
        necesita para crecer. Exploramos cómo podemos convertir tus retos en
        resultados tangibles y medibles.
      </p>
      <span className="text-[1rem]" style={{color:'${color-text-principal'}}>"Descubre nuiestra oferta y pongamos tus proyectos en marcha"</span>
      <div className="content-box grid grid-cols-2 grid-rows-3 gap-[1rem] w-[80%] ">
        {arrServiciosInfor.map((item, index) => (
          <CardBox obj={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Servicio;
