import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getTransactions } from "../../../store/transactions";
import TransactionsTable from "../../ui/transactionsTable";
import _ from "lodash";

const TransactionsListPage = () => {
    const transactions = useSelector(getTransactions());

    const [sortBy, setSortBy] = useState({ path: "", order: "" });
    const handleSort = (sortBy) => {
        // console.log(args);
        setSortBy(sortBy);
    };

    const sortedTransaction = _.orderBy(
        transactions,
        [sortBy.path],
        [sortBy.order]
    );

    return (
        <div>
            <TransactionsTable
                transactions={sortedTransaction}
                sortBy={sortBy}
                onSort={handleSort}
            />
        </div>
    );
};

export default TransactionsListPage;
