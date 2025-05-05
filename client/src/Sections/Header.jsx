import React from "react";

const Header = () => {
  return (
    <header
      className="px-4 lg:px-8 py-1 w-full flex justify-between items-center border-b"
      style={{
        backgroundColor: "#FFFFFF", // Fondo blanco
        borderBottom: "2px solid #0C46F2", // Línea inferior azul
      }}
    >
      <div className="logo">
        <img
          src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/logos/growly-footer.png"
          alt="Growly"
          className="w-auto h-3 lg:h-12"
        />
      </div>
      <div></div> {/* Contenedor vacío para mantener el diseño */}
    </header>
  );
};

export default Header;