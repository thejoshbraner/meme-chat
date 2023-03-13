import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Formik, Field, Form } from "formik";
import Cookies from "js-cookie";

export const Login = () => {
    // LOGIN

    const handleLogin = async (values) => {
        try {
            console.log(JSON.stringify(values));
            const response = await fetch("/api/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });
            const data = await response.json();
            console.log(data);
            //Get the JWT from the request and set the cookie in the browser
            const token = data.token;
            Cookies.set("token", token, { path: "/" });
            //Get the username from the request and save it to localStorage to be used elsewhere in the app
            const username = data.user.username;
            console.log(username);
            localStorage.setItem("username", username);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex content-center items-center justify-center w-screen h-screen bg-slate-300 z-0">
            <div className="bg-slate-600 w-80 h-fit py-6 rounded-xl justify-center items-center flex flex-col">
                <h1 className="text-lg font-bold block text-white mb-5">LOGIN</h1>
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
            </div>
        </div>
    );
};

export const Register = () => {
    //REGISTER

    const handleRegister = async (values) => {
        console.log(values);
        const response = await fetch("/api/users/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
        });
        // const body = await response.json();
        // console.log(body);
    };
    return (
        <div className="flex content-center items-center justify-center w-screen h-screen bg-slate-300 z-0">
            {/* Login Form */}
            <div className="bg-slate-600 w-80 h-fit py-6 rounded-xl justify-center items-center flex flex-col">
                <h1 className="text-lg font-bold block text-white mb-5">REGISTER</h1>
                <Formik
                    initialValues={{
                        username: "",
                        password: "",
                        email: "",
                    }}
                    onSubmit={handleRegister}
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
                        <label className="form-label" htmlFor="Email">
                            Email
                        </label>
                        <Field id="email" placeholder="Email" name="email" type="text" className="form-input" />
                        <button className="rounded-sm text-sm font-semibold block bg-sky-400 text-white mt-5 py-1 hover:bg-sky-300 transition-all duration-300">
                            Login
                        </button>
                        <button
                            type="submit"
                            className="rounded-sm text-sm font-semibold block bg-sky-700 text-white mt-2 py-1 hover:bg-sky-600 transition-all duration-300"
                        >
                            Register
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};
