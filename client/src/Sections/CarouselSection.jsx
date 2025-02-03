import React from "react";
import Carousel from "../components/Carousel";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { trackEvent } from "../api/FacebookPixel";

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
const CarouselSection = () => {
  const navigate = useNavigate();

  function dummyFunction() {
    trackEvent("ApplyToParticipate_Click", {
      label: "Apply Form",
      page: "Home",
    });
    setTimeout(() => {
      navigate("/quiz");
    }, 1000);
  }

  return (
    <section className="carousel-section w-full h-max flex px-10 py-12 lg:py-16 lg:justify-center items-center flex-col gap-6 ">
      <div className="w-full  lg:w-3/4 text-center">
        <h1 className="headings text-Heavy">
          Explore Andalusia <br />
          Top-tier range of Triumph models
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
        Book your adventure today! Limited spots available. <br />
        Apply to participate now and claim your Limited-Time discount!
      </p>

      <div className="">
        <Button title="APPLY TO PARTICIPATE" func={dummyFunction} />
      </div>
    </section>
  );
};

export default CarouselSection;
