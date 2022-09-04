import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'Login',
    initialState: {
        loggedin: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    },
    reducers:{
        LoginUser: (state,action)=>{
            state.loggedin = action.payload
        }
    }
})

export const {LoginUser} = userSlice.actions

export default userSlice.reducer