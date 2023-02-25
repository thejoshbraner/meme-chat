import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { Formik } from 'formik';

const LoginRegister = () => {
    return (
        <div className="flex content-center items-center justify-center w-screen h-screen bg-slate-300 z-0">
<<<<<<< HEAD:client/src/components/LoginRegister.jsx
            
            {/* Login Form */}
            <div className="bg-slate-600 w-80 h-fit py-6 rounded-xl justify-center items-center flex flex-col">
                <h1 className="text-lg font-bold block text-white mb-5">
                    LOGIN
                </h1>
                <Formik
                    initialValues={{
                        username: "",
                        password: "",
                    }}
                    onSubmit={handleLogin}
                >
                    <Form className="w-10/12 flex flex-col">
                        <label className="form-label" htmlFor="Username">
                            Username
                        </label>
                        <Field
                            id="username"
                            placeholder="Username"
                            name="username"
                            type="text"
                            className="form-input"
                        />

                        <label className="form-label" htmlFor="Password">
                            Password
                        </label>
                        <Field
                            id="password"
                            placeholder="Password"
                            name="password"
                            type="text"
                            className="form-input"
                        />
                        <button
                            className="rounded-sm text-sm font-semibold block bg-sky-400 text-white mt-5 py-1 hover:bg-sky-300 transition-all duration-300"
                            type="submit"
                        >
                            Login
                        </button>
                        <button className="rounded-sm text-sm font-semibold block bg-sky-700 text-white mt-2 py-1 hover:bg-sky-600 transition-all duration-300">
                            Register
                        </button>
                    </Form>
                </Formik>
=======
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
>>>>>>> parent of 428de3f (style: login form):src/components/LoginRegister.jsx
            </div>
        </div>
    );
}

export default LoginRegister;
