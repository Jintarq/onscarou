import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = ({ setIsLoggedIn, setUser, user }) => {
    const navigate = useNavigate();
    const [loginFormData, setLoginFormData] = useState({});
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [hasError, setHasError] = useState(false);
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePw = (e) => {
        setPw(e.target.value);
    };
    useEffect(() => {
        console.log(hasError);
    }, [user, hasError]);
    useEffect(() => {
        setLoginFormData({ email: email, password: pw });
    }, [email, pw]);
    const handleLogin = async (e) => {
        e.preventDefault();
        await axios
            .post("http://onscarou.test/api/login", loginFormData)
            .then((res) => {
                if (res.data.message) {
                    setHasError(res.data.message);
                } else {
                    setUser(res.data);
                    setIsLoggedIn(true);
                    navigate("/");
                }
            });
    };

    return (
        <form className="login-form" onSubmit={(e) => handleLogin(e)}>
            <h1>Renseignez vos identifiants</h1>
            {/* {hasError ? <h2 className="error">{hasError}</h2> : <h2></h2>} */}
            <div className="inputs-login-form">
                <input
                    type="email"
                    placeholder="E-mail"
                    className="fields-login"
                    onChange={(e) => handleEmail(e)}
                />
                <input
                    type="password"
                    placeholder="Mot de passe"
                    className="fields-login"
                    onChange={(e) => handlePw(e)}
                />
                <a href="/#/register">M'inscrire !</a>
                <input
                    type="submit"
                    value="Connexion"
                    className="submit-login"
                />
            </div>
        </form>
    );
};
