import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import TransactionsLoader from "../components/ui/hoc/transactionsLoader";
import transactionsRoutes from "../routes/transactions.routes";

const Transactions = () => {
    const { path } = useRouteMatch();
    console.log(path);
    return (
        <TransactionsLoader>
            <div className="transactions">Transactions</div>
            <Switch>
                {Object.keys(transactionsRoutes).map((key) => {
                    const route = transactionsRoutes[key];
                    return (
                        <Route
                            {...route}
                            path={
                                Array.isArray(route.path)
                                    ? route.path.map((p) => `${path}${p}`)
                                    : `${path}${route.path}`
                            }
                            key={key}
                        />
                    );
                })}
            </Switch>
        </TransactionsLoader>
    );
};

export default Transactions;
