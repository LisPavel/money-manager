import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getTransactionsDataStatus,
    loadTransactions,
} from "../../../store/transactions";

const TransactionsLoader = ({ children }) => {
    const dispatch = useDispatch();
    const dataStatus = useSelector(getTransactionsDataStatus());

    useEffect(() => {
        if (!dataStatus) {
            dispatch(loadTransactions());
        }
    }, [dataStatus]);

    if (!dataStatus) return "Loading...";

    return children;
};

export default TransactionsLoader;
