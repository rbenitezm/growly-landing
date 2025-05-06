import React from "react";

const Footer = () => {
  return (
    <footer
      className="px-4 lg:px-10 py-6 w-full h-24 flex justify-center items-center z-40"
      style={{
        backgroundColor: "#FFFFFF", // Fondo blanco
        borderTop: "2px solid #0C46F2", // Línea superior azul
      }}
    >
      <div className="logo">
        <img
          src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/logos/growly-footer.png"
          alt="Growly"
          className="object-contain h-10 lg:h-12"
        />
      </div>
    </footer>
  );
};

export default Footer;
