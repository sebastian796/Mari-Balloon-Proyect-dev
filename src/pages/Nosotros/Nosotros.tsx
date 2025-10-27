import "./Nosotros.scss";
import * as React from "react";
import CardNosotros from "@/components/common/CardNosotros/CardNosotros";
import {
  faceImgOne,
  faceImgTwo,
  faceImgThree,
  faceImgNosotrosConjuntoOne,
  faceImgNosotrosConjuntoTwo,
  faceImgNosotrosConjuntoThree,
  faceImgNosotrosConjuntoFour,
  faceImgNosotrosConjuntoFive,
} from "@/assets/img/personajes";

interface INosotrosProps {}

const Nosotros: React.FunctionComponent<INosotrosProps> = () => {
  return (
    <section className="nosotros">
           {" "}
      {/* Eliminadas clases Tailwind conflictivas (w-full, h-[25rem], justify-center, items-center) */}
           {" "}
      <div className="nt-content-fondo">
                <p>Quienes Somos Nosotros</p>     {" "}
      </div>
           {" "}
      <div className="nt-content-historia">
               {" "}
        <CardNosotros
          label="🌟 Nuestra Visión"
          text="Ser reconocidos como una empresa líder en decoración con globos y ambientación de eventos, destacando por nuestra creatividad, compromiso y capacidad para hacer de cada momento algo único y memorable."
          url={faceImgOne}
        />
               {" "}
        <CardNosotros
          label="🎯 Nuestra Misión"
          text="Brindar experiencias inolvidables a través de decoraciones personalizadas, combinando arte, innovación y dedicación para superar las expectativas de nuestros clientes y llenar sus celebraciones de felicidad."
          girar={true}
          url={faceImgTwo}
        />
               {" "}
        <CardNosotros
          label="💖 Nuestra Motivación"
          text="Nos motiva la sonrisa de cada cliente al ver su evento hecho realidad. Cada proyecto es una oportunidad para compartir alegría, conectar con personas y dejar huellas llenas de color y emoción."
          url={faceImgThree}
        />
             {" "}
      </div>
           {" "}
      {/* Eliminadas clases Tailwind conflictivas (flex-row, justify-center, p-[5%10%], gap-y-[1rem]) */}
           {" "}
      <div className="coleccion-img">
                <img src={faceImgNosotrosConjuntoOne} alt="Imagen de Show" />
                <img src={faceImgNosotrosConjuntoTwo} alt="Imagen de Show" />
                <img src={faceImgNosotrosConjuntoThree} alt="Imagen de Show" />
                <img src={faceImgNosotrosConjuntoFour} alt="Imagen de Show" />
                <img src={faceImgNosotrosConjuntoFive} alt="Imagen de Show" /> 
           {" "}
      </div>
         {" "}
    </section>
  );
};

export default Nosotros;
