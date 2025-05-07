import React from "react";

const Header = () => {
  return (
    <header
      className="px-4 lg:px-8 py-2 w-full flex justify-between items-center border-b bg-white"
      style={{
        paddingTop: "calc(env(safe-area-inset-top) + 0.5rem)",
        borderBottom: "2px solid #0C46F2",
      }}
    >
      <div className="logo">
        <img
          src="https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/logos/growly-footer.png"
          alt="Growly"
          className="w-auto h-6 lg:h-12 object-contain"
        />
      </div>
      <div></div> {/* Contenedor vacío para mantener el diseño */}
    </header>
  );
};

export default Header;