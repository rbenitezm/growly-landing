import React from "react";
import Hero from "../Sections/Hero";

const Home = ({ lang }) => {
  return (
    <div className="w-full h-max "
    style={{
      backgroundColor: "#0C46F2", // Fondo azul
      color: "white", // Texto blanco para contraste
      padding: "20px", // Espaciado interno
      borderRadius: "8px", // Bordes redondeados
      textAlign: "center", // Centrar el texto
    }}
    >
      {/* Hero Section */}
      <Hero lang={lang} />
    </div>
  );
};

export default Home;

{
  /* <div
          className="max-w-[90vw] h-max lg:w-full lg:max-w-[80vw] flex justify-center items-center box-border "
          style={{ width: "100%" }}
        >
          <iframe
            src="https://www.youtube.com/embed/pShXJyvadxU?si=Yzvu6klz8z45z1cb"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="w-full p-0 h-[20vh] lg:w-full lg:max-w-[60vw] lg:h-[60vh] rounded-xl overflow-hidden"
          ></iframe>
        </div> */
}
