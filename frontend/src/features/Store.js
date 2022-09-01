import { configureStore } from "@reduxjs/toolkit";
import authSlice from './users/userSlice'

const store = configureStore({
    reducer:{
        user: authSlice,

    }
})

export default store