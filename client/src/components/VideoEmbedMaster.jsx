import { useEffect, useRef } from "react";
import React from "react";

const VideoEmbedMaster = () => {
  useEffect(() => {
    // Asegúrate de que el script de Wistia esté cargado
    const script = document.createElement("script");
    script.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Limpia el script al desmontar el componente
    };
  }, []);

  return (
    <div
      className="wistia_embed wistia_async_ng37d85bqc"
      style={{ height: "720px", width: "1080px" }}
    ></div>
  );

};

export default VideoEmbedMaster;