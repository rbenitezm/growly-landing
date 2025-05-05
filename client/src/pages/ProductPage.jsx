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
    // "10 Minuten vom Flughafen Málaga entfernt.",
    // "Keine Kaution, kein Aufwand – einfach buchen, ankommen und losfahren.",
    // "Von Stiefeln bis Helmen – erstklassige Ausrüstung verfügbar.",
    // "Top- & Seitenkoffer inklusive.",
    // "24/7 Pannenhilfe.",
    // "Vollkaskoversicherung.",
    // "Kostenlose Schließfächer & Gepäckaufbewahrung.",
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

      <section className="mt-14 lg:px-16 flex flex-col lg:flex-row justify-center gap-10 lg:gap-1 ">
        {/* Carousel */}
        <div className="left flex-1 ">
          <ProductCarousel />
        </div>

        {/* Title and Description */}
        <div className="right px-6 lg:px-0 flex-1 flex flex-col lg:flex-col gap-2 lg:gap-0 ">
          {/* Title and stars */}
          <div className="">

            {/* Pack Infalible */}
            <span className=""
              style={{
                fontFamily: "Poppins",
                fontSize: "50px",
                fontWeight: "700",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#0C46F2",
                textAlign: "left",
                display: "block"
              }}> Método Growly: El Pack Infalible de Disciplina Positiva </span>

            <div className="flex items-center gap-1" style={{ marginTop: "30px" }}>
              <span className=""
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "50px",
                  fontWeight: "700",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#666666"
                }}>189€</span>
              <span className=""
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "30px",
                  fontWeight: "400",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#84878A",
                  textDecoration: "line-through"
                }}>500€</span>
              <div
                className=""
                style={{
                  backgroundColor: "#7AFD9D", // Fondo verde
                  borderRadius: "30px", // Bordes redondeados
                  height: "50px", // Altura del div
                  display: "flex", // Activa Flexbox
                  alignItems: "center", // Centra verticalmente el contenido
                  justifyContent: "center", // Centra horizontalmente el contenido
                  padding: "1.5rem", // Relleno interno
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Sombra suave
                }}
              >
                <span
                  className=""
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: "30px",
                    fontWeight: "400",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#0C46F2",
                  }}
                >
                  Ahorra 311€
                </span>
              </div>
            </div>
          </div>

          {/* Description and points */}
          <div className="desc flex gap-3 flex-col">

            <p
              className="text-left md:text-justify"
              style={{
                fontFamily: "Poppins",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "30px",
                letterSpacing: "0%",
                color: "#000000",
              }}
            >
              {/* A transformative experience that will forever change the way you
              explore Andalusia. Choose between 3 or 7 magical days aboard the
              majestic Triumph Tiger, ready to take you into the unknown,
              together with our master guide, crafted by a team of experts with
              over 10 years of experience, revealing every secret, every curve,
              and every hidden treasure of this land. */}
              {/*translations[lang]?.headDesc || translations["en"].headDesc*/}
              <br></br>El Método que está transformando familias en más de 60 Países — Sin Gritos, Sin Castigos y con Resultados Reales.
              <br></br>Más de 80 años de estudios en psicología adleriana y neurociencia avalan nuestro método. <br></br>Reconocido por la Sociedad Americana Montessori y el prestigioso College NBCC.<br></br></p>
            <br></br>
            <p className="text-left" style={{
              fontFamily: "Poppins",
              fontSize: "20px",
              fontWeight: "700",
              lineHeight: "30px",
              letterSpacing: "0%",
              color: "#000000",
            }}>¿QUÉ INCLUYE EL PACK?</p>


            <div className="text-left ml-0 lg:ml-6">
              <ul className="Arial list-none  leading-tight" style={{ lineHeight: "30px" }}>
                <li className=" list-none ">

                  <span className=""
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "18px",
                      fontWeight: "400",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      color: "#000000",
                    }}>
                    ✅ <b>Curso completo</b> en video con herramientas prácticas paso a paso
                  </span>
                </li>
                <li className=" list-none ">
                  <span className=""
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "18px",
                      fontWeight: "400",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      color: "#000000",
                    }}>
                    ✅ Acceso a <b>comunidad privada de padres y expertos</b>
                  </span>
                </li>
                <li className=" list-none ">
                  <span className=""
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "18px",
                      fontWeight: "400",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      color: "#000000",
                    }}>
                    ✅ Set de <b>52 actividades descargables de fin de semana</b> para reforzar vínculos familiares
                  </span>
                </li>
                <li className=" list-none ">
                  <span className=""
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "18px",
                      fontWeight: "400",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      color: "#000000",
                    }}>
                    ✅ <b>Talleres mensuales</b> con sesiones de preguntas y respuestas
                  </span>
                </li>
                <li className=" list-none ">
                  <span className=""
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "18px",
                      fontWeight: "400",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      color: "#000000",
                    }}>
                    ✅ <b>Plantillas y recursos extra</b> que facilitan la implementación del Método en casa
                  </span>
                </li>
                <li className=" list-none ">
                  <span className=""
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "18px",
                      fontWeight: "400",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      color: "#000000",
                    }}>
                    ✅  <b>Acceso preferente a campamentos exclusivos</b> para familias comprometidas
                  </span>
                </li>
              </ul>
            </div>
            <div className="text-left">
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>

                {/* Pack Infalible */}
                <img src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/ok_red.png" />

                <span className="text-left"
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: "15px",
                    fontWeight: "800",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#000000",
                    textAlign: "left"
                  }}> Resultados garantizados o se te devuelve el dinero</span>
              </div>
            </div>
          </div>

          <div className="package mt-2 lg:mt-2">
            <PackageSelector lang={lang} />
          </div>
        </div>
      </section>

      {/* Caos to Armony section*/}

      <section className="mt-14 lg:px-16 flex flex-col lg:flex-row justify-center gap-10 lg:gap-1 ">

        {/* Title and Description */}
        <div className="right px-6 lg:px-0 flex-1 flex flex-col lg:flex-col gap-2 lg:gap-0 ">
          {/* Title and stars */}
          <div className="">

            {/* Pack Infalible */}
            <span className=""
              style={{
                fontFamily: "Poppins",
                fontSize: "60px",
                fontWeight: "600",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#0C46F2",
                textAlign: "center",
                display: "block"
              }}> Del caos a la armonía <br></br>con solo 15 minutos al día </span>

            <div
              className="features-container"
              style={{
                display: "grid", // Usamos grid para organizar las imágenes
                gridTemplateColumns: "repeat(2, 1fr)", // Dos columnas
                gap: "20px", // Espaciado entre los elementos
                marginTop: "40px", // Separación superior
              }}
            >
              {/* Curso completo */}
              <div style={{
                display: "flex", // Activa Flexbox
                flexDirection: "column", // Alinea los elementos en columna
                alignItems: "center", // Centra los elementos horizontalmente
                textAlign: "center", // Centra el texto
              }}>
                <img
                  src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/capitulos-34.png" // Reemplaza con la URL de la imagen
                  alt="Curso completo"
                  style={{ width: "370px", height: "220px" }}
                />
                <h3 style={{
                  fontFamily: "Poppins",
                  fontSize: "30px",
                  fontWeight: "800",
                  fontStyle: "italic",
                  lineHeight: "40px",
                  letterSpacing: "0%",
                  color: "#0C46F2",
                  verticalAlign: "middle"
                }}>
                  Curso completo de <br></br>34 capítulos
                </h3>
                <p style={{
                  fontFamily: "Montserrat",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "20px",
                  letterSpacing: "0%",
                  color: "#0C46F2",
                  verticalAlign: "middle"
                }}>
                  17 lecciones explicativas <br /> 17 actividades prácticas
                </p>
              </div>

              {/* Guías descargables */}
              <div style={{
                display: "flex", // Activa Flexbox
                flexDirection: "column", // Alinea los elementos en columna
                alignItems: "center", // Centra los elementos horizontalmente
                textAlign: "center", // Centra el texto
              }}>
                <img
                  src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/guias.png"
                  alt="Guías descargables"
                  style={{ width: "370px", height: "220px" }}
                />
                <h3 style={{
                  fontFamily: "Poppins",
                  fontSize: "30px",
                  fontWeight: "800",
                  fontStyle: "italic",
                  lineHeight: "40px",
                  letterSpacing: "0%",
                  color: "#0C46F2",
                  verticalAlign: "middle"
                }}>
                  Guías <br></br>descargables
                </h3>
                <p style={{
                   fontFamily: "Montserrat",
                   fontSize: "20px",
                   fontWeight: "400",
                   lineHeight: "20px",
                   letterSpacing: "0%",
                   color: "#0C46F2",
                   verticalAlign: "middle"
                }}>
                  52 actividades para cada fin de semana del año <br /> Ejercicios prácticos
                  para aplicar en familia
                </p>
              </div>

              {/* Acceso exclusivo a la Comunidad */}
              <div style={{
                display: "flex", // Activa Flexbox
                flexDirection: "column", // Alinea los elementos en columna
                alignItems: "center", // Centra los elementos horizontalmente
                textAlign: "center", // Centra el texto
              }}>
                <img
                  src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/acceso-exclusivo.png"
                  alt="Acceso exclusivo a la Comunidad"
                  style={{ width: "370px", height: "220px" }}
                />
                <h3 style={{
                  fontFamily: "Poppins",
                  fontSize: "30px",
                  fontWeight: "800",
                  fontStyle: "italic",
                  lineHeight: "40px",
                  letterSpacing: "0%",
                  color: "#0C46F2",
                  verticalAlign: "middle"
                }}>
                  Acceso exclusivo a la <br></br>Comunidad
                </h3>
                <p style={{
                   fontFamily: "Montserrat",
                   fontSize: "20px",
                   fontWeight: "400",
                   lineHeight: "20px",
                   letterSpacing: "0%",
                   color: "#0C46F2",
                   verticalAlign: "middle"
                }}>
                  Apoyo directo de nuestros formadores <br /> Resolución de dudas y
                  acompañamiento continuo
                </p>
              </div>

              {/* Campamentos y Talleres */}
              <div
                style={{
                  display: "flex", // Activa Flexbox
                  flexDirection: "column", // Alinea los elementos en columna
                  alignItems: "center", // Centra los elementos horizontalmente
                  textAlign: "center", // Centra el texto
                }}
              >
                <img
                  src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/campamentos.png"
                  alt="Campamentos y Talleres"
                  style={{ width: "370px", height: "220px" }}
                />
                <h3
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "30px",
                    fontWeight: "800",
                    fontStyle: "italic",
                    lineHeight: "40px",
                    letterSpacing: "0%",
                    color: "#0C46F2",
                    verticalAlign: "middle"
                  }}
                >
                  Campamentos y <br /> Talleres
                </h3>
                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: "20px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    letterSpacing: "0%",
                    color: "#0C46F2",
                    verticalAlign: "middle"
                  }}
                >
                  Talleres de reprogramación de creencias limitantes <br /> Acceso exclusivo
                  a campamentos formativos
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* Why this method works*/}

      <section className="mt-14 lg:px-16 flex flex-col lg:flex-row justify-center gap-10 lg:gap-1 " style={{ marginTop: "10%" }}>

        {/* Title and Description */}
        <div className="right px-6 lg:px-0 flex-1 flex flex-col lg:flex-col gap-2 lg:gap-0 ">
          <div className="">

            {/* Pack Infalible */}
            <span className=""
              style={{
                fontFamily: "Poppins",
                fontSize: "60px",
                fontWeight: "600",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#0C46F2",
                textAlign: "center"
              }}> ¿Por qué este método funciona? </span>

            <div className="" style={{ marginTop: "30px" }}>
              <span className=""
                style={{
                  fontFamily: "Poppins",
                  fontSize: "30px",
                  fontWeight: "600",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#84878A",
                  textAlign: "center"
                }}>Herramientas prácticas, estrategias paso a paso y soporte exclusivo</span>
            </div>
          </div>

          {/* Title and stars */}
          <div className="">

            <div
              className="why-method-works"
              style={{
                textAlign: "center",
                marginTop: "60px",
              }}
            >


              {/* Contenedor de los bloques */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "50px",
                  flexWrap: "wrap", // Permite que los bloques se ajusten en pantallas pequeñas
                }}
              >
                {/* Bloque 1 */}
                <div
                  style={{
                    backgroundColor: "#0C46F2",
                    borderRadius: "30px",
                    padding: "20px",
                    flex: "1",
                    width: "250px",
                    color: "#FFFFFF",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Poppins",
                      backgroundColor: "#7AFD9D", // 
                      color: "#0C46F2", // 
                      borderRadius: "50%", // Hace el círculo
                      width: "75px",
                      height: "75px",
                      display: "flex",
                      alignItems: "center", // Centra verticalmente el contenido
                      justifyContent: "center", // Centra horizontalmente el contenido
                      fontWeight: "700",
                      fontSize: "40px",
                      lineHeight: "120%",
                      position: "absolute", // Posiciona el círculo dentro del contenedor
                      top: "-25px", // Mueve el círculo hacia arriba
                      left: "-45px", // Mueve el círculo hacia la izquierda
                    }}
                  >
                    1
                  </div>
                  <h3
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "30px",
                      fontWeight: "700",
                      lineHeight: "120%",
                      letterSpacing: "0%",
                      color: "#FFFFFF",
                      textAlign: "center"
                    }}
                  >
                    <br></br>Manejo de conflictos sin gritos ni castigos
                  </h3>
                </div>

                {/* Bloque 2 */}
                <div
                  style={{
                    backgroundColor: "#0C46F2",
                    borderRadius: "30px",
                    padding: "20px",
                    flex: "1",
                    width: "250px",
                    color: "#FFFFFF",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Poppins",
                      backgroundColor: "#7AFD9D", // 
                      color: "#0C46F2", // 
                      borderRadius: "50%", // Hace el círculo
                      width: "75px",
                      height: "75px",
                      display: "flex",
                      alignItems: "center", // Centra verticalmente el contenido
                      justifyContent: "center", // Centra horizontalmente el contenido
                      fontWeight: "700",
                      fontSize: "40px",
                      lineHeight: "120%",
                      position: "absolute", // Posiciona el círculo dentro del contenedor
                      top: "-25px", // Mueve el círculo hacia arriba
                      left: "-45px", // Mueve el círculo hacia la izquierda
                    }}
                  >
                    2
                  </div>
                  <h3
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "30px",
                      fontWeight: "700",
                      lineHeight: "120%",
                      letterSpacing: "0%",
                      color: "#FFFFFF",
                      textAlign: "center"
                    }}
                  >
                    <br></br>Enseñar valores sin imposiciones
                  </h3>
                </div>

                {/* Bloque 3 */}
                <div
                  style={{
                    backgroundColor: "#0C46F2",
                    borderRadius: "30px",
                    padding: "20px",
                    flex: "1",
                    width: "250px",
                    color: "#FFFFFF",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Poppins",
                      backgroundColor: "#7AFD9D", // 
                      color: "#0C46F2", // 
                      borderRadius: "50%", // Hace el círculo
                      width: "75px",
                      height: "75px",
                      display: "flex",
                      alignItems: "center", // Centra verticalmente el contenido
                      justifyContent: "center", // Centra horizontalmente el contenido
                      fontWeight: "700",
                      fontSize: "40px",
                      lineHeight: "120%",
                      position: "absolute", // Posiciona el círculo dentro del contenedor
                      top: "-25px", // Mueve el círculo hacia arriba
                      left: "-45px", // Mueve el círculo hacia la izquierda
                    }}
                  >
                    3
                  </div>
                  <h3
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "30px",
                      fontWeight: "700",
                      lineHeight: "120%",
                      letterSpacing: "0%",
                      color: "#FFFFFF",
                      textAlign: "center"
                    }}
                  >
                    <br></br>Crear un ambiente de respeto, escucha y colaboración
                  </h3>
                </div>

                {/* Bloque 4 */}
                <div
                  style={{
                    backgroundColor: "#0C46F2",
                    borderRadius: "30px",
                    padding: "20px",
                    flex: "1",
                    width: "250px",
                    color: "#FFFFFF",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Poppins",
                      backgroundColor: "#7AFD9D", // 
                      color: "#0C46F2", // 
                      borderRadius: "50%", // Hace el círculo
                      width: "75px",
                      height: "75px",
                      display: "flex",
                      alignItems: "center", // Centra verticalmente el contenido
                      justifyContent: "center", // Centra horizontalmente el contenido
                      fontWeight: "700",
                      fontSize: "40px",
                      lineHeight: "120%",
                      position: "absolute", // Posiciona el círculo dentro del contenedor
                      top: "-25px", // Mueve el círculo hacia arriba
                      left: "-45px", // Mueve el círculo hacia la izquierda
                    }}
                  >
                    4
                  </div>
                  <h3
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "30px",
                      fontWeight: "700",
                      lineHeight: "120%",
                      letterSpacing: "0%",
                      color: "#FFFFFF",
                      textAlign: "center"
                    }}
                  >
                    <br></br>Validado por educadores, psicólogos y miles de familias
                  </h3>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      <section className="mt-14 lg:px-16 flex flex-col lg:flex-row justify-center gap-10 lg:gap-1 " style={{ marginTop: "10%" }}>
  <div
          className="testimonials-section  w-full"
          style={{
            backgroundColor: "#0C46F2", // Fondo azul
            color: "#FFFFFF", // Texto blanco
            textAlign: "center",
            padding: "5vh 5vw",
            borderRadius: "8px", // Bordes redondeados
          }}
        >
          {/* Título */}
          <h2
            style={{
              fontFamily: "Poppins",
              fontSize: "60px",
              fontWeight: "600",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#FFFFFF",
              textAlign: "center"
            }}
          >
            💬 Lo que dicen otros padres <br></br>que ya vivieron la experiencia
          </h2>

          {/* Subtítulo */}
          <p
            style={{
              fontFamily: "Poppins",
              fontSize: "18px",
              fontWeight: "400",
              marginBottom: "30px",
            }}
          >
            <br></br><br></br>Ellos ya lo probaron, ahora te toca a ti
          </p>

          {/* Contenedor de testimonios */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap", // Ajusta las tarjetas en pantallas pequeñas
              marginBottom: "30px",
            }}
          >
            {/* Testimonio 1 */}
            <div
              style={{
                backgroundColor: "#FFFFFF", // Fondo blanco
                color: "#000000", // Texto negro
                borderRadius: "12px",
                padding: "20px",
                width: "250px", // Ancho fijo
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Sombra
              }}
            >
              <p style={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400" }}>
                ⭐⭐⭐⭐⭐
              </p>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontWeight: "700",
                  marginTop: "10px",
                }}
              >
                Ivonne
              </p>
            </div>

            {/* Testimonio 2 */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                color: "#000000",
                borderRadius: "12px",
                padding: "20px",
                width: "250px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <p style={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400" }}>
                ⭐⭐⭐⭐⭐
              </p>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontWeight: "700",
                  marginTop: "10px",
                }}
              >
                Pedro
              </p>
            </div>

            {/* Testimonio 3 */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                color: "#000000",
                borderRadius: "12px",
                padding: "20px",
                width: "250px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <p style={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400" }}>
                ⭐⭐⭐⭐⭐
              </p>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontWeight: "700",
                  marginTop: "10px",
                }}
              >
                Juan
              </p>
            </div>
          </div>

          {/* Botón */}
          <button
            className=" p-3 rounded-lg text-[0.7rem] lg:text-base font-semibold tracking-wider bg-triumph-red text-white hover:bg-triumph-red-hover hover:scale-105 transition-all ease-in-out duration-300  shadow-custom-shadow"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "30px", // Bordes redondeados
              padding: "1.5rem", // Relleno interno
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",// Sombra suave
              color: "#0C46F2", // Texto azul
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "32px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "left"
            }}

          >
            Quiero Mejorar la Crianza
          </button>
        </div>
      </section>



      {/* Avalado por */
        <section className="mt-5 py-16 flex flex-col md:flex-row lg:flex-row justify-center gap-12 md:gap-8 lg:gap-32 ">
          <div
            className="endorsed-section"
            style={{
              textAlign: "center",
              padding: "40px 20px", // Espaciado interno
              backgroundColor: "#FFFFFF", // Fondo blanco
            }}
          >
            {/* Título */}
            <h2
              style={{
                fontFamily: "Poppins",
                fontSize: "60px",
                fontWeight: "600",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#0C46F2",
                textAlign: "center"
              }}
            >
              Avalado por:<br></br><br></br>
            </h2>

            {/* Contenedor de logos */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap", // Ajusta los logos en pantallas pequeñas
                gap: "100px", // Espaciado entre logos
              }}
            >
              {/* Logo 1 */}
              <img
                src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/positive-discipline.png"
                alt="Positive Discipline Association"
                style={{ width: "142px", height: "auto" }}
              />

              {/* Logo 2 */}
              <img
                src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/education-provider.jpg"
                alt="NBCC"
                style={{ width: "142px", height: "auto" }}
              />

              {/* Logo 3 */}
              <img
                src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/american-sociacity.jpg"
                alt="North American Society of Adlerian Psychology"
                style={{ width: "142px", height: "auto" }}
              />
            </div>
            <br></br><br></br>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap", // Ajusta los logos en pantallas pequeñas
                gap: "20px", // Espaciado entre logos
              }}
            >

              {/* Logo 4 */}
              <img
                src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/asociation-individualy.png"
                alt="IAIP"
                style={{ width: "442px", height: "auto" }}
              />

              {/* Logo 5 */}
              <img
                src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/montesory.jpg"
                alt="American Montessori Society"
                style={{ width: "442px", height: "auto" }}
              />
            </div>
          </div>
        </section>}

      {/* Banner */}

      <section className="mt-5 py-16 px-8 lg:px-56 flex flex-col justify-center items-center gap-5 text-white text-center ">

        <div
          className="experts-section"
          style={{
            textAlign: "center",
            padding: "40px 20px", // Espaciado interno
            backgroundColor: "#FFFFFF", // Fondo blanco
          }}
        >
          {/* Título */}
          <h2
            style={{
              fontFamily: "Poppins",
              fontSize: "60px",
              fontWeight: "600",
              lineHeight: "100px",
              letterSpacing: "0%",
              color: "#0C46F2",
              textAlign: "center"
            }}
          >
            Basado en prácticas probadas por psicólogos, educadores y familias<br></br><br></br>
          </h2>

          {/* Contenedor de expertos */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap", // Ajusta las tarjetas en pantallas pequeñas
              gap: "40px", // Espaciado entre tarjetas
            }}
          >
            {/* Experto 1 */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%", // Hace la imagen circular
                  overflow: "hidden",
                  border: "4px solid #7AFD9D", // Borde verde
                  margin: "0 auto", // Centra la imagen
                }}
              >
                <img
                  src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/adler.jpg"
                  alt="Alfred Adler"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <h3
                style={{
                  fontFamily: "Poppins",
                  fontSize: "30px",
                  fontWeight: "400",
                  lineHeight: "100%",
                  marginTop: "10px",
                  color: "#000000"
                }}
              >
                Alfred Adler
              </h3>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "100%",
                  color: "#000000",
                }}
              >
                (Psicología Adleriana)
              </p>
            </div>

            {/* Experto 2 */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "4px solid #7AFD9D",
                  margin: "0 auto",
                }}
              >
                <img
                  src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/dreikus.jpg"
                  alt="Rudolf Dreikurs"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <h3
                style={{
                  fontFamily: "Poppins",
                  fontSize: "30px",
                  fontWeight: "400",
                  lineHeight: "100%",
                  marginTop: "10px",
                  color: "#000000"
                }}
              >
                Rudolf Dreikurs
              </h3>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "100%",
                  color: "#000000",
                }}
              >
                (Psicología Adleriana)
              </p>
            </div>

            {/* Experto 3 */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "4px solid #7AFD9D",
                  margin: "0 auto",
                }}
              >
                <img
                  src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/nelsen.jpg"
                  alt="Jane Nelsen"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <h3
                style={{
                  fontFamily: "Poppins",
                  fontSize: "30px",
                  fontWeight: "400",
                  lineHeight: "100%",
                  marginTop: "10px",
                  color: "#000000"
                }}
              >
                Jane Nelsen
              </h3>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "100%",
                  color: "#000000",
                }}
              >
                (Neuropsiquiatra)
              </p>
            </div>

            {/* Experto 4 */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "4px solid #7AFD9D",
                  margin: "0 auto",
                }}
              >
                <img
                  src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/maria.jpg"
                  alt="María Montessori"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <h3
                style={{
                  fontFamily: "Poppins",
                  fontSize: "30px",
                  fontWeight: "400",
                  lineHeight: "100%",
                  marginTop: "10px",
                  color: "#000000"
                }}
              >
                María Montessori
              </h3>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "100%",
                  color: "#000000",
                }}
              >
                (Médica y Pedagoga)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before you know it// */}

      <section className="mt-5 py-16 px-8 lg:px-32 flex flex-col justify-center items-center gap-5 text-black ">
        <div
          className="overwhelmed-parents-section"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "40px 20px",
            backgroundColor: "#FFFFFF", // Fondo blanco
          }}
        >
          {/* Contenedor principal */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
              maxWidth: "1200px",
              width: "100%",
            }}
          >
            {/* Texto */}
            <div style={{ flex: "1", textAlign: "left" }}>
              <h2
                style={{
                  fontFamily: "Poppins",
                  fontSize: "60px",
                  fontWeight: "600",
                  lineHeight: "120%",
                  color: "#0C46F2"
                }}
              >
                ¿Por qué tantos padres se sienten desbordados?
              </h2>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: "25px",
                  fontWeight: "400",
                  lineHeight: "120%",
                  color: "#000000",
                }}
              >
                La improvisación en la crianza puede generar más conflictos que
                soluciones. Vivimos en un mundo con valores materialistas, abuso de la
                tecnología, jornadas laborales interminables y la creencia de que
                equivocarse es fracasar.
                <br />
                <br />
                La realidad es que ser padre es el único trabajo que aprendemos sobre la
                marcha...
              </p>
              <br></br><br></br>
            </div>

            {/* Imágenes */}
            <div
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                position: "relative", // Habilita el posicionamiento relativo
              }}
            >
              <img
                src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/padres-top.jpg"
                alt="Padres desbordados"
                style={{
                  width: "535px",
                  height: "314px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Sombra
                }}
              />
              <img
                src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/padres-botton.jpg"
                alt="Familia en conflicto"
                style={{
                  width: "275px",
                  height: "233px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Sombra
                  position: "relative", // Posicionamiento relativo
                  top: "-30px", // Mueve la imagen un 10% hacia arriba
                  right: "-100px"
                }}
              />
            </div>
          </div>

          {/* Botón */}
          <button
            className=" p-3 rounded-lg text-[0.7rem] lg:text-base font-semibold tracking-wider bg-triumph-red text-white hover:bg-triumph-red-hover hover:scale-105 transition-all ease-in-out duration-300  shadow-custom-shadow"
            style={{
              backgroundColor: "#0c46F2", // Fondo gris claro
              borderRadius: "30px", // Bordes redondeados
              padding: "1.5rem", // Relleno interno
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",// Sombra suave
              color: "#FFFFFF",
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "32px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "left"
            }}

          >
            Quiero Mejorar la Crianza
          </button>
        </div>
      </section>

      {/* Reviews */
        <section className="mt-14 lg:px-16 flex flex-col lg:flex-row justify-center gap-10 lg:gap-1 ">
          <div
            className="control-section"
            style={{
              textAlign: "center",
              padding: "40px 20px",
              backgroundColor: "#FFFFFF", // Fondo blanco
            }}
          >
            {/* Título */}
            <h2
              style={{
                fontFamily: "Poppins",
                fontSize: "60px",
                fontWeight: "600",
                lineHeight: "100%",
                color: "#0C46F2", // Azul
                marginBottom: "20px",
              }}
            >
              Lo han silenciado durante años porque... <br />
              pone el control de la crianza en tus manos
            </h2>

            {/* Subtítulo */}
            <p
              style={{
                fontFamily: "Poppins",
                fontSize: "24px",
                fontWeight: "400",
                lineHeight: "150%",
                color: "#000000", // Negro
                marginBottom: "50px",
              }}
            >
              El Método que está transformando familias en más de 60 Países <br></br>— Sin Gritos,
              Sin Castigos y con Resultados Reales. <br></br>Más de 80 años de estudios en
              psicología adleriana y neurociencia avalan nuestro método. <br />
              <b>
                Reconocido por la Sociedad Americana Montessori y el prestigioso College
                NBCC.
              </b>
            </p>

            {/* Bloque 1 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
              }}
            >

              <div
                style={{
                  backgroundColor: "#7AFD9D", // Fondo verde
                  borderRadius: "30px", // Bordes redondeados
                  padding: "10px 20px", // Espaciado interno

                  width: "510px",
                  height: "89px",
                  position: "relative", // Habilita el posicionamiento relativo para el contenedor,
                  display: "flex", // Activa Flexbox
                  alignItems: "center", // Centra verticalmente el contenido
                  justifyContent: "center", // Centra horizontalmente el contenido
                }}
              >
                <div
                  style={{
                    fontFamily: "Poppins",
                    backgroundColor: "#0C46F2", // Azul
                    color: "#FFFFFF", // Blanco
                    borderRadius: "50%", // Hace el círculo
                    width: "82px",
                    height: "82px",
                    display: "flex",
                    alignItems: "center", // Centra verticalmente el contenido
                    justifyContent: "center", // Centra horizontalmente el contenido
                    fontWeight: "700",
                    fontSize: "60px",
                    lineHeight: "120%",
                    position: "absolute", // Posiciona el círculo dentro del contenedor
                    top: "-25px", // Mueve el círculo hacia arriba
                    left: "-45px", // Mueve el círculo hacia la izquierda
                  }}
                >
                  1
                </div>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "#0C46F2", // Azul
                    lineHeight: "100%",
                    margin: 0,
                    textAlign: "center", // Alinea el texto al centro
                  }}
                >
                  Enseñar valores sin imposiciones
                </p>
              </div>



              {/* Bloque 2 */}
              <div
                style={{
                  backgroundColor: "#7AFD9D", // Fondo verde
                  borderRadius: "30px", // Bordes redondeados
                  padding: "10px 20px", // Espaciado interno

                  width: "645px",
                  height: "89px",
                  position: "relative", // Habilita el posicionamiento relativo para el contenedor,
                  display: "flex", // Activa Flexbox
                  alignItems: "center", // Centra verticalmente el contenido
                  justifyContent: "center", // Centra horizontalmente el contenido
                }}
              >
                <div
                  style={{
                    fontFamily: "Poppins",
                    backgroundColor: "#0C46F2", // Azul
                    color: "#FFFFFF", // Blanco
                    borderRadius: "50%", // Hace el círculo
                    width: "82px",
                    height: "82px",
                    display: "flex",
                    alignItems: "center", // Centra verticalmente el contenido
                    justifyContent: "center", // Centra horizontalmente el contenido
                    fontWeight: "700",
                    fontSize: "60px",
                    lineHeight: "120%",
                    position: "absolute", // Posiciona el círculo dentro del contenedor
                    top: "-25px", // Mueve el círculo hacia arriba
                    left: "-45px", // Mueve el círculo hacia la izquierda
                  }}
                >
                  2
                </div>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "#0C46F2", // Azul
                    lineHeight: "100%",
                    margin: 0,

                    textAlign: "center", // Alinea el texto al centro
                  }}
                >
                  Manejo de conflictos sin gritos ni castigos
                </p>
              </div>

              {/* Bloque 3 */}
              <div
                style={{
                  backgroundColor: "#7AFD9D", // Fondo verde
                  borderRadius: "30px", // Bordes redondeados
                  padding: "10px 20px", // Espaciado interno

                  width: "767px",
                  height: "89px",
                  position: "relative", // Habilita el posicionamiento relativo para el contenedor,
                  display: "flex", // Activa Flexbox
                  alignItems: "center", // Centra verticalmente el contenido
                  justifyContent: "center", // Centra horizontalmente el contenido
                }}
              >
                <div
                  style={{
                    fontFamily: "Poppins",
                    backgroundColor: "#0C46F2", // Azul
                    color: "#FFFFFF", // Blanco
                    borderRadius: "50%", // Hace el círculo
                    width: "82px",
                    height: "82px",
                    display: "flex",
                    alignItems: "center", // Centra verticalmente el contenido
                    justifyContent: "center", // Centra horizontalmente el contenido
                    fontWeight: "700",
                    fontSize: "60px",
                    lineHeight: "120%",
                    position: "absolute", // Posiciona el círculo dentro del contenedor
                    top: "-25px", // Mueve el círculo hacia arriba
                    left: "-45px", // Mueve el círculo hacia la izquierda
                  }}
                >
                  3
                </div>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "#0C46F2", // Azul
                    lineHeight: "100%",
                    margin: 0,

                    textAlign: "center", // Alinea el texto al centro
                  }}
                >
                  Crear un ambiente de respeto, escucha y colaboración
                </p>
              </div>

              {/* Bloque 4 */}
              <div
                style={{
                  backgroundColor: "#7AFD9D", // Fondo verde
                  borderRadius: "30px", // Bordes redondeados
                  padding: "10px 20px", // Espaciado interno

                  width: "767px",
                  height: "89px",
                  position: "relative", // Habilita el posicionamiento relativo para el contenedor,
                  display: "flex", // Activa Flexbox
                  alignItems: "center", // Centra verticalmente el contenido
                  justifyContent: "center", // Centra horizontalmente el contenido
                }}
              >
                <div
                  style={{
                    fontFamily: "Poppins",
                    backgroundColor: "#0C46F2", // Azul
                    color: "#FFFFFF", // Blanco
                    borderRadius: "50%", // Hace el círculo
                    width: "82px",
                    height: "82px",
                    display: "flex",
                    alignItems: "center", // Centra verticalmente el contenido
                    justifyContent: "center", // Centra horizontalmente el contenido
                    fontWeight: "700",
                    fontSize: "60px",
                    lineHeight: "120%",
                    position: "absolute", // Posiciona el círculo dentro del contenedor
                    top: "-25px", // Mueve el círculo hacia arriba
                    left: "-45px", // Mueve el círculo hacia la izquierda
                  }}
                >
                  4
                </div>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "#0C46F2", // Azul
                    lineHeight: "100%",
                    margin: 0,

                    textAlign: "center", // Alinea el texto al centro
                  }}
                >
                  Validado por educadores, psicólogos y miles de familias
                </p>
              </div>
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
