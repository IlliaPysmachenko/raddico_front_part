import {createSlice} from "@reduxjs/toolkit";
import {getStudiesThunk} from "@/src/redux/studiesSlice/studiesSlice";


const initialState = {
    isLoading: false
}
export const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getStudiesThunk.pending, (state) => {state.isLoading = true});
        builder.addCase(getStudiesThunk.fulfilled, (state) => {state.isLoading = false});
    }
})

// export const {} = loadingSlice.actions;
export default loadingSlice.reducer