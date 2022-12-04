import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./users/userSlice";
import loginSlice from "./users/loginUser";
import themeSlice from "./users/themeSlice";

const store = configureStore({
  reducer: {
    registration: authSlice,
    login: loginSlice,
    theme: themeSlice,
  },
});

export default store;
