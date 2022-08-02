import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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

    useEffect(() => {
        if (!doubleEntryTypesDataStatus) dispatch(loadDoubleEntryTypes());
    }, [doubleEntryTypesDataStatus]);

    if (!doubleEntryTypesDataStatus || doubleEntryTypesLoading) {
        return "Loading...";
    }

    return children;
};

export default AppLoader;
