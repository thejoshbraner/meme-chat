//Page Imports
import { Login, Register } from "./components/LoginRegister";
import ChatBox from "./components/ChatBox";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import UserContext from "./utils/UserContext";

function App() {
    return (
        <div className="flex content-center items-center justify-center w-screen h-screen bg-slate-300 z-0">
            <Routes>
                <Route element={<ProtectedRoutes />}>
                    <Route path="/" element={<ChatBox />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    );
}

export default App;
