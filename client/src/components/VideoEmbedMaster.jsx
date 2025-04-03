import { useEffect, useRef } from "react";
import React from "react";

const VideoEmbedMaster = () => {
  const iframeRef = useRef(null);

  return (
    <div
      className="max-w-[90vw] h-max md:h-auto md:w-5/6 lg:w-full lg:max-w-[70vw] flex justify-center items-center box-border "
      style={{ width: "90%" }}
    >
      <iframe
        src="https://fast.wistia.net/embed/iframe/ng37d85bqc"
        title="Wistia Video"
        allow="autoplay; fullscreen"
        allowFullScreen
        className="w-full p-0 h-[25vh] md:h-80 md:w-5/6 lg:w-full max-w-[90vw] lg:max-w-[45vw] lg:h-[50vh] rounded-xl overflow-hidden "
      ></iframe>
    </div>
  );
};

export default VideoEmbedMaster;

// return (
//   <div
//     className="max-w-[90vw] h-max md:h-auto md:w-5/6 lg:w-full lg:max-w-[70vw] flex justify-center items-center box-border "
//     style={{ width: "90%" }}
//   >
//     <iframe
//       ref={iframeRef}
//       width="560"
//       height="315"
//       src="https://www.youtube.com/embed/sn3GfVmfu_4?autoplay=1&mute=1&si=uEUvYJaWEugszLVX"
//       title="YouTube video player"
//       frameBorder="0"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//       referrerPolicy="strict-origin-when-cross-origin"
//       allowFullScreen
//       className="w-full p-0 h-[25vh] md:h-80 md:w-5/6 lg:w-full max-w-[90vw] lg:max-w-[45vw] lg:h-[50vh] rounded-xl overflow-hidden"
//     ></iframe>
//   </div>
// );
// };

{
  /* <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/sn3GfVmfu_4?si=uEUvYJaWEugszLVX"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
  className="w-full p-0 h-[25vh] md:h-80 md:w-5/6 lg:w-full max-w-[90vw] lg:max-w-[45vw] lg:h-[50vh] rounded-xl overflow-hidden"
  
></iframe> */
}

// <iframe
//   src="https://player.vimeo.com/video/1049614632?badge=0&autopause=0&player_id=0&app_id=58479"
//   title="Vimeo video player"
//   frameBorder="0"
//   allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
//   className="w-full p-0 h-[25vh] md:h-80 md:w-5/6 lg:w-full max-w-[90vw] lg:max-w-[45vw] lg:h-[50vh] rounded-xl overflow-hidden"
// ></iframe>;

// const VideoEmbed = () => {
//   const iframeRef = useRef(null);

//   useEffect(() => {
//     const unmuteVideo = () => {
//       const iframe = iframeRef.current;
//       if (iframe) {
//         const src = iframe.src.replace("&mute=1", ""); // Remove mute parameter
//         iframe.src = src; // Reload iframe to apply changes
//       }
//       document.removeEventListener("click", unmuteVideo); // Remove event listener after first click
//     };

//     document.addEventListener("click", unmuteVideo); // Wait for user interaction
//   }, []);
//   return (
//     <div
//       className="max-w-[90vw] h-max md:h-auto md:w-5/6 lg:w-full lg:max-w-[70vw] flex justify-center items-center box-border "
//       style={{ width: "90%" }}
//     >
//       <iframe
//         ref={iframeRef}
//         width="560"
//         height="315"
//         src="https://www.youtube.com/embed/sn3GfVmfu_4?autoplay=1&mute=1&si=uEUvYJaWEugszLVX"
//         title="YouTube video player"
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         referrerPolicy="strict-origin-when-cross-origin"
//         allowFullScreen
//         className="w-full p-0 h-[25vh] md:h-80 md:w-5/6 lg:w-full max-w-[90vw] lg:max-w-[45vw] lg:h-[50vh] rounded-xl overflow-hidden"
//       ></iframe>
//     </div>
//   );
// };
