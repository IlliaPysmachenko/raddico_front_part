import {configureStore} from "@reduxjs/toolkit";
import modalitySlice from "@/src/redux/modalitySlice/modalitySlice";
import institutionsSlice from "@/src/redux/institutionsSlice/institutionsSlice";
import dateSlice from "@/src/redux/dateSlice/dateSlice";
import fieldsSlice from "@/src/redux/fieldsSlice/fieldsSlice";
import studiesSlice from "@/src/redux/studiesSlice/studiesSlice";
import commonSlice from "@/src/redux/commonSlice/commonSlice";
import searchBlockSlice from "@/src/redux/searchBlockSlice/searchBlockSlice";


export const store = configureStore( {
    reducer: {
        // modality: modalitySlice,
        // institutions: institutionsSlice,
        // date: dateSlice,
        // fields: fieldsSlice,
        study: studiesSlice,
        // common: commonSlice,
        searchBlock: searchBlockSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;