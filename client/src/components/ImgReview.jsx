import React from "react";
import Stars from "./Stars";

const ImgReview = ({ Source }) => {
  return (
    <div class=" grid-divs ">
      <div className="">
        <img
          src={Source}
          alt=""
          className="rounded-xl w-full h-auto"
          loading="lazy"
          width="640"
          height="360"
        />
      </div>
    </div>
  );
};

export default ImgReview;
