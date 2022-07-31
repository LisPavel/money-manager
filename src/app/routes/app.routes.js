import TestLayout from "../layouts/testLayout";
import Transactions from "../layouts/transactions";

const appRoutes = {
    test: {
        path: "/test",
        exact: true,
        component: TestLayout,
        name: "Test",
    },
    "/transactions": {
        path: "/transactions",
        // navPath: "/transactions",
        name: "Transactions",
        component: Transactions,
    },
};

export default appRoutes;
