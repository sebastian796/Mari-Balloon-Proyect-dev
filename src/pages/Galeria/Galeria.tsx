import { ContentServicios } from "@/components/common";
import "./Galeria.scss";
import * as React from "react";

interface IGaleriaProps {}

const Galeria: React.FunctionComponent<IGaleriaProps> = (props) => {
  return (
    <div className="galeria w-full p-[5%15%] flex flex-col items-start">
      <h2>#Galeria</h2>
      <p className="mb-[3%]">
        En nuestra galería encontrarás los momentos más especiales que hemos
        decorado con amor y creatividad. Cada evento es único, y nuestras
        decoraciones están pensadas para hacer de cada celebración una
        experiencia inolvidable. 
      </p>
      <p className="mb-[3%]">Inspírate con nuestros diseños, colores y
        detalles, y descubre cómo MariBalloon puede llenar tu próxima ocasión de
        alegría y magia.</p>

      <section className="content-galeria w-full h-auto flex flex-col items-center gap-y-[5rem]">
        <ContentServicios
          label="Show Infantiles"
          listaImagenes={["./", "./"]}
        />
        <ContentServicios label="Baby Shower" listaImagenes={["./"]} />
        <ContentServicios label="Hora Loca" listaImagenes={["./"]} />
        <ContentServicios
          label="Decoracion Personalizada"
          listaImagenes={["./"]}
        />
        <ContentServicios label='Servicio "El Patron"' listaImagenes={["./"]} />
        <ContentServicios label="Mas Servicios" listaImagenes={["./"]} />
      </section>
    </div>
  );
};

export default Galeria;
