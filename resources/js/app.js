import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Index } from "./Index";
const root = document.getElementById("root");

ReactDOM.render(
    <HashRouter>
        <Index />
    </HashRouter>,
    root
);
