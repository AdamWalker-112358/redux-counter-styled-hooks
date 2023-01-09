import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState: 555,
    reducers: {
      increment: (state,action) => state += action.payload,
      decrement: (state,action) => state -= action.payload,  
    }
})

export default counterSlice.reducer
export const {increment, decrement} = counterSlice.actions

