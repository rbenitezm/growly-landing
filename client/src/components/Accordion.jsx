import React, { useState } from "react";

const accordionData = [
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
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full">
      {accordionData.map((item, index) => (
        <div
          key={index}
          className="border-b flex flex-col gap-2 border-gray-200 transition-all duration-300"
        >
          {/* Accordion Header */}
          <button
            className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold bg-triumph-bg-gray hover:bg-gray-100 focus:outline-none text-DemiBold"
            onClick={() => toggleAccordion(index)}
          >
            {/* <span
              className={` lg:text-base ${
                activeIndex === index
                  ? "text-triumph-red lg:text-base"
                  : "text-black text-sm"
              }`}
            ></span> */}
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
