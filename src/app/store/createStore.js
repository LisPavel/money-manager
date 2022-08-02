import { combineReducers, configureStore } from "@reduxjs/toolkit";
import accountTypeReducer from "./accountTypes";
import doubleEntryTypesReducer from "./doubleEntryTypes";
import transactionsReducer from "./transactions";

const reducer = combineReducers({
    transactions: transactionsReducer,
    doubleEntryTypes: doubleEntryTypesReducer,
    accountTypes: accountTypeReducer,
});

export const createStore = () => {
    return configureStore({ reducer });
};
