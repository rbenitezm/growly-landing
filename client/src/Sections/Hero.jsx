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
    title: "PACK INFALIBLE DE DISCIPLINA POSITIVA DE NATACHA FOUSS",
    subtitle: "EL MÉTODO GROWLY",
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
      <h2 className="w-5/6 lg:w-3/4 text-Heavy mt-20 lg:mt-20 text-xl lg:text-4xl font-bold  text-center ">
        {/* FULL IMMERSION WITH OUR DOCUMENTARY */}

        {translations[lang]?.title || translations["en"].title}
        <br />
        <span className="text-Regular text-triumph-red">
          “{translations[lang]?.subtitle || translations["en"].subtitle}”
        </span>
      </h2>

      <section className="mt-14 lg:px-16 flex flex-col lg:flex-row justify-center gap-10 lg:gap-1 ">
        {/* Carousel */}


        {/* Title and Description */}
        <div className="left px-6 lg:px-0 flex-1 flex flex-col lg:flex-col gap-2 lg:gap-0 ">
          {/* Title and stars */}
          <div className="">
            <h2 className="text-3xl lg:text-5xl text-ExtraBold tracking-wide lg:tracking-normal">
              {/* Pack Infalible */}
              Los 3 secretos que todo padre necesita para dejar de sentirse perdido en la crianza
            </h2>
          </div>

          <div className="flex items-center gap-1 mt-9">
            <span className="font-semibold">Si alguna vez te has sentido agotado, superado o sin respuestas frente a los desafíos diarios con tus hijos, esta masterclass gratuita es para ti. Natacha Fouss, experta en Disciplina Positiva, te compartirá los secretos que ya han ayudado a cientos de padres a recuperar la calma, la conexión y el respeto mutuo en casa. <br /><br /> No dejes pasar la oportunidad de transformar tu hogar. Las plazas son limitadas y se están llenando rápido. <br /><br /> Reserva tu lugar hoy y empieza a disfrutar de una crianza más tranquila y segura desde ya mismo.</span>
          </div>
        </div>

        {/* Description and points */}
        <div className="desc flex gap-3 flex-col">
          <p
            className="Arial md:leading-6 lg:leading-5 text-base md:text-xl lg:text-sm text-left md:text-justify
            "
          >
            {/* A transformative experience that will forever change the way you
              explore Andalusia. Choose between 3 or 7 magical days aboard the
              majestic Triumph Tiger, ready to take you into the unknown,
              together with our master guide, crafted by a team of experts with
              over 10 years of experience, revealing every secret, every curve,
              and every hidden treasure of this land. */}
            {translations[lang]?.headDesc || translations["en"].headDesc}
          </p>
          {/* ml-6 lg:ml-10 */}

        </div>

        <div className="right flex-1 ">
          <div className="carousel-container">
            {/* Main Image */}
            <div className="main-image">
              <img src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/growly-deja-improvisar.png" alt="Main" className="fade" />
            </div>
          </div>
        </div>
      </section>


      {/* Add images or texts*/}
      {/* 
     Uncomment to enable the video <VideoEmbed />*/}

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
      </Modal>
    </section>
  );
};

export default Hero;
