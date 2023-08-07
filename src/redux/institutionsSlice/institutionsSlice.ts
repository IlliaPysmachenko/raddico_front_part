import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {searchApi} from "@/src/api/api";
import {setModalities} from "@/src/redux/modalitySlice/modalitySlice";

const initialState = {
    institutions: []
}

export const getInstitutions = createAsyncThunk(
    'institutions/getInstitutions',
    async (_, {rejectWithValue, dispatch}) => {
        try {
            const res = await searchApi.getValues();
            dispatch(setInstitutions(res.institutions));
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const institutionsSlice = createSlice({
    name: 'institutions',
    initialState,
    reducers: {
        setInstitutions: (state, action) => {
            debugger
            state.institutions = action.payload
        },
        toggleCheckboxInstitutions: (state, action) => {
            const id = action.payload;
            // @ts-ignore
            const checkbox = state.institutions.find(item => item.id === id);
            if (checkbox) {
                // @ts-ignore
                checkbox.isChecked = !checkbox.isChecked;
            }
        },
    }
})


export const {toggleCheckboxInstitutions, setInstitutions} = institutionsSlice.actions;
export default institutionsSlice.reducer;