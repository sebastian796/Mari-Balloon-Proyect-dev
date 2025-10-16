import "./VideoContent.scss";
import * as React from "react";

interface IVideocContentProps {
  ref: string;
  ancho?: string;
  largo?: string;
}


const VideocContent: React.FunctionComponent<IVideocContentProps> = ({
  ref,
  ancho = '100%',
  largo = '100%',
}) => {
  
  return <video src={ref} style={{ width: ancho, height: largo }}></video>;
};

export default VideocContent;

