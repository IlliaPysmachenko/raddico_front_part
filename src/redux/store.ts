import {configureStore} from "@reduxjs/toolkit";
import modalitySlice from "@/src/redux/modalitySlice/modalitySlice";
import institutionsSlice from "@/src/redux/institutionsSlice/institutionsSlice";


export const store = configureStore( {
    reducer: {
        modality: modalitySlice,
        institutions: institutionsSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;