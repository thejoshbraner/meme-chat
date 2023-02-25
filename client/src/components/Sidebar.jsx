import React from "react";
import SidebarIcon from "./SidebarIcon";

const Sidebar = () => {
    return (
        <div className="relative flex flex-col items-center w-24 h-3/4 bg-slate-800 rounded-l-xl pt-10 z-40">
            <SidebarIcon text="user" />
            <SidebarIcon text="user" />
            <SidebarIcon text="user" />
        </div>
    );
};

export default Sidebar;
