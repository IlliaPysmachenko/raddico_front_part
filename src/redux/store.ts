import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-named-as-default
import studiesSlice from '@/src/redux/studiesSlice/studiesSlice';
// eslint-disable-next-line import/no-named-as-default
import searchBlockSlice from '@/src/redux/searchBlockSlice/searchBlockSlice';
// eslint-disable-next-line import/no-named-as-default
import loadingSlice from '@/src/redux/loading/loading';

export const store = configureStore({
  reducer: {
    study: studiesSlice,
    searchBlock: searchBlockSlice,
    loading: loadingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
