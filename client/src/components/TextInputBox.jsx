import React from "react";

const TextInputBox = () => {
    return (
        <div className="absolute bottom-0 w-full">
            <input
                className="h-20 w-full pl-28 outline-none border-t-2 border-solid border-slate-800 bg-slate-500"
                type="text"
                placeholder="write something"
            />
        </div>
    );
};

export default TextInputBox;
