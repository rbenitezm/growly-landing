import React from "react";

const Guarantee = () => {
  return (
    <section className="guarantee w-full h-max flex py-12 lg:py-16 gap-8 lg:gap-0 lg:justify-center items-center flex-col  ">
      <div className="w-5/6 lg:w-3/4 text-center">
        <h1 className="text-Heavy text-2xl lg:text-5xl leading-tight lg:leading-tight">
          Book with confidence,
          <br />
          Backed by our Adventure Guarantee
        </h1>
      </div>

      <img
        src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/guarantee.webp"
        alt=""
        className="h-[15rem] lg:h-[25rem]	"
      />

      <p className="text-Regular text-center text-xl  lg:text-xl mt-2 lg:mt-4 uppercase">
        If your adventure doesn’t exceed expectations, we’ll <br />
        refund you—no questions asked.
      </p>
    </section>
  );
};

export default Guarantee;
