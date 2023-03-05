import React from "react";
import { useState, useRef } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

const ChatBox = () => {
    let inputRef = useRef("");
    const [log, setLog] = useState([]);

    //prevents refresh, grabs input text and creates object using it marking it with a local flag set to true, then adds to log array
    const handleSubmit = (event) => {
        event.preventDefault();
        const msgObject = { msg: inputRef.current.value, local: true };
        console.log(msgObject);
        setLog([...log, msgObject]);

        //posts input text from object to server then clears the input element
        socket.emit("newMessage", msgObject.msg);
        inputRef.current.value = "";
    };

    //receives new message object from server, marked with a local flag set to false, then adds to log array
    //...could probably build object here instead of on the server side? not sure which would be better yet
    socket.on("sendMessage", (msg) => {
        setLog([...log, msg]);
        console.log(msg);
    });

    //Chatbox UI
    return (
        <div className="relative flex flex-col justify-end items-center bg-slate-600 w-3/4 h-3/4 rounded-l">
            {log.map((mess) => {
                if (!mess.local) {
                    //other user text bubble
                    return (
                        <div className="h-10 mb-1 ml-2 bg-slate-500 border-2 border-solid border-slate-600 rounded-l text-white px-2 flex items-center self-start">
                            {mess.msg}
                        </div>
                    );
                } else {
                    //self text bubble
                    return (
                        <div className="h-10 mb-1 mr-2 bg-slate-400 border-2 border-solid border-slate-600 rounded-l text-white px-2 flex items-center self-end">
                            {mess.msg}
                        </div>
                    );
                }
            })}
            {/* CHAT INPUT & SEND */}
            <div className="flex flex-row mb-4 bg-slate-500 border-2 border-solid border-slate-600 rounded-l w-98%">
                <form className="flex w-full" onSubmit={handleSubmit}>
                    <input
                        autoFocus={true}
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
