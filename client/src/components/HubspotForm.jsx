import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HubspotForm.css";

const translations = {
  en: {
    formText: "Discover the Perfect Adventure",
    subText: "Get all the important info about the experience",
  },
  de: {
    formText: "Entdecken Sie das perfekte Abenteuer",
    subText: "Holen Sie sich alle wichtigen Infos über das Erlebnis",
  },
};

const HubspotForm = ({ lang }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        // hbspt.forms.create({
        //   portalId: "20102221",
        //   formId: "ab7be1c1-4f52-45ed-8b2b-a8e442c70755",
        //   region: "na1"
        // });

        if (lang === "de") {
          window.hbspt.forms.create({
            portalId: "20102221",
            formId: "ab7be1c1-4f52-45ed-8b2b-a8e442c70755",
            target: "#hubspotForm",
            css: "",
            onFormSubmitted: () => {
              setTimeout(() => {
                navigate("/de/select-package");
              }, 2000);
            },
          });
        } else {
          window.hbspt.forms.create({
            portalId: "20102221",
            formId: "74c977d1-ed05-4227-a588-60ae1d90195c",
            target: "#hubspotForm",
            css: "",
            onFormSubmitted: () => {
              setTimeout(() => {
                navigate("/select-package");
              }, 2000);
            },
          });
        }
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="bg-white   p-8 flex flex-col  justify-center items-center md:p-12 rounded-lg  w-[350px] lg:w-[650px]">
      <div className="text-triumph-red text-center">
        <h1 className="text-ExtraBold  text-2xl md:text-3xl">
          {/* Discover the Perfect Adventure */}
          {translations[lang]?.formText || translations["en"].formText}
        </h1>

        <span className="text-Regular  text-base md:text-lg">
          {/* Get all the important info about the experience */}
          {translations[lang]?.subText || translations["en"].subText}
        </span>
      </div>
      <div id="hubspotForm" className="w-max mt-10 text-Medium "></div>
    </div>
  );
};

export default HubspotForm;

{
  /* <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
<script>
  hbspt.forms.create({
    portalId: "20102221",
    formId: "74c977d1-ed05-4227-a588-60ae1d90195c"
  });
</script> */
}
