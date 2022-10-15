import React from "react";
import { useState } from "react";
export const Homepage = () => {
    return (
        <div className="homepage">
            <div>
                <img
                    src="./assets/img/carpool-bus.svg"
                    className="homepage-img"
                    alt="Home page image presenting a bus and a car doing carpools"
                />
                <div className="form-section">
                    <h2>Un vaste choix de trajets à petits prix</h2>
                    <form className="form-search-carpools">
                        <input type="text" id="dest_dep" placeholder="Départ" />
                        <input
                            type="text"
                            id="dest_arr"
                            placeholder="Destination"
                        />
                        <div>
                            <input type="date" id="time_dep" />
                        </div>
                        <input
                            type="number"
                            min="1"
                            id="nb_ppl"
                            defaultValue="1"
                        />
                        <input id="submit" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};
