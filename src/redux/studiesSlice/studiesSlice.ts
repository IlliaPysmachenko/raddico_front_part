import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {searchApi} from "@/src/api/api";
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

const initialState = [
    {
        id: '1',
        icons: 'i',
        mrn: 'WDR01285',
        name: 'GUTIERREZ, JUDITAS',
        sex: 'M',
        dob: '1992-11-02',
        modality: 'MR',
        procedure: 'CERVICAL SPINE',
        symptoms: 'MVA NECK PAIN, EPIDURAL TREATMENT AROUND BACK 2017',
        notes: '[PI LIEN] COMPARISON REPORT REQUESTED BY ATTY, MRN#SDR22538, PRIOR REPORT UPLOADED, YK',
        lm: '110/110',
        imgCenter: 'WESTERN DIAGNOSTIC RADIOLOGY',
        value: '1',
        studyDate: '2023-08-01 12:55:38',
        referrer: 'MASROUR, ROUZBEH D.C.^^^^ ',
        assignment: 'Dr A Bledin',
        status: 'UNREAD',
        proofreading: '',
        action: '',
        checked: false,
    },
    {
        id: '2',
        icons: 'i',
        mrn: 'OMI23251',
        name: 'LOPEZ, CORINA',
        sex: 'F',
        dob: '1987-05-11',
        modality: 'MR',
        procedure: 'CERVICAL SPINE',
        symptoms: 'Neck pain due to injury',
        notes: '[PRECISE] bb',
        lm: '269/ 269',
        imgCenter: 'OCEAN MEDICAL IMAGING',
        value: '1',
        studyDate: '2023-08-01 13:28:54',
        referrer: 'KENLY, MICHAEL M.D.^^^^',
        assignment: 'Tech Only',
        status: 'Precise',
        // proofreading: '',
        action: '',
        checked: false,
    },
]
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


type AsyncThunkAction = {
    data: any;
}
export const getStudiesThunk = createAsyncThunk(
    'studies/getStudies',
    async (data:AsyncThunkAction, {rejectWithValue, dispatch}) => {
        try {
            const res = await searchApi.getPatientStudies(JSON.stringify(data));
            console.log(res);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);


export const studiesSlice = createSlice({
    name: 'studies',
    initialState,
    reducers: {
        // setLists(state, {payload}) {
        //     state.lists = payload;
        // },
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

export const {} = studiesSlice.actions;
export default studiesSlice.reducer