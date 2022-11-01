import { Warning } from "./Components/Warning";
import React, { useEffect } from "react";
import { Navbar } from "./Components/Navbar";
import { Homepage } from "./Pages/Homepage";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ResearchCarpools } from "./Pages/ResearchCarpools";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import { Profile } from "./Pages/Profile";
import { Login } from "./Auth/Login";
export const Index = () => {
    const [destDep, setDestDep] = useState("");
    const [destArr, setDestArr] = useState("");
    const [nbPpl, setNbPpl] = useState(1);
    const [carpDate, setCarpDate] = useState(new Date());
    const [carpools, setCarpools] = useState([]);
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    const [isLoggedIn, setIsLoggedIn] = useState(
        JSON.parse(localStorage.getItem("isLoggedIn")) || false
    );

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);
    useEffect(() => {
        localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);
    useEffect(() => {
        console.log(user);
        console.log(isLoggedIn);
    }, []);
    return (
        <div className="index">
            <header className="header">
                <Navbar isLoggedIn={isLoggedIn} />
                <Routes>
                    <Route path="/" element={<Warning />} />
                </Routes>
            </header>
            <main>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Homepage
                                setDestArr={setDestArr}
                                setDestDep={setDestDep}
                                setNbPpl={setNbPpl}
                                setCarpDate={setCarpDate}
                                setCarpools={setCarpools}
                                destArr={destArr}
                                destDep={destDep}
                                nbPpl={nbPpl}
                                carpDate={carpDate}
                                carpools={carpools}
                            />
                        }
                    />
                    <Route
                        path="/search"
                        element={
                            <ResearchCarpools
                                setDestArr={setDestArr}
                                setDestDep={setDestDep}
                                setNbPpl={setNbPpl}
                                setCarpDate={setCarpDate}
                                setCarpools={setCarpools}
                                destArr={destArr}
                                destDep={destDep}
                                nbPpl={nbPpl}
                                carpDate={carpDate}
                                carpools={carpools}
                            />
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <Login
                                setUser={setUser}
                                setIsLoggedIn={setIsLoggedIn}
                                user={user}
                            />
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            <ProtectedRoute isLoggedIn={isLoggedIn}>
                                <Profile user={user} />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </main>
        </div>
    );
};
