import "./Nosotros.scss";
import * as React from "react";
import { Imagen } from "@/components/base";
import CardNosotros from "@/components/common/CardNosotros/CardNosotros";

interface INosotrosProps {}

const Nosotros: React.FunctionComponent<INosotrosProps> = (props) => {
  return (
    <section className="nosotros">
      <div className="nt-content-fondo w-full h-[25rem] flex justify-center items-center">
        <p className="p-[1rem]">Quienes Somos Nosotros</p>
      </div>
      <div className="nt-content-historia">
        <CardNosotros
          label="🌟 Nuestra Visión"
          text="Ser reconocidos como una empresa líder en decoración con globos y ambientación de eventos, destacando por nuestra creatividad, compromiso y capacidad para hacer de cada momento algo único y memorable."
        />
        <CardNosotros
          label="🎯 Nuestra Misión"
          text="Brindar experiencias inolvidables a través de decoraciones personalizadas, combinando arte, innovación y dedicación para superar las expectativas de nuestros clientes y llenar sus celebraciones de felicidad."
          girar={true}
        />
        <CardNosotros
          label="💖 Nuestra Motivación"
          text="Nos motiva la sonrisa de cada cliente al ver su evento hecho realidad. Cada proyecto es una oportunidad para compartir alegría, conectar con personas y dejar huellas llenas de color y emoción."
        />
      </div>
      <div className="coleccion-img flex flex-row justify-center p-[5%10%]">
        <Imagen ancho="30%" alto="20%" />
        <Imagen ancho="30%" alto="20%" />
        <Imagen ancho="30%" alto="20%" />
        <Imagen ancho="30%" alto="20%" />
        <Imagen ancho="30%" alto="20%" />
        <Imagen ancho="30%" alto="20%" />
      </div>
    </section>
  );
};

export default Nosotros;
