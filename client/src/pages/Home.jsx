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

// const CardData = [
//   {
//     id: 1,
//     title: "Complete Your Adventure by Renting Gear or Accessories",
//     description:
//       "Lorem ipsum dolor sit amet consectetur. Dis maecenas at ultricies elit ut ultrices dignissim vitae. Congue integer tincidunt massa vitae.",
//     imagePath: "./images/CardImg1.png",
//   },
//   {
//     id: 2,
//     title: "New Motorcycle Models Available",
//     description:
//       "Lorem ipsum dolor sit amet consectetur. Dis maecenas at ultricies elit ut ultrices dignissim vitae. Congue integer tincidunt massa vitae.",
//     imagePath: "./images/CardImg2.png",
//   },
//   {
//     id: 3,
//     title: "Complete Your Adventure by Renting Gear or Accessories",
//     description:
//       "Lorem ipsum dolor sit amet consectetur. Dis maecenas at ultricies elit ut ultrices dignissim vitae. Congue integer tincidunt massa vitae.",
//     imagePath: "./images/CardImg3.png",
//   },
// ];

// const BikeData = [
//   {
//     id: 1,
//     imagePath: "./images/BikeImgs/BikeImg1.png",
//     name: "Triumph 1200 Tiger",
//     color: "Yellow",
//     description:
//       "Lorem ipsum dolor sit amet consectetur. Dis maecenas at ultricies elit ut ultrices dignissim vitae. Congue integer tincidunt massa vitae.",
//     rating: 4,
//     price: 27,
//   },
//   {
//     id: 2,
//     imagePath: "./images/BikeImgs/BikeImg2.png",
//     name: "Triumph 1200 Tiger",
//     color: "Red",
//     description:
//       "Lorem ipsum dolor sit amet consectetur. Dis maecenas at ultricies elit ut ultrices dignissim vitae. Congue integer tincidunt massa vitae.",
//     rating: 4,
//     price: 35,
//   },
//   {
//     id: 3,
//     imagePath: "./images/BikeImgs/BikeImg3.png",
//     name: "Triumph 1200 Tiger",
//     color: "White",
//     description:
//       "Lorem ipsum dolor sit amet consectetur. Dis maecenas at ultricies elit ut ultrices dignissim vitae. Congue integer tincidunt massa vitae.",
//     rating: 4,
//     price: 25,
//   },
//   {
//     id: 4,
//     imagePath: "./images/BikeImgs/BikeImg4.png",
//     name: "Triumph 1200 Tiger",
//     color: "silver",
//     description:
//       "Lorem ipsum dolor sit amet consectetur. Dis maecenas at ultricies elit ut ultrices dignissim vitae. Congue integer tincidunt massa vitae.",
//     rating: 4,
//     price: 38,
//   },
//   {
//     id: 5,
//     imagePath: "./images/BikeImgs/BikeImg5.png",
//     name: "Triumph 1200 Tiger",
//     color: "Blue",
//     description:
//       "Lorem ipsum dolor sit amet consectetur. Dis maecenas at ultricies elit ut ultrices dignissim vitae. Congue integer tincidunt massa vitae.",
//     rating: 4,
//     price: 40,
//   },
// ];

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
