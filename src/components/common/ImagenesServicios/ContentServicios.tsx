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
    <div className="content-servicios">
      <h2 className="content-servicios__label">{label}</h2>
      <div className="content-servicios__imagenes">
        {listaImagenes.map((url, key) => (
          <Imagen url={url} key={key} />
        ))}
      </div>
    </div>
  );
};

export default ContentServicios;