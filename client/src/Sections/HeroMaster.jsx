import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from '../components/GlobalContext';

import Button from "../components/Button";
import HubspotForm from "../components/HubspotForm";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";
import VideoEmbedMaster from "../components/VideoEmbedMaster";
import { trackEvent } from "../api/FacebookPixel";

const translations = {
  en: {
    title: "FULL IMMERSION INTO CONSCIOUS PARENTING",
    subtitle: "THE GROWLY METHOD",
    detailsBtn: "SEE DETAILS & PRICING",
    quizBtn: "APPLY TO JOIN"
  },
  es: {
    title: "Los 3 secretos que todo padre necesita para dejar de sentirse perdido en la crianza",
    subtitle: "Growly comparte las claves para dejar de improvisar y crear una crianza consciente, exclusivamente en esta masterclass gratuita.",
    detailsBtn: "VER DETALLES Y PRECIO",
    quizBtn: "ÚNETE"
  },
  de: {
    title: "VOLLE IMMERSION MIT UNSERER DOKUMENTATION",
    subtitle: "TRIUMPH ADVENTURE PACKS",
    // TRIUMPH ADVENTURE PACKS
    detailsBtn: "DETAILS & PREISE",
    quizBtn: "JETZT BEWERBEN",
  },
};

const HeroMaster = ({ lang }) => {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false); // Estado para controlar la visibilidad del botón
  const { email } = useContext(GlobalContext);


  useEffect(() => {
    // Espera a que el video de Wistia esté listo
    window._wq = window._wq || [];
    window._wq.push({
      id: "t16p8exx4a", // Reemplaza con el ID de tu video de Wistia t16p8exx4a
      onReady: function (video) {
        // Escucha el progreso del video
        video.bind("timechange", (time) => {
          console.log("time changed")
          if (time >= 840) {
            setShowButton(true); // Muestra el botón después de 1 minuto
          }
        });
      },
    });
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);

  function takeToForm() {
    trackEvent("ApplyToParticipate_Click", {
      label: "Select Package",
      page: "Home",
    });
    setTimeout(() => {
      if (lang == "de") {
        navigate("/de/quiz");
      } else if (lang == "es") {
        navigate("/es/select-package");
      } else {
        navigate("/select-package");
      }
    }, 500);
  }

  return (
<section className="hero w-full h-max flex flex-col items-center py-8 lg:py-12 lg:p-16 gap-6 lg:gap-8">
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

  <VideoEmbedMaster />

  {showButton && (
    <>
      <div className="w-full flex justify-center">
        <span
          className="font-poppins text-center text-[25px] lg:text-[30px] font-bold leading-[100%]"
          style={{ fontFamily: "Poppins" }}
        >
          INICIA EL PROCESO DE MEJORA
        </span>
      </div>
      <div className="w-full flex justify-center">
        <Button title="¡CLICK AQUÍ!" func={takeToForm} id="applyToParticipate" />
      </div>
    </>
  )}
</section>
  );
};

export default HeroMaster;
