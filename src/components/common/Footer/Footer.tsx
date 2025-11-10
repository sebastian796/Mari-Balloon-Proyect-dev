import "./Footer.scss";
import * as React from "react";

const Footer: React.FunctionComponent = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content-wrapper">
        
        {/* Columna 1: Marca y Copyright */}
        <div className="footer-section footer-brand">
          <h3 className="footer-brand__logo">MariBalloon ✨</h3>
          <p className="footer-brand__slogan">
            Damos vida a tus celebraciones con magia, color y diversión garantizada.
          </p>
          <p className="footer-brand__copyright">
            © 2024 MariBalloon. Todos los derechos reservados.
          </p>
        </div>

        {/* Columna 2: Navegación Rápida */}
        <div className="footer-section footer-links">
          <h3>Explora la Magia</h3>
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#nosotros">Nuestra Historia</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#galeria">Galería</a></li>
          </ul>
        </div>

        {/* Columna 3: Contacto y Social */}
        <div className="footer-section footer-contact">
          <h3>Contáctanos</h3>
          <p>📞 WhatsApp: <a href="tel:+51999888777">+51 999 888 777</a></p>
          <p>📧 Email: <a href="mailto:contacto@mariballoon.com">contacto@mariballoon.com</a></p>
          
          <div className="social-icons">
            <a href="#" target="_blank" aria-label="Facebook">F</a>
            <a href="#" target="_blank" aria-label="Instagram">I</a>
            <a href="#" target="_blank" aria-label="YouTube">Y</a>
          </div>
        </div>
      </div>
      {/* Barra inferior de Copyright (separada para mejor diseño) */}
      <div className="footer-bottom-bar">
          <p>Diseño & Desarrollo | MariBalloon 2024</p>
      </div>
    </footer>
  );
};

export default Footer;