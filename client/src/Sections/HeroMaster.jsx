import React, { useState } from "react";
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
    subtitle: "Natacha Fouss comparte las claves para dejar de improvisar y crear una crianza consciente, exclusivamente en esta masterclass gratuita.",
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
      <h2 className="w-5/6 lg:w-3/4 text-Heavy mt-20 lg:mt-20 text-xl lg:text-4xl font-bold  text-center ">
        {/* FULL IMMERSION WITH OUR DOCUMENTARY */}

        {translations[lang]?.title || translations["en"].title}
        <br />
        <span className="lg:text-lg text-triumph-red">
          “{translations[lang]?.subtitle || translations["en"].subtitle}”
        </span>
      </h2>
    
     
    <VideoEmbedMaster />

      <div className="w-full flex gap-8 lg:gap-40 justify-center ">
        <Button
          title={translations[lang]?.quizBtn || translations["en"].quizBtn}
          func={takeToForm}
          id="applyToParticipate"
        />
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} btnColor="black">
        <HubspotForm lang={lang} />
      </Modal>
    </section>
  );
};

export default HeroMaster;
