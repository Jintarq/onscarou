import React from "react";

export const Navbar = ({ isLoggedIn }) => {
    return (
        <div className="navbar-component">
            <div className="navbar-nav-links">
                <div>
                    <ul>
                        <li>
                            <a href="/">
                                <h1>OnS'CarOù</h1>
                            </a>
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
                            <div className="navbar-flex">
                                <img src="./assets/img/search.png" />
                                <a href="">Rechercher</a>
                            </div>
                        </li>
                        <li>
                            <div className="navbar-flex">
                                <img src="./assets/img/plus.svg" />
                                <a href="">Publier un trajet</a>
                            </div>
                        </li>
                        <li>
                            <a href={isLoggedIn ? "/#/profile" : "/#/login"}>
                                <img src="./assets/img/profile.png" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
