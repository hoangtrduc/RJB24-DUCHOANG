import React from 'react';
import { useForm } from "react-hook-form";
import classNames from 'classnames/bind';
import styles from './Form03.module.scss';
import image from './image/Form03.png';
import image2 from './image/Form.png';

const cx = classNames.bind(styles);

export default function Form03() {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div className={cx("wrapper")}>
            <div className={cx("form-left")}>
                <img className={cx("img")} src={image} alt="" />
            </div>
            <div className={cx("form-right inline-block mt-5 ")}>
                <div className={cx("pl-10 ")}>
                    <div className={cx("w-60 left-0 inline-block")}>
                        <img src={image2} alt="" />
                    </div>
                    <h2 className={cx("text-red-500 font-medium text-3xl mb-5")}>Login</h2>
                    <span className={cx("text-black text-lg font-semibold")}>Login to your account</span>
                    <p className={cx("mt-3 text-black")}>Thank you for get black to G, lets access our the best <br /> recommendation contact for you</p>
                    <form onSubmit={handleSubmit(onSubmit)} className={cx("mt-5")}>
                        <div className=" mb-6 ">
                            <div className={cx(" mr-2")}>
                                <label className="block text-gray-500 font-bold" htmlFor="inline-full-name">
                                    Username
                                </label>
                                <input
                                    {...register("UserName", { required: true })}
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="inline-full-name"
                                    type="text"
                                    placeholder='Email or Phone Number'
                                />
                            </div>

                        </div>
                        <div className=" mb-6 flex ">
                            <div className={cx("w-full mr-2")}>
                                <label className="block text-gray-500 font-bold" htmlFor="inline-full-name">
                                    Password
                                </label>
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="inline-full-name"
                                    type="password"
                                    {...register("password", { required: true, minLength: 4 })}
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div className="mb-6 ">
                            <label className=" inline-block text-gray-500 font-bold">
                                <input className="mr-2 leading-tight" type="checkbox"  {...register("checkbox", { required: true })} />
                                <span className="text-sm">
                                    Remember me
                                </span>
                            </label>
                            <div className={cx("float-right ")}>
                                <a href="/" className={cx("text-red-600 Password no-underline")}>Reset Password?</a>
                            </div>
                        </div>
                        <div className="">
                            <button
                                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                type="submit">
                                Create Account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

