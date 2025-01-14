import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
});

export const submitForm = async (data) => {
  return await API.post("form/submit-form", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const submitCartData = async (data) => {
  return await API.post("cart/submit-cart", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
