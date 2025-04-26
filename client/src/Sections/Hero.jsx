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
      <div className="flex items-center gap-1 mt-9">
        <span className=""
          style={{
            fontFamily: "Poppins",
            fontStyle: "italic",
            fontSize: "50px",
            fontWeight: "400",
            lineHeight: "100%",
            letterSpacing: "0%",
            horizonatalAlign: "center"
          }}>LO HAN CALLADO POR AÑOS... PORQUE DA EL CONTROL A LAS FAMILIAS, NO AL SISTEMA.</span>

      </div>


      <div className="flex items-center gap-1 mt-9">
        <span
          style={{
            fontFamily: "Domine",
            fontSize: "50px",
            lineHeight: "80px",
            fontWeight: "700",
            letterSpacing: "0%",
            textAlign: "center",
            textTransform: "uppercase",
            textDecorationStyle: "solid",
            textdecorationOffset: "0%",
            textDecorationThickness: "0%",
            textDecorationSkipInk: "auto"

          }}
        >
          EXPERTOS REVELAN EL MÉTODO EDUCATIVO QUE  <span style={{ backgroundColor: "#7AFD9D", color: "#0C46F2" }}>MEJORA LA CRIANZA</span>, EN SOLO <u>15 MINUTOS</u> AL DÍA.
        </span>
      </div>

      <div className="flex items-center gap-1 mt-9">
        <span
          style={{
            fontFamily: "Poppins",
            fontStyle: "italic",
            fontSize: "50px",
            lineHeight: "100%",
            fontWeight: "400",
            letterSpacing: "0%",
            textAlign: "center",
          }}
        >
          TODO EN UNA MASTERCLASS EXCLUSIVA DE 15 MINUTOS
        </span>
      </div>


      <section className="mt-14 lg:px-16 flex flex-col lg:flex-row justify-center gap-10 lg:gap-1 ">
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
        <div className="left px-6 lg:px-0 flex-1 flex flex-col lg:flex-col gap-2 lg:gap-0 "
          style={{
            backgroundColor: "#FFFFFF", // Fondo gris claro
            borderRadius: "8px", // Bordes redondeados
            padding: "1.5rem", // Relleno interno
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" // Sombra suave

          }}>
          {/* Title and stars */}
          <div className="">
            <span
              style={{
                fontFamily: "Poppins",
                fontSize: "40px",
                fontWeight: "700",
                color: "#0C46F2",
                lineHeight: "100%",
                letterSpacing: "0%",
                horizonatalAlign: "center"
              }}>
              {/* Pack Infalible */}
              !Accede a la clase GRATIS!
            </span>
          </div>

          <div className="flex items-center gap-1 mt-9">
            <span className="font-semibold"
              style={{
                fontFamily: "Poppins",
                fontSize: "17px",
                color: "#000000",
                fontWeight: "700",
                lineHeight: "100%",
                letterSpacing: "0%",
                horizonatalAlign: "center"
              }}><b>En esta clase online 100 % gratuita, descubrirás:</b></span>

          </div>
          <div className="flex items-center gap-1 mt-9">
            <span className="font-semibold"
              style={{
                fontFamily: "Poppins",
                fontSize: "17px",
                fontWeight: "400",
                color: "#000000",
                lineHeight: "100%",
                letterSpacing: "0%",
                horizonatalAlign: "center"

              }}>✔️ Por qué improvisar daña la relación con tus hijos sin que te des cuenta.</span>

          </div>
          <div className="flex items-center gap-1 mt-9">
            <span className="font-semibold"
              style={{
                fontFamily: "Poppins",
                fontSize: "17px",
                fontWeight: "400",
                color: "#000000",
                lineHeight: "100%",
                letterSpacing: "0%",
                horizonatalAlign: "center"

              }}>✔️ Cómo transformar la relación con tus hijos dedicando solo 15 minutos al día.</span>

          </div>
          <div className="flex items-center gap-1 mt-9">
            <span className="font-semibold"
              style={{
                fontFamily: "Poppins",
                fontSize: "17px",
                fontWeight: "400",
                color: "#000000",
                lineHeight: "100%",
                letterSpacing: "0%",
                horizonatalAlign: "center"

              }}>✔️ Cómo transformar la relación con tus hijos dedicando solo 15 minutos al día.</span>

          </div>


          <div className="flex items-center gap-1 mt-9">
            <span className="font-semibold"
              style={{
                fontFamily: "Poppins",
                fontSize: "20px",
                fontWeight: "700",
                lineHeight: "100%",
                letterSpacing: "0%",
                horizonatalAlign: "center",
                fontcase: "uppercase",
                color: "#0C46F2",
              }}><b>RELLENA EL FORMULARIO CON TU NOMBRE Y EMAIL</b></span>
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
