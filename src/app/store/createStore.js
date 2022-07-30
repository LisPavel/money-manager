import { combineReducers, configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./transactions";

const reducer = combineReducers({
    transactions: transactionsReducer,
});

export const createStore = () => {
    return configureStore({ reducer });
};
