//Page Imports
import { Login, Register } from "./components/LoginRegister";
import Wrapper from "./components/Wrapper";
import ChatBox from "./components/ChatBox";
import Cookies from "js-cookie";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import UserContext from "./utils/UserContext";

function App() {
    const [userData, setUserData] = useState({
        username: "",
    });

    return (
        <UserContext.Provider value={{ ...userData, setUserData }}>
            <div className="flex content-center items-center justify-center w-screen h-screen bg-slate-300 z-0">
                <Routes>
                    <Route element={<ProtectedRoutes />}>
                        <Route path="/" element={<ChatBox />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </UserContext.Provider>
    );
}

export default App;
