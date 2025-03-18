import React from "react";
import Carousel from "../components/Carousel";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { trackEvent } from "../api/FacebookPixel";

const translations = {
  en: {
    heading: "Explore Andalusia",
    brokenHeading: "Top-tier range of Triumph models",
    text: "Book your adventure today! Limited spots available.",
    subText: "Apply to participate now and claim your Limited-Time discount!",
    participateBtn: "APPLY TO PARTICIPATE",
  },
  de: {
    heading: "Entdecken Sie Andalusien",
    brokenHeading: "Top-Auswahl an Triumph-Modellen",
    text: "Buchen Sie noch heute Ihr Abenteuer! Begrenzte Plätze verfügbar",
    subText:
      "Bewerben Sie sich jetzt und sichern Sie sich Ihren zeitlich begrenzten Rabatt!",
    participateBtn: "JETZT BEWERBEN",
  },
};

const CarouselData = [
  {
    id: 1,
    title: "Tiger 1200 GT Pro",
    imagePath:
      "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Carouselimages/Tiger-1200-GT-Pro.webp",
  },
  {
    id: 2,
    title: "Triumph Tiger 850",
    imagePath:
      "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Carouselimages/Triumph-Tiger-850.webp",
  },
  {
    id: 3,
    title: "Triumph Tiger 900 GT PRO",
    imagePath:
      "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Carouselimages/Triumph-Tiger-900-GT-PRO.webp",
  },
  {
    id: 4,
    title: "Triumph TIGER 900 RALLY PRO",
    imagePath:
      "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Carouselimages/Triumph-TIGER-900-RALLY-PRO.webp",
  },
  {
    id: 5,
    title: "Triumph Tiger 1200 GT PRO",
    imagePath:
      "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Carouselimages/Triumph-Tiger-1200-GT-PRO.webp",
  },
];
const CarouselSection = ({ lang }) => {
  const navigate = useNavigate();

  function dummyFunction() {
    trackEvent("ApplyToParticipate_Click", {
      label: "Apply Form",
      page: "Home",
    });
    setTimeout(() => {
      if (lang == "de") {
        window.scrollTo(0, 0);
        navigate("/de/quiz");
      } else {
        window.scrollTo(0, 0);
        navigate("/quiz");
      }
    }, 1000);
  }

  return (
    <section className="carousel-section w-full h-max flex px-10 py-12 lg:py-16 lg:justify-center items-center flex-col gap-6 ">
      <div className="w-full  lg:w-3/4 text-center">
        <h1 className="headings text-Heavy">
          {/* Explore Andalusia */}
          {translations[lang]?.heading || translations["en"].heading}
          <br />
          {/* Top-tier range of Triumph models */}
          {translations[lang]?.brokenHeading ||
            translations["en"].brokenHeading}
        </h1>
      </div>

      {/* Bikes Carousel */}

      <div className="flex justify-center items-center flex-col  lg:mt-4">
        <Carousel>
          {CarouselData.map((bike) => (
            <div className="BikeCarousel " key={bike.id}>
              <img
                src={bike.imagePath}
                alt={bike.title}
                className="lg:h-[27rem] w-auto"
              />
            </div>
          ))}
        </Carousel>
      </div>

      <p className="text-Regular text-center text-lg lg:text-lg mt-4">
        {/* Book your adventure today! Limited spots available.  */}
        {translations[lang]?.text || translations["en"].text}
        <br />
        {/* Apply to participate now and claim your Limited-Time discount! */}
        {translations[lang]?.subText || translations["en"].subText}
      </p>

      <div className="">
        <Button
          title={
            translations[lang]?.participateBtn ||
            translations["en"].participateBtn
          }
          func={dummyFunction}
        />
      </div>
    </section>
  );
};

export default CarouselSection;
