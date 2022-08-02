import { createSlice } from "@reduxjs/toolkit";
import doubleEntryTypeService from "../services/doubleEntryType.service";

const initialState = {
    entities: [],
    dataLoaded: false,
    loading: false,
    error: null,
};

const doubleEntryTypesSlice = createSlice({
    name: "doubleEntryTypes",
    initialState,
    reducers: {
        doubleEntryTypesRequested(state) {
            state.loading = true;
        },
        doubleEntryTypesReceived(state, action) {
            state.entities = action.payload;
            state.loading = false;
            state.dataLoaded = true;
            state.error = null;
        },
        doubleEntryTypesRequestFailed(state, actions) {
            state.loading = false;
            state.error = actions.payload;
        },
    },
});

const { actions, reducer: doubleEntryTypesReducer } = doubleEntryTypesSlice;

const {
    doubleEntryTypesReceived,
    doubleEntryTypesRequestFailed,
    doubleEntryTypesRequested,
} = actions;

export const loadDoubleEntryTypes = () => async (dispatch) => {
    dispatch(doubleEntryTypesRequested());
    try {
        const { content } = await doubleEntryTypeService.getEntryTypes();
        dispatch(doubleEntryTypesReceived(content));
    } catch (error) {
        dispatch(doubleEntryTypesRequestFailed(error.message ?? error.error));
    }
};

export const getDoubleEntryTypesDataStatus = () => (store) => {
    return store.doubleEntryTypes.dataLoaded;
};
export const getDoubleEntryTypes = () => (store) => {
    return store.doubleEntryTypes.entities;
};
export const getDoubleEntryTypesLoadingStatus = () => (store) => {
    return store.doubleEntryTypes.loading;
};

export default doubleEntryTypesReducer;
