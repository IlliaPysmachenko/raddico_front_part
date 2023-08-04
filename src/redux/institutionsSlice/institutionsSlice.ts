import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {
        "id": "institution_bigoakimaging",
        "name": "BIG OAK IMAGING",
        "isChecked": true
    },
    {
        "id": "institution_bigoakimaging",
        "name": "Big Oak Imaging",
        "isChecked": true
    },
    {
        "id": "institution_caduceus",
        "name": "Caduceus",
        "isChecked": true
    },
    {
        "id": "institution_granadahillsradiology",
        "name": "GRANADA HILLS RADIOLOGY",
        "isChecked": true
    },
    {
        "id": "institution_hendersonradiology",
        "name": "HENDERSON RADIOLOGY",
        "isChecked": true
    },
    {
        "id": "institution_medicaldiagnosticimaging",
        "name": "Medical Diagnostic Imaging",
        "isChecked": true
    },
    {
        "id": "institution_oceanmedicalimaging",
        "name": "OCEAN MEDICAL IMAGING",
        "isChecked": true
    },
    {
        "id": "institution_optumlosangeles",
        "name": "OPTUM Los Angeles",
        "isChecked": true
    },
    {
        "id": "institution_optummontebello",
        "name": "OPTUM Montebello",
        "isChecked": true
    },
    {
        "id": "institution_oceanmedicalimaging",
        "name": "Ocean Medical Imaging",
        "isChecked": true
    },
    {
        "id": "institution_raddicothousandoaks",
        "name": "Raddico Thousand Oaks",
        "isChecked": true
    },
    {
        "id": "institution_sunsetdiagnosticradiology",
        "name": "SUNSET DIAGNOSTIC RADIOLOGY",
        "isChecked": true
    },
    {
        "id": "institution_sunsetdiagnosticradiology",
        "name": "Sunset Diagnostic Radiology",
        "isChecked": true
    },
    {
        "id": "institution_westerndiagnosticradiology",
        "name": "WESTERN DIAGNOSTIC RADIOLOGY",
        "isChecked": true
    },
    {
        "id": "institution_woodlandhillsradiology",
        "name": "WOODLAND HILLS RADIOLOGY",
        "isChecked": true
    }
]

export const institutionsSlice = createSlice({
    name: 'institutions',
    initialState,
    reducers: {
        toggleCheckboxF: (state, action) => {
            const { id } = action.payload;
            const checkbox = state.find(item => item.id === id);
            if (checkbox) {
                checkbox.isChecked = !checkbox.isChecked;
            }
        },
    }
})


export const {toggleCheckboxF} = institutionsSlice.actions;
export default institutionsSlice.reducer;