// import localStorageService from "./localStorage.service";
import testService from "./test.service";

const getEntryTypes = async () => {
    // const userId = localStorageService.getUserId();
    const types = testService.getDoubleEntryTypes();

    return { content: types };
};

export default {
    getEntryTypes,
};
