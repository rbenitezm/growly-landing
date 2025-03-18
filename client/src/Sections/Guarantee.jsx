import React from "react";

const translations = {
  en: {
    heading: "Why follow when you can lead?",
    brokenHeading: "Backed by our Adventure Guarantee",
    text: " If your adventure doesn’t exceed expectations, we’ll refund you—no questions asked.",
  },
  de: {
    heading: "Buchen Sie mit Vertrauen,",
    brokenHeading: "unterstützt von unserer Abenteuer-Garantie",
    text: "Wenn Ihr Abenteuer nicht Ihre Erwartungen übertrifft, erstatten wir Ihnen den Betrag—ohne Rückfragen.",
  },
};

const Guarantee = ({ lang }) => {
  return (
    <section className="guarantee w-full h-max flex py-12 lg:py-16 gap-8 lg:gap-0 lg:justify-center items-center flex-col  ">
      <div className="w-5/6 lg:w-3/4 text-center">
        <h1 className="text-Heavy text-2xl lg:text-5xl leading-tight lg:leading-tight">
          {/* Book with confidence, */}
          {translations[lang]?.heading || translations["en"].heading}
          <br />
          {/* Backed by our Adventure Guarantee */}
          {translations[lang]?.brokenHeading ||
            translations["en"].brokenHeading}
        </h1>
      </div>

      <img
        src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/guarantee.webp"
        alt=""
        className="h-[15rem] lg:h-[25rem]	"
      />

      <p className="text-Regular text-center text-xl w-3/4 lg:w-1/3 lg:text-xl mt-2 lg:mt-4 uppercase">
        {/* If your adventure doesn’t exceed expectations, we’ll refund you—no
        questions asked. */}
        {translations[lang]?.text || translations["en"].text}
      </p>
    </section>
  );
};

export default Guarantee;
