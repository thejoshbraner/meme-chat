import React from "react";
import { useState, useRef } from "react";

const ChatBox = () => {
    let inputRef = useRef("");
    const [log, setLog] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const msg = inputRef.current.value;

        if (msg === "!clear") {
            setLog([]);
            inputRef.current.value = "";
        } else {
            setLog([...log, msg]);
            console.log(msg);
            inputRef.current.value = "";
        }
    };

    return (
        <div className="relative flex flex-col justify-end items-center bg-slate-600 w-3/4 h-3/4 rounded-l">
            {log.map((mess) => {
                return (
                    <div className="w-97% h-10 mb-1 bg-slate-500 border-2 border-solid border-slate-600 rounded-l w-98% text-white px-2 flex items-center">
                        {mess}
                    </div>
                );
            })}
            {/* CHAT INPUT & SEND */}
            <div className="flex flex-row mb-4 bg-slate-500 border-2 border-solid border-slate-600 rounded-l w-98%">
                <form className="flex w-full" onSubmit={handleSubmit}>
                    <input
                        name="message"
                        className="rounded-l h-20 w-full pl-6 outline-none placeholder-slate-400 bg-slate-500 text-slate-200"
                        type="text"
                        placeholder="write something"
                        ref={inputRef}
                    />
                    <button type="submit" className="pr-6 text-slate-400">
                        SEND
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChatBox;
