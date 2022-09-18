import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const { register, handleSubmit } = useForm();


    let navigate = useNavigate();


    const onSubmit = (data) => {
        if (data.test === defaultValues.Email && data.password === defaultValues.password) {
            console.log("S");
            navigate("/Home");
        } else {
            console.log("F")
        }
    }

    const defaultValues = {
        Email: "Hoangtrongduc73@gmail.com",
        password: "12345"
    }



    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">Email: </label>
                <input
                    placeholder='hoangtrongduc73@gmail.com'
                    type={"text"}
                    {...register("test", {
                        required: true,
                        // pattern: {
                        //     value: /[A-Za-z]{3}/,
                        //     message: 'sai'
                        // }
                    })} /> <br />
                <label htmlFor="">Password</label>
                <input
                    placeholder='password'
                    type={"password"}
                    {...register("password")} /> <br />
                <input type="submit" />
            </form>
        </div>
    )
}
