import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    csrf: ''
}

export const commonSlice = createSlice({
    name: 'institutions',
    initialState,
    reducers: {
        getToken: (state, action) => {
            state.csrf = action.payload
        },
    }
})


export const {getToken} = commonSlice.actions;
export default commonSlice.reducer;