import { createSlice } from '@reduxjs/toolkit';
import { SearchBlockStateType } from '@/src/screens/home/searchPanelBlock/slice/searchBlockTypes';
import { toggleAllCheckbox, toggleCheckbox } from '@/src/helpers/functions';

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
};

export const searchBlockSlice = createSlice({
  name: 'searchBlock',
  initialState,
  reducers: {
    setInstitutions: (state, { payload }) => {
      state.institutions.checkboxArr = payload;
      state.institutions.institutionsCount = payload.length;
    },
    setModality: (state, { payload }) => {
      state.modality.checkboxArr = payload;
      state.modality.modalityCount = payload.length;
    },
    setToggleCheckboxInstitutions: (state, { payload }) => {
      toggleCheckbox(state, payload, state.institutions.checkboxArr);
    },
    setToggleCheckboxModality: (state, { payload }) => {
      toggleCheckbox(state, payload, state.modality.checkboxArr);
    },

    setToggleAllCheckbox: (state, { payload }) => {
      toggleAllCheckbox(state, payload);
    },

    setToken: (state, { payload }) => {
      state.csrf = payload;
    },
    setInputField: (state, { payload }) => {
      const { id, value } = payload;
      const field = state.fields.find((item) => item.id === id);
      if (field) {
        field.value = value;
      }
    },

    setDateFrom: (state, { payload }) => {
      state.date.dateFrom = payload;
    },
    setDateTo: (state, { payload }) => {
      state.date.dateTo = payload;
    },
    setDatePeriod: (state, { payload }) => {
      state.date.datePeriod = payload;
    },
  },
});

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
