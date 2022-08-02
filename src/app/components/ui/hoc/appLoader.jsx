import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getAccountTypesDataStatus,
    getAccountTypesLoadingStatus,
    loadAccountTypes,
} from "../../../store/accountTypes";
import {
    getDoubleEntryTypesDataStatus,
    getDoubleEntryTypesLoadingStatus,
    loadDoubleEntryTypes,
} from "../../../store/doubleEntryTypes";

const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    const doubleEntryTypesLoading = useSelector(
        getDoubleEntryTypesLoadingStatus()
    );
    const doubleEntryTypesDataStatus = useSelector(
        getDoubleEntryTypesDataStatus()
    );
    const accountTypesDataStatus = useSelector(getAccountTypesDataStatus());
    const accountTypesLoadingStatus = useSelector(
        getAccountTypesLoadingStatus()
    );

    useEffect(() => {
        dispatch(loadDoubleEntryTypes());
        dispatch(loadAccountTypes());
    }, []);

    const isLoading = () => {
        return (
            !doubleEntryTypesDataStatus ||
            doubleEntryTypesLoading ||
            !accountTypesDataStatus ||
            accountTypesLoadingStatus
        );
    };

    if (isLoading()) {
        return "Loading...";
    }

    return children;
};

export default AppLoader;
