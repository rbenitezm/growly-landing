import React from "react";

const PackageCard = ({ packageData, isSelected, onSelect }) => {
  return (
    <div
      className={` ${
        isSelected ? "selected" : "not-selected"
      } border-2 border-spacing-1 border-solid p-2 rounded-xl cursor-pointer flex  justify-between items-center hover:scale-102 transition-all ease-in-out duration-300`}
      onClick={() => onSelect(packageData.id)}
    >
      <div className="">
        <h4 className="text-Bold text-xs lg:text-sm">{packageData.title}</h4>
        <span className="px-2 md:px-5 py-1 rounded-xl bg-triumph-red text-white text-[9px] lg:text-[10px] font-medium Arial tracking-wider">
          Limited-Time discount
        </span>
      </div>
      <div className="text-right">
        <p className="text-triumph-red font-bold inline-block Arial tracking-wide text-sm">
          {packageData.price}
          <span className="ml-2 line-through text-black Arial">
            {packageData.crossedPrice}
          </span>
        </p>
        <p className="text-xs text-DemiBold ">Adventure Guarantee included</p>
      </div>
    </div>
  );
};

export default PackageCard;
