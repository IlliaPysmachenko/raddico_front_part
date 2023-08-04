import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
// import {listAPI} from "@/src/api/api";


// export type Products = {
//     amount: number;
//     description: string | null;
//     name: string;
//     price: number;
//     isAdded: boolean;
//     units: string;
// }
// type User = {
//     id: number;
//     attributes: {
//         blocked: boolean;
//         confirmed: boolean;
//         createdAt: string;
//         email: string;
//         provider: string;
//         updatedAt: string;
//         username: string;
//     }
// }
// type List = {
//     id: number;
//     attributes: {
//         createdAt: string;
//         isCompleted: boolean;
//         title: string;
//         updatedAt: string;
//         products: [{ id: Record<string, Products>}];
//         totalProductsCount: number;
//         isAddedProductsCount: number;
//         user: {
//             data: [User];
//         }
//     }
// }
// type ListsState = {
//     lists: List[];
// }
// type AsyncThunkAction = {
//     id: number;
//     isCompleted: boolean
// }

const initialState = {
    lists: []
}
// export const getLists = createAsyncThunk(
//     'lists/getLists',
//     async (_, {rejectWithValue, dispatch}) => {
//         try {
//             const res = await listAPI.getLists();
//             console.log(res);
//             dispatch(setLists(res));
//             dispatch(setTotalProductsCount());
//             dispatch(setIsAddedProductsCount())
//         } catch (error) {
//             return rejectWithValue(error);
//         }
//     }
// );
// export const setIsCompletedThunk = createAsyncThunk(
//     'studies/getStudies',
//     async ({id, isCompleted}: AsyncThunkAction, {rejectWithValue, dispatch}) => {
//         try {
//             const res = await listAPI.setCompletedList(id, isCompleted);
//             return dispatch(setIsCompleted(res));
//         } catch (error) {
//             return rejectWithValue(error);
//         }
//     }
// );


export const listsSlice = createSlice({
    name: 'studies',
    initialState,
    reducers: {
        setLists(state, {payload}) {
            state.lists = payload;
        },
        setIsCompleted(state, {payload}) {
            let selectedList = state.lists.find(list => list.id === payload.id);
            if (selectedList) selectedList.attributes.isCompleted = payload.attributes.isCompleted;
        },
        setTotalProductsCount(state){
            state.lists.forEach(list => {
                list.attributes.totalProductsCount = list.attributes.products.length;
            })
        },
        setIsAddedProductsCount (state) {
            state.lists.forEach((list) => {
                let addedCount = 0;

                for (const product of list.attributes.products) {
                    const [productId, productData] = Object.entries(product)[0]; // Получение данных продукта
                    const { isAdded } = productData; // Получение значения isAdded
                    if (isAdded) {
                        addedCount++;
                    }
                }
                list.attributes.isAddedProductsCount = addedCount;
            });
        },
    }
});

export const {setLists, setIsCompleted, setTotalProductsCount, setIsAddedProductsCount} = listsSlice.actions;
export default listsSlice.reducer