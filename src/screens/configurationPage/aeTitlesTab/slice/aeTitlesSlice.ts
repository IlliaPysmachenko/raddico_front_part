import { createSlice } from '@reduxjs/toolkit';
import { AeTitleSliceType } from '@/src/screens/configurationPage/aeTitlesTab/slice/AeTitlesType';

const initialState: AeTitleSliceType = {
  aeTitlesArray: [
    {
      id: '612RRPL200',
      name: '612RRPL200',
      description: 'description',
      host: '192.168.2.200',
      port: '11112',
    },
    {
      id: 'DCM4CHEEV5',
      name: 'DCM4CHEEV5',
      description: 'description',
      host: '192.168.2.200',
      port: '11112',
    },
    {
      id: 'DCM4CHEE',
      name: 'DCM4CHEE',
      description: 'description',
      host: '192.168.2.200',
      port: '11112',
    },
    {
      id: 'DCM4CHEEV2',
      name: 'DCM4CHEEV2',
      description: 'description',
      host: '192.168.2.200',
      port: '11112',
    },
  ],
};
export const aeTitlesSlice = createSlice({
  name: 'aeTitles',
  initialState,
  reducers: {
    deleteAeTitle: (state, { payload }) => {
      state.aeTitlesArray = state.aeTitlesArray.filter((item) => item.id !== payload);
    },
  },
});

export const { deleteAeTitle } = aeTitlesSlice.actions;
export default aeTitlesSlice.reducer;
