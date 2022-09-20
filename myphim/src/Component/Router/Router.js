import React from 'react'
import Home from './Component/Home';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Login from './Component/Login/Login';

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Link to="/">HOME</Link>
                <Link to="/Login">Login</Link>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
