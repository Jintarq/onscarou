import React, { useState } from "react";
import { Carpool } from "../Components/Carpool";
import { FormS } from "../Components/FormS";

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
    carpools,
}) => {
    return (
        <div className="research-carpools">
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
                carpools={carpools}
            />
            {carpools.map((carpool) => {
                return <Carpool carpool={carpool} key={carpool.id} />;
            })}
        </div>
    );
};
