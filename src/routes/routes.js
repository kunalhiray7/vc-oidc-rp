import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import Login from "../login/login";
import Home from "../home/home";

const AppRoutes = () => {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </>
}

export default AppRoutes;
