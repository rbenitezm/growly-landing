import React from "react";

const Button = ({ title, func, id }) => {
  return (
    <button
      className=" p-3 rounded-lg text-[0.7rem] lg:text-base font-semibold tracking-wider bg-triumph-red text-white hover:bg-triumph-red-hover hover:scale-105 transition-all ease-in-out duration-300  shadow-custom-shadow"
      style={{
        backgroundColor: "#FFFFFF", // Fondo gris claro
        borderRadius: "30px", // Bordes redondeados
        padding: "1.5rem", // Relleno interno
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",// Sombra suave
        color:"#164AE3",
        fontWeight:"700",
        fontSize:"50px",
        lineHeight:"100%",
        letterSpacing:"0%",
        textAlign:"center"
      }}
      onClick={func}
      id={id}
    >
      {title}
    </button>
  );
};

export default Button;
