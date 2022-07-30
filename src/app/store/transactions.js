import { createSlice } from "@reduxjs/toolkit";
import transactionsService from "../services/transactions.service";

const initialState = {
    entities: [],
    isLoading: false,
    dataLoaded: false,
    error: null,
};

const transactionsSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {
        transactionsRequested(state) {
            state.isLoading = true;
        },
        transactionsReceived(state, action) {
            state.isLoading = false;
            state.dataLoaded = true;
            state.error = null;
            state.entities = action.payload;
        },
        transactionsRequestFailed(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

const { actions, reducer: transactionsReducer } = transactionsSlice;

const {
    transactionsReceived,
    transactionsRequestFailed,
    transactionsRequested,
} = actions;

export const loadTransactions = () => async (dispatch) => {
    dispatch(transactionsRequested());
    try {
        const { content } = await transactionsService.getTransactions();
        console.log(content);
        dispatch(transactionsReceived(content));
    } catch (error) {
        dispatch(transactionsRequestFailed(error?.message ?? error.error));
    }
};

export const getTransactions = () => (state) => {
    return state.transactions.entities;
};
export const getTransactionsLoadingStatus = () => (state) => {
    return state.transactions.isLoading;
};
export const getTransactionsDataStatus = () => (state) => {
    return state.transactions.dataLoaded;
};

export default transactionsReducer;
