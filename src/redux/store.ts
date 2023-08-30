import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-named-as-default
import studiesSlice from '@/src/screens/home/studiesBlock/slice/studiesSlice';
// eslint-disable-next-line import/no-named-as-default
import searchBlockSlice from '@/src/screens/home/searchPanelBlock/slice/searchBlockSlice';
// eslint-disable-next-line import/no-named-as-default
import loadingSlice from '@/src/redux/loading/loading';
// eslint-disable-next-line import/no-named-as-default
import aeTitlesSlice from '@/src/screens/configurationPage/aeTitlesTab/slice/aeTitlesSlice';

export const store = configureStore({
  reducer: {
    study: studiesSlice,
    searchBlock: searchBlockSlice,
    loading: loadingSlice,
    aeTitles: aeTitlesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
