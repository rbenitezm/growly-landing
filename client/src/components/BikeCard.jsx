import React from "react";

const BikeCard = ({ imagePath, name, color, description, rating, price }) => {
  return (
    <div className="BikeCard  p-4 lg:p-8 flex flex-col gap-4	 bg-black text-white rounded-2xl">
      <div className="flex-1">
        <img src={imagePath} alt="" className="w-full" />
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <h2 className="text-2xl">{name}</h2>
        <span className="">{color}</span>
        <span className="text-sm text-justify">{description}</span>
        {/* <div className="stars">{rating}</div> */}
        <span className="text-xl">
          <span className="font-bold text-4xl">€ {price}</span>
          /hour
        </span>
      </div>
    </div>
  );
};

export default BikeCard;
