import "./NavBar.scss";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="flex flex-row h-[70px]">
      <div className="logo w-[20%] rounded-full flex items-center pl-4">
        <Link to="/">Mari_Balloon</Link>
      </div>

      <nav className="w-[80%] flex flex-row justify-end items-center pl-8">
        <ul className="h-full w-[75%] grid grid-cols-6 ">
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
          <li>
            <NavLink
              className={({ isActive }) =>
              isActive ? "navLink active" : "navLink"
              }
              to="/login"  
            >
             Iniciar Sesión
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
