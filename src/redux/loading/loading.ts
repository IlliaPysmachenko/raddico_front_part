import { createSlice } from '@reduxjs/toolkit';
import { getStudiesThunk, sendStudyActions } from '@/src/screens/home/studiesBlock/slice/thunkCreators';
import { getOptions } from '@/src/screens/home/searchPanelBlock/slice/thunkCreators';
import { deleteTitle, verifyTitle } from '@/src/screens/configurationPage/aeTitlesTab/slice/thunkCreators';

const initialState = {
  isLoading: false,
  serverMessage: {
    type: '',
    messageBody: '',
    isShoved: false,
  },
};
export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    closeMessage: (state) => {
      state.serverMessage.isShoved = false;
    },
    setLoading: (state, { payload }: any) => {
      state.isLoading = payload;
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
        const data = {
          type: 'error',
          isShoved: true,
          messageBody: 'Something went wrong. Please try to reload the page.',
        };
        state.serverMessage = data;
        state.isLoading = false;
      })

      .addCase(getOptions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOptions.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(getOptions.rejected, (state, { payload }: any) => {
        const data = {
          type: 'error',
          isShoved: true,
          messageBody: payload.message,
        };
        state.serverMessage = data;
        state.isLoading = false;
      })

      .addCase(sendStudyActions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendStudyActions.fulfilled, (state) => {
        const data = {
          type: 'success',
          isShoved: true,
          messageBody: 'Studies successfully added to the queue!',
        };
        state.serverMessage = data;
        state.isLoading = false;
      })
      .addCase(sendStudyActions.rejected, (state) => {
        const data = {
          type: 'error',
          isShoved: true,
          messageBody: 'Something went wrong. Please try to reload the page.',
        };
        state.serverMessage = data;
        state.isLoading = false;
      })

      .addCase(verifyTitle.fulfilled, (state, { payload }) => {
        let data;
        if (payload.result === '0') {
          data = {
            type: 'success',
            isShoved: true,
            messageBody: `Connection time: ${payload.connectionTime}. Echo time: ${payload.echoTime}. Release time: ${payload.releaseTime}`,
          };
        }
        if (payload.result === '3') {
          data = {
            type: 'error',
            isShoved: true,
            messageBody: payload.errorMessage,
          };
        }
        // @ts-ignore
        state.serverMessage = data;
        state.isLoading = false;
      })
      .addCase(verifyTitle.rejected, (state, { payload }: any) => {
        const data = {
          type: 'error',
          isShoved: true,
          messageBody: payload.message,
        };
        state.serverMessage = data;
        state.isLoading = false;
      })

      .addCase(deleteTitle.fulfilled, (state) => {
        const data = {
          type: 'success',
          isShoved: true,
          messageBody: 'AE Title deleted successfully!',
        };
        state.serverMessage = data;
        state.isLoading = false;
      })
      .addCase(deleteTitle.rejected, (state, { payload }: any) => {
        const data = {
          type: 'error',
          isShoved: true,
          messageBody: payload.message,
        };
        state.serverMessage = data;
        state.isLoading = false;
      });
  },
});

export const { closeMessage, setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
