import React from "react";
import { useRouteMatch } from "react-router-dom";

const TransactionsListPage = () => {
    const match = useRouteMatch();
    console.log(match);
    return <div>Transactions list</div>;
};

export default TransactionsListPage;
