import React from 'react';
import Home from './Home';
import Videocall from './Videocall';
import About from './About';
import Login from './login';
import Signup from './Signup';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

const AppRouter = () => {
    return (
        <>
            <Router>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='About' element={<About />} />
                        <Route path='Videocall' element={<Videocall />} />
                        <Route path='login' element={<Login />} />
                        <Route path='register' element={<Signup />} />
                        <Route path='*' element={<Home />} />
                        {/* <Route path='/Chatting' element={<Chatting />} /> */}
                        {/* <Route path='/Contactus' element={<Contactus />} /> */}
                    </Routes>
            </Router>
        </>
    );
}

export default AppRouter;