import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Login } from "../components/LoginRegister";
import Cookies from "js-cookie";

const useAuth = () => {
    const timestamp = new Date().getTime();
    return fetch(`/api/users/checkAuth?${timestamp}`, {
        method: "GET",
    })
        .then((response) => {
            if (response.status === 401) {
                throw new Error("Unauthorized");
            }
            return response.json();
        })
        .then((data) => {
            if (data.success) {
                console.log(data);
                return true;
            } else {
                return false;
            }
        })
        .catch((error) => {
            console.log(error);
            return false;
        });
};

const ProtectedRoutes = () => {
    const [isAuth, setIsAuth] = useState(null);

    useEffect(() => {
        useAuth().then((auth) => {
            setIsAuth(auth);
        });
    }, []);

    if (isAuth === null) {
        return <div>Loading...</div>;
    }

    return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
