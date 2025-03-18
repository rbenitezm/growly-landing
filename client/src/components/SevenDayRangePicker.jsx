import React, { useState } from "react";
import axios from "axios";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import Button from "./Button";
import { add } from "../redux/cartSlice";
import { submitCartData } from "../api";
import { useNavigate } from "react-router-dom";
import { trackEvent } from "../api/FacebookPixel";

const SevenDayRangePicker = ({ selectedPackage, lang }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const HUBSPOT_PORTAL_ID = import.meta.env.VITE_HUBSPOT_PORTAL_ID;
  const FORM_GUID_7DAY = import.meta.env.VITE_FORM_GUID_7DAY;
  const FORM_GUID_3DAY = import.meta.env.VITE_FORM_GUID_3DAY;

  const FORM_GUID_7DAY_GERMAN = import.meta.env.VITE_FORM_GUID_7DAY_GERMAN;
  const FORM_GUID_3DAY_GERMAN = import.meta.env.VITE_FORM_GUID_3DAY_GERMAN;

  // console.log(HUBSPOT_PORTAL_ID);
  // console.log(FORM_GUID_A);
  // console.log(FORM_GUID_A2);

  const formData = useSelector((state) => state.formData);

  const packageData = () => {
    // console.log("Selected package is ", selectedPackage);
    // console.log("Data from formData Store", formData);
    // console.log("Duration ", selectedPackage.duration);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setUserEmail(email);
    setIsEmailValid(validateEmail(email));
  };

  const sanitizeDate = (isoDate) => {
    const formattedDate = dayjs(isoDate).format("YYYY-MM-DD");
    return formattedDate;
  };

  const handleStartDateChange = (date, duration) => {
    if (date) {
      setStartDate(date);
      setEndDate(date.add(selectedPackage.duration - 1, "day")); // Automatically calculate the 7-day range
    }
    packageData();
  };

  const handleHubspotSubmission = async (payload) => {
    // let formGUID = "";
    // if (lang === "de") {
    //   formGUID =
    //     selectedPackage.name === "7-Day"
    //       ? FORM_GUID_7DAY_GERMAN
    //       : FORM_GUID_3DAY_GERMAN;
    // } else {
    //   formGUID =
    //     selectedPackage.name === "7-Day" ? FORM_GUID_7DAY : FORM_GUID_3DAY;
    // }

    const formGUID =
      lang === "de"
        ? selectedPackage.name === "7-Day"
          ? FORM_GUID_7DAY_GERMAN
          : FORM_GUID_3DAY_GERMAN
        : selectedPackage.name === "7-Day"
        ? FORM_GUID_7DAY
        : FORM_GUID_3DAY;

    const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${formGUID}`;

    try {
      // const response = await Promise.all([
      //   axios.post(endpoint, payload, {
      //     headers: { "Content-Type": "application/json" },
      //   }),
      // ]);

      // const response = await axios.post(endpoint, payload, {
      //   headers: { "Content-Type": "application/json" },
      // });
      // console.log("HubSpot response:", response);

      const response = await axios.post(endpoint, payload, {
        headers: { "Content-Type": "application/json" },
      });
      // console.log("Hubspot success", response.data);
      console.log("Hubspot success");

      if (response.data) {
        // console.log(response.data);
        window.location.href = response.data.redirectUri;
        // window.location.replace(response[0].data.redirectUri);
        // window.open(response[0].data.redirectUri, "_blank");
        // window.close();
      }
    } catch (error) {
      console.error(
        "Error occurred while submitting to HubSpot:",
        error.message
      );
    }
  };

  const handleAddtoCart = async () => {
    if (!isEmailValid) return;
    const cartData = {
      name: formData.name,
      email: userEmail,
      packageType: selectedPackage.name,
      price: selectedPackage.price,
      startDate: sanitizeDate(startDate.toISOString()),
      endDate: sanitizeDate(endDate.toISOString()),
      Paymentstatus: false,
    };

    const updatedFormData = {
      fields: [
        { name: "email", value: cartData.email },
        {
          name: "fecha_inicio_alquiler",
          value: sanitizeDate(startDate.toISOString()),
        },
        {
          name: "fecha_fin_alquiler",
          value: sanitizeDate(endDate.toISOString()),
        },
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title,
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

    trackEvent("BuyNow_Click", {
      label: "Buy Now",
      page: "Product Page",
    });

    try {
      await submitCartData(cartData);

      dispatch(add(cartData));
      // console.log("Data added to the Cart(Redux)");

      await handleHubspotSubmission(updatedFormData);
      // console.log("Data sent to Hubspot form.");
    } catch (error) {
      console.error(
        "Error occurred while submitting data:",
        error.response?.data || error.message
      );

      alert("Error occurred while submitting data.");
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div
        className="m-4 h-max lg:min-h-48 w-full
	   lg:w-5/6 flex flex-col  justify-between items-center space-y-0 lg:space-y-6  gap-5 md:gap-10 lg:gap-2 px-10 py-10 lg:px-12 lg:py-6 bg-gray-200/60  shadow-2xl rounded-2xl "
      >
        <div className="w-full flex flex-col justify-center text-center">
          <h2 className="text-3xl lg:text-2xl font-semibold text-gray-800">
            BOOK NOW!
          </h2>
          <span className="uppercase">Best price guaranteed</span>
        </div>

        <div className="flex flex-col w-full  px-4 lg:px-0">
          <label
            htmlFor=""
            className="text-DemiBold uppercase text-triumph-red text-sm"
          >
            Enter your email*
          </label>

          <input
            type="email"
            className="mt-1 w-full p-1 bg-transparent border-b-2 border-triumph-red focus:border-1 rounded-sm focus:border-triumph-red-hover focus:outline focus:outline-triumph-red-hover "
            onChange={handleEmailChange}
            value={userEmail}
          />
          {!isEmailValid && userEmail && (
            <span className="text-red-500 text-sm">
              Please enter a valid email.
            </span>
          )}
        </div>

        <DatePicker
          label="Adventure Start Date"
          value={startDate}
          onChange={handleStartDateChange}
          disablePast
          format="DD-MM-YYYY"
          renderInput={(params) => (
            <input
              {...params.inputProps}
              className="lg:w-42 bg-red-300 border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
              placeholder="Select Date"
            />
          )}
        />

        {startDate && endDate && (
          <>
            <div className=" flex flex-col justify-center items-center">
              <div className="px-4 py-1 rounded-lg bg-white shadow-xl">
                <span className="text-triumph-red text-sm lg:text-lg text-Bold">
                  {selectedPackage.duration}-Day Period
                </span>
              </div>
              <div className="lg:w-80 mt-4 text-center bg-white p-2 rounded-md shadow">
                <h3 className="text-lg font-semibold">Selected Dates:</h3>

                <div className="lg:mt-3 flex justify-center gap-8">
                  <div className="">
                    <span className="uppercase text-sm lg:text-xl">
                      Start Date:
                    </span>
                    <span className="block text-sm lg:text-xl text-Bold text-triumph-red">
                      {startDate.format("DD-MM-YYYY")}
                    </span>
                  </div>

                  <div className="">
                    <span className="uppercase text-sm lg:text-xl">
                      End Date:
                    </span>
                    <span className="block text-sm lg:text-xl text-Bold text-triumph-red">
                      {endDate.format("DD-MM-YYYY")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              {/* <button
                className="btn w-full px-6 py-1  lg:py-3 rounded-lg tracking-wider bg-triumph-red text-white  hover:bg-triumph-red-hover hover:scale-105 text-lg lg:text-xl text-Medium transition-all ease-in-out duration-300 shadow-3xl"
                onClick={handleAddtoCart}
                disabled={!isEmailValid}
              >
                Buy Now!
              </button> */}
              <button
                className={`btn w-full px-6 py-1 lg:py-3 rounded-lg tracking-wider 
    ${
      userEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)
        ? "bg-triumph-red text-white hover:bg-triumph-red-hover hover:scale-105 cursor-pointer"
        : "bg-gray-400 text-gray-700 cursor-not-allowed"
    } 
    text-lg lg:text-xl text-Medium transition-all ease-in-out duration-300 shadow-3xl`}
                onClick={handleAddtoCart}
                disabled={
                  !userEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)
                }
                id="buyNow"
              >
                Buy Now!
              </button>
            </div>
          </>
        )}
      </div>
    </LocalizationProvider>
  );
};

export default SevenDayRangePicker;
