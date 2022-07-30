import React from "react";
import { useRouteMatch } from "react-router-dom";

const TransactionPage = () => {
    const match = useRouteMatch();
    console.log(match);
    return <div>Transaction page</div>;
};

export default TransactionPage;
