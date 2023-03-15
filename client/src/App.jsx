//Page Imports
import { Login, Register } from "./components/LoginRegister";
import ChatBox from "./components/ChatBox";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { ToastContainer, toast } from "react-toastify";

function App() {
    const loginSuccessToast = () => {
        toast.success("Logged in!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    const loginFailToast = () => {
        toast.fail("Wrong info!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    return (
        <>
            <div className="flex content-center items-center justify-center w-screen h-screen bg-slate-300 z-0">
                <Routes>
                    <Route element={<ProtectedRoutes />}>
                        <Route path="/" element={<ChatBox />} />
                    </Route>
                    <Route
                        path="/login"
                        element={<Login loginSuccessToast={loginSuccessToast} loginFailToast={loginFailToast} />}
                    />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
            <ToastContainer />
        </>
    );
}

export default App;
