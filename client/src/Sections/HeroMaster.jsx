import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    // Espera a que el video de Wistia esté listo
    window._wq = window._wq || [];
    window._wq.push({
      id: "ng37d85bqc", // Reemplaza con el ID de tu video de Wistia
      onReady: function (video) {
        // Escucha el progreso del video
        video.bind("timechange", (time) => {
          console.log("time changed")
          if (time >= 10) {
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
    <section className="hero w-full h-max flex py-8 lg:py-12 lg:p-16 lg:justify-center items-center flex-col gap-6 lg:gap-8 "
    >
      <div className="flex items-center gap-1">
        <span className=""
          style={{
            fontFamily: "Poppins",
            fontStyle: "italic",
            fontSize: "25px",
            fontWeight: "400",
            lineHeight: "100%",
            letterSpacing: "0%",
            horizonatalAlign: "center"
          }}>LO HAN CALLADO POR AÑOS... PORQUE DA EL CONTROL A LAS FAMILIAS, NO AL SISTEMA.</span>

      </div>


      <div className="flex items-center gap-1">
        <span
          style={{
            fontFamily: "Domine",
            fontSize: "40px",
            lineHeight: "60px",
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
          EXPERTOS REVELAN EL MÉTODO EDUCATIVO QUE  <span style={{backgroundColor:"#7AFD9D", color: "#0C46F2"}}>MEJORA LA CRIANZA</span>, EN SOLO <u>15 MINUTOS</u> AL DÍA.
        </span>
      </div>

      <div className="flex items-center gap-1">
        <span
          style={{
            fontFamily: "Poppins",
            fontStyle: "italic",
            fontSize: "25px",
            lineHeight: "100%",
            fontWeight: "400",
            letterSpacing: "0%",
            textAlign: "center",
          }}
        >
          TODO EN UNA MASTERCLASS EXCLUSIVA DE 15 MINUTOS
        </span>
      </div>


      <VideoEmbedMaster />



      {showButton && (
        <>
          <div className="w-full flex gap-8 lg:gap-40 justify-center ">
            <span
              style={{
                fontFamily: "Poppins",
                fontSize: "50px",
                lineHeight: "100%",
                fontWeight: "700",
                letterSpacing: "0%",
                textAlign: "center",
              }}
            >INICIA EL PROCESO DE MEJORA
            </span>
          </div>
          <div className="w-full flex gap-8 lg:gap-40 justify-center ">
            <Button title="¡CLICK AQUÍ!" func={takeToForm} id="applyToParticipate" />
          </div>
        </>
      )}

    </section>
  );
};

export default HeroMaster;
