import React from "react";
// import TestLayout from "./layouts/testLayout";
// import Transactions from "./layouts/transactions";
import { Switch, Route, Redirect } from "react-router-dom";
import appRoutes from "./routes/app.routes";

const App = () => {
    return (
        <div>
            <h1>Money Manager</h1>
            <Switch>
                {Object.keys(appRoutes).map((route) => {
                    return <Route {...appRoutes[route]} key={route} />;
                })}
                <Redirect to="/" />
            </Switch>
        </div>
    );
};

export default App;
