import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Formik, Field, Form } from "formik";
import Cookies from "js-cookie";
import { useNavigate, Navigate } from "react-router-dom";

export const Login = () => {
    // LOGIN
    const navigate = useNavigate();

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
            //Navigate to the chat
            navigate("/");
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
                            type="password"
                            className="form-input"
                        />
                        <button className="btn-primary" type="submit">
                            Login
                        </button>
                        <button type="button" onClick={() => navigate("/register")} className="btn-secondary">
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
    const navigate = useNavigate();
    const handleRegister = async (values) => {
        console.log(values);
        const response = await fetch("/api/users/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
        });
        const data = await response.json();
        if (data.success) {
            navigate("/login");
        } else {
            console.log("something went wrong");
        }
    };
    return (
        <div className="flex content-center items-center justify-center w-screen h-screen bg-slate-300 z-0">
            {/* Registration Form */}
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
                            type="password"
                            className="form-input"
                        />
                        <label className="form-label" htmlFor="Email">
                            Email
                        </label>
                        <Field id="email" placeholder="Email" name="email" type="email" className="form-input" />
                        <button type="submit" className="btn-primary">
                            Register
                        </button>
                        <button type="button" onClick={() => navigate("/login")} className="btn-secondary">
                            Login
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};
