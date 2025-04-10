import React, { useEffect, useState } from "react";
import ProductCarousel from "../components/ProductCarousel";
import PackageSelector from "../components/PackageSelector";
import ExcellenceLogos from "../components/ExcellenceLogos";
import Footer from "../Sections/Footer";
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
    <div className="productPage  w-full min-h-screen  pt-12 lg:pt-16 ">
      {/* Product Section */}

      <section className="mt-14 lg:px-16 flex flex-col lg:flex-row justify-center gap-10 lg:gap-1 ">
        {/* Carousel */}
        <div className="left flex-1 ">
          <ProductCarousel />
        </div>

        {/* Title and Description */}
        <div className="right px-6 lg:px-0 flex-1 flex flex-col lg:flex-col gap-2 lg:gap-0 ">
          {/* Title and stars */}
          <div className="">
            <h2 className="text-3xl lg:text-5xl text-ExtraBold tracking-wide lg:tracking-normal">
              {/* Pack Infalible */}
              Growly - Pack Infalible de Disciplina Positiva de Natacha Fouss
            </h2>
            <div className="flex items-center gap-1">
              <img
                src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/rating-stars.webp"
                alt=""
                className="h-10"
              />

              <span className="font-semibold">342+ reviews</span>
            </div>
          </div>
          <div className="">
            <h2 className="text-1xl lg:text-2xl text-ExtraBold tracking-wide lg:tracking-normal">
              {/* Pack Infalible */}
              Deja de improvisar. Comienza a criar con un método claro.
            </h2>
          </div>
          {/* Description and points */}
          <div className="desc flex gap-3 flex-col">
          
            <p
              className="Arial md:leading-6 lg:leading-5 lg:text-lg md:text-xl lg:text-sm text-left md:text-justify"
            >
              {/* A transformative experience that will forever change the way you
              explore Andalusia. Choose between 3 or 7 magical days aboard the
              majestic Triumph Tiger, ready to take you into the unknown,
              together with our master guide, crafted by a team of experts with
              over 10 years of experience, revealing every secret, every curve,
              and every hidden treasure of this land. */}
              {/*translations[lang]?.headDesc || translations["en"].headDesc*/}
              Deja atrás la <b>improvisación</b> y las <b>dudas constantes</b> de la crianza.<br />
Sabemos que ser padre o madre primerizo no es fácil: te enfrentas a situaciones para las que nadie te preparó, y es normal sentirse perdido. Las preguntas se acumulan: "¿Lo estaré haciendo bien?", "¿Debería ser más firme o más flexible?"<br />
Con el método Growly recorrerás un camino de 6 meses, guiado paso a paso por expertos en disciplina positiva y educación emocional. Poco a poco, las dudas irán desapareciendo, y ganarás la confianza y las herramientas que necesitas para educar con claridad y conectar de verdad con tus hijos.<br />
            </p>

            <p><b>Plazas limitadas.</b> Cuanto antes empieces, antes verás los resultados en casa.</p>

            
            {/* ml-6 lg:ml-10 */}
            <div className="ml-0 lg:ml-6">
              <li className=" list-none text-[14px] md:text-[18px] lg:text-[14px] text-Bold">
                ✅
                <span className="text-[16px] md:text-[18px] lg:text-[16px] text-Bold">
                  {translations[lang]?.boldPoint ||
                    translations["en"].boldPoint}
                </span>
              </li>
              <ul className="Arial list-none  leading-tight">
                {features[lang].map((feature) => (
                  <li
                    key={feature.id - 1}
                    className="text-[14px] md:text-[18px] lg:text-[14px] font-medium"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="package mt-2 lg:mt-2">
            <PackageSelector lang={lang} />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <AccordionSection lang={lang} />

      {/* Awards Logos */}
      {/* <section className="py-8 lg:py-16 flex  justify-center gap-2 ">
        <ExcellenceLogos />
      </section> */}


      {/* Features 2 */}
      <section className="mt-5 py-16 flex flex-col md:flex-row lg:flex-row justify-center gap-12 md:gap-8 lg:gap-32 ">
        {features2[lang].map((feat) => (
          <div className=" flex flex-col text-center items-center gap-4">
            <div className="img">
              <img src={feat.imgPath} alt="" className="h-10" />
            </div>
            <span className="text-Medium text-base md:text-xs lg:text-base">
              {feat.text}
            </span>
          </div>
        ))}
      </section>

      {/* Banner */}

      <section className="mt-5 py-16 px-8 lg:px-56 flex flex-col justify-center items-center gap-5 bg-triumph-black text-white text-center ">
        <h2 className="text-Heavy text-2xl lg:text-3xl">
          6 Meses Pack Infalible
        </h2>
        <span className="text-Medium text-lg lg:text-xl ">
          {/* Seven unforgettable days with a Triumph Tiger, plus our incredible
          guidebook packed with every detail to make your journey seamless and
          unforgettable, with a Limited-Time Discount!{" "} */}
          {translations[lang]?.bannerText || translations["en"].bannerText}
        </span>
      </section>

      {/* Before you know it// */}

      <section className="mt-5 py-16 px-8 lg:px-32 flex flex-col justify-center items-center gap-5 text-black ">
        <h2 className="text-Heavy text-2xl lg:text-3xl">
          {/* Before you know it... */}
          {translations[lang]?.beforeAfter || translations["en"].beforeAfter}
        </h2>

        <div className="mt-5 w-full flex flex-col md:flex-row lg:flex-row justify-center gap-0 lg:gap-32 ">
          {Images.map((img) => (
            <div className="p-5 md:p-5 lg:p-0 " key={img.id}>
              <div className="flex">
                <span className="flex-1 text-xl text-Bold text-triumph-red text-center">
                  {/* Before */}
                  {translations[lang]?.before || translations["en"].before}
                </span>
                <span className="flex-1 text-xl text-Bold text-triumph-red text-center">
                  {translations[lang]?.after || translations["en"].after}

                  {/* After */}
                </span>
              </div>
              <img src={img.imgPath} alt="" className=" lg:w-96" />
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="lg:mt-5 py-10 lg:py-16 lg:px-56 flex flex-col justify-center items-center  gap-5 ">
        <div className=" w-max">
          <h1
            className="text-2xl lg:text-6xl text-Heavy text-triumph-red text-center"
            dangerouslySetInnerHTML={{
              __html:
                translations[lang]?.reviewHeading ||
                translations["en"].reviewSubTextL,
            }}
          >
            {/* {translations[lang]?.reviewHeading ||
              translations["en"].reviewHeading} */}
          </h1>
          <div className=" flex items-center justify-center gap-2 lg:gap-6 mt-5">
            <div className="stars flex gap-1 lg:gap-2">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/12f1d19c3c42cbfaea95ce0f0ea988b57f4b8672/images/web-svg-icons/star.svg"
                  alt="star"
                  className="h-5 lg:h-8"
                />
              ))}
            </div>
            <p className="text-medium text-base lg:text-3xl">
              {/* Based on 342 reviews */}
              {translations[lang]?.reviewSubTextL ||
                translations["en"].reviewSubTextL}
            </p>
          </div>
        </div>
        <div className="">
          <LongReviews lang={lang} />
        </div>
      </section>

      {/* Footer */}
      <Footer />

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
