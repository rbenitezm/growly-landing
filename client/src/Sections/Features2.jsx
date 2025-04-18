import React from "react";

const translations = {
  en: {
    text: "is a one-of-a-kind parenting experience"
  },
  es: {
    text: "es una experiencia de crianza única en su clase"
  },
  de: {
    text: "Einzigartige Erfahrung",
  },
};

const BubbleData = {
  en: [
    {
      id: 1,
      title: "Practical tools included",
      imagePath: "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Other/iconos-triumph-09%201.png",
    },
    {
      id: 2,
      title: "Support 24/7 from our mentors",
      imagePath: "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Other/iconos-triumph-07%201.png",
    },
    {
      id: 3,
      title: "No previous knowledge required",
      imagePath: "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Other/iconos-triumph-06%201.png",
    },
    {
      id: 4,
      title: "Flexible learning from anywhere",
      imagePath: "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Other/iconos-triumph-08%201.png",
    },
    {
      id: 5,
      title: "Up-to-date, real-life strategies",
      imagePath: "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Other/iconos-triumph-11%201.png",
    },
    {
      id: 6,
      title: "Downloadable resources",
      imagePath: "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Other/iconos-triumph-04%201.png",
    },
    {
      id: 7,
      title: "Secure platform & private access",
      imagePath: "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Other/iconos-triumph-12%201.png",
    },
    {
      id: 8,
      title: "Satisfaction Guarantee",
      imagePath: "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Other/iconos-triumph-03%201.png",
    },
  ],
  
  es: [
    {
      id: 1,
      title: "Herramientas prácticas incluidas",
      imagePath: "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Other/iconos-triumph-09%201.png",
    },
    {
      id: 2,
      title: "Soporte 24/7 de nuestros mentores",
      imagePath: "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Other/iconos-triumph-07%201.png",
    },
    {
      id: 3,
      title: "No necesitas experiencia previa",
      imagePath: "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Other/iconos-triumph-06%201.png",
    },
    {
      id: 4,
      title: "Aprendizaje flexible desde cualquier lugar",
      imagePath: "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Other/iconos-triumph-08%201.png",
    },
    {
      id: 5,
      title: "Estrategias actuales y aplicables",
      imagePath: "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Other/iconos-triumph-11%201.png",
    },
    {
      id: 6,
      title: "Recursos descargables",
      imagePath: "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Other/iconos-triumph-04%201.png",
    },
    {
      id: 7,
      title: "Plataforma segura y acceso privado",
      imagePath: "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Other/iconos-triumph-12%201.png",
    },
    {
      id: 8,
      title: "Garantía de satisfacción",
      imagePath: "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Other/iconos-triumph-03%201.png",
    },
  ],
  de: [
    {
      id: 1,
      title: "Top- und Seitentaschen inklusive",
      imagePath:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Other/iconos-triumph-09%201.png",
    },
    {
      id: 2,
      title: "24h Pannenhilfe",
      imagePath:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Other/iconos-triumph-07%201.png",
    },
    {
      id: 3,
      title: "Keine Kaution erforderlich",
      imagePath:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Other/iconos-triumph-06%201.png",
    },
    {
      id: 4,
      title: "Flughafentransfer",
      imagePath:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Other/iconos-triumph-08%201.png",
    },
    {
      id: 5,
      title: "Fahrzeuge unter 6 Monaten",
      imagePath:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Other/iconos-triumph-11%201.png",
    },
    {
      id: 6,
      title: "Ausrüstungsverleih",
      imagePath:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Other/iconos-triumph-04%201.png",
    },
    {
      id: 7,
      title: "Kostenlose Schließfäche & Gepäckaufbewahrung",
      imagePath:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Other/iconos-triumph-12%201.png",
    },
    {
      id: 8,
      title: "Vollständige Versicherung",
      imagePath:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Other/iconos-triumph-03%201.png",
    },
  ],
};
const Features2 = ({ lang }) => {
  return (
    <section className="features w-full h-max flex py-12 lg:p-16 lg:justify-center items-center flex-col lg:gap-0 ">
      <div className="w-3/4 text-center">
        <h1 className="text-Heavy lg:text-6xl leading-loose text-3xl">
          Growly <br />{" "}
          {translations[lang]?.text || translations["en"].text}
        </h1>
      </div>

      <div className="bubbles mt-12 lg:mt-20 flex flex-col gap-4 lg:grid grid-rows-2 grid-cols-4 lg:gap-x-20 lg:gap-y-6">
        {BubbleData[lang].map((bubble) => (
          <div
            className="lg:w-40 flex flex-col items-center gap-1 md:gap-4 "
            key={bubble.id}
          >
            <img src={bubble.imagePath} alt="" className="h-24 lg:h-24" />
            <span className="text-Medium text-center text-base md:text-lg">
              {bubble.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features2;
