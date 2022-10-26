import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FormS } from "./FormS";
export const SearchForm = ({
    setDestArr,
    setDestDep,
    setNbPpl,
    setCarpDate,
    setCarpools,
    destArr,
    destDep,
    nbPpl,
    carpDate,
}) => {
    return (
        <div className="form-section">
            <h2>Un vaste choix de trajets à petits prix</h2>
            <FormS
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
        </div>
    );
};
