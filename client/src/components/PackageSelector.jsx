import React, { useState, useContext } from "react";
import PackageCard from "./PackageCard";
import ExpandablePackageCard from "./ExpandablePackageCard";
import Modal from "./Modal";
import SevenDayRangePicker from "./SevenDayRangePicker";
import { trackEvent } from "../api/FacebookPixel";
import Button from "../components/Button";
import { GlobalContext } from "../components/GlobalContext";
import { useSearchParams } from 'react-router-dom';

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

export const handleSelectPackage = (id, email) => {
  console.log("handleSelectPackage called with id:", id, "and email:", email);
  if (!window._learnq) return;

  window._learnq.push([
    "track",
    "Started Checkout",
    {
      value: 189, // Precio o valor de la compra
      itemNames: ["Pack Infalible Disciplina Positiva"],
      "Checkout URL": window.location.href,
      email: email || "cliente@example.com", // Puedes recibirlo como prop o sacarlo de un form
    },
  ]);


  const formContainer = document.querySelector('.klaviyo-form-TUiu5w');
  const formKlaviyo = formContainer?.querySelector('form');
  if (formKlaviyo) {
    const inputs = formKlaviyo.querySelectorAll('input');
    // AUTORRELLENO
    inputs.forEach((input) => {
      if (input.autocomplete === 'email' && email) {
        input.focus();
        input.value = email;
        // Dispara el evento input para que Klaviyo lo detecte
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
        input.blur();
      }
    });
    const button = formKlaviyo.querySelector('button');
    if (button) {
      setTimeout(() => {
        button.click();
        const form = document.createElement("form");
        form.method = "POST";
        form.action = "/checkout.php";
      
        const emailInput = document.createElement("input");
        emailInput.type = "hidden";
        emailInput.name = "email";
        emailInput.value = email;
      
        form.appendChild(emailInput);
        document.body.appendChild(form);
        form.submit(); // 🔹 Se envía a checkout.php
      }, 300); // espera
    }
  }



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

  let { email } = useContext(GlobalContext);
  const [searchParams] = useSearchParams();

  if (!email) {

    const urlEmail = searchParams.get('email');
    if (urlEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(urlEmail)) {
      email = urlEmail;
    }
  }

  return (
    <div className="desc flex flex-col gap-3">
      <div className="package-selector flex flex-col gap-4">
        <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-40">
          <button
            className="p-3 rounded-lg text-[0.7rem] lg:text-base font-semibold tracking-wider bg-[#0c46F2] text-white hover:scale-105 transition-all ease-in-out duration-300 shadow-custom-shadow text-center"
            style={{
              borderRadius: "30px",
              padding: "1.5rem",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "15px",
              lineHeight: "100%",
              letterSpacing: "0%"
            }}
            onClick={() => handleSelectPackage(1, email)}
          >
            Quiero Mejorar la Crianza
          </button>

        </div>
      </div>
      <div>
        <img
          src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/visas.png"
          alt=""
          className="object-contain"
        />
      </div>
      <div className="mb-2 lg:mb-0">
        <div className="text-left">
          <span
            className="font-montserrat text-[16px] font-normal text-black leading-[100%] tracking-normal"
            style={{
              fontFamily: "Montserrat",
            }}
          >
            Esta es una compra única. Al continuar, acepto la{" "}
            <a
              href="https://triumphadventure.es/en/terms-and-conditions-of-the-7-day-adventure-pack-rental-agreement/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-500 uppercase text-xs"
            >
              política de cancelación
            </a>{" "}
            y autorizo el cargo correspondiente en mi forma de pago según el precio indicado en esta página.
          </span>
        </div>
      </div>


    </div>
  );
};

export default PackageSelector;