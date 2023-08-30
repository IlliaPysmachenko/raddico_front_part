import { createAsyncThunk } from '@reduxjs/toolkit';
import { searchApi, studiesActionsApi } from '@/src/api/api';
import {
  setAeTitles,
  setStudies,
  setTotalImagesCount,
  setTotalStudiesCount, setZipItems,
} from '@/src/screens/home/studiesBlock/slice/studiesSlice';

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
