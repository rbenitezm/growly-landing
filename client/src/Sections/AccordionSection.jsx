import React from "react";
import Accordion from "../components/Accordion";

const AccordionSection = ({ lang }) => {
  return (
    <section className="mt-14 px-4 lg:px-16 flex flex-col justify-center gap-2 ">
      <Accordion lang={lang} />
    </section>
  );
};

export default AccordionSection;
