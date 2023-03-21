import React from "react";

export const OtherBubble = ({ mess }) => {
    return (
        <div className="min-h-content w-full md:w-fit p-2 mb-1 break-words bg-slate-500 border-2 border-solid border-slate-600 rounded-l text-white px-2 flex items-center self-start">
            <span className="text-slate-300 pr-2 font-bold">{mess.username}:</span>
            {mess.message}
        </div>
    );
};

export const SelfBubble = ({ mess }) => {
    return (
        <div className="min-h-content w-full md:w-fit p-2 mb-1 break-words bg-slate-400 border-2 border-solid border-slate-600 rounded-l text-white px-2 flex items-center self-end">
            <span className="text-slate-300 pr-2 font-bold">{mess.username}:</span>

            {mess.message}
        </div>
    );
};
