import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    csrf: ''
}

export const institutionsSlice = createSlice({
    name: 'institutions',
    initialState,
    reducers: {
        getToken: (state, action) => {
            state.csrf = action.payload
        },
    }
})


export const {getToken} = institutionsSlice.actions;
export default institutionsSlice.reducer;