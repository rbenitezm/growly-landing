import { useEffect, useRef } from "react";
import React from "react";

const VideoEmbedMaster = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full relative" style={{ paddingTop: "56.25%" }}>
      <div
        className="wistia_embed wistia_async_ng37d85bqc absolute top-0 left-0 w-full h-full"
      ></div>
    </div>
  );
};

export default VideoEmbedMaster;