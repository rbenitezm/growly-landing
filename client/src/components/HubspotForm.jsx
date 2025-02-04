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
              navigate("/quiz");
            }, 2000);
          },
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="bg-white w-max p-8 flex flex-col justify-center items-center md:p-12 rounded-lg  lg:w-max">
      <div className="text-triumph-red text-center">
        <h1 className="text-ExtraBold  md:text-3xl">
          Discover the Perfect Adventure
        </h1>
        <span className="text-Regular  text-sm md:text-lg">
          Get all the important info <br />
          about the experience
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
