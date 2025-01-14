import React from "react";

const NavBar = () => {
  return (
    <header className="fixed p-6 top-00 left-0 w-full h-20 flex justify-center items-center z-40 bg-black">
      <div className="logo">
        <img
          src="./images/LOGO_white.png"
          alt=""
          className=" w-full h-14 lg:h-14"
        />
      </div>
    </header>
  );
};

export default NavBar;
