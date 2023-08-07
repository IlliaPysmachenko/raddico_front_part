import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {searchApi} from "@/src/api/api";


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
        "isChecked": false
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


export const getModality = createAsyncThunk(
    'modality/getModality',
    async (_, {rejectWithValue, dispatch}) => {
        try {
            const res = await searchApi.getValues();
            dispatch(setModalities(res.modalities));
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);


export const modalitySlice = createSlice({
    name: 'modality',
    initialState,
    reducers: {
        setModalities: (state, action) => {
            state = action.payload
        },
        toggleCheckboxModality: (state, action) => {
            const id = action.payload;
            const checkbox = state.find(item => item.id === id);
            if (checkbox) {
                checkbox.isChecked = !checkbox.isChecked;
            }
        },
    }
})


export const {toggleCheckboxModality, setModalities} = modalitySlice.actions;

export default modalitySlice.reducer;