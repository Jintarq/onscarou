import React, { useEffect } from "react";
import { useState } from "react";
import { SearchForm } from "../Components/SearchForm";
export const Homepage = (props) => {
    return (
        <div className="homepage">
            <div>
                <img
                    src="./assets/img/carpool-bus.svg"
                    className="homepage-img"
                    alt="Home page image representing a bus and a car doing carpools"
                />

                <SearchForm {...props} />
            </div>
        </div>
    );
};
