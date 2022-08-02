import testService from "./test.service";

const getAccountTypes = async () => {
    const content = testService.getAccountTypes();
    return { content };
};

export default {
    getAccountTypes,
};
