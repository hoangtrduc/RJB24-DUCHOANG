import React from 'react';
import { useForm } from "react-hook-form";
import classNames from 'classnames/bind';
import styles from './Form.module.scss';


const cx = classNames.bind(styles);

export default function Form02() {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);





    return (
        <div className={cx("wrapper")}>
            <div className={cx("form-left")}>
                <h2 className={cx("left_text")}>A few clicks away from creating your lottery Display</h2>
                <img className={cx("img")} src="https://lotteryscreen.app/images/login/lottery-display.svg" alt="" />
            </div>
            <div className={cx("form-right inline-block mt-5")}>
                <div className={cx("pl-8 inline-block")}>
                    <h2 className={cx("text-black  text-3xl mb-5")}>Register</h2>
                    <span className={cx("text-black text-lg")}>Manage all your lottery efficiently</span>
                    <p className={cx("mt-3 text-zinc-300")}>let's get you all set up so you can verify your personal account and begin setting up your profile</p>
                    <form onSubmit={handleSubmit(onSubmit)} className={cx("mt-5")}>
                        <div className=" mb-6 flex ">
                            <div className={cx("md:w-2/4 mr-2")}>
                                <label className="block text-gray-500 font-bold" htmlFor="inline-full-name">
                                    FirstName
                                </label>
                                <input
                                    {...register("FirstName")}
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="inline-full-name"
                                    type="text"
                                />
                            </div>
                            <div className={cx("md:w-2/4 ml-2")}>
                                <label className="block text-gray-500 font-bold " htmlFor="inline-full-name">
                                    LastName
                                </label>
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="inline-full-name"
                                    type="text"
                                    {...register("LastName")}
                                />
                            </div>
                        </div>
                        <div className=" mb-6 flex ">
                            <div className={cx("md:w-2/4 mr-2")}>
                                <label className="block text-gray-500 font-bold" htmlFor="inline-full-name">
                                    Phone Number
                                </label>
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="inline-full-name"
                                    type="number"
                                    {...register("number")}
                                />
                            </div>
                            <div className={cx("md:w-2/4 ml-2")}>
                                <label className="block text-gray-500 font-bold " htmlFor="inline-full-name">
                                    Email
                                </label>
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="inline-full-name"
                                    type="text"
                                    {...register("email")}
                                />
                            </div>
                        </div>
                        <div className=" mb-6 flex ">
                            <div className={cx("md:w-2/4 mr-2")}>
                                <label className="block text-gray-500 font-bold" htmlFor="inline-full-name">
                                    Password
                                </label>
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="inline-full-name"
                                    type="password"
                                    {...register("password")}
                                />
                            </div>
                            <div className={cx("md:w-2/4 ml-2")}>
                                <label className="block text-gray-500 font-bold " htmlFor="inline-full-name">
                                    Confirm Password
                                </label>
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="inline-full-name"
                                    type="password"
                                    {...register("Confirm password")}
                                />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className=" block text-gray-500 font-bold">
                                <input className="mr-2 leading-tight" type="checkbox"  {...register("checkbox", { required: true })} />
                                <span className="text-sm">
                                    Yes, I want to receive Lottery Display emails
                                </span>
                            </label>
                            <label className=" block text-gray-500 font-bold">
                                <input className="mr-2 leading-tight" type="checkbox"  {...register("checkbox", { required: true })} />
                                <span className="text-sm">
                                    I agree to all the <strong className={cx("text-sky-500")}> Term, Privacy Policy</strong> and <strong className={cx("text-sky-500")}>Fees</strong>
                                </span>
                            </label>
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
