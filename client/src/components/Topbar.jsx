import React from "react";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        const response = await fetch("/api/users/logout", {
            method: "GET",
        });
        const data = await response.json();
        localStorage.clear();
        console.log(data);
        navigate("/login");
    };

    return (
        <div className="absolute top flex w-3/4 h-8 bg-slate-700 z-50 rounded-t-lg items-center">
            <div className="flex ml-3 w-3 h-3 bg-red-400 rounded-3xl "></div>
            <div className="flex ml-3 w-3 h-3 bg-yellow-400 rounded-3xl "></div>
            <div className="flex ml-3 w-3 h-3 bg-green-400 rounded-3xl "></div>
            <button
                onClick={handleLogout}
                className="flex w-content h-content text-xs ml-auto mr-2 text-white bg-red-400 rounded-lg px-2"
            >
                Logout
            </button>
        </div>
    );
};

export default Topbar;
