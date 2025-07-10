import React, { useEffect, useState, useContext } from "react";
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
import PricingPlans from "./PricingPlans";
import { GlobalContext } from '../components/GlobalContext';

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

const ThankYouPage = ({ lang }) => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const { email } = useContext(GlobalContext);

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
          </div>

          {/* Description and points */}
          <div className="desc flex flex-col gap-3">

            <p className="text-left font-poppins text-base md:text-lg leading-7 text-black"
              style={{
                fontFamily: "Poppins",
              }}>
              <br></br>¡Gracias por tu compra,
              Tu transformación en la crianza empieza hoy.
            </p>
            <p className="text-left font-poppins text-base md:text-lg leading-7 text-black"
              style={{
                fontFamily: "Poppins",
              }}>
              Hemos recibido tu pedido del Pack Infalible de Disciplina Positiva.
              Tu acceso estará activo en las próximas 24/48 horas. Te explicamos qué hacer ahora.
            </p>
            <div className="text-left ml-0 lg:ml-6">
              <ul className="list-none space-y-2 leading-tight">
                <li>
                  <span className="font-poppins text-sm md:text-base text-black"
                    style={{
                      fontFamily: "Poppins",
                    }}>
                    <strong>1️⃣</strong> Regístrate en Skool
                  </span>
                </li>
                <li>
                  <span className="font-poppins text-sm md:text-base text-black"
                    style={{
                      fontFamily: "Poppins",
                    }}>
                    <strong>2️⃣</strong> Únete a la comunidad Growly
                  </span>
                </li>
                <li>
                  <span className="font-poppins text-sm md:text-base text-black"
                    style={{
                      fontFamily: "Poppins",
                    }}>
                    3️⃣ Accede al curso completo
                  </span>
                </li>
              </ul>
            </div>
            <div className="text-left mt-4">
              <div className="flex items-center gap-2">

              </div>
            </div>
          </div>
          <div className="package mt-2 lg:mt-2">
            <div className="desc flex flex-col gap-3">
              <div className="package-selector flex flex-col gap-4">
                <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-40">
                  <button
                    className="p-3 rounded-lg text-[0.7rem] lg:text-base font-semibold tracking-wider bg-[#0c46F2] text-white hover:scale-105 transition-all ease-in-out duration-300 shadow-custom-shadow text-center"
                    style={{
                      borderRadius: "30px",
                      padding: "1.5rem",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      fontFamily: "Poppins",
                      fontWeight: "600",
                      fontSize: "15px",
                      lineHeight: "100%",
                      letterSpacing: "0%"
                    }}
                    onClick={() => window.location.href = 'https://www.skool.com/growly-disciplina-positiva-4246'}
                  >
                    EMPEZAR AHORA
                  </button>
                </div></div></div>
          </div>
        </div>
      </section >

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
            Recibirás un correo muy pronto
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
                En las próximas 24/48 horas recibirás un correo con el acceso completo.
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
                Revisa tu bandeja de entrada o carpeta de promociones.
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
                Si tienes cualquier duda, contáctanos a growly@growly.online
              </p>
            </div>

            <div className="desc flex flex-col gap-3">
              <div className="package-selector flex flex-col gap-4">
                <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-40">
                  <button
                    className="p-3 rounded-lg text-[0.7rem] lg:text-base font-semibold tracking-wider bg-[#0c46F2] text-white hover:scale-105 transition-all ease-in-out duration-300 shadow-custom-shadow text-center"
                    style={{
                      borderRadius: "30px",
                      padding: "1.5rem",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      fontFamily: "Poppins",
                      fontWeight: "600",
                      fontSize: "15px",
                      lineHeight: "100%",
                      letterSpacing: "0%"
                    }}
                    onClick={() => window.location.href = 'https://www.skool.com/growly-disciplina-positiva-4246'}
                  >
                    EMPEZAR AHORA
                  </button>
                </div></div></div>
          </div>
        </div>
      </section>



      {/* Caos to Armony section*/}

      < section className="mt-5 py-5 flex flex-col md:flex-row lg:flex-row justify-center gap-12 md:gap-8 lg:gap-32  " >

        {/* Title and Description */}
        < div className="right px-6 lg:px-0 flex-1 flex flex-col lg:flex-col gap-2 lg:gap-0 " >
          {/* Title and stars */}
          < div className="" >

            {/* Pack Infalible */}
            < h2 className="font-poppins text-4xl lg:text-[38px] font-semibold leading-tight text-[#0C46F2]"
              style={{
                fontFamily: "Poppins",
              }}
            > ¿Qué incluye el Pack? </h2 >

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

          </div >

        </div >
      </section >



      {/* Why this method works*/}

      < section className="mt-5 py-5 flex flex-col md:flex-row lg:flex-row justify-center gap-12 md:gap-8 lg:gap-32 " >

        {/* Title and Description */}
        < div className="right px-6 lg:px-0 flex-1 flex flex-col gap-4" >
          {/* Título principal */}
          < div >
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
          </div >

          {/* Bloques informativos */}
          < div className="why-method-works mt-16 text-center" >
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
          </div >
        </div >


      </section >



      <section className="flex flex-col md:flex-row lg:flex-row justify-center gap-12 md:gap-8 lg:gap-32 ">
        <div
          className="control-section"
          style={{
            textAlign: "center",
            backgroundColor: "#FFFFFF", // Fondo blanco
          }}
        >
          <div className="desc flex flex-col gap-3">
              <div className="package-selector flex flex-col gap-4">
                <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-40">
                  <button
                    className="p-3 rounded-lg text-[0.7rem] lg:text-base font-semibold tracking-wider bg-[#0c46F2] text-white hover:scale-105 transition-all ease-in-out duration-300 shadow-custom-shadow text-center"
                    style={{
                      borderRadius: "30px",
                      padding: "1.5rem",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      fontFamily: "Poppins",
                      fontWeight: "600",
                      fontSize: "15px",
                      lineHeight: "100%",
                      letterSpacing: "0%"
                    }}
                    onClick={() => window.location.href = 'https://www.skool.com/growly-disciplina-positiva-4246'}
                  >
                    EMPEZAR AHORA
                  </button>
                </div></div></div>
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
        </section>
      }

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

    

      <section className="flex flex-col md:flex-row lg:flex-row justify-center gap-12 md:gap-8 lg:gap-32 ">
        <div
          className="control-section"
          style={{
            textAlign: "center",
            backgroundColor: "#FFFFFF", // Fondo blanco
          }}
        >
          <div className="desc flex flex-col gap-3">
              <div className="package-selector flex flex-col gap-4">
                <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-40">
                  <button
                    className="p-3 rounded-lg text-[0.7rem] lg:text-base font-semibold tracking-wider bg-[#0c46F2] text-white hover:scale-105 transition-all ease-in-out duration-300 shadow-custom-shadow text-center"
                    style={{
                      borderRadius: "30px",
                      padding: "1.5rem",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      fontFamily: "Poppins",
                      fontWeight: "600",
                      fontSize: "15px",
                      lineHeight: "100%",
                      letterSpacing: "0%"
                    }}
                    onClick={() => window.location.href = 'https://www.skool.com/growly-disciplina-positiva-4246'}
                  >
                    EMPEZAR AHORA
                  </button>
                </div></div></div>
                <br></br>
        </div>
      </section>
      {/* Before you know it// */}


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
    </div >
  );
};

export default ThankYouPage;
