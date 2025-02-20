import React, { useState } from "react";
import Button from "../components/Button";
import HubspotForm from "../components/HubspotForm";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";
import VideoEmbed from "../components/VideoEmbed";
import { trackEvent } from "../api/FacebookPixel";

const Hero = () => {
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
      navigate("/quiz");
    }, 500);
  }

  // function dummyFunction() {
  //   alert("Button Clicked");
  // }
  return (
    <section className="hero w-full h-max flex py-8 lg:py-12 lg:p-16 lg:justify-center items-center flex-col gap-6 lg:gap-8 ">
      <h2 className="w-5/6 lg:w-2/4 text-Heavy mt-20 lg:mt-14 text-xl lg:text-4xl font-bold  text-center ">
        FULL IMMERSION WITH OUR DOCUMENTARY
        <br />
        <span className="text-Regular">“7-DAY ADVENTURE PACK”</span>
      </h2>
      {/* <div
        className="max-w-[90vw] h-max md:h-auto md:w-5/6 lg:w-full lg:max-w-[70vw] flex justify-center items-center box-border "
        style={{ width: "90%" }}
      >
        <iframe
          src="https://www.youtube.com/embed/pShXJyvadxU?si=Yzvu6klz8z45z1cb"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="w-full p-0 h-[25vh] md:h-80 md:w-5/6 lg:w-full max-w-[90vw] lg:max-w-[45vw] lg:h-[50vh] rounded-xl overflow-hidden"
        ></iframe>
      </div> */}
      <VideoEmbed />

      <div className="w-full flex gap-8 lg:gap-40 justify-center ">
        <Button
          title="DETAILS & PRICING"
          func={openModal}
          id="detailsAndpricing"
        />
        <Button
          title="APPLY TO PARTICIPATE"
          func={takeToForm}
          id="applyToParticipate"
        />
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <HubspotForm />
      </Modal>
    </section>
  );
};

export default Hero;
