import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
        return <Navigate to="/" replace />;
    } else {
        return children;
    }
};
