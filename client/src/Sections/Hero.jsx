import React, { useState } from "react";
import Button from "../components/Button";
import HubspotForm from "../components/HubspotForm";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";
import VideoEmbed from "../components/VideoEmbed";

const Hero = () => {
  const navigate = useNavigate();

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  function takeToForm() {
    setTimeout(() => {
      navigate("/quiz");
    }, 500);
  }

  // function dummyFunction() {
  //   alert("Button Clicked");
  // }
  return (
    <section className="hero w-full h-max flex py-8 lg:py-16 lg:p-16 lg:justify-center items-center flex-col gap-6 lg:gap-10 ">
      <h2 className="w-5/6 lg:w-2/4 text-Heavy mt-20 lg:mt-14 text-xl lg:text-4xl font-bold  text-center ">
        7-DAY ADVENTURE PACK
        <br />
        <span className="text-Bold">1 Triumph Tiger and a Guidebook</span>
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

      {/* <div
        // style="padding:56.25% 0 0 0;position:relative;"
        style={{ paddingTop: "56.25%", position: "relative" }}
      >
        <iframe
          src="https://player.vimeo.com/video/1049614632?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          style="position:absolute;top:0;left:0;width:100%;height:100%;"
          title="7-Day Adventure Pack"
        ></iframe> 
      </div>  */}
      {/* <script src="https://player.vimeo.com/api/player.js"></script> */}

      <div className="w-full flex gap-8 lg:gap-40 justify-center ">
        <Button title="DETAILS & PRICING" func={openModal} />
        <Button title="APPLY TO PARTICIPATE" func={takeToForm} />
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <HubspotForm />
      </Modal>
    </section>
  );
};

export default Hero;
