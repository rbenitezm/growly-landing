import React from "react";

const VideoEmbed = () => {
  return (
    <div
      className="max-w-[90vw] h-max md:h-auto md:w-5/6 lg:w-full lg:max-w-[70vw] flex justify-center items-center box-border "
      style={{ width: "90%" }}
    >
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/sn3GfVmfu_4?si=uEUvYJaWEugszLVX"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        className="w-full p-0 h-[25vh] md:h-80 md:w-5/6 lg:w-full max-w-[90vw] lg:max-w-[45vw] lg:h-[50vh] rounded-xl overflow-hidden"
      ></iframe>
    </div>
  );
};

export default VideoEmbed;

// <iframe
//   src="https://player.vimeo.com/video/1049614632?badge=0&autopause=0&player_id=0&app_id=58479"
//   title="Vimeo video player"
//   frameBorder="0"
//   allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
//   className="w-full p-0 h-[25vh] md:h-80 md:w-5/6 lg:w-full max-w-[90vw] lg:max-w-[45vw] lg:h-[50vh] rounded-xl overflow-hidden"
// ></iframe>;
