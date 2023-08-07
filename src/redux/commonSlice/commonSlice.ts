import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {searchApi} from "@/src/api/api";
import {setInstitutions} from "@/src/redux/institutionsSlice/institutionsSlice";

const initialState = {
    csrf: ''
}

export const getToken = createAsyncThunk(
    'common/getToken',
    async (_, {rejectWithValue, dispatch}) => {
        try {
            const res = await searchApi.getValues();
            dispatch(setToken(res.csrf));
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.csrf = action.payload
        },
    }
})


export const {setToken} = commonSlice.actions;
export default commonSlice.reducer;