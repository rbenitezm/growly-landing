import React from "react";

const translations = {
  en: {
    text: "Why follow when you can lead your family with confidence?"
  },
  es: {
    text: "¿Por qué seguir cuando puedes liderar la educación de tu familia con confianza?"
  },
  de: {
    text: "WARUM FOLGEN, WENN DU FÜHREN KANNST?",
  },
};

const DividerMaster = ({ lang }) => {
  return (
    <section className="divider w-full h-16 lg:h-20 bg-triumph-beige flex justify-center items-center">
      <h1 className="uppercase text-lg  lg:text-3xl text-Heavy lg:tracking-wide ">
        {/* why follow when you can lead? */}
        {translations[lang]?.text || translations["en"].text}
      </h1>
    </section>
  );
};

export default DividerMaster;
