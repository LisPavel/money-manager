import { createSlice } from "@reduxjs/toolkit";
import accountTypesService from "../services/accountTypes.service";

const initialState = {
    entities: [],
    dataLoaded: false,
    loading: true,
    error: null,
};

const accountTypesSlice = createSlice({
    name: "accountTypes",
    initialState,
    reducers: {
        accountTypesRequested(state) {
            state.loading = true;
        },
        accountTypesReceived(state, actions) {
            state.entities = actions.payload;
            state.loading = false;
            state.dataLoaded = true;
            state.error = null;
        },
        accountTypesRequestFailed(state, action) {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

const { actions, reducer: accountTypeReducer } = accountTypesSlice;

const {
    accountTypesReceived,
    accountTypesRequestFailed,
    accountTypesRequested,
} = actions;

export const loadAccountTypes = () => async (dispatch) => {
    dispatch(accountTypesRequested());
    try {
        const { content } = await accountTypesService.getAccountTypes();
        dispatch(accountTypesReceived(content));
    } catch (error) {
        dispatch(accountTypesRequestFailed(error.message ?? error.error));
    }
};

export const getAccountTypesDataStatus = () => (state) => {
    return state.accountTypes.dataLoaded;
};
export const getAccountTypesLoadingStatus = () => (state) => {
    return state.accountTypes.loading;
};
export const getAccountTypes = () => (state) => {
    return state.accountTypes.entities;
};

export default accountTypeReducer;
