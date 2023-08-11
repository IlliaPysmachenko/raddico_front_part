import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {searchApi} from "@/src/api/api";
import { SearchBlockStateType} from "@/src/redux/searchBlockSlice/searchBlockTypes";
import {toggleAllCheckbox, toggleCheckbox} from "@/src/helpers/functions";


const initialState: SearchBlockStateType = {
    institutions: {
        id: 'institutions',
        institutionsCount: 0,
        isAllChecked: true,
        checkboxArr: [],
    },
    modality: {
        id: 'modality',
        modalityCount: 0,
        checkboxArr: [],
        isAllChecked: true,
    },
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
            state.institutions.checkboxArr = action.payload;
            state.institutions.institutionsCount = action.payload.length;
        },
        setModality: (state, action) => {
            state.modality.checkboxArr = action.payload;
            state.modality.modalityCount = action.payload.length;
        },
        setToggleCheckboxInstitutions: (state, action) => {
            toggleCheckbox(state, action.payload, state.institutions.checkboxArr);
        },
        setToggleCheckboxModality: (state, action) => {
            toggleCheckbox(state, action.payload, state.modality.checkboxArr);
        },

        setToggleAllCheckbox: (state, {payload}) => {
            const id = payload;
            toggleAllCheckbox( state, id);
        },

        setToken: (state, action) => {
            state.csrf = action.payload
        },
        setInputField: (state, action) => {
            const {id, payload} = action.payload;
            const field = state.fields.find(item => item.id === id);
            if (field) {
                field.value = payload;
            }
        },

        setDateFrom: (state, action) => {
            state.date.dateFrom = action.payload;
        },
        setDateTo: (state, action) => {
            state.date.dateTo = action.payload;
        },
        setDatePeriod: (state, action) => {
            state.date.datePeriod = action.payload;
        },
    }
})


export const {
    setDatePeriod,
    setDateTo,
    setDateFrom,
    setInputField,
    setToggleCheckboxModality,
    setToggleCheckboxInstitutions,
    setInstitutions,
    setModality,
    setToken,
    setToggleAllCheckbox,
} = searchBlockSlice.actions;
export default searchBlockSlice.reducer;