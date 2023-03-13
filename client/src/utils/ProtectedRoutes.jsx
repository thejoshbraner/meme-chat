import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
    const timestamp = new Date().getTime();
    //Fetch request, timestamp appended to prevent 304 responses
    return (
        fetch(`/api/users/checkAuth?${timestamp}`, {
            method: "GET",
        })
            .then((response) => {
                //If response is 401, throw a new error to be handled by catch
                if (response.status === 401) {
                    throw new Error("Unauthorized");
                }
                //Otherwise, return the json for the next step
                return response.json();
            })
            .then((data) => {
                //Check is success is true, if so, return true
                if (data.success) {
                    console.log(data);
                    return true;
                } else {
                    //If falsy (undefined), return false.
                    return false;
                }
            })
            //Catch errors
            .catch((error) => {
                console.log(error);
                return false;
            })
    );
};

const ProtectedRoutes = () => {
    const [isAuth, setIsAuth] = useState(null);

    useEffect(() => {
        //Run useAuth and then set state of isAuth depending on result
        //true = allow access
        //false = redirect to login
        useAuth().then((auth) => {
            setIsAuth(auth);
        });
    }, []);

    if (isAuth === null) {
        return <div>Loading...</div>;
    }
    //Checks if isAuth is true or false, if true, will allow access, if false, redirect to login
    return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
