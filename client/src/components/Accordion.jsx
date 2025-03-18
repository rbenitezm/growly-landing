import React, { useState } from "react";

const accordionData = {
  en: [
    {
      title: "Does the Adventure Pack truly deliver such exceptional results?",
      content:
        "Yes, but don't just take our word for it—let our riders speak for themselves. According to our most recent user survey, 88% of participants would choose Triumph Adventure over any other motorcycle experience they've tried.",
    },
    {
      title:
        "What if I don’t see the results I expect? Do you offer any guarantees?",
      content:
        "Absolutely! We’re so confident in the quality of our 7-Day Adventure Pack that every rider is protected by our exclusive Adventure Guarantee. If your experience doesn’t meet your expectations, we’ll refund your payment—no questions asked.",
    },
    {
      title: "What’s the secret to such incredible results?",
      content:
        "In addition to a personalized VIP experience, our 7-Day Adventure Pack includes a carefully curated itinerary, crafted by expert guides with over 10 years of experience. This guidebook reveals the hidden gems of Andalusia, ensuring you experience the best of the region. Just like the proven success of our tours, we are confident that 95% of riders will discover unforgettable moments throughout their journey.",
    },
  ],
  de: [
    {
      title:
        "Liefert das Abenteuer-Paket wirklich solch außergewöhnliche Ergebnisse?",
      content:
        "Ja, aber nimm nicht nur unser Wort dafür – lass unsere Fahrer selbst zu Wort kommen. Laut unserer neuesten Umfrage würden 88 % der Teilnehmer Triumph Adventure jeder anderen Motorraderfahrung, die sie ausprobiert haben, den Vorzug geben.",
    },
    {
      title:
        "Was passiert, wenn ich die Ergebnisse, die ich erwarte, nicht sehe? Bieten Sie irgendwelche Garantien an?",
      content:
        "Absolut! Wir sind so überzeugt von der Qualität unseres 7-Tages-Abenteuer-Pakets, dass jeder Fahrer durch unsere exklusive Abenteuergarantie geschützt ist. Wenn deine Erfahrung nicht deinen Erwartungen entspricht, erstatten wir dir deine Zahlung – ohne Fragen zu stellen.",
    },
    {
      title: "Was ist das Geheimnis hinter solch unglaublichen Ergebnissen?",
      content:
        "Neben einer personalisierten VIP-Erfahrung umfasst unser 7-Tages-Abenteuer-Paket einen sorgfältig zusammengestellten Reiseplan, der von Expertenguides mit über 10 Jahren Erfahrung erstellt wurde. Dieses Handbuch enthüllt die versteckten Schätze Andalusiens und sorgt dafür, dass du das Beste der Region erlebst. Genau wie der bewährte Erfolg unserer Touren sind wir zuversichtlich, dass 95 % der Fahrer unvergessliche Momente während ihrer Reise entdecken werden.",
    },
  ],
};

const Accordion = ({ lang }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full">
      {accordionData[lang].map((item, index) => (
        <div
          key={index}
          className="border-b flex flex-col gap-2 border-gray-200 transition-all duration-300"
        >
          {/* Accordion Header */}
          <button
            className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold bg-triumph-bg-gray hover:bg-gray-100 focus:outline-none text-DemiBold"
            onClick={() => toggleAccordion(index)}
          >
            <span
              className={`text-sm lg:text-base  ${
                activeIndex === index ? "text-triumph-red " : "text-black "
              } `}
            >
              {item.title}
            </span>
            <svg
              className={`w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Accordion Content */}
          <div
            className={`bg-triumph-bg-gray overflow-hidden transition-max-height duration-300 ease-in-out ${
              activeIndex === index ? "max-h-96 mb-3" : "max-h-0"
            }`}
          >
            <div className="px-6 py-4 text-gray-600 text-Regular text-sm lg:text-base">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
