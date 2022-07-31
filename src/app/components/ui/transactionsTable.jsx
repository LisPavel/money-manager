import React from "react";
import PropTypes from "prop-types";
import Table from "../common/table";
import { useHistory, useLocation } from "react-router-dom";

const TransactionsTable = ({ transactions, sortBy, onSort }) => {
    const history = useHistory();
    const location = useLocation();
    console.log(location);
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
        edit: {
            component: ({ _id }) => {
                return (
                    <button
                        className="btn btn-sm btn-primary"
                        onClick={() =>
                            history.push(`${location.pathname}/edit/${_id}`)
                        }
                    >
                        <i className="bi bi-pencil-fill" />
                    </button>
                );
            },
        },
        remove: {
            component: ({ _id }) => {
                return (
                    <button className="btn btn-sm btn-danger">
                        <i className="bi bi-trash3-fill"></i>
                    </button>
                );
            },
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
