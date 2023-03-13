//Page Imports
import { Login, Register } from "./components/LoginRegister";
import Wrapper from "./components/Wrapper";
import ChatBox from "./components/ChatBox";
import Cookies from "js-cookie";

import "./App.css";
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    Link,
    Navigate,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { useEffect, useState } from "react";
import ProtectedRoutes from "./utils/ProtectedRoutes";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState("");

    // const checkAuth = async () => {
    //     try {
    //         const response = await fetch("/api/users/checkAuth", {
    //             method: "GET",
    //             headers: { Authorization: `Bearer ${document.cookie}` },
    //         });
    //         if (response.status === 401) {
    //             throw new Error("Unauthorized");
    //         }
    //         const data = await response.json;
    //         console.log(JSON.stringify(data));
    //     } catch (error) {
    //         console.error(error);
    //         redirect("/login");
    //     }
    // };

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />}>
                <Route element={<ProtectedRoutes />}>
                    <Route path="/chat" element={<ChatBox />} />
                </Route>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Route>
        )
    );

    // const router = createBrowserRouter([
    //     {
    //         path: "/",
    //         element: <ChatBox />,
    //     },
    //     {
    //         path: "/login",
    //         element: <Login />,
    //     },
    //     {
    //         path: "/register",
    //         element: <Register />,
    //     },
    // ]);

    // useEffect(() => {
    //     const jwt = Cookies.get("jwt");
    //     if (jwt) {
    //         checkAuth();
    //     } else {
    //         redirect("/login");
    //     }
    // }, []);
    return (
        <div className="flex content-center items-center justify-center w-screen h-screen bg-slate-300 z-0">
            <RouterProvider router={router} />
        </div>
    );
}

const Root = () => {
    return (
        <>
            {/* <div>
                <Link to="/chat">Chat</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div> */}

            <div>
                <Outlet />
            </div>
        </>
    );
};

export default App;
