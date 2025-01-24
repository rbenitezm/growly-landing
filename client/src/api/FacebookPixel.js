import ReactPixel from "react-facebook-pixel";

export const initMetaPixel = () => {
  const options = {
    autoConfig: true, // Set to `false` to disable automatic configuration
    debug: true, // Enable this to see Pixel debugging in the console
  };

  ReactPixel.init("1293386828548879", {}, options);
};

export const trackPageView = () => {
  ReactPixel.pageView(); // Track page views
};

export const trackEvent = (eventName, data = {}) => {
  ReactPixel.track(eventName, data); // Track custom events
};
