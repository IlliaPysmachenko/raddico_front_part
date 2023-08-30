import { createAsyncThunk } from '@reduxjs/toolkit';
import { searchApi } from '@/src/api/api';
import { setInstitutions, setModality, setToken } from '@/src/screens/home/searchPanelBlock/slice/searchBlockSlice';

export const getOptions = createAsyncThunk(
  'searchBlock/getOptions',
  // eslint-disable-next-line consistent-return
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const res = await searchApi.getValues();
      dispatch(setInstitutions(res.institutions));
      dispatch(setModality(res.modalities));
      dispatch(setToken(res.csrf));
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
