import "./Contacto.scss";
import * as React from "react";

interface IContactoProps {}

const Contacto: React.FunctionComponent<IContactoProps> = () => {
  return (
    <section className="contacto-page">
      <h2 className="contacto-page__titulo">¡Conversemos!</h2>
      <p className="contacto-page__subtitulo">
        ¿Listo para coordinar tu próximo evento mágico? Déjanos tus datos y nos
        pondremos en contacto contigo de inmediato.
      </p>

      <div className="contacto-content">
        {/* Columna 1: Información de Contacto */}
        <div className="contacto-info">
          <h3>Nuestra Magia te Espera</h3>
          <div className="info-group">
            <span>📞 Teléfono/WhatsApp:</span>
            <a href="tel:+51999888777"> +51 999 888 777</a>
          </div>
          <div className="info-group">
            <span>📧 Correo Electrónico:</span>
            <a href="mailto:contacto@mariballoon.com">
              {" "}
              contacto@mariballoon.com
            </a>
          </div>
          <div className="info-group">
            <span>📍 Ubicación Central:</span>
            <p>
              Lima, Perú (Servicio a domicilio en toda el área metropolitana)
            </p>
          </div>

          <h3 className="mt-4">Síguenos en Redes</h3>
          <div className="social-links">
            <a href="#" target="_blank">
              Facebook (Meta)
            </a>
            <a href="#" target="_blank">
              Instagram
            </a>
          </div>
        </div>

        {/* Columna 2: Formulario de Contacto */}
        <div className="contacto-form-container">
          <form className="contacto-form">
            <div className="form-group">
              <label htmlFor="nombre">Nombre Completo (*)</label>
              <input type="text" id="nombre" name="nombre" required />
            </div>
            <div className="form-group">
              <label htmlFor="correo">Correo Electrónico (*)</label>
              <input type="email" id="correo" name="correo" required />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono/WhatsApp (*)</label>
              <input type="tel" id="telefono" name="telefono" required />
            </div>
            <div className="form-group">
              <label htmlFor="evento">Tipo de Evento</label>
              <select id="evento" name="evento">
                <option value="">Selecciona...</option>
                <option value="show_infantil">Show Infantil Temático</option>
                <option value="baby_shower">Baby Shower</option>
                <option value="hora_loca">Hora Loca</option>
                <option value="decoracion">Decoración Personalizada</option>
                <option value="otro">Otro / Consulta General</option>
              </select>
            </div>
            <div className="form-group full-width">
              <label htmlFor="mensaje">
                Cuéntanos sobre tu evento (Fecha, detalles, etc.)
              </label>
              <textarea id="mensaje" name="mensaje" rows={4}></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Enviar Solicitud Mágica
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
