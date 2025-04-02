import React, { useState } from "react";
import PackageCard from "./PackageCard";
import ExpandablePackageCard from "./ExpandablePackageCard";
import Modal from "./Modal";
import SevenDayRangePicker from "./SevenDayRangePicker";
import { trackEvent } from "../api/FacebookPixel";

const packages = {
  en: [
    {
      id: 1,
      name: "7-Day",
      duration: 7,
      title: "7-Day Adventure Pack",
      price: "788€",
      crossedPrice: "898€",
      content: "Covering the best landscapes over a full week!",
      advGuarantee: "Adventure Guarantee included",
      discount: "Limited-Time discount",
      imglink:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/packageimgs/7daypack.webp",
    },
    {
      id: 2,
      name: "3-Day",
      duration: 3,
      title: "3-Day Adventure Pack",
      price: "389€",
      crossedPrice: "489€",
      content: "A thrilling short escape, perfect for a long weekend ride!",
      advGuarantee: "Adventure Guarantee included",
      discount: "Limited-Time discount",
      imglink:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/packageimgs/3daypack.webp",
    },
  ],
  de: [
    {
      id: 1,
      name: "7-Day",
      duration: 7,
      title: "7-Day Adventure Pack",
      price: "788€",
      crossedPrice: "898€",
      content: "Eine ganze Woche lang die schönsten Landschaften erkunden!",
      advGuarantee: "Abenteuergarantie inklusive.",
      discount: "Zeitlich begrenzter Rabatt",
      imglink:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/packageimgs/7daypack.webp",
    },
    {
      id: 2,
      name: "3-Day",
      duration: 3,
      title: "3-Day Adventure Pack",
      price: "389€",
      crossedPrice: "489€",
      content:
        "Ein aufregender Kurztrip, perfekt für eine lange Wochenendfahrt!",
      advGuarantee: "Abenteuergarantie inklusive.",
      discount: "Zeitlich begrenzter Rabatt",
      imglink:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/packageimgs/3daypack.webp",
    },
  ],
};

const translations = {
  en: {
    "termsText": "Terms and conditions of the Growly family transformation program",
    "depositText": "No Commitment Upfront",
    "guaranteeText": "100% Satisfaction Guarantee",
    "btnText": "Start Transforming Today"
  },
  es: {
    "termsText": "Términos y condiciones del programa de transformación familiar Growly",
    "depositText": "Sin compromiso inicial",
    "guaranteeText": "Garantía de satisfacción 100%",
    "btnText": "Empieza tu transformación hoy"
  },
  de: {
    termsText: "Allgemeine Geschäftsbedingungen des Tagesmietvertrags",
    depositText: "Keine Kaution erforderlich",
    guaranteeText: "Geld-zurück-Garantie",
    btnText: "Abenteuer auf Knopfdruck",
  },
};

const PackageSelector = ({ lang }) => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setisModalOpen] = useState(false);

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
    setSelectedPackage(id === selectedPackage ? null : id);
    // console.log(packages[id - 1]);

    // console.log(packages[lang][id - 1]);
  };

  return (
    <div className="flex flex-col gap-4 lg:gap-2  px-0 lg:px-6">
      <div className="package-selector flex flex-col gap-4">
        {packages[lang].map((pkg) => (
          <ExpandablePackageCard
            key={pkg.id}
            packageData={pkg}
            isSelected={selectedPackage === pkg.id}
            onSelect={handleSelectPackage}
            isExpanded={selectedPackage === pkg.id}
          />
        ))}
      </div>

      <div className="mb-2 lg:mb-0 ">
        <a
          href="https://triumphadventure.es/en/terms-and-conditions-of-the-7-day-adventure-pack-rental-agreement/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-500 uppercase text-xs"
        >
          {/* *Terms and conditions of the daily rental agreement* */}*
          {translations[lang]?.termsText || translations["en"].termsText}*
        </a>
      </div>

      <button
        className={`btn w-full py-4 rounded-xl ${
          selectedPackage
            ? "bg-triumph-red text-white"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        } transition-all duration-300 shadow-3xl`}
        onClick={selectedPackage ? openModal : null}
        disabled={!selectedPackage}
      >
        {/* Adventure in a Click */}
        {translations[lang]?.btnText || translations["en"].btnText}*
      </button>

      <div className="flex justify-between mt-3 px-5">
        <span className="text-xs ">
          <img
            src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/icons/Deposit.webp"
            alt=""
            className="mr-2  h-4 w-4 inline "
          />
          {/* No Deposit Required */}
          {translations[lang]?.depositText || translations["en"].depositText}
        </span>
        <span className="text-xs ">
          <img
            src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/icons/Tick.webp"
            alt=""
            className="mr-2 h-4 w-4 inline "
          />
          {/* Money Back Guarantee */}
          {translations[lang]?.guaranteeText ||
            translations["en"].guaranteeText}
        </span>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} btnColor="black">
        <SevenDayRangePicker
          selectedPackage={packages[lang].find((p) => p.id === selectedPackage)}
          lang={lang}
        />
      </Modal>
    </div>
  );
};

export default PackageSelector;

// const PackageSelector = () => {
//   const [selectedPackage, setSelectedPackage] = useState(null);
//   const [isModalOpen, setisModalOpen] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   const openModal = () => {
//     trackEvent("AdventureInAClick_Click", {
//       label: "Adventure in a Click",
//       page: "Product Page",
//     });
//     setisModalOpen(true);
//   };

//   const closeModal = () => {
//     setisModalOpen(false);
//   };

//   const handleSelectPackage = (id) => {
//     setSelectedPackage(id);
//     // console.log(packages[id - 1]);
//   };

//   return (
//     <div className="flex gap-4 flex-col px-0 lg:px-6">
//       <div className="flex flex-col gap-2">
//         <h2 className="">Select a Package:</h2>
//         {/* Package Cards */}
//         <div className="package-selector flex flex-col gap-4 ">
//           {packages.map((pkg) => (
//             <PackageCard
//               key={pkg.id}
//               packageData={pkg}
//               isSelected={selectedPackage === pkg.id}
//               onSelect={handleSelectPackage}
//             />
//           ))}
//         </div>
//       </div>

//       <div className="">
//         <div className="mb-2 ">
//           <a
//             href="https://triumphadventure.es/en/terms-and-conditions-of-the-7-day-adventure-pack-rental-agreement/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="underline text-blue-500 uppercase text-xs"
//           >
//             *Terms and conditions of the daily rental agreement*
//           </a>
//         </div>

//         <div className="">
//           <button
//             className={`btn w-full py-4 rounded-xl tracking-wider ${
//               selectedPackage
//                 ? "bg-triumph-red text-white hover:bg-triumph-red-hover hover:scale-105"
//                 : "bg-gray-300 text-gray-500 cursor-not-allowed"
//             } text-xl text-bold transition-all ease-in-out duration-300 shadow-3xl`}
//             onClick={selectedPackage ? openModal : null}
//             disabled={!selectedPackage}
//             id="advInaClick"
//           >
//             Adventure in a click
//           </button>

//           <div className="flex justify-between mt-3 px-5">
//             <span className="text-xs ">
//               <img
//                 src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/icons/Deposit.webp"
//                 alt=""
//                 className="mr-2  h-4 w-4 inline "
//               />
//               No Deposit Required
//             </span>
//             <span className="text-xs ">
//               <img
//                 src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/icons/Tick.webp"
//                 alt=""
//                 className="mr-2 h-4 w-4 inline "
//               />
//               Money Back Guarantee
//             </span>
//           </div>
//         </div>
//       </div>

//       <Modal isOpen={isModalOpen} onClose={closeModal} btnColor="black">
//         <SevenDayRangePicker selectedPackage={packages[selectedPackage - 1]} />
//       </Modal>
//     </div>
//   );
// };

// export default PackageSelector;
