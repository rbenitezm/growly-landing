import React from "react";

const Card = ({ title, description, imagePath }) => {
  return (
    <div className="Card Arial p-6 lg:p-8 w-full flex flex-col gap-3 bg-triumph-red text-white rounded-xl">
      <div className="flex items-center justify-start gap-3">
        <img src={imagePath} alt="" srcset="" className="w-16" />
        <h1 className="font-semibold text-sm">{title}</h1>
      </div>
      <span className="text-justify text-xs font-light">{description}</span>
    </div>
  );
};

export default Card;
