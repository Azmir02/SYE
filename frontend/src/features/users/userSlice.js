import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'registration',
    initialState: {
        userInfo: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    },
    reducers:{
        createUser: (state,action)=>{
            state.userInfo = action.payload
        }
    }
})

export const {createUser} = userSlice.actions

export default userSlice.reducer