import "./Home.scss";
import { Button, VideoContent, Imagen } from "@/components/base";
import { CardService, CardCualidad } from "@/components/common";
import {
  conejo,
  gata,
  oso,
  pliSaludo,
  homeFondoShow,
} from "@/assets/img/personajes";
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

      <section className="flex flex-row justify-evenly p-[4%] introduccion items-center">
        <div className="content-intro w-[70%] h-full m-[1rem] p-[5%] flex flex-col items-start gap-x-[1rem] ">
          <h2>¿Que nos Caracterizan?</h2>
          <p>
            En Mari Baloon, transformamos tus ideas en experiencias
            inolvidables. Con un equipo que vive y respira la organización de
            eventos, te garantizamos que cada detalle será perfecto, desde el
            primer contacto hasta el último aplauso.
          </p>
          <Button label="Solicitar Evento" />
        </div>
        <Imagen url={pliSaludo} alto="60%" ancho="25%" />
      </section>

      <section className="cualidades w-full flex flex-col gap-y-[3.5rem] p-[3rem] relative">
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
        <div className="content-servicio-text w-auto h-[60%] rounded-[60px] p-[10%] mr-[5%] flex flex-col gap-[1.5rem]  ">
          <h3>Nuestros Servicios</h3>
          <p>
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
            img="imagen "
            to="/servicios"
            label="Ir al servicio"
            anchoImg="200px"
            altoImg="200px"
          />
          <CardService
            subTitulo="Nombre del Servicio"
            img="imagen aluciba"
            to="/servicios"
            label="Ir al servicio"
            anchoImg="200px"
            altoImg="200px"
          />
          <CardService
            subTitulo="Nombre del Servicio"
            img="imagen aluciba"
            to="/servicios"
            label="Ir al servicio"
            anchoImg="100px"
            altoImg="100px"
          />
          <CardService
            subTitulo="Nombre del Servicio"
            img="imagen aluciba"
            to="/servicios"
            label="Ir al servicio"
            anchoImg="100px"
            altoImg="100px"
          />
          <CardService
            subTitulo="Nombre del Servicio"
            img="imagen aluciba"
            to="/servicios"
            label="Ir al servicio"
            anchoImg="100px"
            altoImg="100px"
          />
          <CardService
            subTitulo="Nombre del Servicio"
            img="imagen aluciba"
            to="/servicios"
            label="Ir al servicio"
            anchoImg="100px"
            altoImg="100px"
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
