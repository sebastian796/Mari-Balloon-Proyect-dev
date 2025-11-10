import "./Home.scss";
import React, {useState} from 'react';
import ChatModal from '../../components/base/Modal/ChatModal';
import { Button, VideoContent } from "@/components/base";
import { CardService, CardCualidad } from "@/components/common";
import {
  conejo,
  gata,
  oso,
  homeFondoShow,
} from "@/assets/img/personajes";
import {nino,torta,estrellas,flores,fiesta,globo} from '@/assets/icon/index'
console.log(homeFondoShow);


const Home: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(true);
  const handleOpenChat = () => setIsChatOpen(true);
  const handleCloseChat = () => setIsChatOpen(false);
  
  return (
    <>
      <section className="inicio">
        <div>
          <h1>¡Tu Evento Hecho Magia!</h1>
          <p>
            Somos arquitectos de momentos. Planificamos cada detalle, desde el
            primer globo hasta el último aplauso. Permítenos transformar tu
            visión en una celebración sin igual, llena de alegría y perfección.
          </p>
          <Button
            label={"Cotizar"}
            onClick={handleOpenChat}
          />
        </div>
      </section>

      {/* Eliminadas clases Tailwind que crean conflicto (w-full, p-[4%], items-center) */}
      <section className="introduccion flex justify-center">
        {/* Eliminadas clases Tailwind (w-[70%], h-full, m-[1rem], gap-y-[1rem], px-[7%]) */}
        <div className="content-intro flex flex-col items-center text-center">
          <h2>¿Que nos Caracterizan?</h2>
          <p>
            En Mari Baloon, transformamos tus ideas en experiencias
            inolvidables. Con un equipo que vive y respira la organización de
            eventos, te garantizamos que cada detalle será perfecto, desde el
            primer contacto hasta el último aplauso.
          </p>
          <Button label="Solicitar Evento" />
        </div>
      </section>

      {/* El SCSS manejará la distribución de las CardCualidad */}
      <section className="cualidades w-full flex flex-col relative">
        <CardCualidad
          titulo="Tranquilidad Garantizada"
          parrafo="Nos encargamos de todos los detalles, desde la logística hasta la seguridad. Somos un equipo profesional, asegurando que tu única preocupación sea disfrutar con tus hijos."
          url={conejo}
          styleExtra=""
        />
        <CardCualidad
          titulo="Espectáculos Únicos"
          parrafo="Olvídate de lo de siempre. Nuestro equipo creativo diseña shows
            originales, llenos de fantasía y diversión, capturando la
            imaginación de niños de todas las edades."
          url={oso}
          styleExtra=""
        />
        <CardCualidad
          titulo="Experetos en Eventos"
          parrafo="Llevamos un año creando alegría. Nuestra experiencia nos permite
            solucionar cualquier imprevisto y ofrecerte un evento de la más
            alta calidad, sin estrés."
          url={gata}
          styleExtra=""
        />
      </section>

      {/* Ajustada la distribución de la grilla principal para Servicios */}
      <section className="servicios grid">
        {/* Eliminadas clases Tailwind (w-auto, h-[60%], rounded-[60px], p-[10%], mr-[5%], justify-around, items-center) */}
        <div className="content-servicio-text flex flex-col text-start">
          <h3 className="w-full">Nuestros Servicios</h3>
          <p className="w-full">
            Ilusionismo interactivo y profesional que cautivará a toda la
            familia. Nuestro mago combina trucos asombrosos con comedia y
            participación del público. Risas y asombro garantizadas.
          </p>
          <Button label="Cotizar" onClick={handleOpenChat} />
        </div>

        {/* El SCSS manejará el grid de servicios */}
        <div className="grid grid-servicios">
          <CardService
            subTitulo="Show Infantil Temático"
            img={torta}
            to="/servicios"
            label="Ir al servicio"
            anchoImg="200px"
            altoImg="200px"
          />
          <CardService
            subTitulo="Baby Shower Emotivo"
            img={nino}
            to="/servicios"
            label="Ir al servicio"
            anchoImg="200px"
            altoImg="200px"
          />
          <CardService
            subTitulo="Hora Loca Explosiva"
            img={fiesta}
            to="/servicios"
            label="Ir al servicio"
            anchoImg="200px"
            altoImg="200px"
          />
          <CardService
            subTitulo="Decoraciones Personalizadas"
            img={globo}
            to="/servicios"
            label="Ir al servicio"
            anchoImg="200px"
            altoImg="200px"
          />
          <CardService
            subTitulo='Servicio "El Patron'
            img={flores}
            to="/servicios"
            label="Ir al servicio"
            anchoImg="200pxw"
            altoImg="200px"
          />
          <CardService
            subTitulo="¿Buscas Algo Más?"
            img={estrellas}
            to="/servicios"
            label="Ir al servicio"
            anchoImg="200px"
            altoImg="200px"
          />
        </div>
      </section>
      <section
        className="content-img flex justify-center items-center"
        style={{backgroundImage:`url(${homeFondoShow})`}}
      >
        <div className="content-video">
          <VideoContent ref=''/>
        </div>
      </section>

      <ChatModal
        isOpen={isChatOpen}
        onClose={handleCloseChat}
      />
    </>
  );
};

export default Home;