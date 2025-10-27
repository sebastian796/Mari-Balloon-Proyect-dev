import { ContentServicios } from "@/components/common";
import "./Galeria.scss";
import * as React from "react";

import { arrGaleriaShow,arrGaleriaBaby} from "@/assets/img/personajes";

interface IGaleriaProps {}

const Galeria: React.FunctionComponent<IGaleriaProps> = () => {
  return (
    <div className="galeria">
      <h2 className="galeria__titulo">#Galeria</h2>
      <p className="galeria__parrafo-intro">
        En nuestra galería encontrarás los momentos más especiales que hemos
        decorado con amor y creatividad. Cada evento es único, y nuestras
        decoraciones están pensadas para hacer de cada celebración una
        experiencia inolvidable. 
      </p>
      <p className="galeria__parrafo-intro">Inspírate con nuestros diseños, colores y
        detalles, y descubre cómo MariBalloon puede llenar tu próxima ocasión de
        alegría y magia.</p>

      <section className="content-galeria">
        <ContentServicios
          label="Show Infantiles"
          listaImagenes={arrGaleriaShow}
        />
        <ContentServicios label="Baby Shower" listaImagenes={arrGaleriaBaby} />
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