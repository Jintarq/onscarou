import { Warning } from "./Components/Warning";
import React, { useEffect } from "react";
import { Navbar } from "./Components/Navbar";
import { Homepage } from "./Pages/Homepage";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { SearchForm } from "./Components/SearchForm";
import { ResearchCarpools } from "./Pages/ResearchCarpools";
export const Index = () => {
    const [destDep, setDestDep] = useState("");
    const [destArr, setDestArr] = useState("");
    const [nbPpl, setNbPpl] = useState(1);
    const [carpDate, setCarpDate] = useState(new Date());
    const query = {
        dest_dep: destDep,
        dest_arr: destArr,
        nb_people: nbPpl,
        date: carpDate,
    };
    const [carpools, setCarpools] = useState([]);
    useEffect(() => {
        console.log(query.dest_arr);
    }, [destArr]);
    return (
        <div>
            <header className="header">
                <Navbar />
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
                </Routes>
            </main>
        </div>
    );
};
