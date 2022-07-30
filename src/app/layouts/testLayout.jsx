import React from "react";
import testService from "../services/test.service";

const TestLayout = () => {
    const handleClick = () => {
        testService.init();
    };
    return (
        <button className="btn btn-primary" onClick={handleClick}>
            Init
        </button>
    );
};

export default TestLayout;
