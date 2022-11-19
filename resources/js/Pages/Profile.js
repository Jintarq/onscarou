import axios from "axios";
import React, { useState, useEffect } from "react";
export const Profile = ({ user }) => {
    const [carpools, setCarpools] = useState([]);

    useEffect(() => {
        axios
            .get(`http://onscarou.test/api/carpools/${user.user.id}`)
            .then((res) => setCarpools(res.data));
    }, []);
    console.log(carpools);
    return (
        <div>
            <h2>Profile</h2>
            <div>
                <ul>
                    {carpools.map((carpool) => {
                        return (
                            <li key={carpool.id}>
                                {carpool.dest_dep} - {carpool.dest_arr} :{" "}
                                {carpool.time_dep} - {carpool.time_arr}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
