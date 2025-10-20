import "./Home.scss";
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
interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = () => {
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
            onClick={() => alert("Cotizando Productos")}
            styleClass={"w-40"}
          />
        </div>
      </section>

      <section className=" w-full flex justify-center p-[4%] introduccion items-center">
        <div className="content-intro w-[70%] h-full m-[1rem] flex flex-col items-center gap-y-[1rem] text-center px-[7%] ">
          <h2>¿Que nos Caracterizan?</h2>
          <p>
            En Mari Baloon, transformamos tus ideas en experiencias
            inolvidables. Con un equipo que vive y respira la organización de
            eventos, te garantizamos que cada detalle será perfecto, desde el
            primer contacto hasta el último aplauso.
          </p>
          <Button  label="Solicitar Evento" />
        </div>
      </section>

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

      <section className="servicios grid grid-cols-[30%70%] p-[5%]">
        <div className="content-servicio-text w-auto h-[60%] rounded-[60px] p-[10%] mr-[5%] flex flex-col justify-around items-center text-start ">
          <h3 className="w-full">Nuestros Servicios</h3>
          <p className="w-full">
            Ilusionismo interactivo y profesional que cautivará a toda la
            familia. Nuestro mago combina trucos asombrosos con comedia y
            participación del público. Risas y asombro garantizados.
          </p>
          <Button label="Cotizar" />
        </div>

        {/* Debe de ser grad para poder dividirlo en seis servicios, de los cuale solo se tendran que mostrar los disponibles, no mas de seis */}
        <div className="grid grid-cols-3 grid-rows-2 ">
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
            anchoImg="200px"
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
        className="content-img flex justify-center items-center  "
        style={{backgroundImage:`url(${homeFondoShow})`}}
      >
        <div className="content-video w-[40rem] h-[20rem] m-[5%]">
          <VideoContent ref=''/>
        </div>
      </section>
    </>
  );
};


<div>
  <p></p>
</div>

export default Home;
