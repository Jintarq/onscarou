import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();
    const handleChangeNbPpl = () => {
        setNbPpl((prevValue) => prevValue + 1);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .get(
                `http://onscarou.test/api/carpools/${destDep}/${destArr}/${carpDate}`
            )
            .then((res) => {
                setCarpools(res.data);
            })
            .catch((err) => console.log(err));

        navigate("/search");
    };

    return (
        <div className="form-section" onSubmit={(e) => handleSubmit(e)}>
            <h2>Un vaste choix de trajets à petits prix</h2>
            <form className="form-search-carpools">
                <input
                    type="text"
                    id="dest_dep"
                    placeholder="Départ"
                    onChange={(e) => setDestDep(e.target.value)}
                    defaultValue={destDep}
                />
                <input
                    type="text"
                    id="dest_arr"
                    placeholder="Destination"
                    onChange={(e) => setDestArr(e.target.value)}
                    defaultValue={destArr}
                />
                <input
                    type="date"
                    onChange={(e) =>
                        setCarpDate(new Date(e.target.value).toISOString())
                    }
                    id="time_dep"
                />
                <div>
                    <img
                        src="./assets/img/customer.png"
                        alt="Image that show a customer as the number of people for a carpool research"
                    />
                    <input
                        type="number"
                        min="1"
                        id="nb_ppl"
                        defaultValue="1"
                        onChange={handleChangeNbPpl}
                        className="nb-people"
                    />
                </div>
                <input id="submit" type="submit" value="Rechercher" />
            </form>
        </div>
    );
};
