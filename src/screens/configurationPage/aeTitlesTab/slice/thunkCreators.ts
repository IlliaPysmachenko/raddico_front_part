import { createAsyncThunk } from '@reduxjs/toolkit';
import { aeTitlesApi } from '@/src/api/api';
import { setAeTitlesArr } from '@/src/screens/configurationPage/aeTitlesTab/slice/aeTitlesSlice';

export const getAeTitles = createAsyncThunk(
  'aeTitles/getAeTitles',
  // eslint-disable-next-line consistent-return
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const res = await aeTitlesApi.getAeTitles();
      dispatch(setAeTitlesArr(res));
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const createAeTitle = createAsyncThunk(
  'aeTitles/createAeTitle',
  // eslint-disable-next-line consistent-return
  async (data: any, { rejectWithValue, dispatch }) => {
    try {
      const res = await aeTitlesApi.createAeTitle(JSON.stringify(data));
      dispatch(getAeTitles());
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const updateTitle = createAsyncThunk(
  'aeTitles/updateTitle',
  // eslint-disable-next-line consistent-return
  async (data: any, { rejectWithValue, dispatch }) => {
    try {
      const res = await aeTitlesApi.updateAeTitle(data);
      dispatch(getAeTitles());
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteTitle = createAsyncThunk(
  'aeTitles/deleteTitle',
  // eslint-disable-next-line consistent-return
  async (data: any, { rejectWithValue, dispatch }) => {
    try {
      const res = await aeTitlesApi.deleteAeTitle(data);
      dispatch(getAeTitles());
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const verifyTitle = createAsyncThunk(
  'aeTitles/verifyTitle',
  // eslint-disable-next-line consistent-return
  async (data: any, { rejectWithValue }) => {
    try {
      const res = await aeTitlesApi.verifyAeTitle(data);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
