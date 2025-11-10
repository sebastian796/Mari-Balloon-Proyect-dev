// Peronsje para la introduccion
import pliSaludo from "./img-personajes/plipli.png";

// Personajes para las cualidades
import conejo from "./img-personajes/conejo.png";
import oso from "./img-personajes/oso.png";
import gata from "./img-personajes/gata.png";
import logAnimation from './img-personajes/perroPoliciaPower.png';

// Fondo imagenes de facebook
import homeFondoShow from "./img-face/fondo-show-01.png";
import nosotrosFondoShow from "./img-face/fondo-show-02.png";

// Imagenes para la Parte de Historia de la empresa
import faceImgOne from "./img-face/face-img-nosotros-01.png";
import faceImgTwo from "./img-face/face-img-nosotros-02.png";
import faceImgThree from "./img-face/face-img-nosotros-03.png";

import faceImgNosotrosConjuntoOne from "./img-face/nosotros-img-conjunto-01.png";
import faceImgNosotrosConjuntoTwo from "./img-face/nosotros-img-conjunto-02.png";
import faceImgNosotrosConjuntoThree from "./img-face/nosotros-img-conjunto-03.png";
import faceImgNosotrosConjuntoFour from "./img-face/nosotros-img-conjunto-04.png";
import faceImgNosotrosConjuntoFive from "./img-face/nosotros-img-conjunto-05.png";

// Imagenes para la galeria de Show Infantiles
import galeriaShowOne from "./ShowInfantiles/show-01.png";
import galeriaShowTwo from "./ShowInfantiles/show-02.png";
import galeriaShowTree from "./ShowInfantiles/show-03.png";
import galeriaShowFour from "./ShowInfantiles/show-04.png";
import galeriaShowFive from "./ShowInfantiles/show-05.png";
import galeriaShowSex from "./ShowInfantiles/show-06.png";
import galeriaShowSeven from "./ShowInfantiles/show-07.png";

const arrGaleriaShow: Array<string> = [
  galeriaShowOne,
  galeriaShowTwo,
  galeriaShowTree,
  galeriaShowFour,
  galeriaShowFive,
  galeriaShowSex,
  galeriaShowSeven,
];

//Imagenes para la galeria de Baby Shower
import babyShowerOne from "./BabyShower/baby-01.png";
import babyShowerTwo from "./BabyShower/baby-02.png";
import babyShowerThree from "./BabyShower/baby-03.png";

const arrGaleriaBaby: Array<string> = [
  babyShowerOne,
  babyShowerTwo,
  babyShowerThree,
];

// Objeto Servicios para la pagina de servicios
interface IarrServiciosInfor{
    titulo:string;
    descripcion:string;
    img:string;
}

const arrServiciosInfor: Array<IarrServiciosInfor> = [
  {
    titulo: "Show Infantil Temático 🎂",
    descripcion:
      "Disfruta de un espectáculo lleno de magia y diversión con nuestros shows infantiles temáticos. Perfecto para cumpleaños y eventos especiales.",
    img: "",
  },
  {
    titulo: "Baby Shower Emotivo 👶",
    descripcion:
      "Diseñamos y coordinamos un Baby Shower centrado en la ternura y la emoción de la dulce espera. Este servicio incluye decoración temática suave, juegos divertidos y actividades diseñadas para compartir mensajes y buenos deseos, creando un ambiente cálido y memorable para los futuros padres.",
    img: "",
  },
  {
    titulo: "Hora Loca Explosiva 🎊",
    descripcion:
      "El servicio perfecto para elevar la energía y el ambiente de cualquier fiesta. Consiste en un show dinámico y lleno de sorpresas que incluye un DJ, lanzadores de confeti, props temáticos, cotillón y la animación de bailarines profesionales para poner a bailar a todos los invitados.",
    img: "",
  },
  {
    titulo: "Decoraciones Personalizadas 🎈",
    descripcion:
      "Transforma cualquier espacio en el lugar de tus sueños. Nuestro equipo de decoración trabaja contigo para crear ambientes únicos basados en tu visión y presupuesto. Incluye el diseño, montaje y desmontaje de estructuras, arreglos florales, iluminación y, por supuesto, la personalización de globos y elementos centrales.",
    img: "",
  },
  {
    titulo: 'Servicio "El Patrón" 🌸',
    descripcion:
      "Servicio integral de planificación y gestión de eventos (Full Service). Nos encargamos de todos los detalles, desde la logística hasta la coordinación de proveedores, para que tu evento sea de máxima calidad y totalmente libre de estrés.",
    img: "",
  },
  {
    titulo: "¿Buscas Algo Más? ✨",
    descripcion:
      "El servicio ideal para proyectos especiales y conceptos únicos. Si tu idea no encaja en las categorías estándar (eventos corporativos, activaciones o shows privados), contáctanos. Hacemos realidad cualquier visión creativa y personalizada.",
    img: "",
  },
];

export {
  pliSaludo,
  conejo,
  gata,
  oso,
  logAnimation,
  homeFondoShow,
  nosotrosFondoShow,
  faceImgOne,
  faceImgTwo,
  faceImgThree,
  faceImgNosotrosConjuntoOne,
  faceImgNosotrosConjuntoTwo,
  faceImgNosotrosConjuntoThree,
  faceImgNosotrosConjuntoFour,
  faceImgNosotrosConjuntoFive,
  galeriaShowOne,
  arrGaleriaShow, // Arreglo de imagenes para galeria Show
  arrGaleriaBaby, // Arreglo de imagenes para galeria Baby
  arrServiciosInfor, // Arreglo de objetos para la informacion de servicios
};
