import React from "react";

const logos = [
  {
    id: 1,
    imgPath: "./src/assets/images/logos/logo_1.webp",
  },
  {
    id: 2,
    imgPath: "./src/assets/images/logos/logo_2.webp",
  },
  {
    id: 3,
    imgPath: "./src/assets/images/logos/logo_3.webp",
  },
  {
    id: 4,
    imgPath: "./src/assets/images/logos/logo_4.webp",
  },
  {
    id: 5,
    imgPath: "./src/assets/images/logos/logo_5.webp",
  },
  {
    id: 6,
    imgPath: "./src/assets/images/logos/logo_6.webp",
  },
];

const ExcellenceLogos = () => {
  return (
    <div className=" flex lg:flex-row md:flex-row justify-center items-center flex-col gap-12 lg:gap-20">
      {logos.map((img) => (
        <div className="" key={img.id}>
          <img src={img.imgPath} alt="" className="h-20 md:h-14 lg:h-24" />
        </div>
      ))}
    </div>
  );
};

export default ExcellenceLogos;
