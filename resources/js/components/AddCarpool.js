import axios from "axios";
import React, { useState } from "react";

export const AddCarpool = ({ user }) => {
    const [departure, setDeparture] = useState("");
    const [destination, setDestination] = useState("");
    const [passengers, setPassengers] = useState(1);
    const [price, setPrice] = useState(0);
    const [timeDep, setTimeDep] = useState(null);
    const [timeArr, setTimeArr] = useState(null);
    const [dateDep, setDateDep] = useState(null);
    const [dateArr, setDateArr] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const bodyParams = {
            user_id: user.user.id,
            dest_dep: departure,
            dest_arr: destination,
            price: price,
            passengers: passengers,
            type: "car",
            time_dep: `${dateDep} ${timeDep}`,
            time_arr: `${dateArr} ${timeArr}`,
        };
        axios
            .post("http://onscarou.test/api/carpools", bodyParams, {
                headers: { Authorization: `Bearer ${user.token}` },
            })
            .then(console.log)
            .catch(console.log);
    };

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    placeholder="Départ"
                    id="departure"
                    onChange={(e) => setDeparture(e.target.value)}
                />
                <input
                    placeholder="Destination"
                    id="destination"
                    onChange={(e) => setDestination(e.target.value)}
                />
                <div>
                    <img src="./assets/img/customer.png" />
                    <input
                        type="number"
                        placeholder="Passager(s) max."
                        onChange={(e) => setPassengers(e.target.value)}
                    />
                </div>
                <div>
                    <div>
                        <h3>Date de départ</h3>
                        <input
                            type="time"
                            onChange={(e) => setTimeDep(e.target.value)}
                        />
                        <input
                            type="date"
                            onChange={(e) => setDateDep(e.target.value)}
                        />
                    </div>
                    <div>
                        <h3>Date d'arrivée</h3>
                        <input
                            type="time"
                            onChange={(e) => setTimeArr(e.target.value)}
                        />
                        <input
                            type="date"
                            onChange={(e) => setDateArr(e.target.value)}
                        />
                    </div>
                </div>
                <input
                    type="number"
                    placeholder="Prix"
                    id="price"
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input type="submit" />
            </form>
        </div>
    );
};
