import React from "react";

const Facilities = {
  en: [
    {
      id: 1,
      title: "The perfect starting point for conscious parenting",
      Baseimage:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Features_1.webp",
      overlay: "./src/assets/images/web-svg-icons/1.svg",
    },
    {
      id: 2,
      title: "Practical tools and real-life strategies",
      Baseimage:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Features_2.webp",
      overlay: "./src/assets/images/web-svg-icons/2.svg",
    },
    {
      id: 3,
      title: "Expert mentors in positive discipline",
      Baseimage:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Features_3.webp",
      overlay: "./src/assets/images/web-svg-icons/3.svg",
    },
    {
      id: 4,
      title: "Easy and accessible learning process",
      Baseimage:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Features_4.webp",
      overlay: "./src/assets/images/web-svg-icons/4.svg",
    },
    {
      id: 5,
      title: "Ongoing support from our Growly community",
      Baseimage:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Features_5.webp",
      overlay: "./src/assets/images/web-svg-icons/5.svg",
    },
  ],
  
  es: [
    {
      id: 1,
      title: "El punto de partida perfecto para una crianza consciente",
      Baseimage:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Features_1.webp",
      overlay: "./src/assets/images/web-svg-icons/1.svg",
    },
    {
      id: 2,
      title: "Herramientas prácticas y estrategias reales",
      Baseimage:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Features_2.webp",
      overlay: "./src/assets/images/web-svg-icons/2.svg",
    },
    {
      id: 3,
      title: "Mentores expertos en disciplina positiva",
      Baseimage:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Features_3.webp",
      overlay: "./src/assets/images/web-svg-icons/3.svg",
    },
    {
      id: 4,
      title: "Proceso de aprendizaje fácil y accesible",
      Baseimage:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Features_4.webp",
      overlay: "./src/assets/images/web-svg-icons/4.svg",
    },
    {
      id: 5,
      title: "Acompañamiento continuo de la comunidad Growly",
      Baseimage:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Features_5.webp",
      overlay: "./src/assets/images/web-svg-icons/5.svg",
    },
  ],
  de: [
    {
      id: 1,
      title: "Der perfekte Ort für den Start",
      Baseimage:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Features_1.webp",
      overlay: "./src/assets/images/web-svg-icons/1.svg",
    },
    {
      id: 2,
      title: "Hochmoderne Einrichtung",
      Baseimage:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Features_2.webp",
      overlay: "./src/assets/images/web-svg-icons/2.svg",
    },
    {
      id: 3,
      title: "Experten, Triumph-zertifizierte lokale Guides",
      Baseimage:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Features_3.webp",
      overlay: "./src/assets/images/web-svg-icons/3.svg",
    },
    {
      id: 4,
      title: "Nahtloses Buchungserlebnis",
      Baseimage:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Features_4.webp",
      overlay: "./src/assets/images/web-svg-icons/4.svg",
    },
    {
      id: 5,
      title: "24/7 Kundenservice",
      Baseimage:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Features_5.webp",
      overlay: "./src/assets/images/web-svg-icons/5.svg",
    },
  ],
};

const translations = {
  en: {
    text: "The best parenting method for real families"
  },
  es: {
    text: "El mejor método de crianza para familias reales"
  },
  de: {
    text: "Bestes Zentrum für Motorradtourismus in Europa",
  },
};

const FeaturesMaster = ({ lang }) => {
  return (
    <section className="features w-full h-full flex py-12 lg:py-16 lg:justify-center items-center flex-col gap-2 lg:gap-0 ">
      <div className="">
        <img
          src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/award.webp"
          alt=""
          className="h-40 lg:h-56 "
        />
      </div>
      <div className="w-full lg:w-1/3 text-center">
        <h1 className="text-Light text-3xl lg:text-4xl uppercase">
          {/* Best Motorcycle Tourism Centre in Europe */}
          {translations[lang]?.text || translations["en"].text}
        </h1>
      </div>

      <div className="flex gap-16 lg:gap-20 flex-col lg:flex-row  mt-16 lg:mt-20">
        {Facilities[lang].map((facility) => (
          <div className="relative h-38  lg:w-40 flex flex-col items-center text-center gap-3">
            <img
              src={facility.Baseimage}
              alt=""
              className="h-36 w-max lg:h-42 lg:w-max"
            />
            <span className="text-base lg:text-base text-Medium">
              {facility.title}
            </span>
            <h1 className="absolute overlay-text text-Heavy text-9xl text-stroke  text-center">
              {facility.id}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesMaster;
