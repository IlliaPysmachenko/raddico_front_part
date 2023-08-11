import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {searchApi} from "@/src/api/api";
import {StudiesArrayType, StudiesType} from "@/src/redux/studiesSlice/StudiesType";




const initialState: StudiesArrayType = {
    studies: [],
    totalImagesCount: 0,
    totalStudiesCount: 0,
    studyTitles: [
        {
            id: 'icon',
            title: '',
        },
        {
            id: 'Patient MRN',
            title: 'Patient MRN',
        },
        {
            id: 'Name',
            title: 'Name',
        },
        {
            id: 'DOB',
            title: 'DOB',
        },
        {
            id: 'Study Date',
            title: 'Study Date',
        },
        {
            id: 'Modality',
            title: 'Modality',
        },
        {
            id: 'Referer',
            title: 'Referer',
        },
        {
            id: 'images_count',
            title: 'Images count',
        },
    ],
}



type AsyncThunkAction = any;
export const getStudiesThunk = createAsyncThunk(
    'studies/getStudies',
    async (data: AsyncThunkAction, {rejectWithValue, dispatch}) => {
        try {
            const res = await searchApi.getPatientStudies(JSON.stringify(data));
            dispatch(setStudies(res));
            dispatch(setTotalStudiesCount(res));
            dispatch(setTotalImagesCount(res));
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);


export const studiesSlice = createSlice({
    name: 'studies',
    initialState,
    reducers: {
        setStudies: (state, action) => {
            state.studies = action.payload;
        },
        setTotalStudiesCount:(state, action) => {
            state.totalStudiesCount = action.payload.length;
        },
        setTotalImagesCount:(state, {payload}: any) => {
            let count = 0
            payload.map( (item: StudiesType) => {
                count += +item.images_count;
                return count;
            })
            state.totalImagesCount = count;
        }
    }
});

export const {setStudies,setTotalStudiesCount, setTotalImagesCount} = studiesSlice.actions;
export default studiesSlice.reducer