import "./Servicios.scss";
import * as React from "react";

import { CardBox } from "@/components/common";
import { arrServiciosInfor } from "@/assets/img/personajes";
interface IServicioProps {}

const Servicio: React.FunctionComponent<IServicioProps> = () => {
  return (
    <section
      id="ServiciosBox"
      className="servicios-page" /* Clase limpia para SCSS */
    >
      {/* SCSS manejará color, tamaño y fuente */}
      <h2 className="servicios-page__titulo">Servicios de Entretenimiento</h2>
      <p className="servicios-page__parrafo-intro">
        Estás a un paso de encontrar los servicios estratégicos que tu negocio
        necesita para crecer. Exploramos cómo podemos convertir tus retos en
        resultados tangibles y medibles.
      </p>
      {/* Se corrige la sintaxis de style */}
      <span className="servicios-page__span-llamada">"Descubre nuiestra oferta y pongamos tus proyectos en marcha"</span>
        
      <div className="content-box">
        {arrServiciosInfor.map((item, index) => (
          <CardBox obj={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Servicio;