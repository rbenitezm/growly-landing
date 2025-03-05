import React from "react";

const ExpandablePackageCard = ({
  packageData,
  isSelected,
  onSelect,
  isExpanded,
}) => {
  return (
    <div>
      <div
        className={`border-2 p-2 md:p-3 lg:p-3 rounded-xl cursor-pointer flex justify-between items-center transition-all ease-in-out duration-300 ${
          isSelected ? "selected border-triumph-red scale-101" : "not-selected"
        }`}
        onClick={() => onSelect(packageData.id)}
      >
        <div className="flex justify-center items-center gap-2 md:gap-5 lg:gap-5">
          {/* Image div */}
          <div className=" ">
            <img
              src={packageData.imglink}
              alt=""
              className="h-10 md:h-16 lg:h-14 rounded-lg"
            />
          </div>

          {/* Title div */}
          <div className="">
            <h4 className="text-Bold text-xs md:text-2xl lg:text-lg">
              {packageData.title}
            </h4>

            <p className="text-[10px] md:text-[16px] lg:text-xs">
              Adventure Guarantee included
            </p>
          </div>
        </div>

        {/* Price div */}
        <div className="text-center flex flex-col">
          <span className="text-triumph-red font-bold md:text-3xl lg:text-2xl">
            {packageData.price}
            <span className="ml-1 lg:ml-2 line-through text-black text-xs md:text-xl lg:text-sm">
              {packageData.crossedPrice}
            </span>
          </span>

          <span className="px-1 py-[2px] md:px-4 md:py-[4px] lg:px-2 lg:py-1 rounded-xl bg-triumph-red text-white text-[7px] md:text-[12px] lg:text-[10px] font-medium tracking-wider">
            Limited-Time discount
          </span>
        </div>
      </div>

      {/* Expandable Content */}
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
          isExpanded
            ? "max-h-96 mt-2 border bg-triumph-bg-gray  border-gray-200 rounded-lg p-2"
            : "max-h-0"
        }`}
      >
        <p className="text-triumph-red text-base">{packageData.content}</p>
      </div>
    </div>
  );
};

export default ExpandablePackageCard;
