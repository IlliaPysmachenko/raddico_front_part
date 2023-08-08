import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {searchApi} from "@/src/api/api";
import {StudiesArrayType} from "@/src/redux/studiesSlice/StudiesType";




const initialState: StudiesArrayType = {
    studies: null
}



type AsyncThunkAction = any;
export const getStudiesThunk = createAsyncThunk(
    'studies/getStudies',
    async (data: AsyncThunkAction, {rejectWithValue, dispatch}) => {
        try {
            const res = await searchApi.getPatientStudies(JSON.stringify(data));
            dispatch(setStudies(res));
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);


export const studiesSlice = createSlice({
    name: 'studies',
    initialState,
    reducers: {
        setStudies(state, action) {
            state.studies = action.payload;
        },
        // setIsCompleted(state, {payload}) {
        //     let selectedList = state.lists.find(list => list.id === payload.id);
        //     if (selectedList) selectedList.attributes.isCompleted = payload.attributes.isCompleted;
        // },
        // setTotalProductsCount(state){
        //     state.lists.forEach(list => {
        //         list.attributes.totalProductsCount = list.attributes.products.length;
        //     })
        // },
        // setIsAddedProductsCount (state) {
        //     state.lists.forEach((list) => {
        //         let addedCount = 0;
        //
        //         for (const product of list.attributes.products) {
        //             const [productId, productData] = Object.entries(product)[0]; // Получение данных продукта
        //             const { isAdded } = productData; // Получение значения isAdded
        //             if (isAdded) {
        //                 addedCount++;
        //             }
        //         }
        //         list.attributes.isAddedProductsCount = addedCount;
        //     });
        // },
    }
});

export const {setStudies} = studiesSlice.actions;
export default studiesSlice.reducer