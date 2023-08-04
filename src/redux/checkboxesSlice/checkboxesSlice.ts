// import { createSlice } from "@reduxjs/toolkit";
//
// const initialState = [
//     // ... ваши данные ...
// ];
//
// const checkboxesSlice = createSlice({
//     name: 'checkboxes',
//     initialState,
//     reducers: {
//         toggleCheckbox: (state, action) => {
//             const { id } = action.payload;
//             const checkbox = state.find(item => item.id === id);
//             if (checkbox) {
//                 checkbox.isChecked = !checkbox.isChecked;
//             }
//         },
//         // другие специфичные редюсеры для группы чекбоксов
//     },
// });
//
// export const { toggleCheckbox } = checkboxesSlice.actions;
//
// // Селектор для доступа к данным чекбоксов
// export const selectCheckboxes = state => state.checkboxes;
//
// export default checkboxesSlice.reducer;
