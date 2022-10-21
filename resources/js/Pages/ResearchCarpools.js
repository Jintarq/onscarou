import React from "react";
import { SearchForm } from "../Components/SearchForm";

export const ResearchCarpools = ({
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
        <div className="research-carpools">
            <SearchForm
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
