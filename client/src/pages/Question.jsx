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

const Question = () => {
  const [formData, setFormData] = useState({});
  const HUBSPOT_PORTAL_ID = "20102221";
  const HUBSPOT_FORM_GUID = "eacfabb0-75e0-4416-8532-de300564026c";

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
                description: "Tailored for Your Perfect Adventure",
              },
            },

            {
              name: "multiple-choice",
              id: "excites01",
              attributes: {
                required: true,
                multiple: true,
                verticalAlign: true,
                label: "What excites you the most about riding in Andalusia?",
                choices: [
                  {
                    label:
                      "Exploring breathtaking landscapes (mountains, coasts, and hidden gems).",
                    value:
                      "Exploring breathtaking landscapes (mountains, coasts, and hidden gems).",
                  },
                  {
                    label: "Feeling the thrill of the open road and freedom.",
                    value: "Feeling the thrill of the open road and freedom.",
                  },
                  {
                    label:
                      "Discovering Andalusia’s culture, food, and local secrets.",
                    value:
                      "Discovering Andalusia’s culture, food, and local secrets.",
                  },
                  {
                    label:
                      "Meeting other riders and sharing unique experiences.",
                    value:
                      "Meeting other riders and sharing unique experiences.",
                  },
                ],
              },
            },
            {
              name: "multiple-choice",
              id: "experience01",
              attributes: {
                required: true,
                multiple: true,
                verticalAlign: true,
                label: "How experienced are you as a rider?",
                choices: [
                  {
                    label:
                      "Beginner (I’ve ridden less than a year or occasionally).",
                    value: "Beginner",
                  },
                  {
                    label:
                      "Intermediate (I ride regularly and have a good handle on diverse terrains).",
                    value: "Intermediate",
                  },
                  {
                    label:
                      "Advanced (I’m highly skilled and enjoy challenging roads and off-road trails).",
                    value: "Advanced",
                  },
                ],
              },
            },
            {
              name: "multiple-choice",
              id: "ride01",
              attributes: {
                required: true,
                multiple: true,
                verticalAlign: true,
                label: " What kind of riding experience are you looking for?",
                choices: [
                  {
                    label:
                      "Smooth and scenic rides through picturesque landscapes.",
                    value:
                      "Smooth and scenic rides through picturesque landscapes.",
                  },
                  {
                    label:
                      "Challenging and technical routes for skilled riders.",
                    value:
                      "Challenging and technical routes for skilled riders.",
                  },
                  {
                    label:
                      "A bit of everything—scenery, culture, and adrenaline.",
                    value:
                      "A bit of everything—scenery, culture, and adrenaline.",
                  },
                ],
              },
            },
            {
              name: "multiple-choice",
              id: "licenceType",
              attributes: {
                required: true,
                multiple: true,
                verticalAlign: true,
                label: "Do you currently hold an A2 licence?",
                choices: [
                  {
                    label: "Yes, I require an A2-adapted motorcycle.",
                    value: "A2",
                  },
                  {
                    label: "No, I’m fully licensed for standard models.",
                    value: "A",
                  },
                ],
              },
            },
            {
              name: "multiple-choice",
              id: "bikeModel",
              attributes: {
                required: true,
                multiple: true,
                verticalAlign: true,
                label:
                  "Which Triumph model excites you the most for your adventure?",
                choices: [
                  {
                    label: "Triumph Tiger Sport 660 (A2 licence)",
                    value: "Tiger Sport 660",
                  },
                  {
                    label: "Triumph Tiger 850 Sport (A2 licence)",
                    value: "Tiger Sport 850",
                  },
                  {
                    label: "Triumph Tiger 900 GT Pro (A2 licence)",
                    value: "Tiger 900 GT PRO",
                  },
                  {
                    label: "Triumph Tiger 1200 GT Pro (A licence)",
                    value: "Tiger 1200 GT PRO",
                  },
                  {
                    label: "Triumph Tiger 900 Rally Pro (A licence)",
                    value: "Tiger 900 Rally PRO",
                  },
                  {
                    label: "Triumph Tiger 1200 Rally Pro (A licence)",
                    value: "Tiger 1200 Rally PRO",
                  },
                ],
              },
            },
            {
              name: "multiple-choice",
              id: "gearReq",
              attributes: {
                required: true,
                multiple: true,
                verticalAlign: true,
                label:
                  "How important is premium equipment and support to your adventure?",
                choices: [
                  {
                    label:
                      "Essential—I want top-notch gear and support for a seamless experience.",
                    value: "básico",
                  },
                  {
                    label:
                      "Somewhat important—I can manage with fewer frills if the riding is great.",
                    value: "completo",
                  },
                  {
                    label:
                      "Not very important—I’m all about the road and the bike.",
                    value: "sin equipamiento",
                  },
                ],
              },
            },
            {
              name: "short-text",
              id: "email01",
              attributes: {
                classnames: "first-block",
                required: true,
                label: "What's your e-mail address?",
              },
            },
            {
              name: "short-text",
              id: "name01",
              attributes: {
                classnames: "first-block",
                required: true,
                label: "What's your Name?",
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
              fields: [
                {
                  name: "excites_rider",
                  value: data.answers.excites01.value[0],
                },
                {
                  name: "experienced_rider",
                  value: data.answers.experience01.value[0],
                },
                {
                  name: "typeOf_ride",
                  value: data.answers.ride01.value[0],
                },
                {
                  name: "tipo_de_carnet_de_moto",
                  value: data.answers.licenceType.value[0],
                },
                { name: "equipamiento", value: data.answers.gearReq.value[0] },
                {
                  name: "motorcycle_model",
                  value: data.answers.bikeModel.value[0],
                },
                { name: "email", value: data.answers.email01.value },
                { name: "firstname", value: data.answers.name01.value },
              ],

              formData: {
                name: data.answers.name01.value,
                email: data.answers.email01.value,
                motorbikeLicense: data.answers.licenceType.value[0],
                motorbikeModel: data.answers.bikeModel.value[0],
                equipment: data.answers.gearReq.value[0],
                riderExperience: data.answers.experience01.value[0],
                expectedExperience: data.answers.ride01.value[0],
                excites: data.answers.excites01.value[0],
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
