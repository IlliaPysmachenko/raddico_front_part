import { createSlice } from '@reduxjs/toolkit';
import { getStudiesThunk } from '@/src/redux/studiesSlice/studiesSlice';
import { getOptions } from '@/src/redux/searchBlockSlice/searchBlockSlice';

const initialState = {
  isLoading: false,
  isError: false,
};
export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    closeError: (state) => {
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStudiesThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStudiesThunk.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(getStudiesThunk.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(getOptions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOptions.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(getOptions.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export const { closeError } = loadingSlice.actions;
export default loadingSlice.reducer;
