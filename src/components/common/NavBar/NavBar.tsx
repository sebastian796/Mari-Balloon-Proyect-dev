import "./NavBar.scss";
import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react"; // Importar useState

const NavBar: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar el menú

  // Función para cerrar el menú después de hacer clic en un enlace (solo en móvil)
  const handleNavLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    // Se mantiene la clase flex flex-row h-[70px] del TSX original
    <header className="flex flex-row h-[70px]">
      <div className="logo w-[20%] rounded-full flex items-center pl-4">
        <Link to="/" onClick={handleNavLinkClick}>
          Mari_Balloon
        </Link>
      </div>

      {/* Botón de Hamburguesa: visible solo en móviles gracias al SCSS */}
      <div
        className="menu-toggle flex items-center pr-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Aquí puedes usar un icono, por ahora usamos caracteres */}
        {isOpen ? "✕" : "☰"}
      </div>

      {/* NAV: Condicionalmente aplicamos la clase 'is-open' */}
      <nav
        className={`w-[80%] flex flex-row justify-end items-center pl-8 ${
          isOpen ? "is-open" : ""
        }`}
      >
        {/* Usamos una lista flexbox para móviles, pero Tailwind toma el control de grid-cols-6 en escritorio */}
        <ul className="h-full w-[75%] grid grid-cols-6 ">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "navLink active" : "navLink"
              }
              to="/"
              onClick={handleNavLinkClick}
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
              onClick={handleNavLinkClick}
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
              onClick={handleNavLinkClick}
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
              onClick={handleNavLinkClick}
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
              onClick={handleNavLinkClick}
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
              onClick={handleNavLinkClick}
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
