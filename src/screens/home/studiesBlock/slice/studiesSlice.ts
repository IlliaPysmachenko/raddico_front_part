import { createSlice } from '@reduxjs/toolkit';
import { StudiesArrayType, StudiesType } from '@/src/screens/home/studiesBlock/slice/StudiesType';

const initialState: StudiesArrayType = {
  studies: null,
  selectedStudies: [],
  totalImagesCount: 0,
  totalStudiesCount: 0,
  studyTitles: [
    {
      id: 'icon',
      title: '',
    },
    {
      id: 'patient_id',
      title: 'Patient MRN',
    },
    {
      id: 'patient_name',
      title: 'Name',
    },
    {
      id: 'patient_dob',
      title: 'DOB',
    },
    {
      id: 'study_date',
      title: 'Study Date',
    },
    {
      id: 'modalities',
      title: 'Modality',
    },
    {
      id: 'referral',
      title: 'Referer',
    },
    {
      id: 'images_count',
      title: 'Images count',
    },
    {
      id: 'study_action',
      title: '',
    },
  ],
  checkAllStudies: false,
  destinationServer: {
    id: 'destinationServer',
    name: 'aetitles',
    selectedOption: '',
    optionsArr: null,
  },
  sortConfig: {
    direction: null,
    key: '',
  },
  zipItems: [],
};

export const studiesSlice = createSlice({
  name: 'studies',
  initialState,
  reducers: {
    setStudies: (state, { payload }) => {
      state.studies = payload;
      if (state.studies) {
        state.studies.forEach((item) => {
          item.isChecked = false;
        });
      }
      state.selectedStudies = [];
    },
    setSort: (state, { payload }) => {
      const [key, direction] = payload;
      state.sortConfig.direction = direction;
      state.sortConfig.key = key;

      if (state.sortConfig && state.studies) {
        state.studies.sort((a: StudiesType, b: StudiesType) => {
          if (a[state.sortConfig.key as keyof StudiesType] < b[state.sortConfig.key as keyof StudiesType]) {
            return state.sortConfig.direction === 'ASC' ? -1 : 1;
          }
          if (a[state.sortConfig.key as keyof StudiesType] > b[state.sortConfig.key as keyof StudiesType]) {
            return state.sortConfig.direction === 'ASC' ? 1 : -1;
          }
          return 0;
        });
      }
    },
    setToggleStudyChecked: (state, { payload }) => {
      const { id, isChecked } = payload;

      if (state.studies) {
        const checkedStudy = state.studies.find((item) => item.study_iuid === id);
        if (checkedStudy) checkedStudy.isChecked = !isChecked;
        if (checkedStudy && checkedStudy.isChecked) {
          state.selectedStudies.push(checkedStudy.study_iuid);
        }
        if (checkedStudy && !checkedStudy.isChecked) {
          const index = state.selectedStudies.indexOf(checkedStudy.study_iuid);
          state.selectedStudies.splice(index, 1);
        }
      }
    },
    checkAllStudiesToggle: (state, { payload }) => {
      state.checkAllStudies = payload;
      if (state.studies) {
        state.studies.forEach((item) => {
          item.isChecked = payload;
          if (item.isChecked) {
            state.selectedStudies.push(item.study_iuid);
          } else {
            const index = state.selectedStudies.indexOf(item.study_iuid);
            state.selectedStudies.splice(index, 1);
          }
        });
      }
    },
    setTotalStudiesCount: (state, { payload }) => {
      state.totalStudiesCount = payload.length;
    },
    setTotalImagesCount: (state, { payload }) => {
      const count = payload.reduce((total: number, item: StudiesType) => total + +item.images_count, 0);
      state.totalImagesCount = count;
    },
    setAeTitles: (state, { payload }) => {
      state.destinationServer.optionsArr = payload;
    },
    setDestinationServer: (state, { payload }) => {
      if (state.destinationServer.optionsArr) {
        state.destinationServer.selectedOption = payload;
      }
    },
    setZipItems: (state, { payload }) => {
      const { id, name, prepared } = payload;
      state.zipItems.push({ id, name, prepared });
    },
    removeZip: (state, { payload }) => {
      const updatedZip = state.zipItems.filter((item) => item.id !== payload);
      state.zipItems = updatedZip;
    },
  },
});

export const {
  setSort,
  setStudies,
  setTotalStudiesCount,
  setTotalImagesCount,
  setToggleStudyChecked,
  setAeTitles,
  setDestinationServer,
  checkAllStudiesToggle,
  setZipItems,
  removeZip,
} = studiesSlice.actions;
export default studiesSlice.reducer;
