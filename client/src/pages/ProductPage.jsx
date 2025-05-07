import React, { useEffect, useState } from "react";
import ProductCarousel from "../components/ProductCarousel";
import PackageSelector from "../components/PackageSelector";
import ExcellenceLogos from "../components/ExcellenceLogos";
import Footer from "../Sections/Footer";
import Header from "../Sections/Header";
import LongReviews from "../Sections/LongReviews";
import AccordionSection from "../Sections/AccordionSection";
import Excellence from "../Sections/Excellence";
import Modal from "../components/Modal";
import Button from "../components/Button";

const features = {
  en: [
    "✅ Designed for parents of children aged 2 to 12.",
    "✅ Practical tools you can apply from day one.",
    "✅ Step-by-step guidance from certified mentors.",
    "✅ Online content accessible anytime, anywhere.",
    "✅ Community of like-minded families for support.",
    "✅ Emotionally safe parenting—no punishments or yelling.",
    "✅ Proven method with hundreds of family success stories."
  ],
  es: [
    "✅ Diseñado para madres y padres con hijos de 2 a 12 años.",
    "✅ Herramientas prácticas para aplicar desde el primer día.",
    "✅ Acompañamiento paso a paso con mentores certificados.",
    "✅ Acceso online a los cursos y a la comunidad desde cualquier lugar, en cualquier momento.",
  ],
  de: [
    "✅ 10 Minuten vom Flughafen Málaga entfernt.",
    "✅ Keine Kaution, kein Aufwand – einfach buchen, ankommen und losfahren.",
    "✅ Von Stiefeln bis Helmen – erstklassige Ausrüstung verfügbar.",
    "✅ Top- & Seitenkoffer inklusive.",
    "✅ 24/7 Pannenhilfe.",
    "✅ Vollkaskoversicherung.",
    "✅ Kostenlose Schließfächer & Gepäckaufbewahrung.",
  ],
};

const features2 = {
  en: [
    {
      id: 1,
      imgPath:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Bike.png",
      text: "Over 1,500 satisfied riders",
    },
    {
      id: 2,
      imgPath:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Check.png",
      text: "Satisfaction Guarantee",
    },
    {
      id: 3,
      imgPath:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Map.png",
      text: "Masterfully crafted Guidebook",
    },
    {
      id: 4,
      imgPath:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/ThumbsUp.png",
      text: "Top-of-the-Line Triumph Bikes",
    },
  ],
  es: [
    {
      id: 1,
      imgPath:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Bike.png",
      text: "Over 1,500 satisfied parents",
    },
    {
      id: 2,
      imgPath:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Check.png",
      text: "Satisfaction Guarantee",
    },
    {
      id: 3,
      imgPath:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Map.png",
      text: "Masterfully crafted Guidebook",
    },
    {
      id: 4,
      imgPath:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/ThumbsUp.png",
      text: "Top-of-the-Line",
    },
  ],
  de: [
    {
      id: 1,
      imgPath:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Bike.png",
      text: "Mehr als 1.500 zufriedene Fahrer",
    },
    {
      id: 2,
      imgPath:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Check.png",
      text: "Zufriedenheitsgarantie",
    },
    {
      id: 3,
      imgPath:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Map.png",
      text: "Meisterhaft gestaltetes Handbuch",
    },
    {
      id: 4,
      imgPath:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/ThumbsUp.png",
      text: "Top-Modelle von Triumph-Motorrädern",
    },
  ],
};

const Images = [
  {
    id: 1,
    imgPath:
      "https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/growly-antes-despues-1.png",
  },
  {
    id: 2,
    imgPath:
      "https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/growly-antes-despues-2.png",
  },
  {
    id: 3,
    imgPath:
      "https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/growly-antes-despues-3.png",
  },
];

const translations = {
  en: {
    headDesc: "A transformative experience that will forever change the way you connect with your children. Choose a 6-month guided path to strengthen your family bond, through the proven Growly method—created by experts in positive discipline and emotional education.",
    boldPoint: " Step-by-Step Family Guide",
    bannerText: "Six powerful months to create harmony, understanding, and trust at home. With practical tools, expert mentoring, and a method that really works—for a limited-time only!",
    beforeAfter: "Before you know it...",
    before: "",
    after: "",
    reviewHeading: "Real families, real change – What our parents are saying",
    reviewSubTextL: "Based on 342 verified transformations"
  },
  es: {
    headDesc: "Una experiencia transformadora que cambiará para siempre la forma en la que educas y te relacionas con tus hijos. Recorre un camino de 6 meses guiado paso a paso, con el método Growly, diseñado por expertos en disciplina positiva y educación emocional.",
    boldPoint: " Guía Familiar Paso a Paso",
    bannerText: "Seis meses para transformar tu hogar con herramientas prácticas, acompañamiento experto y un método probado. Todo con un descuento por tiempo limitado.",
    beforeAfter: "Antes de que te des cuenta...",
    before: "",
    after: "",
    reviewHeading: "Familias reales, cambios reales – Lo que dicen los padres",
    reviewSubTextL: "Basado en 342 transformaciones verificadas"
  },
  de: {
    headDesc:
      "Eine transformative Erfahrung, die für immer deine Art, Andalusien zu entdecken, verändern wird. Wähle zwischen 3 oder 7 magischen Tagen auf der majestätischen Triumph Tiger, bereit, dich ins Unbekannte zu führen – begleitet von unserem Meister-Guide, entwickelt von einem Expertenteam mit über 10 Jahren Erfahrung, das dir jedes Geheimnis, jede Kurve und jeden verborgenen Schatz dieses Landes enthüllt.",
    boldPoint: " Master Guide Reisebuch",
    bannerText:
      "Sieben unvergessliche Tage mit einer Triumph Tiger, plus unser unglaubliches Handbuch, vollgepackt mit allen Details, um deine Reise nahtlos und unvergesslich zu machen – mit einem zeitlich begrenzten Rabatt!",
    beforeAfter: "Bevor du es merkst...",
    before: "Bevor",
    after: "Nach",
    reviewHeading:
      "Echte Menschen, echte Ergebnisse <br/> Was unsere Fahrer sagen",
    reviewSubTextL: "Basierend auf 342 Bewertungen",
  },
};

const ProductPage = ({ lang }) => {
  const [isModalOpen, setisModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      openModal();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const openModal = () => {
    setisModalOpen(true);
  };

  const closeModal = () => {
    setisModalOpen(false);
  };

  return (
    <div className="productPage  w-full min-h-screen  pt-12 lg:pt-16 "

      style={{
        backgroundColor: "#FFFFFF", // Fondo blanco
        padding: "20px", // Espaciado interno
        borderRadius: "8px", // Bordes redondeados
        textAlign: "center", // Centrar el texto
      }}>
      {/* Product Section */}

      {<Header />}

      <section className="mt-5 py-5 flex flex-col md:flex-row lg:flex-row justify-center gap-12 md:gap-8 lg:gap-32 ">
        {/* Carousel */}
        <div className="left flex-1 w-full h-[250px] md:h-auto px-4 md:px-6">
          <div className="carousel-container">
            {/* Main Image */}
            <div className="main-image">
              <img src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/main-carrusel.png" alt="Main"
                className="fade object-contain w-full h-full" />
            </div>
          </div>
        </div>

        {/* Title and Description */}
        <div className="right px-6 lg:px-0 flex-1 flex flex-col lg:flex-col gap-2 lg:gap-0 ">
          {/* Title and stars */}
          <div>
            {/* Pack Infalible */}
            <span className="block text-left font-poppins font-bold text-[28px] lg:text-[35px] leading-[100%] text-[#0C46F2]"
              style={{
                fontFamily: "Poppins",
              }}>
              Método Growly: Pack Infalible de Disciplina Positiva
            </span>

            <div className="flex items-center gap-1 mt-7">
              <span className="font-montserrat font-bold text-[28px] lg:text-[38px] leading-[100%] text-[#666666]"
                style={{
                  fontFamily: "Montserrat",
                }}>
                189€
              </span>
              <span className="font-montserrat font-normal text-[24px] lg:text-[30px] leading-[100%] text-[#84878A] line-through"
                style={{
                  fontFamily: "Montserrat",
                }}>
                500€
              </span>
              <div className="bg-[#7AFD9D] rounded-[30px] h-[50px] flex items-center justify-center px-6 shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
                <span className="font-montserrat font-normal text-[24px] lg:text-[30px] leading-[100%] text-[#0C46F2]"
                  style={{
                    fontFamily: "Montserrat",
                  }}>
                  Ahorra 311€
                </span>
              </div>
            </div>
          </div>

          {/* Description and points */}
          <div className="desc flex flex-col gap-3">
            <p className="text-left md:text-justify font-poppins font-normal text-base md:text-lg leading-7 text-black"
              style={{
                fontFamily: "Poppins",
              }}>
              El Método que está transformando familias en más de 60 Países — Sin Gritos, Sin Castigos y con Resultados Reales.
              <br></br><b>Más de 80 años de estudios en psicología adleriana y neurociencia avalan nuestro método.</b>
            </p>
            <p className="text-left font-poppins font-bold text-base md:text-lg leading-7 text-black"
              style={{
                fontFamily: "Poppins",
              }}>
              ¿QUÉ INCLUYE EL PACK?
            </p>
            <div className="text-left ml-0 lg:ml-6">
              <ul className="list-none space-y-2 leading-tight">
                <li>
                  <span className="font-poppins text-sm md:text-base text-black"
                    style={{
                      fontFamily: "Poppins",
                    }}>
                    ✅ <strong>Curso completo</strong> en video con herramientas prácticas paso a paso
                  </span>
                </li>
                <li>
                  <span className="font-poppins text-sm md:text-base text-black"
                    style={{
                      fontFamily: "Poppins",
                    }}>
                    ✅ Acceso a <strong>comunidad privada de padres y expertos</strong>
                  </span>
                </li>
                <li>
                  <span className="font-poppins text-sm md:text-base text-black"
                    style={{
                      fontFamily: "Poppins",
                    }}>
                    ✅ Pack de <strong>52 actividades de fin de semana</strong> para reforzar vínculos familiares
                  </span>
                </li>
                <li>
                  <span className="font-poppins text-sm md:text-base text-black"
                    style={{
                      fontFamily: "Poppins",
                    }}>
                    ✅ <strong>Talleres mensuales</strong> con sesiones de preguntas y respuestas
                  </span>
                </li>
                <li>
                  <span className="font-poppins text-sm md:text-base text-black"
                    style={{
                      fontFamily: "Poppins",
                    }}>
                    ✅ <strong>Plantillas y recursos extra</strong> que facilitan la implementación del método en casa
                  </span>
                </li>
                <li>
                  <span className="font-poppins text-sm md:text-base text-black"
                    style={{
                      fontFamily: "Poppins",
                    }}>
                    ✅ <strong>Acceso preferente a campamentos exclusivos</strong> para familias comprometidas
                  </span>
                </li>
              </ul>
            </div>
            <div className="text-left mt-4">
              <div className="flex items-center gap-2">
                <img
                  src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/ok_red.png"
                  alt="Ok icon"
                  className="w-6 h-6"
                />
                <span className="font-montserrat text-base md:text-lg font-extrabold text-black"
                  style={{
                    fontFamily: "Montserrat",
                  }}>
                  Resultados garantizados o se te devuelve el dinero
                </span>
              </div>
            </div>
          </div>
          <div className="package mt-2 lg:mt-2">
            <PackageSelector lang={lang} />
          </div>
        </div>
      </section>

      {/* Caos to Armony section*/}

      <section className="mt-5 py-5 flex flex-col md:flex-row lg:flex-row justify-center gap-12 md:gap-8 lg:gap-32  ">

        {/* Title and Description */}
        <div className="right px-6 lg:px-0 flex-1 flex flex-col lg:flex-col gap-2 lg:gap-0 ">
          {/* Title and stars */}
          <div className="">

            {/* Pack Infalible */}
            <h2 className="font-poppins text-4xl lg:text-[38px] font-semibold leading-tight text-[#0C46F2]"
              style={{
                fontFamily: "Poppins",
              }}
            >Del caos a la armonía <br></br>con solo 15 minutos al día </h2>

            <div
              className="features-container grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10"
            >
              {/* Curso completo */}
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/capitulos-34.png"
                  alt="Curso completo"
                  className="w-[284px] h-[169px] mx-auto"
                />
                <h3 className="font-poppins text-2xl lg:text-[30px] font-extrabold italic text-blue-600 mt-2">
                  Curso completo de <br />34 capítulos
                </h3>
                <p className="font-montserrat text-lg lg:text-[20px] font-normal text-blue-600 mt-1">
                  17 capítulos explicativos <br /> 17 capítulos prácticos
                </p>
              </div>

              {/* Guías descargables */}
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/guias.png"
                  alt="Guías descargables"
                  className="w-[284px] h-[169px] mx-auto"
                />
                <h3 className="font-poppins text-2xl lg:text-[30px] font-extrabold italic text-blue-600 mt-2">
                  Guías <br />descargables
                </h3>
                <p className="font-montserrat text-lg lg:text-[20px] font-normal text-blue-600 mt-1">
                  52 actividades para cada fin de semana del año <br /> Ejercicios prácticos para aplicar en familia
                </p>
              </div>

              {/* Acceso exclusivo a la Comunidad */}
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/acceso-exclusivo.png"
                  alt="Acceso exclusivo a la Comunidad"
                  className="w-[284px] h-[169px] mx-auto"
                />
                <h3 className="font-poppins text-2xl lg:text-[30px] font-extrabold italic text-blue-600 mt-2">
                  Acceso exclusivo a la <br />Comunidad
                </h3>
                <p className="font-montserrat text-lg lg:text-[20px] font-normal text-blue-600 mt-1">
                  Apoyo directo de nuestros formadores <br /> Resolución de dudas y acompañamiento continuo
                </p>
              </div>

              {/* Campamentos y Talleres */}
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/campamentos.png"
                  alt="Campamentos y Talleres"
                  className="w-[284px] h-[169px] mx-auto"
                />
                <h3 className="font-poppins text-2xl lg:text-[30px] font-extrabold italic text-blue-600 mt-2">
                  Campamentos y <br /> Talleres
                </h3>
                <p className="font-montserrat text-lg lg:text-[20px] font-normal text-blue-600 mt-1">
                  Talleres de reprogramación de creencias limitantes <br /> Acceso exclusivo a campamentos formativos
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* Why this method works*/}

      <section className="mt-5 py-5 flex flex-col md:flex-row lg:flex-row justify-center gap-12 md:gap-8 lg:gap-32 ">

        {/* Title and Description */}
        <div className="right px-6 lg:px-0 flex-1 flex flex-col gap-4">
          {/* Título principal */}
          <div>
            <span className="font-poppins text-center text-[28px] md:text-[38px] font-semibold leading-[100%] text-[#0C46F2]"
              style={{
                fontFamily: "Poppins",
              }}>
              ¿Por qué este método funciona?
            </span>
            <div className="mt-6">
              <span className="font-poppins text-center text-[20px] md:text-[30px] font-semibold leading-[100%] text-[#84878A]"
                style={{
                  fontFamily: "Poppins",
                }}>
                Herramientas prácticas, estrategias paso a paso y soporte exclusivo
              </span>
            </div>
          </div>

          {/* Bloques informativos */}
          <div className="why-method-works mt-16 text-center">
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              {/* Bloque 1 */}
              <div className="relative bg-[#0C46F2] rounded-[30px] p-5 w-[350px] text-white">
                <div className="absolute -top-6 -left-10 w-16 h-16 md:w-[75px] md:h-[75px] bg-[#7AFD9D] text-[#0C46F2] rounded-full flex items-center justify-center font-bold text-[20px] md:text-[30px]"
                  style={{
                    fontFamily: "Poppins",
                  }}>
                  1
                </div>
                <h3 className="font-poppins text-center text-[18px] md:text-[25px] font-bold"
                  style={{
                    fontFamily: "Poppins",
                  }}>
                  <br />Manejo de conflictos sin gritos ni castigos
                </h3>
              </div>

              {/* Bloque 2 */}
              <div className="relative bg-[#0C46F2] rounded-[30px] p-5 w-[350px] text-white">
                <div className="absolute -top-6 -left-10 w-16 h-16 md:w-[75px] md:h-[75px] bg-[#7AFD9D] text-[#0C46F2] rounded-full flex items-center justify-center font-bold text-[20px] md:text-[30px]"
                  style={{
                    fontFamily: "Poppins",
                  }}>
                  2
                </div>
                <h3 className="font-poppins text-center text-[18px] md:text-[25px] font-bold"
                  style={{
                    fontFamily: "Poppins",
                  }}>
                  <br />Enseñar valores sin imposiciones
                </h3>
              </div>

              {/* Bloque 3 */}
              <div className="relative bg-[#0C46F2] rounded-[30px] p-5 w-[350px] text-white">
                <div className="absolute -top-6 -left-10 w-16 h-16 md:w-[75px] md:h-[75px] bg-[#7AFD9D] text-[#0C46F2] rounded-full flex items-center justify-center font-bold text-[20px] md:text-[30px]"
                  style={{
                    fontFamily: "Poppins",
                  }}>
                  3
                </div>
                <h3 className="font-poppins text-center text-[18px] md:text-[25px] font-bold"
                  style={{
                    fontFamily: "Poppins",
                  }}>
                  <br />Crea un ambiente de respeto, escucha y colaboración
                </h3>
              </div>

              {/* Bloque 4 */}
              <div className="relative bg-[#0C46F2] rounded-[30px] p-5 w-[350px] text-white">
                <div className="absolute -top-6 -left-10 w-16 h-16 md:w-[75px] md:h-[75px] bg-[#7AFD9D] text-[#0C46F2] rounded-full flex items-center justify-center font-bold text-[20px] md:text-[30px]"
                  style={{
                    fontFamily: "Poppins",
                  }}>
                  4
                </div>
                <h3 className="font-poppins text-center text-[18px] md:text-[25px] font-bold"
                  style={{
                    fontFamily: "Poppins",
                  }}>
                  <br />Validado por educadores, psicólogos y miles de familias
                </h3>
              </div>
            </div>
          </div>
        </div>


      </section>


      <section className="mt-5 py-5 flex flex-col md:flex-row lg:flex-row justify-center gap-12 md:gap-8 lg:gap-32 ">
        <div className="testimonials-section w-full bg-[#0C46F2] text-white text-center rounded-lg py-2 px-5 md:py-16 md:px-10">
          {/* Título */}
          <h2 className="font-poppins text-4xl lg:text-[38px] font-semibold leading-tight text-white"
            style={{
              fontFamily: "Poppins",
            }}>
            💬 Lo que dicen otros padres <br />que ya vivieron la experiencia
          </h2>

          {/* Subtítulo */}
          <p className="font-poppins text-base md:text-lg font-normal mb-8"
            style={{
              fontFamily: "Poppins",
            }}>
            <br /><br />Ellos ya lo probaron, ahora te toca a ti
          </p>

          {/* Contenedor de testimonios */}
          <div className="flex justify-center flex-wrap gap-5 md:gap-8 mb-8">
            {/* Testimonio 1 */}
            <div className="bg-white text-black rounded-lg p-5 w-[250px] shadow-md">
              <video
                controls
                className="w-full max-w-xl rounded-lg shadow-lg"
                src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/Videos/testimonio1.mov"
                poster="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/Videos/testimonio1-poster.png"
              >
                Tu navegador no soporta la etiqueta de video.
              </video>
              <p className="font-poppins text-sm md:text-base font-normal">⭐⭐⭐⭐⭐</p>
              <p className="font-poppins text-sm md:text-base font-bold mt-2"
                style={{
                  fontFamily: "Poppins",
                }}>Ivonne</p>
            </div>
            {/* Testimonio 2 */}
            <div className="bg-white text-black rounded-lg p-5 w-[250px] shadow-md">
              <video
                controls
                className="w-full max-w-xl rounded-lg shadow-lg"
                src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/Videos/testimonio2.mov"
                poster="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/Videos/testimonio2-poster.png"
              >
                Tu navegador no soporta la etiqueta de video.
              </video>
              <p className="font-poppins text-sm md:text-base font-normal">⭐⭐⭐⭐⭐</p>
              <p className="font-poppins text-sm md:text-base font-bold mt-2"
                style={{
                  fontFamily: "Poppins",
                }}>Pedro</p>
            </div>
            {/* Testimonio 3 */}
            <div className="bg-white text-black rounded-lg p-5 w-[250px] shadow-md">
              <video
                controls
                className="w-full max-w-xl rounded-lg shadow-lg"
                src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/Videos/testimonio3.mp4"
                poster="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/Videos/testimonio3-poster.png"
              >
                Tu navegador no soporta la etiqueta de video.
              </video>
              <p className="font-poppins text-sm md:text-base font-normal">⭐⭐⭐⭐⭐</p>
              <p className="font-poppins text-sm md:text-base font-bold mt-2"
                style={{
                  fontFamily: "Poppins",
                }}>Juan</p>
            </div>
          </div>

        </div>

      </section>

      <section className="flex flex-col md:flex-row lg:flex-row justify-center gap-12 md:gap-8 lg:gap-32 ">
        <div
          className="control-section"
          style={{
            textAlign: "center",
            backgroundColor: "#FFFFFF", // Fondo blanco
          }}
        >
          <button
            className="p-3 rounded-lg text-[0.7rem] lg:text-base font-semibold tracking-wider text-white bg-[#0C46F2] hover:scale-105 transition-all ease-in-out duration-300 shadow-custom-shadow text-center"
            style={{
              borderRadius: "30px",
              padding: "1.5rem",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "15px",
              lineHeight: "100%",
              letterSpacing: "0%"
            }}>
            Quiero Mejorar la Crianza
          </button>
        </div>
      </section>


      {/* Avalado por */
        <section className="mt-5 py-5 flex flex-col md:flex-row lg:flex-row justify-center gap-12 md:gap-8 lg:gap-32 ">
          <div
            className="endorsed-section"
            style={{
              textAlign: "center",
              padding: "40px 20px", // Espaciado interno
              backgroundColor: "#FFFFFF", // Fondo blanco
            }}
          >
            {/* Título */}
            <h2 className="font-poppins text-4xl lg:text-[38px] font-semibold leading-tight text-[#0C46F2]"
              style={{
                fontFamily: "Poppins",
              }}
            >
              Avalado por:<br></br><br></br>
            </h2>

            {/* Contenedor de logos */}
            <div className="logo-slider overflow-hidden">
              <div
                className="logo-track flex flex-row justify-center items-center gap-[30px] animate-slide-mobile"
                style={{ whiteSpace: "nowrap" }}
              >
                {/* Logo 1 */}
                <img
                  src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/positive-discipline.png"
                  alt="Positive Discipline Association"
                  className="inline-block w-[142px] h-auto"
                />
                {/* Logo 2 */}
                <img
                  src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/education-provider.jpg"
                  alt="NBCC"
                  className="inline-block w-[142px] h-auto"
                />
                {/* Logo 3 */}
                <img
                  src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/american-sociacity.jpg"
                  alt="North American Society of Adlerian Psychology"
                  className="inline-block w-[142px] h-auto"
                />
              </div>
            </div>
            <br></br><br></br>
            <div className="logo-slider overflow-hidden">
              <div
                className="logo-track flex flex-row justify-center items-center gap-[30px] animate-slide-mobile"
                style={{ whiteSpace: "nowrap" }}
              >
                {/* Logo 1 */}
                <img
                  src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/asociation-individualy.png"
                  alt="IAIP"
                  className="inline-block w-[442px] h-auto"
                />
                {/* Logo 2 */}
                <img
                  src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/montesory.jpg"
                  alt="American Montessori Society"

                  className="inline-block w-[442px] h-auto"
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap", // Ajusta los logos en pantallas pequeñas
                gap: "20px", // Espaciado entre logos
              }}
            >
            </div>
          </div>
        </section>}

      {/* Banner */}

      <section className="mt-5 py-5 flex flex-col md:flex-row lg:flex-row justify-center gap-12 md:gap-8 lg:gap-32">

        <div className="experts-section text-center p-10 bg-white">
          {/* Título */}
          <h2 className="font-poppins text-4xl lg:text-[38px] font-semibold leading-tight text-[#0C46F2]"
            style={{
              fontFamily: "Poppins",
            }}>
            Con el aval de expertos en crianza y psicología<br /><br />
          </h2>

          {/* Contenedor de expertos */}
          <div className="overflow-x-auto overflow-y-hidden lg:overflow-visible">
            <div className="flex justify-center items-center gap-10 flex-nowrap lg:flex-wrap animate-slide-mobile ">

              {/* Experto 1 */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#7AFD9D] mx-auto"
                  style={{ fontFamily: "Poppins" }}>
                  <img
                    src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/adler.jpg"
                    alt="Alfred Adler"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-poppins text-[30px] font-normal leading-[100%] mt-2 text-black"
                  style={{ fontFamily: "Poppins" }}>
                  Alfred Adler
                </h3>
                <p className="font-poppins text-[20px] font-normal leading-[100%] text-black"
                  style={{ fontFamily: "Poppins" }}>
                  (Psicología Adleriana)
                </p>
              </div>

              {/* Experto 2 */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#7AFD9D] mx-auto">
                  <img
                    src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/dreikus.jpg"
                    alt="Rudolf Dreikurs"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-poppins text-[30px] font-normal leading-[100%] mt-2 text-black"
                  style={{ fontFamily: "Poppins" }}>
                  Rudolf Dreikurs
                </h3>
                <p className="font-poppins text-[20px] font-normal leading-[100%] text-black"
                  style={{ fontFamily: "Poppins" }}>
                  (Psicología Adleriana)
                </p>
              </div>

              {/* Experto 3 */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#7AFD9D] mx-auto">
                  <img
                    src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/nelsen.jpg"
                    alt="Jane Nelsen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-poppins text-[30px] font-normal leading-[100%] mt-2 text-black"
                  style={{ fontFamily: "Poppins" }}>
                  Jane Nelsen
                </h3>
                <p className="font-poppins text-[20px] font-normal leading-[100%] text-black"
                  style={{ fontFamily: "Poppins" }}>
                  (Neuropsiquiatra)
                </p>
              </div>

              {/* Experto 4 */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#7AFD9D] mx-auto">
                  <img
                    src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/maria.jpg"
                    alt="María Montessori"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-poppins text-[30px] font-normal leading-[100%] mt-2 text-black"
                  style={{ fontFamily: "Poppins" }}>
                  María Montessori
                </h3>
                <p className="font-poppins text-[20px] font-normal leading-[100%] text-black"
                  style={{ fontFamily: "Poppins" }}>
                  (Médica y Pedagoga)
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="mt-5 py-5 flex flex-col md:flex-row lg:flex-row justify-center gap-12 md:gap-8 lg:gap-32">
        <div className="overwhelmed-parents-section flex flex-col items-center text-center p-5 bg-white">
          {/* Contenedor principal: en móvil se apila (flex-col) y en lg se alínea en fila */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-5 max-w-7xl w-full">
            {/* Texto */}
            <div className="flex-1 text-left">
              <h2 className="font-poppins text-4xl lg:text-[38px] font-semibold leading-tight text-[#0C46F2]"
                style={{
                  fontFamily: "Poppins"
                }}
              >
                ¿Por qué tantos padres se sienten desbordados?
              </h2>
              <p className="font-poppins text-base lg:text-[25px] font-normal leading-relaxed text-black"
                style={{
                  fontFamily: "Poppins"
                }}>
                La improvisación en la crianza puede generar más conflictos que soluciones. <br></br><br></br>
                Vivimos en un mundo con valores materialistas, abuso de la tecnología, jornadas laborales interminables ...
                <br /><br />
                La paternidad no debería ser una tarea que improvisamos cada día.
              </p>
            </div>
            {/* Imágenes */}
            <div className="flex-1 flex flex-col gap-3 relative">
              <img
                src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/padres-top.jpg"
                alt="Padres desbordados"
                className="w-full max-w-md rounded-lg shadow-lg"
              />
              <img
                src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/padres-botton.jpg"
                alt="Familia en conflicto"
                className="w-3/4 max-w-sm rounded-lg shadow-lg relative -top-5 -right-10 lg:-top-5 lg:-right-10"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row lg:flex-row justify-center gap-12 md:gap-8 lg:gap-32 ">
        <div
          className="control-section"
          style={{
            textAlign: "center",
            backgroundColor: "#FFFFFF", // Fondo blanco
          }}
        >
          <button
            className="p-3 rounded-lg text-[0.7rem] lg:text-base font-semibold tracking-wider text-white bg-[#0C46F2] hover:scale-105 transition-all ease-in-out duration-300 shadow-custom-shadow text-center"
            style={{
              borderRadius: "30px",
              padding: "1.5rem",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "15px",
              lineHeight: "100%",
              letterSpacing: "0%"
            }}>
            Quiero Mejorar la Crianza
          </button>
        </div>
      </section>
      {/* Before you know it// */}


      {/* Reviews */
        <section className="mt-5 py-5 flex flex-col md:flex-row lg:flex-row justify-center gap-12 md:gap-8 lg:gap-32 ">
          <div
            className="control-section"
            style={{
              textAlign: "center",
              backgroundColor: "#FFFFFF", // Fondo blanco
            }}
          >
            {/* Título */}
            <h2 className="font-poppins text-2xl lg:text-[38px] font-semibold leading-tight text-[#0C46F2]"
              style={{
                fontFamily: "Poppins",
                marginBottom: "20px"
              }}
            >
              Lo han callado por años porque ... da el control <br />
              a las familias, no al sistema
            </h2>

            {/* Subtítulo */}


            {/* Bloque 1 */}
            <div className="flex flex-col items-center gap-5">
              {/* Bloque 1 */}
              <div className="bg-[#7AFD9D] rounded-[30px] px-5 py-2 w-full lg:w-[767px] h-[129px] relative flex items-center justify-center">
                <div className="font-poppins bg-[#0C46F2] text-white rounded-full w-12 h-12 lg:w-[82px] lg:h-[82px] flex items-center justify-center font-bold text-xl lg:text-[38px] leading-[120%] absolute -top-4 lg:-top-6 -left-6 lg:-left-11">
                  1
                </div>
                <p className="font-poppins text-[18px] lg:text-[25px] font-semibold text-[#0C46F2] m-0 text-center"
                  style={{
                    fontFamily: "Poppins"
                  }}>
                  La crianza no debería ser una improvisación diaria
                </p>
              </div>
              {/* Bloque 2 */}
              <div className="bg-[#7AFD9D] rounded-[30px] px-5 py-2 w-full lg:w-[767px] h-[129px] relative flex items-center justify-center">
                <div className="font-poppins bg-[#0C46F2] text-white rounded-full w-12 h-12 lg:w-[82px] lg:h-[82px] flex items-center justify-center font-bold text-xl lg:text-[38px] leading-[120%] absolute -top-4 lg:-top-6 -left-6 lg:-left-11">
                  2
                </div>
                <p className="font-poppins text-[18px] lg:text-[25px] font-semibold text-[#0C46F2] m-0 text-center"
                  style={{
                    fontFamily: "Poppins"
                  }}>
                  Educar con un método es posible y mucho más efectivo
                </p>
              </div>
              {/* Bloque 3 */}
              <div className="bg-[#7AFD9D] rounded-[30px] px-5 py-2 w-full lg:w-[767px] h-[129px] relative flex items-center justify-center">
                <div className="font-poppins bg-[#0C46F2] text-white rounded-full w-12 h-12 lg:w-[82px] lg:h-[82px] flex items-center justify-center font-bold text-xl lg:text-[38px] leading-[120%] absolute -top-4 lg:-top-6 -left-6 lg:-left-11">
                  3
                </div>
                <p className="font-poppins text-[18px] lg:text-[25px] font-semibold text-[#0C46F2] m-0 text-center"
                  style={{
                    fontFamily: "Poppins"
                  }}>
                  Educar sin herramientas es como construir sin planos
                </p>
              </div>
              {/* Bloque 4 */}
              <div className="bg-[#7AFD9D] rounded-[30px] px-5 py-2 w-full lg:w-[767px] h-[129px] relative flex items-center justify-center">
                <div className="font-poppins bg-[#0C46F2] text-white rounded-full w-12 h-12 lg:w-[82px] lg:h-[82px] flex items-center justify-center font-bold text-xl lg:text-[38px] leading-[120%] absolute -top-4 lg:-top-6 -left-6 lg:-left-11">
                  4
                </div>
                <p className="font-poppins text-[18px] lg:text-[25px] font-semibold text-[#0C46F2] m-0 text-center"
                  style={{
                    fontFamily: "Poppins"
                  }}>
                  Cuando dejas de improvisar, empiezas a conectar
                </p>
              </div>
              <button
                className="p-3 rounded-lg text-[0.7rem] lg:text-base font-semibold tracking-wider bg-[#0C46F2] text-white hover:scale-105 transition-all ease-in-out duration-300 shadow-custom-shadow text-center"
                style={{
                  borderRadius: "30px",
                  padding: "1.5rem",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  fontSize: "15px",
                  lineHeight: "100%",
                  letterSpacing: "0%"
                }}>
                Quiero Mejorar la Crianza
              </button>
            </div>
          </div>
        </section>}

      {/* Footer 
      */}
      {<Footer />}

      {/* <Modal isOpen={isModalOpen} onClose={closeModal} btnColor="white">
        <div className="p-6 md:p-0 lg:p-0 popUp lg:h-[350px] lg:w-[500px]  flex flex-col justify-center items-center text-center gap-6 lg:gap-6 text-white uppercase rounded-lg">
          <h1 className="text-Heavy text-2xl lg:text-3xl ">
            7 days too much?
            <br /> Make it yours!
          </h1>
          <p className="w-full md:w-3/5 lg:w-3/5  text-Medium text-sm lg:text-lg">
            Rent from 1 to 30 days and ride your own adventure, your way
          </p>

  
          <a
            className="btn w-max py-3 px-4 rounded-xl tracking-wider bg-triumph-red text-white hover:bg-triumph-red-hover hover:scale-105 e text-bold transition-all ease-in-out duration-300 shadow-3xl text-sm lg:text-base "
            id="CreateYOAdv"
            href="https://triumphadventure.es/en/motorcycle-rental/"
            target="_blank"
          >
            CREATE YOUR OWN ADVENTURE
          </a>
        </div>
      </Modal> */}
    </div>
  );
};

export default ProductPage;
