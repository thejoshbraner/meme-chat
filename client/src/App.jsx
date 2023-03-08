//Page Imports
import { Login, Register } from "./components/LoginRegister";
import Wrapper from "./components/Wrapper";
import ChatBox from "./components/ChatBox";

import "./App.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet, Link } from "react-router-dom";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <ChatBox />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/register",
            element: <Register />,
        },
    ]);

    return (
        <div className="flex content-center items-center justify-center w-screen h-screen bg-slate-300 z-0">
            <RouterProvider router={router} />
        </div>
    );
}

const Root = () => {
    <>
        <div>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>

        <div>
            <Outlet />
        </div>
    </>;
};

export default App;
