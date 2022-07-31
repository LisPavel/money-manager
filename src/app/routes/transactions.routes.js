import TransactionPage from "../components/pages/transactionPage";
import TransactionsListPage from "../components/pages/transactionsListPage";

const transactionsRoutes = {
    // transaction: {
    //     path: ["/new", "/edit/:id"],
    //     component: TransactionPage,
    // },
    list: {
        path: "",
        component: TransactionsListPage,
        exact: true,
    },
    transaction: {
        path: ["/edit/:id", "/new"],
        component: TransactionPage,
    },
};

export default transactionsRoutes;
