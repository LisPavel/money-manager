import React from "react";
// import TestLayout from "./layouts/testLayout";
// import Transactions from "./layouts/transactions";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/ui/navBar";
import appRoutes from "./routes/app.routes";

const App = () => {
    return (
        <div>
            <NavBar routes={appRoutes} title={"My Money Manager"} />
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
