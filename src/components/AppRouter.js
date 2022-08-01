import React from 'react';
import Home from './Home';
import About from './About';
import Login from './login';
import Signup from './Signup';
import VideoCall from './VideoCall/Videocall'

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

const AppRouter = () => {
    return (
        <>
            <Router>
                    <Routes>
                        <Route path='/' exact element={<Home />} />
                        <Route path='about' exact element={<About />} />
                        <Route path='videocall/:id' exact element={<VideoCall />} />
                        <Route path='login' exact element={<Login />} />
                        <Route path='register' exact element={<Signup />} />
                        <Route path="*" exact element={<Home />} />
                    </Routes>
            </Router>
        </>
    );
}

export default AppRouter;