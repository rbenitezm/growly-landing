import React, { useState } from "react";
import PackageCard from "./PackageCard";
import ExpandablePackageCard from "./ExpandablePackageCard";
import Modal from "./Modal";
import SevenDayRangePicker from "./SevenDayRangePicker";
import { trackEvent } from "../api/FacebookPixel";
import Button from "../components/Button";

const packages = {
  en: [
    {
      id: 1,
      name: "6-Month",
      duration: 6,
      title: "Natacha Foss' Foolproof 6-Month Pack",
      price: "188€",
      crossedPrice: "249€",
      content: "Step-by-step method to build emotional connection and positive discipline at home.",
      advGuarantee: "Satisfaction Guarantee included",
      discount: "Limited-Time discount",
      imglink: "https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/logos/growly-pack-en.png"
    }
  ],
  es: [
    {
      id: 1,
      name: "6 Meses",
      duration: 6,
      title: "Pack Infalible de Disciplina Positiva",
      price: "189$",
      crossedPrice: "500$",
      content: "Un método paso a paso para crear conexión emocional y disciplina positiva en casa.",
      advGuarantee: "Incluye Garantía de Satisfacción",
      discount: "Descuento por tiempo limitado",
      imglink: "https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/logos/growly-pack.png"
    }
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
    }
    // TODO: Cambiar el logo de Growly Transformation
  ],
};

const translations = {
  en: {
    termsText: "Terms and conditions of the Growly family transformation program",
    depositText: "No Commitment Upfront",
    guaranteeText: "100% Satisfaction Guarantee",
    btnText: "Start Transforming Today"
  },
  es: {
    termsText: "Términos y condiciones del programa de transformación familiar Growly",
    depositText: "Sin compromiso inicial",
    guaranteeText: "Garantía de satisfacción 100%",
    btnText: "Empieza tu transformación hoy"
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
      label: "Pack Infalible a Click",
      page: "Product Page",
    });
    isModalOpen = true;
  };

  const closeModal = () => {
    setisModalOpen(false);
  };

  const handleSelectPackage = (id) => {
    setSelectedPackage(id === selectedPackage ? null : id);
    window.location.href = "https://www.skool.com/growly-disciplina-positiva-4246/cansado-de-improvisar-cada-dia-con-tus-hijos"
    // console.log(packages[id - 1]);

    // console.log(packages[lang][id - 1]);
  };

  return (
    <div className="flex flex-col gap-4 lg:gap-2  px-0 lg:px-6">
      <div className="package-selector flex flex-col gap-4">
        <div className="w-full flex gap-8 lg:gap-40 justify-center ">

          <button
            className=" p-3 rounded-lg text-[0.7rem] lg:text-base font-semibold tracking-wider bg-triumph-red text-white hover:bg-triumph-red-hover hover:scale-105 transition-all ease-in-out duration-300  shadow-custom-shadow"
            style={{
              backgroundColor: "#0c46F2", // Fondo gris claro
              borderRadius: "30px", // Bordes redondeados
              padding: "1.5rem", // Relleno interno
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",// Sombra suave
              color: "#FFFFFF",
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "32px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center"
            }}
            onClick={handleSelectPackage}
          >
            Quiero Mejorar la Crianza
          </button>
        </div>
      </div>

      <div className="mb-2 lg:mb-0 ">
        <div className="text-left">
          <span
            style={{
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontWeight: "400",
              color: "#000000",
              lineHeight: "100%",
              letterSpacing: "0%",
              horizonatalAlign: "center"
            }}>
            Esta es una compra única. Al continuar, acepto la <a
              href="https://triumphadventure.es/en/terms-and-conditions-of-the-7-day-adventure-pack-rental-agreement/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-500 uppercase text-xs"
            >política de cancelación</a> y autorizo el cargo correspondiente en mi forma de pago según el precio indicado en esta página.
          </span>
        </div>
      </div>


      <div className="">
        
          <img
            src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/visas.png"
            alt=""
          />
      </div>

    </div>
  );
};

export default PackageSelector;