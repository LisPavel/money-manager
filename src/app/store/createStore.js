import { combineReducers, configureStore } from "@reduxjs/toolkit";
import doubleEntryTypesReducer from "./doubleEntryTypes";
import transactionsReducer from "./transactions";

const reducer = combineReducers({
    transactions: transactionsReducer,
    doubleEntryTypes: doubleEntryTypesReducer,
});

export const createStore = () => {
    return configureStore({ reducer });
};
