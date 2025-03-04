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
        className={`border-2 p-2 rounded-xl cursor-pointer flex justify-between items-center transition-all ease-in-out duration-300 ${
          isSelected ? "selected border-triumph-red scale-101" : "not-selected"
        }`}
        onClick={() => onSelect(packageData.id)}
      >
        <div>
          <h4 className="text-bold text-xs lg:text-sm">{packageData.title}</h4>
          <span className="px-2 py-1 rounded-xl bg-triumph-red text-white text-[10px] font-medium tracking-wider">
            Limited-Time discount
          </span>
        </div>
        <div className="text-right">
          <p className="text-triumph-red font-bold text-sm">
            {packageData.price}
            <span className="ml-2 line-through text-black">
              {packageData.crossedPrice}
            </span>
          </p>
          <p className="text-xs">Adventure Guarantee included</p>
        </div>
      </div>

      {/* Expandable Content */}
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
          isExpanded
            ? "max-h-96 mt-2 border bg-triumph-bg-gray  border-gray-200 rounded-lg p-3"
            : "max-h-0"
        }`}
      >
        <p className="text-triumph-red text-base">{packageData.content}</p>
      </div>
    </div>
  );
};

export default ExpandablePackageCard;
