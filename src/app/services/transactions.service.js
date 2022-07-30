import localStorageService from "./localStorage.service";
import testService from "./test.service";

const getTransactions = async () => {
    const userId = localStorageService.getUserId();
    const transactions = testService
        .getTransactions()
        .filter((tr) => tr.userId === userId);

    return transactions;
};

export default {
    getTransactions,
};
