import "./Home.scss";
import { Button } from "@/components/base";

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
            styleClass={'w-40'}
          />
        </div>
      </section>
      <section className="introudccion">
        
      </section>
      <section className="cualidades"></section>
      <section className="servicios"></section>
      <section className="video"></section>
    </>
  );
};

export default Home;
