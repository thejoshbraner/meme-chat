import React from "react";
import { useState } from "react";

const ChatBox = () => {
    const [message, setMessage] = useState("");
    return (
        <div className="relative flex flex-col justify-end items-center bg-slate-600 w-3/4 h-3/4 rounded-l">
            <div className="flex flex-row mb-4 bg-slate-500 border-2 border-solid border-slate-600 rounded-l w-98%">
                <form
                    onSubmit={() => {
                        console.log(message);
                        setMessage("");
                    }}
                >
                    <input
                        className="rounded-l h-20 w-full pl-6 outline-none placeholder-slate-400 bg-slate-500 text-slate-400"
                        type="text"
                        placeholder="write something"
                        value={message}
                    />
                    <button className="pr-6 text-slate-400">SEND</button>
                </form>
            </div>
        </div>
    );
};

export default ChatBox;
