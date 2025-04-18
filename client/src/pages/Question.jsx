import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import { submitForm } from "../api";
registerCoreBlocks();
import { useDispatch } from "react-redux";
import { setFormDataReducer } from "../redux/formDataSlice";

const Question = ({ lang }) => {
  const [formData, setFormData] = useState({});
  const HUBSPOT_PORTAL_ID = "20102221";
  // const HUBSPOT_FORM_GUID = "eacfabb0-75e0-4416-8532-de300564026c";
  const HUBSPOT_FORM_GUID = "81b13a3b-ac72-4afa-8a81-a7c341dff40c";

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`;

  const sendDataToApi = async (updatedFormData) => {
    try {
      dispatch(setFormDataReducer(updatedFormData.formData));

      // console.log(
      //   "Form data successfully added to Redux Store.  Payload: ",
      //   updatedFormData.formData
      // );

      const [hubspotResponse, backendResponse] = await Promise.all([
        axios.post(endpoint, updatedFormData, {
          headers: { "Content-Type": "application/json" },
        }),

        await submitForm(updatedFormData),
      ]);
      // console.log("HubSpot response:", hubspotResponse.data);
      // console.log("Backend response:", backendResponse.data);
      console.log("All responses success");

      setTimeout(() => {
        navigate("/select-package");
      }, 500);
    } catch (error) {
      console.error("Error occurred while submitting data:", error.message);
    }
  };

  const getCookie = (cookieName) => {
    const name = `${cookieName}=`;
    const decodedCookie = decodeURIComponent(document.cookie); // Decode the cookies
    const cookieArray = decodedCookie.split(";");
    for (let cookie of cookieArray) {
      cookie = cookie.trim();
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return null; // Return null if the cookie is not found
  };

  return (
    <div className="py-16" style={{ width: "100%", height: "100vh" }}>
      <Form
        formId="1"
        formObj={{
          customCSS: `
      input,button {
        color:"#CD192D"
      }
    `,
          blocks: [
            {
              name: "welcome-screen",
              id: "jg1401r",
              attributes: {
                label: "Questionnaire",
                description: "Ready to build the family connection of a lifetime? 🚀",
              },
            },
            {
              name: "short-text",
              id: "email01",
              attributes: {
                classnames: "first-block",
                required: true,
                label: "What's your e-mail address?",
                placeholder: "So we can send you all the details!",
              },
            },
          ],

          theme: {
            font: "Roboto",
            buttonsBgColor: "#CD192D",
            logo: {
              src: "",
            },
            questionsColor: "#000",
            answersColor: "#CD192D",
            buttonsFontColor: "#fff",
            buttonsBorderRadius: 25,
            errorsFontColor: "#fff",
            errorsBgColor: "#f00",
            progressBarFillColor: "#000",
            progressBarBgColor: "#ccc",
          },
        }}
        onSubmit={(
          data,
          { completeForm, setIsSubmitting, goToBlock, setSubmissionErr }
        ) => {
          setTimeout(() => {
            console.log(data);

            const updatedFormData = {
              // fields: [
              //   {
              //     name: "excites_rider",
              //     value: data.answers.excites01.value[0],
              //   },
              //   {
              //     name: "experienced_rider",
              //     value: data.answers.experience01.value[0],
              //   },
              //   {
              //     name: "typeOf_ride",
              //     value: data.answers.ride01.value[0],
              //   },
              //   {
              //     name: "tipo_de_carnet_de_moto",
              //     value: data.answers.licenceType.value[0],
              //   },
              //   { name: "equipamiento", value: data.answers.gearReq.value[0] },
              //   {
              //     name: "motorcycle_model",
              //     value: data.answers.bikeModel.value[0],
              //   },
              //   { name: "email", value: data.answers.email01.value },
              //   { name: "firstname", value: data.answers.name01.value },
              //   { name: "phone", value: data.answers.phone01.value },
              // ],

              fields: [
                { name: "email", value: data.answers.email01.value },
              ],

              formData: {
                email: data.answers.email01.value
              },
              context: {
                pageUri: window.location.href,
                pageName: document.title,
                hutk: getCookie("hubspotutk"),
              },
              legalConsentOptions: {
                legitimateInterest: {
                  value: true,
                  subscriptionTypeId: 999,
                  legalBasis: "LEAD",
                  text: "I agree to allow Example Company to store and process my personal data.",
                },
              },
            };

            setFormData(updatedFormData);

            // console.log(updatedFormData);

            sendDataToApi(updatedFormData);

            setIsSubmitting(false);
            completeForm();
          }, 500);
        }}
      />
    </div>
  );
};

export default Question;

// const sendDataToApi = async (updatedFormData) => {
//   try {
//     const response = await axios.post(endpoint, updatedFormData, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     console.log("Form submitted successfully:", response.data);
//   } catch (error) {
//     console.error(
//       "Error submitting form:",
//       error.response?.data || error.message
//     );
//   }
//   setTimeout(() => {
//     navigate("/select-package");
//   }, 1000);
// };
