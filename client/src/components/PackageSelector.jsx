import React, { useState } from "react";
import PackageCard from "./PackageCard";
import Modal from "./Modal";
import SevenDayRangePicker from "./SevenDayRangePicker";

const packages = [
  {
    id: 1,
    name: "A2",
    price: "788€",
    crossedPrice: "896€",
  },
  {
    id: 2,
    name: "A",
    price: "788€",
    crossedPrice: "896€",
  },
];

const PackageSelector = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setisModalOpen] = useState(false);

  const openModal = () => {
    setisModalOpen(true);
  };

  const closeModal = () => {
    setisModalOpen(false);
  };

  const handleSelectPackage = (id) => {
    setSelectedPackage(id);
    // console.log(packages[id - 1]);
  };

  return (
    <div className="flex gap-6 flex-col px-0 lg:px-6">
      <div className="flex flex-col gap-2">
        <h2 className="">Select a Package:</h2>
        {/* Package Cards */}
        <div className="package-selector flex flex-col gap-4 ">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              packageData={pkg}
              isSelected={selectedPackage === pkg.id}
              onSelect={handleSelectPackage}
            />
          ))}
        </div>
      </div>

      <div className="">
        <button
          className={`btn w-full py-4 rounded-xl tracking-wider ${
            selectedPackage
              ? "bg-triumph-red text-white hover:bg-triumph-red-hover hover:scale-105"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          } text-xl text-bold transition-all ease-in-out duration-300 shadow-3xl`}
          onClick={selectedPackage ? openModal : null}
          disabled={!selectedPackage}
        >
          Adventure in a click
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <SevenDayRangePicker selectedPackage={packages[selectedPackage - 1]} />
      </Modal>
    </div>
  );
};

export default PackageSelector;

{
  /* <button
  className="btn w-full py-4 rounded-xl tracking-wider bg-triumph-red text-white text-xl text-Bold hover:bg-triumph-red-hover hover:scale-105 transition-all ease-in-out duration-300  shadow-3xl"
  onClick={openModal}
>
  Adventure in a click
</button>; */
}
