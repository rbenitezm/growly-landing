import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 lg:px-10 py-6   w-full h-24 flex justify-center items-center z-40 bg-black">
      {/* <span className="text-white text-sm lg:text-base">
        info@triumphadventure.es
      </span> */}
      <div className="logo">
        <img
          src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/logos/LOGO_white.png"
          alt=""
          className=" w-full h-10 lg:h-12"
        />
      </div>
    </footer>
  );
};

export default Footer;
