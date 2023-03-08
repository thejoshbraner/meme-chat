import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import ChatBox from "./ChatBox";
import TestInputBox from "./TextInputBox";
import { Login, Register } from "./LoginRegister";

const Wrapper = ({ page }) => {
    return (
        <div className="flex content-center items-center justify-center w-screen h-screen bg-slate-300 z-0">
            <ChatBox />
        </div>
    );
};

export default Wrapper;
