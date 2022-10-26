import axios from "axios";
import React, { useEffect, useState } from "react";

export const Carpool = ({ carpool }) => {
    const [userInfo, setUserInfo] = useState({});

    const getUserInfo = async () => {
        await axios
            .get(`http://onscarou.test/api/user/${carpool.user_id}`)
            .then((res) => {
                setUserInfo(res.data[0]);
            });
    };
    useEffect(() => {
        getUserInfo();
    }, []);
    const formatedDateDep = carpool.time_dep.substr(11, 5);
    const formatedDateArr = carpool.time_arr.substr(11, 5);
    return (
        <div key={carpool.id} className="carpool">
            <div className="dests">
                <ul>
                    <li>
                        <div>
                            <p>{formatedDateDep}</p>
                            <h3>{carpool.dest_dep}</h3>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>{formatedDateArr}</p>
                            <h3>{carpool.dest_arr}</h3>
                        </div>
                    </li>
                </ul>
                <div>
                    <img src="./assets/img/profile.png" />
                    <div>
                        <h3>{userInfo.name}</h3>
                        <p>5.0</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
