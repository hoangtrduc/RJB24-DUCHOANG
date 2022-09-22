import React from 'react';
import MocApi from './MocApi';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

export default function index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"></Route>
                <Route path="/form">{<MocApi />}</Route>
            </Routes>
        </BrowserRouter>
    )
}
