import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    institutions: [
        {
            "id": "institution_BIGOAKIMAGING",
            "name": "BIG OAK IMAGING",
            "isChecked": true
        },
        {
            "id":
                "institution_BigOakImaging",
            "name":
                "Big Oak Imaging",
            "isChecked":
                true
        },
        {
            "id":
                "institution_Caduceus",
            "name":
                "Caduceus",
            "isChecked":
                true
        },
        {
            "id":
                "institution_GRANADAHILLSRADIOLOGY",
            "name":
                "GRANADA HILLS RADIOLOGY",
            "isChecked":
                true
        },
        {
            "id":
                "institution_HENDERSONRADIOLOGY",
            "name":
                "HENDERSON RADIOLOGY",
            "isChecked":
                true
        },
        {
            "id":
                "institution_MedicalDiagnosticImaging",
            "name":
                "Medical Diagnostic Imaging",
            "isChecked":
                true
        },
        {
            "id":
                "institution_OCEANMEDICALIMAGING",
            "name":
                "OCEAN MEDICAL IMAGING",
            "isChecked":
                true
        },
        {
            "id":
                "institution_OPTUMLosAngeles",
            "name":
                "OPTUM Los Angeles",
            "isChecked":
                true
        },
        {
            "id":
                "institution_OPTUMMontebello",
            "name":
                "OPTUM Montebello",
            "isChecked":
                true
        },
        {
            "id":
                "institution_OceanMedicalImaging",
            "name":
                "Ocean Medical Imaging",
            "isChecked":
                true
        },
        {
            "id":
                "institution_RaddicoThousandOaks",
            "name":
                "Raddico Thousand Oaks",
            "isChecked":
                true
        },
        {
            "id":
                "institution_SUNSETDIAGNOSTICRADIOLOGY",
            "name":
                "SUNSET DIAGNOSTIC RADIOLOGY",
            "isChecked":
                true
        },
        {
            "id":
                "institution_SunsetDiagnosticRadiology",
            "name":
                "Sunset Diagnostic Radiology",
            "isChecked":
                true
        },
        {
            "id":
                "institution_WESTERNDIAGNOSTICRADIOLOGY",
            "name":
                "WESTERN DIAGNOSTIC RADIOLOGY",
            "isChecked":
                true
        },
        {
            "id":
                "institution_WOODLANDHILLSRADIOLOGY",
            "name":
                "WOODLAND HILLS RADIOLOGY",
            "isChecked":
                true
        }
    ]
}

export const institutionsSlice = createSlice({
    name: 'institutions',
    initialState,
    reducers: {
        setInstitutions: (state, action) => {
            state.institutions = action.payload
        },
        toggleCheckboxInstitutions: (state, action) => {
            const id = action.payload;
            const checkbox = state.institutions.find(item => item.id === id);
            if (checkbox) {
                checkbox.isChecked = !checkbox.isChecked;
            }
        },
    }
})


export const {toggleCheckboxInstitutions, setInstitutions} = institutionsSlice.actions;
export default institutionsSlice.reducer;