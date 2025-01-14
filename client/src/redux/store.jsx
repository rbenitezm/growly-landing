import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import formDataReducer from "./formDataSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    formData: formDataReducer,
  },
});

export default store;
