import React from "react";
import TransactionsLoader from "../components/ui/hoc/transactionsLoader";

const Transactions = () => {
    return (
        <TransactionsLoader>
            <div className="transactions">Transactions</div>
        </TransactionsLoader>
    );
};

export default Transactions;
