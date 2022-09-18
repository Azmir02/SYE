import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
}

export const userSlice = createSlice({
    name: 'authUser',
    initialState,
    reducers:{
        createUser: (state,action)=>{
            state.userInfo = action.payload
        },
    }
})

export const {createUser,isLoading,isVerified} = userSlice.actions

export default userSlice.reducer