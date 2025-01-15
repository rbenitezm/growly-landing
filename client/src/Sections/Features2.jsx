import React from "react";

const BubbleData = [
  {
    id: 1,
    title: "Top & Side Cases included",
    imagePath:
      "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/12f1d19c3c42cbfaea95ce0f0ea988b57f4b8672/images/web-svg-icons/iconos-triumph-09.svg",
  },
  {
    id: 2,
    title: "24h Road Assistance",
    imagePath:
      "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/12f1d19c3c42cbfaea95ce0f0ea988b57f4b8672/images/web-svg-icons/iconos-triumph-07.svg",
  },
  {
    id: 3,
    title: "No Deposit Required",
    imagePath:
      "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/12f1d19c3c42cbfaea95ce0f0ea988b57f4b8672/images/web-svg-icons/iconos-triumph-06.svg",
  },
  {
    id: 4,
    title: "Airport Transfer",
    imagePath:
      "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/12f1d19c3c42cbfaea95ce0f0ea988b57f4b8672/images/web-svg-icons/iconos-triumph-08.svg",
  },
  {
    id: 5,
    title: "Bikes less than 6 months",
    imagePath:
      "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/12f1d19c3c42cbfaea95ce0f0ea988b57f4b8672/images/web-svg-icons/iconos-triumph-11.svg",
  },
  {
    id: 6,
    title: "Gear Rental",
    imagePath:
      "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/12f1d19c3c42cbfaea95ce0f0ea988b57f4b8672/images/web-svg-icons/iconos-triumph-04.svg",
  },
  {
    id: 7,
    title: "Free Lockers & Luggage Storage",
    imagePath:
      "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/12f1d19c3c42cbfaea95ce0f0ea988b57f4b8672/images/web-svg-icons/iconos-triumph-12.svg",
  },
  {
    id: 8,
    title: "Fully Comprenhesive Insurance",
    imagePath:
      "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/12f1d19c3c42cbfaea95ce0f0ea988b57f4b8672/images/web-svg-icons/iconos-triumph-03.svg",
  },
];
const Features2 = () => {
  return (
    <section className="features w-full h-max flex py-12 lg:p-16 lg:justify-center items-center flex-col lg:gap-0 ">
      <div className="w-3/4 text-center">
        <h1 className="text-Heavy lg:text-6xl leading-loose text-3xl">
          Triumph Adventure <br /> is a one-of-a-kind experience
        </h1>
      </div>

      <div className="bubbles mt-12 lg:mt-20 flex flex-col gap-12 lg:grid grid-rows-2 grid-cols-4 lg:gap-x-20 lg:gap-y-6">
        {BubbleData.map((bubble) => (
          <div
            className="lg:w-40 flex flex-col items-center gap-4 "
            key={bubble.id}
          >
            <img src={bubble.imagePath} alt="" className="h-36 lg:h-24" />
            <span className="text-Medium text-center text-lg">
              {bubble.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features2;
