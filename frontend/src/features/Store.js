import { configureStore } from "@reduxjs/toolkit";
import authSlice from './users/userSlice'
import loginSlice from './users/loginUser'

const store = configureStore({
    reducer:{
        user: authSlice,
        login: loginSlice

    }
})

export default store