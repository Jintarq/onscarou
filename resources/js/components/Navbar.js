import React from "react";

export const Navbar = () => {
    return (
        <div className="navbar-component">
            <div className="navbar-nav-links">
                <div>
                    <ul>
                        <li>
                            <h1>OnS'CarOù</h1>
                        </li>
                        <li>
                            <a href="">Covoiturage</a>
                        </li>
                        <li>
                            <a href="">Bus</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <a href="">Rechercher</a>
                        </li>
                        <li>
                            <div className="navbar-flex">
                                <img src="./assets/img/plus.svg" />
                                <a href="">Publier un trajet</a>
                            </div>
                        </li>
                        <li>
                            <a href="">
                                <p>Profile</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
