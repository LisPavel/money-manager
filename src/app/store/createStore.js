import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({});

export const createStore = () => {
    return configureStore({ reducer });
};
