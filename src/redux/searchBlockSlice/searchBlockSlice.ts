import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {searchApi} from "@/src/api/api";
import {SearchBlockStateType} from "@/src/redux/searchBlockSlice/searchBlockTypes";

const initialState: SearchBlockStateType = {
    institutions: [],
    modality: [],
    date: {
        dateFrom: '',
        dateTo: '',
        datePeriod: '',
    },
    fields: [
        {
            id: 'patient_id',
            title: 'Patients MRN',
            value: '',
        },
        {
            id: 'patient_name',
            title: 'Patients Name',
            value: '',
        },
        {
            id: 'patient_dob',
            title: 'Patients DOB',
            value: '',
        },
        {
            id: 'referral',
            title: 'Referring Physician',
            value: '',
        },
    ],
    csrf: '',
}

export const getOptions = createAsyncThunk(
    'searchBlock/getOptions',
    async (_, {rejectWithValue, dispatch}) => {
        try {
            const res = await searchApi.getValues();
            dispatch(setInstitutions(res.institutions));
            dispatch(setModality(res.modalities));
            dispatch(setToken(res.csrf));
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const searchBlockSlice = createSlice({
    name: 'searchBlock',
    initialState,
    reducers: {
        setInstitutions: (state, action) => {
            state.institutions = action.payload
        },
        setModality: (state, action) => {
            state.modality = action.payload
        },
        setToken: (state, action) => {
            state.csrf = action.payload
        },
        setToggleCheckboxInstitutions: (state, action) => {
            const id = action.payload;
            const checkbox = state.institutions.find(item => item.id === id);
            if (checkbox) {
                checkbox.isChecked = !checkbox.isChecked;
            }
        },
        setToggleCheckboxModality: (state, action) => {
            const id = action.payload;
            const checkbox = state.modality.find(item => item.id === id);
            if (checkbox) {
                checkbox.isChecked = !checkbox.isChecked;
            }
        },
        setInputField: (state, action) => {
            const {id, payload} = action.payload;
            const field = state.fields.find(item => item.id === id);
            if (field) {
                field.value = payload;
            }
        },
        setDateFrom: (state, action) => {
            const date = action.payload;
            state.date.dateFrom = date;
        },
        setDateTo: (state, action) => {
            const date = action.payload;
            state.date.dateTo = date;
        },
        setDatePeriod: (state, action) => {
            const date = action.payload;
            state.date.datePeriod = date;
        },
    }
})


export const { setDatePeriod, setDateTo,setDateFrom,setInputField, setToggleCheckboxModality, setToggleCheckboxInstitutions, setInstitutions, setModality, setToken} = searchBlockSlice.actions;
export default searchBlockSlice.reducer;