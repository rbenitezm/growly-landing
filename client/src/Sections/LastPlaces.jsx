import React, { useState, useEffect } from "react";

const translations = {
  en: {
    text: "Only X spots left!",
  },
  es: {
    text: "¡Sólo quedan X plazas!",
  },
  de: {
    text: "Nur noch X Plätze frei!",
  },
};

const LastPlaces = ({ lang }) => {
  const [spotsLeft, setSpotsLeft] = useState(1); // Default value

  useEffect(() => {
    // Generate a random number between 1 and 3
    const randomSpots = Math.floor(Math.random() * 4) + 2;
    setSpotsLeft(randomSpots);
  }, []);

  return (
    <section className="divider w-full h-16 lg:h-20 bg-triumph-beige flex justify-center items-center">
      <h1 className="uppercase text-lg lg:text-3xl text-Heavy text-red-500 lg:tracking-wide">
        {translations[lang]?.text.replace("X", spotsLeft) || translations["en"].text.replace("X", spotsLeft)}
      </h1>
    </section>
  );
};

export default LastPlaces;