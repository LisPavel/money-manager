import accounts from "../mock/accounts.json";
import accountTypes from "../mock/accountType.json";
import doubleEntryTypes from "../mock/doubleEntryType.json";
import transactions from "../mock/transaction.json";
import { setUserId } from "./localStorage.service";

const ACCOUNTS_KEY = "accounts";
const ACCOUNT_TYPE_KEY = "accountTypes";
const DOUBLE_ENTRY_TYPE_KEY = "doubleEntryTypes";
const TRANSACTION_KEY = "transactions";
const USER_ID = "b8b1108bfaa8_6666666";

export const init = () => {
    localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
    localStorage.setItem(ACCOUNT_TYPE_KEY, JSON.stringify(accountTypes));
    localStorage.setItem(
        DOUBLE_ENTRY_TYPE_KEY,
        JSON.stringify(doubleEntryTypes)
    );
    localStorage.setItem(TRANSACTION_KEY, JSON.stringify(transactions));
    setUserId(USER_ID);
};

export const getAccounts = () => {
    return JSON.parse(localStorage.getItem(ACCOUNTS_KEY));
};
export const getAccountTypes = () => {
    return JSON.parse(localStorage.getItem(ACCOUNT_TYPE_KEY));
};
export const getDoubleEntryTypes = () => {
    return JSON.parse(localStorage.getItem(DOUBLE_ENTRY_TYPE_KEY));
};
export const getTransactions = () => {
    return JSON.parse(localStorage.getItem(TRANSACTION_KEY));
};

export default {
    init,
    getAccounts,
    getAccountTypes,
    getDoubleEntryTypes,
    getTransactions,
};
