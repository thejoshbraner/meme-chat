import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Formik, Field, Form } from "formik";

const LoginRegister = () => {
    //LOGIN
    // return (
    //     <div className="flex content-center items-center justify-center w-screen h-screen bg-slate-300 z-0">
    //         {/* Login Form */}
    //         <div className="bg-slate-600 w-80 h-fit py-6 rounded-xl justify-center items-center flex flex-col">
    //             <h1 className="text-lg font-bold block text-white mb-5">
    //                 LOGIN
    //             </h1>
    //             <Formik
    //                 initialValues={{
    //                     username: "",
    //                     password: "",
    //                 }}
    //                 onSubmit={handleLogin}
    //             >
    //                 <form className="w-10/12 flex flex-col">
    //                     <label className="form-label" htmlFor="Username">
    //                         Username
    //                     </label>
    //                     <Field
    //                         id="username"
    //                         placeholder="Username"
    //                         name="username"
    //                         type="text"
    //                         className="form-input"
    //                     />

    //                     <label className="form-label" htmlFor="Password">
    //                         Password
    //                     </label>
    //                     <Field
    //                         id="password"
    //                         placeholder="Password"
    //                         name="password"
    //                         type="text"
    //                         className="form-input"
    //                     />
    //                     <button
    //                         className="rounded-sm text-sm font-semibold block bg-sky-400 text-white mt-5 py-1 hover:bg-sky-300 transition-all duration-300"
    //                         type="submit"
    //                     >
    //                         Login
    //                     </button>
    //                     <button className="rounded-sm text-sm font-semibold block bg-sky-700 text-white mt-2 py-1 hover:bg-sky-600 transition-all duration-300">
    //                         Register
    //                     </button>
    //                 </form>
    //             </Formik>
    //         </div>
    //     </div>
    // );

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
                <h1 className="text-lg font-bold block text-white mb-5">LOGIN</h1>
                <Formik
                    initialValues={{
                        username: "",
                        password: "",
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

export default LoginRegister;
