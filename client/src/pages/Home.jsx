import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import BikeCard from "../components/BikeCard";
import Carousel from "../components/Carousel";
import Hero from "../Sections/Hero";
import Divider from "../Sections/Divider";
import Features from "../Sections/Features";
import Features2 from "../Sections/Features2";
import CarouselSection from "../Sections/CarouselSection";
import Reviews from "../Sections/Reviews";
import ContactSection from "../Sections/ContactSection";
import Footer from "../Sections/Footer";
import Excellence from "../Sections/Excellence";
import Guarantee from "../Sections/Guarantee";

const Home = () => {
  return (
    <div className="w-full h-max ">
      {/* Hero Section */}
      <Hero />

      {/* Divider */}
      <Divider />

      {/* Features Section */}
      <Features />

      {/* Excellence */}
      <Excellence />

      {/* Features 2 Section */}
      <Features2 />

      {/* Guarantee */}
      <Guarantee />

      {/* Carousel */}
      <CarouselSection />

      {/* Reviews */}
      <Reviews />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

{
  /* <div
          className="max-w-[90vw] h-max lg:w-full lg:max-w-[80vw] flex justify-center items-center box-border "
          style={{ width: "100%" }}
        >
          <iframe
            src="https://www.youtube.com/embed/pShXJyvadxU?si=Yzvu6klz8z45z1cb"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="w-full p-0 h-[20vh] lg:w-full lg:max-w-[60vw] lg:h-[60vh] rounded-xl overflow-hidden"
          ></iframe>
        </div> */
}
