import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home(props) {
    const navigate = useNavigate();
    const [listUser, setListUser] = useState([])

    const getUsersAsync = async () => {
        try {
            const url = 'https://632af4421090510116ccc503.mockapi.io/api';
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const json = await response.json();
            setListUser(json);
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <table className=''>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {listUser.map((user) => {
                        return (
                            <tr key={user}>
                                <th scope='row' onClick={() => navigate}></th>
                            </tr>
                        )
                    })

                    }
                </tbody>
            </table>
        </>
    )
}
