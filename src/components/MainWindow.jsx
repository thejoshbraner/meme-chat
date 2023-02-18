import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const MainWindow = () => {
    return (
        <div className="flex content-center items-center justify-center w-screen h-screen bg-slate-300 z-0">
            <div className="bg-slate-600 w-3/4 h-3/4 rounded-xl">
                <Topbar />
                <Sidebar />
            </div>
        </div>
    );
}

export default MainWindow;
