import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const translations = {
  en: {
    text: "Our dev team is on its way on their Triumph to fix this.",
  },
  de: {
    text: "Unser Entwicklerteam ist mit seinem Triumph unterwegs, um das Problem zu beheben.",
  },
};

const NotFound = ({ lang }) => {
  const navigate = useNavigate();

  function dummyFunc() {
    // alert("Button clicked");
    // let link = "";
    if (lang == "de") {
      navigate("/de");
    } else {
      navigate("/");
    }
  }

  return (
    <div className="w-full min-h-screen px-10 lg:px-0 flex justify-center items-center text-center flex-col gap-2 lg:gap-3 Sans">
      <span className="text-5xl tracking-widest">ERROR</span>
      <div className="text-8xl italic font-extrabold ">
        <span className="">4</span>
        <span className="text-triumph-red">0</span>
        <div className="inline">4</div>
        {/* 404 */}
      </div>
      <h2 className="text-4xl lg:text-5xl font-bold tracking-widest">
        NOT FOUND
      </h2>

      <br />
      <p className="text-xl lg:text-4xl font-bold ">
        {/* Our dev team is on its way on their Triumph to fix this.{" "} */}
        {translations[lang]?.text || translations["en"].text}
      </p>
      <img
        src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/icons/down-arrow.png"
        alt=""
        className="h-20 lg:h-20"
      />

      {/* <Button title="HOME" func={dummyFunc} /> */}
      <button
        className="w-56 lg:w-56 p-3 rounded-lg text-[1rem] lg:text-base font-semibold tracking-wider bg-triumph-red text-white hover:bg-triumph-red-hover hover:scale-105 transition-all ease-in-out duration-300  shadow-custom-shadow"
        onClick={dummyFunc}
      >
        HOME
      </button>
    </div>
  );
};

export default NotFound;
