import {createSlice} from "@reduxjs/toolkit";

function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

const initialState = {
    between: getCurrentDate(),
    and: getCurrentDate()
}

export const dateSlice = createSlice({
    name: 'date',
    initialState,
    reducers: {
        getDateBetween: (state, action) => {
            const  date  = action.payload;
            state.between = date;
        },
        getDateAnd: (state, action) => {
            const  date  = action.payload;
            state.and = date;
        }
    }
})


export const {getDateBetween, getDateAnd} = dateSlice.actions;
export default dateSlice.reducer;

// {
//     "patient_id": "string",
//     "patient_dob": "1970-01-12",
//     "patient_name": 'name',
//     "referral": "string",
//     "institutions": ['BOI', 'OMI'],
//     "modalities": ['CX', 'MR']
// }