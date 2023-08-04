import {createSlice} from "@reduxjs/toolkit";



const initialState = [
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
]

export const fieldsSlice = createSlice({
    name: 'fields',
    initialState,
    reducers: {
        setInputField: (state, action) => {
            const {id, payload} = action.payload;
            const field = state.find(item => item.id === id);
            if (field) {
                field.value = payload;
            }
        },
    }
})


export const {setInputField} = fieldsSlice.actions;
export default fieldsSlice.reducer;