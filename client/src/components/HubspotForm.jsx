import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HubspotForm.css";

const translations = {
  en: {
    formTex: "Discover the Perfect Parenting Method",
    subText: "Get all the essential info about the Growly experience"
  },
  es: {
    formText: "Reserva tu plaza hoy",
    subText: "!Un paso más cerca de conocer los secretos!"
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
        } else if (lang === "es") {
          window.hbspt.forms.create({
            portalId: "145993063",
            formId: "9c3a2199-b8e0-48fe-a478-7d4608b2cc52",
            target: "#hubspotForm",
            css: "",
            onFormSubmitted: () => {
              setTimeout(() => {
                navigate("/es/select-package");
              }, 2000);
            },
          });
        } else {
          window.hbspt.forms.create({
            portalId: "145993063",
            formId: "9c3a2199-b8e0-48fe-a478-7d4608b2cc52",
            target: "#hubspotForm",
            css: "https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/css/HubspotForm.css",
            onFormSubmitted: () => {
              setTimeout(() => {
                navigate("/select-package");
              }, 2000);
            },
          });
        }
      }
    };
    console.log("ADddin script")
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <div id="hubspotForm" className="hubspotForm"></div>
      <div style={{
        position: "relative",
        bottom: "90px",
        left: "0",
        width: "100%",
        height: "120px",
        backgroundColor: "white",
        zIndex: "9999",
        pointerEvents: "none !important",
        cursor: "default !important",
      }}></div>
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
