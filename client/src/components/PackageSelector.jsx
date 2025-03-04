import React, { useState } from "react";
import PackageCard from "./PackageCard";
import Modal from "./Modal";
import SevenDayRangePicker from "./SevenDayRangePicker";
import { trackEvent } from "../api/FacebookPixel";

// const packages = [
//   {
//     id: 1,
//     name: "A2",
//     title: "Adventure pack for A2 Riders",
//     price: "749€",
//     crossedPrice: "850€",
//   },
//   {
//     id: 2,
//     name: "A",
//     title: "Adventure pack for A Riders",
//     price: "788€",
//     crossedPrice: "896€",
//   },
// ];

const packages = [
  {
    id: 1,
    name: "7-Day",
    duration: 7,
    title: "7-Day Adventure Pack",
    price: "788€",
    crossedPrice: "898€",
  },
  {
    id: 2,
    name: "3-Day",
    duration: 3,
    title: "3-Day Adventure Pack",
    price: "389€",
    crossedPrice: "489€",
  },
];

const PackageSelector = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setisModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const openModal = () => {
    trackEvent("AdventureInAClick_Click", {
      label: "Adventure in a Click",
      page: "Product Page",
    });
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
    <div className="flex gap-4 flex-col px-0 lg:px-6">
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
        <div className="mb-2 ">
          <a
            href="https://triumphadventure.es/en/terms-and-conditions-of-the-7-day-adventure-pack-rental-agreement/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-500 uppercase text-xs"
          >
            *Terms and conditions of the daily rental agreement*
          </a>
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
            id="advInaClick"
          >
            Adventure in a click
          </button>

          <div className="flex justify-between mt-3 px-5">
            <span className="text-xs ">
              <img
                src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/icons/Deposit.webp"
                alt=""
                className="mr-2  h-4 w-4 inline "
              />
              No Deposit Required
            </span>
            <span className="text-xs ">
              <img
                src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/icons/Tick.webp"
                alt=""
                className="mr-2 h-4 w-4 inline "
              />
              Money Back Guarantee
            </span>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} btnColor="black">
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
