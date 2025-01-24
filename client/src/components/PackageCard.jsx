import React from "react";

// const packages = [
//   {
//     id: 1,
//     name: "Adventure pack for A2 Riders",
//     price: "788€",
//     crossedPrice: "896€",
//   },
//   {
//     id: 2,
//     name: "Adventure pack for A Riders",
//     price: "788€",
//     crossedPrice: "896€",
//   },
// ];

const PackageCard = ({ packageData, isSelected, onSelect }) => {
  return (
    <div
      className={` ${
        isSelected ? "selected" : "not-selected"
      } border-2 border-spacing-1 border-solid p-3 rounded-xl cursor-pointer flex  justify-between items-center hover:scale-105 transition-all ease-in-out duration-300`}
      onClick={() => onSelect(packageData.id)}
    >
      <div className="">
        <h4 className="text-Bold text-xs lg:text-base">{packageData.title}</h4>
        <span className="px-5 py-1 rounded-xl bg-triumph-red text-white text-[8px] lg:text-[10px] font-medium Arial tracking-wider">
          Limited-Time discount
        </span>
      </div>
      <div className="text-right">
        <p className="text-triumph-red font-bold inline-block Arial tracking-widest">
          {packageData.price}
          <span className="ml-1 line-through text-black Arial">
            {packageData.crossedPrice}
          </span>
        </p>
        <p className="text-sm text-DemiBold ">Adventure Guarantee included</p>
      </div>
    </div>
  );
};

export default PackageCard;
