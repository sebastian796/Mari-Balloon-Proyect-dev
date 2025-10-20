import "./Imagen.scss";
import * as React from "react";

interface IImagenProps {
  url?: string;
  ancho?: string;
  alto?: string;
}

const Imagen: React.FunctionComponent<IImagenProps> = ({
  url = "./",
  ancho = "100%",
  alto = "100%",
}) => {
  return url && <img style={{ width: ancho, height: alto, borderRadius:'15px'}} src={url}></img>;
};

export default Imagen;
