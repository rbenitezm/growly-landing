import React from "react";
import ExcellenceLogos from "../components/ExcellenceLogos";

const Excellence = () => {
  return (
    <section className="excellence w-full h-max flex py-12 lg:p-16 lg:justify-center items-center flex-col gap-10 lg:gap-20 ">
      <div className="w-max lg:w-3/4 text-center">
        <h1 className="text-Heavy text-3xl lg:text-6xl leading-loose">
          Excellence in every ride{" "}
        </h1>
      </div>
      <ExcellenceLogos />
    </section>
  );
};

export default Excellence;
