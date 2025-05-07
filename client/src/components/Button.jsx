import React from "react";

const Button = ({ title, func, id }) => {
  return (
    <button
    className="p-3 rounded-lg text-[0.7rem] lg:text-base font-semibold tracking-wider text-[#0C46F2] bg-white hover:scale-105 transition-all ease-in-out duration-300 shadow-custom-shadow text-center"
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
      onClick={func}
      id={id}
    >
      {title}
    </button>
  );
};

export default Button;
