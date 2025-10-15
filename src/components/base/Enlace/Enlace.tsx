import './Enlace.scss'
import * as React from "react";
import { NavLink } from "react-router-dom";

interface EnlaceProps {
  to?: string;
  label?: string;
}

const Enlace: React.FunctionComponent<EnlaceProps> = ({
  to = "/",
  label = "Ir al Servicio",
}) => {
  return (
    <NavLink className={"enlace"} to={to}>
      {label}
    </NavLink>
  );
};

export default Enlace;
