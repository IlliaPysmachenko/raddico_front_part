import { createSlice } from '@reduxjs/toolkit';
import { AeTitleSliceType } from '@/src/screens/configurationPage/aeTitlesTab/slice/AeTitlesType';

const initialState: AeTitleSliceType = {
  aeTitlesArray: [
    {
      ae_title: '612RRPL239',
      description: 'Description 612RRPL238',
      host: '192.168.2.1',
      port: '11112',
    },
    {
      ae_title: '612RRPL238',
      description: 'Description 612RRPL238',
      host: '192.168.2.1',
      port: '11112',
    },
    {
      ae_title: '612RRPL231',
      description: 'Description 612RRPL238',
      host: '192.168.2.1',
      port: '11112',
    },
    {
      ae_title: '612RRPL232',
      description: 'Description 612RRPL238',
      host: '192.168.2.1',
      port: '11112',
    },
  ],
};
export const aeTitlesSlice = createSlice({
  name: 'aeTitles',
  initialState,
  reducers: {
    setAeTitlesArr: (state, { payload }) => {
      if (payload) {
        state.aeTitlesArray = payload;
      }
    },
    setNewAeTitle: (state, { payload }) => {
      state.aeTitlesArray.push(payload);
    },
    changeAeTitle: (state, { payload }) => {
      const changedTitleIndex = state.aeTitlesArray.findIndex((item) => item.ae_title === payload.ae_title);
      if (changedTitleIndex !== -1) {
        // Если элемент найден, заменяем его данными из payload
        state.aeTitlesArray[changedTitleIndex] = payload;
      }
    },
  },
});

export const { changeAeTitle, setAeTitlesArr, setNewAeTitle } = aeTitlesSlice.actions;
export default aeTitlesSlice.reducer;
// {
//   exporter: 'ExportTo612RRPL238',
//   ae_title: '612RRPL238',
//   description: 'Description 612RRPL238',
//   host: '192.168.2.1',
//   port: '11112',
// },
