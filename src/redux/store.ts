import {configureStore} from "@reduxjs/toolkit";
import studiesSlice from "@/src/redux/studiesSlice/studiesSlice";
import searchBlockSlice from "@/src/redux/searchBlockSlice/searchBlockSlice";
import loadingSlice from "@/src/redux/loading/loading";


export const store = configureStore( {
    reducer: {
        study: studiesSlice,
        searchBlock: searchBlockSlice,
        loading: loadingSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;