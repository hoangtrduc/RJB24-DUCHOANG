import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

import styles from './Login.scss';

export default function Login(props) {
    const { register, handleSubmit } = useForm();

    const setLogin = props.setLogin;

    let navigate = useNavigate();


    const onSubmit = (data) => {
        if (data) {
            setLogin(data)
            navigate("/Home");
        } else {
            console.log("F")
        }
        console.log(data)
    }

    // .test === defaultValues.Email && data.password === defaultValues.password
    // const defaultValues = {
    //     Email: "Hoangtrongduc73@gmail.com",
    //     password: "12345"
    // }



    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="ml-8">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded  w-2/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder='hoangtrongduc73@gmail.com'
                        type={"text"}
                        {...register("test", {
                            required: true,
                            // pattern: {
                            //     value: /[A-Za-z]{3}/,
                            //     message: 'sai'
                            // }
                        })}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border border-red-500 rounded w-2/4 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        placeholder="******************"
                        type={"password"}
                        {...register("password")}
                    />
                    <p className="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <button type="submit" className=" px-5  py-2.5  border ">Login</button>
            </form>
        </div>
    )
}
