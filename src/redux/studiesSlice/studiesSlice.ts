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
    {
      id: 'study_action',
      title: 'Action',
    },
  ],
  destinationServer: {
    id: 'destinationServer',
    name: 'Destination Server',
    optionsArr: [
      {
        value: '',
        title: '[Select Destination]',
        selected: true,
      },
      {
        value: '612RRPL238',
        title: '612RRPL238',
        selected: false,
      },
      {
        value: 'AWS118_SS',
        title: 'AWS118_SS',
        selected: false,
      },
      {
        value: 'AWS168_SS@192.168.2.168',
        title: 'AWS168_SS@192.168.2.168',
        selected: false,
      },
      {
        value: 'AWS19_DCMREC',
        title: 'AWS19_DCMREC',
        selected: false,
      },
      {
        value: 'AWS19_SS',
        title: 'AWS19_SS',
        selected: false,
      },
      {
        value: 'AWS45_SS',
        title: 'AWS45_SS',
        selected: false,
      },
      {
        value: 'AWS48_SS',
        title: 'AWS48_SS',
        selected: false,
      },
      {
        value: 'AWS51_SS',
        title: 'AWS51_SS',
        selected: false,
      },
      {
        value: 'AWS80_SS',
        title: 'AWS80_SS',
        selected: false,
      },
      {
        value: 'Brit_DS',
        title: 'Brit_DS',
        selected: false,
      },
      {
        value: 'Media Creation Server (part of dcm4chee)',
        title: 'Media Creation Server (part of dcm4chee)',
        selected: false,
      },
      {
        value: 'CQ612243',
        title: 'CQ612243',
        selected: false,
      },
      {
        value: 'CQBOI125@10.0.10.125',
        title: 'CQBOI125@10.0.10.125',
        selected: false,
      },
      {
        value: 'DCM4CHEE',
        title: 'DCM4CHEE',
        selected: false,
      },
      {
        value: 'DCM4CHEE-VMC39-TEST',
        title: 'DCM4CHEE-VMC39-TEST',
        selected: false,
      },
      {
        value: 'EF_WS48',
        title: 'EF_WS48',
        selected: false,
      },
      {
        value: 'Ahmad 1 - Integrad',
        title: 'Ahmad 1 - Integrad',
        selected: false,
      },
      {
        value: 'Codys KP',
        title: 'Codys KP',
        selected: false,
      },
      {
        value: 'Precise',
        title: 'Precise',
        selected: false,
      },
      {
        value: 'RRPLBOI122',
        title: 'RRPLBOI122',
        selected: false,
      },
      {
        value: 'Ahmad 2 - TeleraMed2',
        title: 'Ahmad 2 - TeleraMed2',
        selected: false,
      },
      {
        value: 'WS118_KP',
        title: 'WS118_KP',
        selected: false,
      },
    ],
  },
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
      if (state.studies) {
        state.studies.forEach((item) => {
          item.isChecked = false;
        });
      }
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
        if (checkedStudy) checkedStudy.isChecked = isChecked;
      }
    },
    setDestinationServer: (state, { payload }) => {
      state.destinationServer.optionsArr.map((item) => item.selected = false);
      // eslint-disable-next-line max-len
      const selectedServer = state.destinationServer.optionsArr.find((item) => item.value === payload);
      if (selectedServer) selectedServer.selected = true;
    },
  },
});

export const {
  requestSort,
  setStudies,
  setTotalStudiesCount,
  setTotalImagesCount,
  setToggleStudyChecked,
  setDestinationServer,
} = studiesSlice.actions;
export default studiesSlice.reducer;
