import React from "react";
import HubspotForm from "../components/HubspotForm";

const ContactSection = ({ lang }) => {
  return (
    <section className="reviews relative bg-ContactImage bg-cover fit-contain w-full h-[90vh] flex lg:justify-center items-center flex-col gap-6  bg-center ">
      <div class="absolute inset-0 bg-white bg-opacity-30"></div>
      <div class="absolute inset-0 flex items-center justify-center z-10 ">
        <HubspotForm lang={lang} />
      </div>
    </section>
  );
};

export default ContactSection;
