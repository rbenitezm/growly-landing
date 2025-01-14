import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cartItem")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.length = 0;
      state.push(action.payload);

      localStorage.setItem("cart", JSON.stringify(state));
    },

    remove(state, action) {
      state.length = 0;
      localStorage.remove("cart");
    },
    increment(state, action) {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    decrement(state, action) {
      const item = state.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { add, remove, increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
