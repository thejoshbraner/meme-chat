import React from "react";

const ChatBox = () => {
    return (
        <div className="relative flex flex-col justify-end items-center bg-slate-600 w-3/4 h-3/4 rounded-l">
            <div className="flex flex-row mb-4 bg-slate-500 border-2 border-solid border-slate-600 rounded-l w-98%">
                <input
                    className="rounded-l h-20 w-full pl-6 outline-none placeholder-slate-400 bg-slate-500 text-slate-400"
                    type="text"
                    placeholder="write something"
                />
                <button className="pr-6 text-slate-400">SEND</button>
            </div>
        </div>
    );
};

export default ChatBox;
