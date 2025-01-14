import { createSlice } from "@reduxjs/toolkit";

const formDataSlice = createSlice({
  name: "formData",
  initialState: {},
  reducers: {
    setFormDataReducer: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setFormDataReducer } = formDataSlice.actions;
export default formDataSlice.reducer;

// const formDataSlice = createSlice({
//   name: "formData",
//   initialState,
//   reducers: {
//     setFormData: (state, action) => {
//       state.formData = action.payload;
//     },
//   },
// });
// export const { setFormData } = formDataSlice.actions;
// export default formDataSlice.reducer;
