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

const SevenDayRangePicker = ({ selectedPackage }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const HUBSPOT_PORTAL_ID = import.meta.env.VITE_HUBSPOT_PORTAL_ID;
  const FORM_GUID_A = import.meta.env.VITE_FORM_GUID_A;
  const FORM_GUID_A2 = import.meta.env.VITE_FORM_GUID_A2;

  // console.log(HUBSPOT_PORTAL_ID);
  // console.log(FORM_GUID_A);
  // console.log(FORM_GUID_A2);

  const formData = useSelector((state) => state.formData);

  const packageData = () => {
    // console.log("Selected package is ", selectedPackage);
    // console.log("Data from formData Store", formData);
  };

  const sanitizeDate = (isoDate) => {
    const formattedDate = dayjs(isoDate).format("YYYY-MM-DD");
    return formattedDate;
  };

  const handleStartDateChange = (date) => {
    if (date) {
      setStartDate(date);
      setEndDate(date.add(6, "day")); // Automatically calculate the 7-day range
    }
    packageData();
  };

  const handleHubspotSubmission = async (payload) => {
    const formGUID = selectedPackage.name === "A" ? FORM_GUID_A : FORM_GUID_A2;

    const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${formGUID}`;

    try {
      const response = await Promise.all([
        axios.post(endpoint, payload, {
          headers: { "Content-Type": "application/json" },
        }),
      ]);

      // const response = await axios.post(endpoint, payload, {
      //   headers: { "Content-Type": "application/json" },
      // });
      // console.log("HubSpot response:", response);
      console.log("Hubspot success");

      if (response[0].data) {
        // console.log(response[0].data);
        // window.location.href = response[0].data.redirectUri;
        window.location.replace(response[0].data.redirectUri);
        // window.open(response[0].data.redirectUri, "_blank");
        // window.close();

        // console.log("data is here");
      }
    } catch (error) {
      console.error(
        "Error occurred while submitting to HubSpot:",
        error.message
      );
    }
  };

  const handleAddtoCart = async () => {
    const cartData = {
      name: formData.name,
      email: formData.email,
      packageType: selectedPackage.name,
      price: selectedPackage.price,
      startDate: sanitizeDate(startDate.toISOString()),
      endDate: sanitizeDate(endDate.toISOString()),
      Paymentstatus: false,
    };

    const updatedFormData = {
      fields: [
        { name: "name", value: formData.name },
        { name: "email", value: formData.email },
        {
          name: "fecha_inicio_alquiler",
          value: sanitizeDate(startDate.toISOString()),
        },
        {
          name: "fecha_fin_alquiler",
          value: sanitizeDate(endDate.toISOString()),
        },
        { name: "package_type", value: selectedPackage.name },
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

    try {
      await submitCartData(cartData);
      // console.log(cartData);
      // console.log("Data added to the DB");

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
        className="h-max lg:min-h-48 w-full
	   lg:w-5/6 flex flex-col  justify-between items-center space-y-0 lg:space-y-6  gap-8 md:gap-10 lg:gap-2 py-10 lg:px-12 lg:py-6 bg-gray-200/60 shadow-2xl rounded-2xl "
      >
        <div className="w-full flex flex-col justify-center text-center">
          <h2 className="text-3xl lg:text-2xl font-semibold text-gray-800">
            BOOK NOW!
          </h2>
          <span className="uppercase">Best price guaranteed</span>
        </div>

        <DatePicker
          label="Start Date"
          value={startDate}
          onChange={handleStartDateChange}
          disablePast
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
            <div className="lg:w-80 mt-4 text-center bg-white p-4 rounded-md shadow">
              <h3 className="text-lg font-semibold">Selected Dates:</h3>

              <div className="lg:mt-3 flex justify-center gap-5">
                <div className="">
                  <span className="uppercase ">Start Date:</span>
                  <span className="block lg:text-2xl text-Bold text-triumph-red">
                    {startDate.format("DD-MM-YYYY")}
                  </span>
                </div>
                <br />
                <div className="">
                  <span className="uppercase ">End Date:</span>
                  <span className="block lg:text-2xl text-Bold text-triumph-red">
                    {endDate.format("DD-MM-YYYY")}
                  </span>
                </div>
              </div>
            </div>
            <div className="">
              <button
                className="btn w-full px-8 py-4 rounded-xl tracking-wider bg-triumph-red text-white  hover:bg-triumph-red-hover hover:scale-105 text-xl text-Medium transition-all ease-in-out duration-300 shadow-3xl"
                onClick={handleAddtoCart}
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
