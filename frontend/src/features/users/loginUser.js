import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'Login',
    initialState: {
        userInfo: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    },
    reducers:{
        LoginUser: (state,action)=>{
            state.userInfo = action.payload
        }
    }
})

export const {LoginUser} = userSlice.actions

export default userSlice.reducer