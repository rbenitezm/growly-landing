import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ lang }) => {
  let link = "";
  if (lang == "de") {
    link = "/de";
  } else {
    link = "/";
  }

  return (
    <header className="fixed p-6 top-00 left-0 w-full h-16 md:h-20 flex justify-center items-center z-40 bg-black">
      <Link to={link}>
        <div className="logo">
          <img
            src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/logos/LOGO_white.png"
            alt=""
            className=" w-full h-10 lg:h-14"
          />
        </div>
      </Link>
    </header>
  );
};

export default NavBar;
