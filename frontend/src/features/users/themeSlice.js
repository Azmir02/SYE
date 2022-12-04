import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "Theme",
  initialState: {
    mode: localStorage.getItem("mode")
      ? JSON.parse(localStorage.getItem("mode"))
      : null,
  },
  reducers: {
    themeSwitch: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { themeSwitch } = themeSlice.actions;

export default themeSlice.reducer;
