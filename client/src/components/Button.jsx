import React from "react";

const Button = ({ title, func }) => {
  return (
    <button
      className="w-34 lg:w-56 p-3 rounded-lg text-[0.7rem] lg:text-base font-semibold tracking-wider bg-triumph-red text-white hover:bg-triumph-red-hover hover:scale-105 transition-all ease-in-out duration-300  shadow-custom-shadow"
      onClick={func}
    >
      {title}
    </button>
  );
};

export default Button;
