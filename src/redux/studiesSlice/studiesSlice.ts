import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { searchApi } from '@/src/api/api';
import { StudiesArrayType, StudiesType } from '@/src/redux/studiesSlice/StudiesType';

const initialState: StudiesArrayType = {
  studies: null,
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
  ],
  sortConfig: {
    direction: null,
    key: '',
  },
};

type AsyncThunkAction = any;

export const getStudiesThunk = createAsyncThunk(
  'studies/getStudies',
  // eslint-disable-next-line consistent-return
  async (data: AsyncThunkAction, { rejectWithValue, dispatch }) => {
    try {
      const res = await searchApi.getPatientStudies(JSON.stringify(data));
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      dispatch(setStudies(res));
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      dispatch(setTotalStudiesCount(res));
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      dispatch(setTotalImagesCount(res));
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const studiesSlice = createSlice({
  name: 'studies',
  initialState,
  reducers: {
    setStudies: (state, action) => {
      state.studies = action.payload;
    },
    setTotalStudiesCount: (state, action) => {
      state.totalStudiesCount = action.payload.length;
    },
    setTotalImagesCount: (state, { payload }: any) => {
      let count = 0;
      payload.map((item: StudiesType) => {
        count += +item.images_count;
        return count;
      });
      state.totalImagesCount = count;
    },
    requestSort: (state, { payload }) => {
      const [key, direction] = payload;
      state.sortConfig.direction = direction;
      state.sortConfig.key = key;

      // @ts-ignore
      if (state.sortConfig) {
        // @ts-ignore
        state.studies.sort((a: StudiesType[], b: StudiesType[]) => {
          // @ts-ignore
          if (a[state.sortConfig.key] < b[state.sortConfig.key]) {
            // @ts-ignore
            return state.sortConfig.direction === 'ascending' ? -1 : 1;
          }
          // @ts-ignore
          if (a[state.sortConfig.key] > b[state.sortConfig.key]) {
            // @ts-ignore
            return state.sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }
    },
  },
});

export const {
  requestSort,
  setStudies,
  setTotalStudiesCount,
  setTotalImagesCount,
} = studiesSlice.actions;
export default studiesSlice.reducer;
