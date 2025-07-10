import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { trackEvent } from '../api/FacebookPixel';
import KlaviyoFormHandler from './KlaviyoFormHandler';

const Hero = ({ lang }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitToHubspot = async (e) => {
    e.preventDefault();

    const portalId = "145993063";
    const formGuid = "9c3a2199-b8e0-48fe-a478-7d4608b2cc52";
    const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

    const payload = {
      submittedAt: Date.now(),
      fields: [
        { name: "firstname", value: name },
        { name: "email", value: email }
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title
      }
    };

    setIsSubmitting(true);
    try {
      // Opcional: rastrea el evento
      trackEvent("Form_Submission", { name, email, lang });
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      console.log("Submission result:", result);
      // Redirecciona según el idioma
      if (lang === "es") {
        navigate("/es/master");
      } else {
        navigate("master");
      }
    } catch (error) {
      console.error("Error submitting to HubSpot:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="hero w-full h-max flex py-8 lg:py-12 lg:p-16 lg:justify-center items-center flex-col gap-6 lg:gap-8">
      {/* Títulos y Descripción */}
      <div className="flex flex-col items-center gap-4">
        <span
          className="text-center font-poppins italic text-sm sm:text-lg md:text-[25px] font-normal leading-[100%]"
          style={{ fontFamily: 'Poppins' }}
        >
          LO HAN CALLADO POR AÑOS... PORQUE DA EL CONTROL A LAS FAMILIAS, NO AL SISTEMA.
        </span>
        <span
          className="text-center font-domine text-xl sm:text-3xl md:text-[40px] font-bold uppercase tracking-normal"
          style={{ textDecorationStyle: 'solid', fontFamily: 'Domine' }}
        >
          EXPERTOS REVELAN EL MÉTODO EDUCATIVO QUE <span className="bg-[#7AFD9D] text-[#0C46F2] px-1">MEJORA LA CRIANZA</span>, EN SOLO <u>15 MINUTOS</u> AL DÍA.
        </span>
        <span
          className="text-center font-poppins italic text-sm sm:text-lg md:text-[25px] font-normal leading-[100%]"
          style={{ fontFamily: 'Poppins' }}
        >
          TODO EN UNA MASTERCLASS EXCLUSIVA DE 15 MINUTOS
        </span>
      </div>

      <section className="mt-5 lg:px-16 flex flex-col lg:flex-row justify-center gap-10 lg:gap-1">
        {/* Carousel / Imagenes */}
        <div className="right flex-1">
          <div className="carousel-container">
            <div className="main-image">
              <img
                src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/client/public/images/GrowlyGif.gif"
                alt="Main"
                className="fade"
              />
            </div>
            <div>
              <img
                src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/forbes.png"
                alt="Main"
                className="fade"
              />
            </div>
          </div>
        </div>

        {/* Panel con formulario */}
        <div
          className="left px-6 flex-1 flex flex-col gap-2"
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "8px",
            padding: "1.5rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
          }}
        >
          <div>
            <span
              className="block text-center font-poppins font-bold text-[40px] text-[#0C46F2] leading-[100%]"
              style={{ fontFamily: "Poppins" }}
            >
              ¡Accede a la clase GRATIS!
            </span>
          </div>

          <div className="flex items-center gap-1 mt-2">
            <span
              className="block text-center font-poppins font-semibold text-[17px] text-black"
              style={{ fontFamily: "Poppins" }}
            >
              <b>En esta clase online 100% gratuita, descubrirás:</b>
            </span>
          </div>
          <div className="flex items-center gap-1 mt-2">
            <span
              className="block text-center font-poppins font-normal text-[17px] text-black"
              style={{ fontFamily: "Poppins" }}
            >
              ✔️ Por qué improvisar daña la relación con tus hijos sin que te des cuenta.
            </span>
          </div>
          <div className="flex items-center gap-1 mt-2">
            <span
              className="block text-center font-poppins font-normal text-[17px] text-black"
              style={{ fontFamily: "Poppins" }}
            >
              ✔️ Las claves que usan los mejores educadores para lograr respeto sin castigos.
            </span>
          </div>
          <div className="flex items-center gap-1 mt-2">
            <span
              className="block text-center font-poppins font-normal text-[17px] text-black"
              style={{ fontFamily: "Poppins" }}
            >
              ✔️ Cómo transformar la relación con tus hijos dedicando solo 15 minutos al día.
            </span>
          </div>

          
          <KlaviyoFormHandler />

        </div>
      </section>
    </section>
  );
};

export default Hero;