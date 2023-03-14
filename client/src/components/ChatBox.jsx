import React, { useContext } from "react";
import { useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
import UserContext from "../utils/UserContext";
import Topbar from "./Topbar";

const socket = io("http://localhost:3000");

const ChatBox = () => {
    const username = localStorage.username;
    const userContext = useContext(UserContext);
    let inputRef = useRef("");
    const [log, setLog] = useState([]);

    //prevents refresh, grabs input text and creates object using it marking it with a local flag set to true, then adds to log array
    const handleSubmit = (event) => {
        event.preventDefault();
        const msgObject = { username: username, msg: inputRef.current.value };
        console.log(msgObject);

        //posts input text from object to server then clears the input element
        socket.emit("newMessage", msgObject);
        inputRef.current.value = "";
    };

    const handleNewMessage = (data) => {
        setLog([...log, data]);
        console.log(data);
    };

    const getLog = async () => {
        const timestamp = new Date().getTime();
        const response = await fetch(`/api/chats?${timestamp}`, {
            method: "GET",
        });
        const data = await response.json();
        console.log(data);
        return data;
    };

    const submitTextArea = (event) => {
        if (event.keyCode === 13) {
            handleSubmit(event);
        }
    };

    useEffect(() => {
        socket.on("sendMessage", handleNewMessage);

        return () => {
            socket.off("sendMessage");
        };
    }, [log]);

    useEffect(() => {
        getLog().then((data) => {
            setLog(data);
        });
    }, []);

    //Chatbox UI
    return (
        <div className="w-3/4 h-3/4 flex ">
            <Topbar />
            <div className="relative p-2 flex overflow-hidden flex-col justify-end items-center bg-slate-600 w-full h-full rounded-lg">
                {log.map((mess) => {
                    if (mess.username !== username) {
                        //other user text bubble
                        return (
                            <div className="min-h-content mb-1 break-words bg-slate-500 border-2 border-solid border-slate-600 rounded-l text-white px-2 flex items-center self-start">
                                <span className="text-slate-300 pr-3 font-bold">{mess.username}:</span>
                                {mess.message}
                            </div>
                        );
                    } else {
                        //self text bubble
                        return (
                            <div className="min-h-content p-2 mb-1 break-words bg-slate-400 border-2 border-solid border-slate-600 rounded-l text-white px-2 flex items-center self-end">
                                <span className="text-slate-300 font-bold">{mess.username}:</span>&nbsp;
                                {mess.message}
                            </div>
                        );
                    }
                })}
                {/* CHAT INPUT & SEND */}
                <div className="flex flex-row h-20 bg-slate-500 border-2 border-solid border-slate-600 rounded-l w-full">
                    <form className="flex w-full h-20 items-center" onSubmit={handleSubmit}>
                        <textarea
                            rows=""
                            autoFocus={true}
                            name="message"
                            className="rounded-l scrollbar-thin scrollbar-thumb-slate-600 scrollbar-thumb-rounded-lg resize-none w-full h-content pt-3 pl-6 outline-none placeholder-slate-400 bg-slate-500 text-slate-200"
                            type="text"
                            placeholder="write something"
                            ref={inputRef}
                            onKeyDown={submitTextArea}
                        />
                        <button type="submit" className="pr-6 pl-2 text-slate-400">
                            SEND
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;
