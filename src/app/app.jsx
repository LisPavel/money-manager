import React from "react";
import TestLayout from "./layouts/testLayout";
import Transactions from "./layouts/transactions";

const App = () => {
    return (
        <div>
            <h1>Money Manager</h1>
            <TestLayout />
            <Transactions />
        </div>
    );
};

export default App;
