import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { Formik } from 'formik';

const LoginRegister = () => {
    return (
        <div className="flex content-center items-center justify-center w-screen h-screen bg-slate-300 z-0">
            <div className="bg-slate-600 w-80 h-96 rounded-xl">
               <form>
                <h1>Login</h1>
                <label for="username" >Username</label>
                <input id="username" type="text" placeholder="Username"/>
                <label for="password">Password</label>
                <input id="password" type="text" placeholder="password"/>
                <button>Login</button>
                <button>Register</button>
               </form>
            </div>
        </div>
    );
}

export default LoginRegister;
