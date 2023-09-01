import { createSlice } from '@reduxjs/toolkit';
import { AeTitleSliceType } from '@/src/screens/configurationPage/aeTitlesTab/slice/AeTitlesType';

const initialState: AeTitleSliceType = {
  aeTitlesArray: [
    {
      id: '612RRPL200',
      fields: [
        {
          name: 'Name',
          type: 'text',
          isRequired: true,
          isDisabled: false,
          value: '612RRPL200',
        },
        {
          name: 'Description',
          type: 'text',
          isRequired: false,
          isDisabled: false,
          value: 'description',
        },
        {
          name: 'Host',
          type: 'text',
          isRequired: true,
          isDisabled: false,
          value: '192.168.2.200',
        },
        {
          name: 'Port',
          type: 'number',
          isRequired: true,
          isDisabled: false,
          value: '11112',
        },
      ],
    },
    {
      id: 'DCM4CHEEV5',
      fields: [
        {
          name: 'Name',
          type: 'text',
          isRequired: true,
          isDisabled: false,
          value: 'DCM4CHEEV5',
        },
        {
          name: 'Description',
          type: 'text',
          isRequired: false,
          isDisabled: false,
          value: 'description',
        },
        {
          name: 'Host',
          type: 'text',
          isRequired: true,
          isDisabled: false,
          value: '192.168.2.200',
        },
        {
          name: 'Port',
          type: 'number',
          isRequired: true,
          isDisabled: false,
          value: '11112',
        },
      ],
    },
    {
      id: 'DCM4CHEE',
      fields: [
        {
          name: 'Name',
          type: 'text',
          isRequired: true,
          isDisabled: false,
          value: 'DCM4CHEEV5',
        },
        {
          name: 'Description',
          type: 'text',
          isRequired: false,
          isDisabled: false,
          value: 'description',
        },
        {
          name: 'Host',
          type: 'text',
          isRequired: true,
          isDisabled: false,
          value: '192.168.2.200',
        },
        {
          name: 'Port',
          type: 'number',
          isRequired: true,
          isDisabled: false,
          value: '11112',
        },
      ],
    },
    {
      id: 'DCM4CHEEV2',
      fields: [
        {
          name: 'Name',
          type: 'text',
          isRequired: true,
          isDisabled: false,
          value: 'DCM4CHEEV2',
        },
        {
          name: 'Description',
          type: 'text',
          isRequired: false,
          isDisabled: false,
          value: 'description',
        },
        {
          name: 'Host',
          type: 'text',
          isRequired: true,
          isDisabled: false,
          value: '192.168.2.200',
        },
        {
          name: 'Port',
          type: 'number',
          isRequired: true,
          isDisabled: false,
          value: '11112',
        },
      ],
    },
  ],
};
export const aeTitlesSlice = createSlice({
  name: 'aeTitles',
  initialState,
  reducers: {
    setNewAeTitle: (state, { payload }) => {
      state.aeTitlesArray.push(payload);
    },
    changeAeTitle: (state, { payload }) => {
      const { id, data } = payload;
      const aeTitle = state.aeTitlesArray.find((item) => item.id === id);
      if (aeTitle) {
        // eslint-disable-next-line guard-for-in,no-restricted-syntax
        for (const key in data) {
          // eslint-disable-next-line array-callback-return
          aeTitle.fields.filter((item) => {
            if (item.name === key) {
              item.value = data[key];
            }
          });
        }
      }
    },
    deleteAeTitle: (state, { payload }) => {
      state.aeTitlesArray = state.aeTitlesArray.filter((item) => item.id !== payload);
    },
  },
});

export const { setNewAeTitle, changeAeTitle, deleteAeTitle } = aeTitlesSlice.actions;
export default aeTitlesSlice.reducer;
