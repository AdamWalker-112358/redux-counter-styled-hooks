import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
    name: 'colorPicker',
    initialState: 'white',
    reducers: {
        colorChanged: (state, action) => state = action.payload 
    }
})

export default colorSlice.reducer
export const { colorChanged } = colorSlice.actions

