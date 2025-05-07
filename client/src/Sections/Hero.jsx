import React, { useState } from "react";
import Button from "../components/Button";
import HubspotForm from "../components/HubspotForm";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";
import VideoEmbed from "../components/VideoEmbed";
import { trackEvent } from "../api/FacebookPixel";
import ProductCarousel from "../components/ProductCarousel";
import LastPlaces from "./LastPlaces";

const translations = {
  en: {
    title: "FULL IMMERSION INTO CONSCIOUS PARENTING",
    subtitle: "THE GROWLY METHOD",
    detailsBtn: "SEE DETAILS & PRICING",
    quizBtn: "APPLY TO JOIN"
  },
  es: {
    title: "LO HAN CALLADO POR AÑOS... PORQUE DA EL CONTROL A LAS FAMILIAS, NO AL SISTEMA.",
    subtitle: "EXPERTOS REVELAN el método educativo  QUE mejora LA crianza, EN SOLO 15 minutos al día.",
    detailsBtn: "RESERVAR MI PLAZA",
    quizBtn: "APLICAR PARA UNIRTE"
  },
  de: {
    title: "VOLLE IMMERSION MIT UNSERER DOKUMENTATION",
    subtitle: "TRIUMPH ADVENTURE PACKS",
    // TRIUMPH ADVENTURE PACKS
    detailsBtn: "DETAILS & PREISE",
    quizBtn: "JETZT BEWERBEN",
  },
};

const Hero = ({ lang }) => {
  const navigate = useNavigate();

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);

    trackEvent("DetailsPricing_Click", {
      label: "Details & Pricing Modal",
      page: "Home",
    });
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  function takeToForm() {
    trackEvent("ApplyToParticipate_Click", {
      label: "Apply Form",
      page: "Home",
    });
    setTimeout(() => {
      if (lang == "de") {
        navigate("/de/quiz");
      } else if (lang == "es") {
        navigate("/es/quiz");
      } else {
        navigate("/quiz");
      }
    }, 500);
  }

  return (
    <section className="hero w-full h-max flex py-8 lg:py-12 lg:p-16 lg:justify-center items-center flex-col gap-6 lg:gap-8 ">
      {/* FULL IMMERSION WITH OUR DOCUMENTARY */}
      <div className="flex flex-col items-center gap-4">
        <span className="text-center font-poppins italic text-sm sm:text-lg md:text-[25px] font-normal leading-[100%]"
          style={{
            fontFamily: "Poppins"
          }}>
          LO HAN CALLADO POR AÑOS... PORQUE DA EL CONTROL A LAS FAMILIAS, NO AL SISTEMA.
        </span>

        <span className="text-center font-domine text-xl sm:text-3xl md:text-[40px] font-bold uppercase  tracking-normal"
          style={{ textDecorationStyle: "solid", fontFamily: "Domine" }}>
          EXPERTOS REVELAN EL MÉTODO EDUCATIVO QUE <span className="bg-[#7AFD9D] text-[#0C46F2] px-1">MEJORA LA CRIANZA</span>, EN SOLO <u>15 MINUTOS</u> AL DÍA.
        </span>

        <span className="text-center font-poppins italic text-sm sm:text-lg md:text-[25px] font-normal leading-[100%]"
          style={{
            fontFamily: "Poppins"
          }}>
          TODO EN UNA MASTERCLASS EXCLUSIVA DE 15 MINUTOS
        </span>
      </div>


      <section className="mt-5 lg:px-16 flex flex-col lg:flex-row justify-center gap-10 lg:gap-1 ">
        {/* Carousel */}
        <div className="right flex-1 ">
          <div className="carousel-container">
            {/* Main Image */}
            <div className="main-image">
              <img src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/home-gif.png" alt="Main" className="fade" />
            </div>
            <div className="">
              <img src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/forbes.png" alt="Main" className="fade" />
            </div>
          </div>
        </div>

        {/* Title and Description */}
        <div
          className="left px-6 flex-1 flex flex-col gap-2"
          style={{
            backgroundColor: "#FFFFFF", // Fondo gris claro
            borderRadius: "8px", // Bordes redondeados
            padding: "1.5rem", // Relleno interno
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" // Sombra suave
          }}
        >
          {/* Title and stars */}
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

          <div className="flex items-center gap-1 mt-2">
            <span
              className="block text-center font-poppins font-semibold text-[20px] uppercase text-[#0C46F2]"
              style={{ fontFamily: "Poppins" }}
            >
              <b>RELLENA EL FORMULARIO CON TU NOMBRE Y EMAIL</b>
            </span>
          </div>
          <div className="mt-6">
            <HubspotForm lang={lang} />
          </div>
        </div>



      </section>


      {/* Add images or texts*/}
      {/* 
     Uncomment to enable the video <VideoEmbed />

      <div className="w-full flex gap-8 lg:gap-40 justify-center ">
        <Button
          title={
            translations[lang]?.detailsBtn || translations["en"].detailsBtn
          }
          func={openModal}
          id="detailsAndpricing"
        />
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} btnColor="black">
        <HubspotForm lang={lang} />
      </Modal>*/}
    </section>
  );
};

export default Hero;
