import React from "react";

const logos = [
  {
    id: 1,
    class: "h-16 md:h-14 lg:h-16",
    imgPath:
      "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/logos/logo_1.webp",
  },
  {
    id: 2,
    class: "h-16 md:h-14 lg:h-16",
    imgPath:
      "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/logos/logo_2.webp",
  },
  {
    id: 3,
    class: "h-12 md:h-14 lg:h-16",
    imgPath:
      "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/RiDE.webp",
  },
  {
    id: 4,
    class: "h-16 md:h-14 lg:h-16",
    imgPath:
      "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/logos/logo_4.webp",
  },
  {
    id: 5,
    class: "h-12 md:h-14 lg:h-16",
    imgPath:
      "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/logos/logo_5.webp",
  },
  {
    id: 6,
    class: "h-16 md:h-14 lg:h-16",
    imgPath:
      "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/logos/logo_6.webp",
  },
];

const ExcellenceLogos = () => {
  return (
    <div className=" flex lg:flex-row md:flex-row justify-center items-center flex-col gap-10 lg:gap-20">
      {logos.map((img) => (
        <div className="" key={img.id}>
          <img src={img.imgPath} alt="" className={img.class} />
        </div>
      ))}
    </div>
  );
};

export default ExcellenceLogos;
