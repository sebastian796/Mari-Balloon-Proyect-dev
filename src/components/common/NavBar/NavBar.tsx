import "./NavBar.scss";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Mari_Balloon</Link>
      </div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navLink active" : "navLink"
            }
            to="/"
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navLink active" : "navLink"
            }
            to="/nosotros"
          >
            Nosotros
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navLink active" : "navLink"
            }
            to="/servicios"
          >
            Servicio
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navLink active" : "navLink"
            }
            to="/galeria"
          >
            Galeria
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navLink active" : "navLink"
            }
            to="/contacto"
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
