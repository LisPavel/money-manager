import React from "react";
import PropTypes from "prop-types";
import Table from "../common/table";

const TransactionsTable = ({ transactions, sortBy, onSort }) => {
    const columns = {
        data: {
            name: "Date",
            path: "date",
            component: ({ date }) => {
                const d = new Date(date);
                return Intl.DateTimeFormat("ru").format(d);
            },
        },
        from: {
            name: "From account",
            path: "creditAccount",
        },
        to: {
            name: "To account",
            path: "debitAccount",
        },
        amount: {
            name: "Amount",
            path: "amount",
            component: ({ amount }) => {
                return Intl.NumberFormat("ru", {
                    style: "currency",
                    currency: "RUB",
                }).format(amount);
            },
        },
        description: {
            name: "Desc",
            path: "description",
        },
    };
    return (
        <div>
            <Table
                columns={columns}
                data={transactions}
                onSort={onSort}
                selectedSort={sortBy}
            />
        </div>
    );
};

TransactionsTable.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
    onSort: PropTypes.func.isRequired,
    sortBy: PropTypes.object.isRequired,
};

export default TransactionsTable;
