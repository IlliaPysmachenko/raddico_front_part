import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { searchApi, studiesActionsApi } from '@/src/api/api';
import { StudiesArrayType, StudiesType } from '@/src/redux/studiesSlice/StudiesType';

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

export const getTitles = createAsyncThunk(
  'studies/getTitles',
  // eslint-disable-next-line consistent-return
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const res = await studiesActionsApi.getAeTitles();
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      dispatch(setAeTitles(res));
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const sendStudyActions = createAsyncThunk(
  'studies/sendStudyActions',
  // eslint-disable-next-line consistent-return
  async (data: AsyncThunkAction, { rejectWithValue }) => {
    try {
      const res = await studiesActionsApi.sendStudyAction(JSON.stringify(data));
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      console.log(res);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const requestZipStudy = createAsyncThunk(
  'studies/requestZipStudy',
  // eslint-disable-next-line consistent-return
  async (data: AsyncThunkAction, { rejectWithValue, dispatch }) => {
    try {
      const res = await studiesActionsApi.zipStudies(JSON.stringify(data));
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      dispatch(setZipItems(res));
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const checkZipStatus = createAsyncThunk(
  'studies/checkZipStatus',
  // eslint-disable-next-line consistent-return
  async (id: AsyncThunkAction, { rejectWithValue, dispatch }) => {
    try {
      const res = await studiesActionsApi.trackZipStatus(id);
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      dispatch(setZipItems(res));
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
      if (state.studies) {
        state.studies.forEach((item) => {
          item.isChecked = false;
        });
      }
      state.selectedStudies = [];
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

      if (state.sortConfig && state.studies) {
        state.studies.sort((a: StudiesType, b: StudiesType) => {
          // eslint-disable-next-line max-len
          if (a[state.sortConfig.key as keyof StudiesType] < b[state.sortConfig.key as keyof StudiesType]) {
            return state.sortConfig.direction === 'ASC' ? -1 : 1;
          }
          // eslint-disable-next-line max-len
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
    setAeTitles: (state, { payload }) => {
      state.destinationServer.optionsArr = payload;
    },
    setDestinationServer: (state, { payload }) => {
      if (state.destinationServer.optionsArr) {
        state.destinationServer.selectedOption = payload;
      }
    },
    checkAllStudiesToggle: (state, { payload }) => {
      // TODO: -сделать рефакторниг логики после добавления погинации, чтобы выбирались только стади которые показаны на странице.
      state.checkAllStudies = payload;
      if (state.studies) {
        // eslint-disable-next-line no-return-assign,array-callback-return
        state.studies.map((item) => {
          item.isChecked = payload;
          if (item.isChecked) {
            state.selectedStudies.push(item.study_iuid);
          }
          if (!item.isChecked) {
            const index = state.selectedStudies.indexOf(item.study_iuid);
            state.selectedStudies.splice(index, 1);
          }
        });
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
  requestSort,
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
