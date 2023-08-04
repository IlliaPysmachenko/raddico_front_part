import {createSlice} from "@reduxjs/toolkit";
import {facilitiesSlice} from "@/src/redux/institutionsSlice/institutionsSlice";

const initialState = [
    {
        "id": "modality_cr",
        "name": "CR",
        "isChecked": true
    },
    {
        "id": "modality_ct",
        "name": "CT",
        "isChecked": true
    },
    {
        "id": "modality_dx",
        "name": "DX",
        "isChecked": true
    },
    {
        "id": "modality_mr",
        "name": "MR",
        "isChecked": true
    },
    {
        "id": "modality_pr",
        "name": "PR",
        "isChecked": true
    },
    {
        "id": "modality_sc",
        "name": "SC",
        "isChecked": true
    }
]

export const modalitySlice = createSlice({
    name: 'modality',
    initialState,
    reducers: {
        toggleCheckbox: (state, action) => {
            const {id} = action.payload;
            const checkbox = state.find(item => item.id === id);
            if (checkbox) {
                checkbox.isChecked = !checkbox.isChecked;
            }
        },
    }
})


export const {toggleCheckbox} = modalitySlice.actions;

export default modalitySlice.reducer;