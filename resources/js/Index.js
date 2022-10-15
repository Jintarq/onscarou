import { Warning } from "./components/Warning";
import React from "react";
import { Navbar } from "./components/Navbar";
import { Homepage } from "./components/Pages/Homepage";
export const Index = () => {
    return (
        <div>
            <header className="header">
                <Navbar />
                <Warning />
            </header>
            <main>
                <Homepage />
            </main>
        </div>
    );
};
