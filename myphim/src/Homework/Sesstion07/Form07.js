import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Form07() {

    const [address, setAddress] = useState([]);
    const [disTrict, setDisTrict] = useState([]);
    const [commune, setCommune] = useState([]);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`https://provinces.open-api.vn/api/?depth=3`);
            console.log(response.data)
            if (response.data) {
                setAddress(response.data);
            }
        }
        fetchData();
    }, []);

    const changeCity = (data) => {
        setDisTrict(address.find(add => add.code == data).districts)
    }

    const changeCom = (data) => {
        setCommune(disTrict.find(add => add.code == data).wards)
    }
    return (
        <div>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-4xl">
                    <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex">
                            <div className="mb-2 w-2/4 pr-2">
                                <label className="text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="
                                        w-full
                                        block px-16 py-2 mt-2
                                        border-gray-300
                                        rounded-md
                                        shadow-sm
                                        focus:border-indigo-300
                                        focus:ring
                                        focus:ring-indigo-200
                                        focus:ring-opacity-50
                                    "
                                    placeholder="Abc@gmail.com"
                                    {...register("Email")}
                                />
                            </div>
                            <div className="mb-2 w-2/4">
                                <label className="text-gray-700">Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    className="
                                        block
                                        w-full
                                        mt-2 px-16 py-2
                                        border-gray-300
                                        rounded-md
                                        shadow-sm
                                        focus:border-indigo-300
                                        focus:ring
                                        focus:ring-indigo-200
                                        focus:ring-opacity-50
                                    "
                                    placeholder="Password"
                                    {...register("password")}

                                />
                            </div>
                        </div>
                        <div className="mb-2 text-center">
                            <label className="text-gray-700 ">Address</label>
                            <input
                                name="address"
                                type="text"
                                className="
                                        block
                                        w-full
                                        mt-2 px-16 py-2
                                        border-gray-300
                                        rounded-md
                                        shadow-sm
                                        focus:border-indigo-300
                                        focus:ring
                                        focus:ring-indigo-200
                                        focus:ring-opacity-50
                                    "
                                placeholder="Address"
                                {...register("address")}

                            />
                        </div>
                        <div className="mb-2 text-center">
                            <label className="text-gray-700 ">Address 2</label>
                            <input
                                name="address"
                                type="text"
                                className="
                                        block
                                        w-full
                                        mt-2 px-7 py-2
                                        border-gray-300
                                        rounded-md
                                        shadow-sm
                                        focus:border-indigo-300
                                        focus:ring
                                        focus:ring-indigo-200
                                        focus:ring-opacity-50
                                    "
                                placeholder="Address2"
                                {...register("address2")}
                            />
                        </div>
                        <div className="flex justify-between mb-5">
                            <div className=" pr-2">
                                <label className="text-gray-700 ">City</label>
                                <select className=" block
                                        w-full
                                        mt-2 px-7 py-2
                                        border-gray-300
                                        rounded-md
                                        border
                                        shadow-sm
                                        focus:border-indigo-300
                                        focus:ring
                                        focus:ring-indigo-200
                                        focus:ring-opacity-50"
                                    {...register("City")}
                                    onChange={e => changeCity(e.target.value)}
                                >
                                    {address.length > 0 && address.map((item, index) => (
                                        <option key={item.code} value={item.code}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className=" pr-2">
                                <label className="text-gray-700 ">District</label>
                                <select className=" block
                                        w-full
                                        mt-2 px-7 py-2
                                        border-gray-300
                                        rounded-md
                                        border
                                        shadow-sm
                                        focus:border-indigo-300
                                        focus:ring
                                        focus:ring-indigo-200
                                        focus:ring-opacity-50"
                                    {...register("District")}
                                    onChange={e => changeCom(e.target.value)}>
                                    {
                                        disTrict.map(dis => <option key={dis.code} value={dis.code} >{dis.name}</option>)
                                    }
                                </select>
                            </div>
                            <div className=" pr-2">
                                <label className="text-gray-700 ">Commune</label>
                                <select className=" block
                                        w-full
                                        mt-2 px-16 py-2
                                        border-gray-300
                                        rounded-md
                                        border
                                        shadow-sm
                                        focus:border-indigo-300
                                        focus:ring
                                        focus:ring-indigo-200
                                        focus:ring-opacity-50"
                                    {...register("commune")}
                                >
                                    {
                                        commune.map(wds => <option key={wds.code} value={wds.code}>{wds.name}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                        <div className=" mb-2">
                            <input
                                className=" pr-2"
                                type="checkbox"
                                value=""
                            />
                            <label className="form-check-label inline-block text-gray-800" >
                                Checked me out
                            </label>
                        </div>
                        <div className="mb-6">
                            <button
                                type="submit"
                                className="
                                    h-10
                                    px-5
                                    text-indigo-100
                                    bg-indigo-700
                                    rounded-lg
                                    transition-colors
                                    duration-150
                                    focus:shadow-outline
                                    hover:bg-indigo-800
                                "
                            >
                                Sign in
                            </button>
                        </div>
                        <div></div>
                    </form>
                </div>
            </div>
        </div>
    )
}
