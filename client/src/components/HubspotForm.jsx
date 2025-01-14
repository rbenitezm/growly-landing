import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HubspotForm.css";

const HubspotForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
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
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="bg-white p-12 rounded-lg w-5/6 lg:w-max">
      <div className="text-triumph-red text-center">
        <h1 className="text-ExtraBold  text-3xl">The time is now.</h1>
        <span className="text-Regular text-lg">
          Stop dreaming of the open road and start living it.
        </span>
      </div>
      <div id="hubspotForm" className="mt-10 text-Medium "></div>
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
