import React from "react";

const SidebarIcon = (props) => {
    return (
        <div className="flex justify-center items-center my-1 w-16 h-16 rounded-full bg-slate-900 text-white">
            {props.text}
        </div>
    );
};

export default SidebarIcon;
