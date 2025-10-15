import "./NavBar.scss";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-full h-[70px] flex flex-row justify-between items-center pl-8">
      <div className="logo rounded-full flex items-center pl-4">
        <Link to="/">Mari_Balloon</Link>
      </div>
      
      <ul className="h-full w-[60%] grid grid-cols-5 ">
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
