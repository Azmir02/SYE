import { configureStore } from "@reduxjs/toolkit";
import authSlice from './users/userSlice'
import loginSlice from './users/loginUser'

const store = configureStore({
    reducer:{
        registration: authSlice,
        login   : loginSlice

    }
})

export default store