import React from 'react';

const MainWindow = () => {
    return (
        <div className="flex content-center items-center justify-center w-screen h-screen bg-slate-300 z-0">
            <div className="bg-slate-600 w-3/4 h-3/4 rounded-xl">
                <div className="absolute top w-3/4 h-8 bg-slate-900 z-50 rounded-t-xl"></div>
                <div className="absolute left w-24 h-3/4 bg-slate-800 rounded-l-xl z-40">

                </div>
            </div>
        </div>
    );
}

export default MainWindow;
