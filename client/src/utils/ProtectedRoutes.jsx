import React, { useState, useEffect } from "react";
import { Outlet } from "react-router";
import { Login } from "../components/LoginRegister";
import Cookies from "js-cookie";

const useAuth = async () => {
    const jwt = Cookies.get("jwt");
    if (jwt) {
        try {
            const response = await fetch("/api/users/checkAuth", {
                method: "GET",
                headers: { Authorization: `Bearer ${jwt}` },
            });
            if (response.status === 401) {
                throw new Error("Unauthorized");
            }
            const data = await response.json;
            if (response.success) {
                console.log(JSON.stringify(data));
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error(error);
            return false;
        }
    } else {
        return false;
    }
};

const ProtectedRoutes = () => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            const auth = await useAuth();
            setIsAuth(auth);
        };
        checkAuth();
    }, []);
    return isAuth ? <Outlet /> : <Login />;
};

export default ProtectedRoutes;
