import React from "react";
import ProductCarousel from "../components/ProductCarousel";
import PackageSelector from "../components/PackageSelector";
import ExcellenceLogos from "../components/ExcellenceLogos";
import Footer from "../Sections/Footer";
import LongReviews from "../Sections/LongReviews";
import AccordionSection from "../Sections/AccordionSection";
import Excellence from "../Sections/Excellence";

const features = [
  "10 minutes from Málaga Airport.",
  "No deposits, no hassle—just book, arrive, and ride.",
  "From boots to helmets, top-quality gear is available.",
  "Bikes always under six months old.",
  "Top & Side Cases included.",
  "24/7 roadside assistance.",
  "Fully Comprehensive Insurance",
  "Free lockers & luggage storage.",
];

const features2 = [
  {
    id: 1,
    imgPath:
      "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Bike.png",
    text: "Over 1,500 satisfied riders",
  },
  {
    id: 2,
    imgPath:
      "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Check.png",
    text: "Satisfaction Guarantee",
  },
  {
    id: 3,
    imgPath:
      "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Map.png",
    text: "Masterfully crafted Guidebook",
  },
  {
    id: 4,
    imgPath:
      "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/ThumbsUp.png",
    text: "Top-of-the-Line Triumph Bikes",
  },
];

const Images = [
  {
    id: 1,
    imgPath:
      "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Generated_1.webp",
  },
  {
    id: 2,
    imgPath:
      "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Generated_2.webp",
  },
  {
    id: 3,
    imgPath:
      "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/Generated_3.webp",
  },
];

const ProductPage = () => {
  return (
    <div className="productPage  w-full min-h-screen  pt-12 lg:pt-16 ">
      {/* Product Section */}

      <section className="mt-14 lg:px-16 flex flex-col lg:flex-row justify-center gap-10 ">
        {/* Carousel */}
        <div className="left flex-1 ">
          <ProductCarousel />
        </div>

        {/* Title and Description */}
        <div className="right px-6 lg:px-12 flex-1 flex flex-col lg:flex-col gap-2 ">
          {/* Title and stars */}
          <div className="">
            <h2 className="text-3xl lg:text-5xl text-ExtraBold tracking-wide lg:tracking-wider">
              7-Day Adventure Pack
            </h2>
            <div className="flex items-center gap-1">
              <img
                src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/rating-stars.webp"
                alt=""
                className="h-10"
              />

              <span className="font-semibold">342+ reviews</span>
            </div>
          </div>

          {/* Description and points */}
          <div className="desc flex gap-4 flex-col">
            <p
              className="Arial leading-5 text-base lg:text-sm text-left md:text-justify
            "
            >
              A transformative experience that will forever change the way you
              explore Andalusia. Over 7 magical days, we bring together the
              majestic Triumph Tiger, ready to take you into the unknown, plus
              our master guide, crafted by a team of experts with over 10 years
              of experience, revealing every secret, every curve, and every
              hidden treasure of this land.
            </p>

            <div className="ml-6 lg:ml-10">
              <ul className="Arial list-disc leading-tight">
                {features.map((feature) => (
                  <li key={feature.id - 1} className="text-[13px] font-medium">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="package ">
            <PackageSelector />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <AccordionSection />

      {/* Awards Logos */}
      {/* <section className="py-8 lg:py-16 flex  justify-center gap-2 ">
        <ExcellenceLogos />
      </section> */}

      <Excellence />

      {/* Features 2 */}
      <section className="mt-5 py-16 flex flex-col md:flex-row lg:flex-row justify-center gap-12 md:gap-8 lg:gap-32 ">
        {features2.map((feat) => (
          <div className=" flex flex-col text-center items-center gap-4">
            <div className="img">
              <img src={feat.imgPath} alt="" className="h-10" />
            </div>
            <span className="text-Medium text-base md:text-xs lg:text-base">
              {feat.text}
            </span>
          </div>
        ))}
      </section>

      {/* Banner */}

      <section className="mt-5 py-16 px-8 lg:px-56 flex flex-col justify-center items-center gap-5 bg-triumph-black text-white text-center ">
        <h2 className="text-Heavy text-2xl lg:text-3xl">
          7-Day Adventure Pack
        </h2>
        <span className="text-Medium text-lg lg:text-xl ">
          Seven unforgettable days with a Triumph Tiger, plus our incredible
          guidebook packed with every detail to make your journey seamless and
          unforgettable, with a Limited-Time Discount!{" "}
        </span>
      </section>

      {/* Before you know it// */}

      <section className="mt-5 py-16 px-8 lg:px-32 flex flex-col justify-center items-center gap-5 text-black ">
        <h2 className="text-Heavy text-2xl lg:text-3xl">
          Before you know it...
        </h2>

        <div className="mt-5 w-full flex flex-col md:flex-row lg:flex-row justify-center gap-0 lg:gap-32 ">
          {Images.map((img) => (
            <div className="p-5 md:p-5 lg:p-0 " key={img.id}>
              <div className="flex">
                <span className="flex-1 text-xl text-Bold text-triumph-red text-center">
                  Before
                </span>
                <span className="flex-1 text-xl text-Bold text-triumph-red text-center">
                  After
                </span>
              </div>
              <img src={img.imgPath} alt="" className=" lg:w-96" />
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="lg:mt-5 py-10 lg:py-16 lg:px-56 flex flex-col justify-center items-center  gap-5 ">
        <div className=" w-max">
          <h1 className="text-3xl lg:text-6xl text-Heavy text-triumph-red text-center">
            Real people, real results <br />
            What our customers say
          </h1>
          <div className=" flex items-center justify-center gap-2 lg:gap-6 mt-5">
            <div className="stars flex gap-1 lg:gap-2">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/12f1d19c3c42cbfaea95ce0f0ea988b57f4b8672/images/web-svg-icons/star.svg"
                  alt="star"
                  className="h-5 lg:h-8"
                />
              ))}
            </div>
            <p className="text-medium text-base lg:text-3xl">
              Based on 342 reviews
            </p>
          </div>
        </div>
        <div className="">
          <LongReviews />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductPage;
