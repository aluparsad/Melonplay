import React, { useContext } from 'react';
import '../sass/navbar.css';
import userContext from './UserContext'
import { logout } from '../utils/auth';

const Navbar = () => {
    const { user } = useContext(userContext);

    const signOutText =
        <>
            <a className='username' >hi, {user ? user.displayName : "user"}!</a>
            <button onClick={logout} className='signout-btn'>signout</button>
        </>

    const authOpt = (
        <>
            <a href='/login' className='btn btn-login'>login</a>
            <a href='/register' className='btn btn-signup'>register</a>
        </>);

    return (
        <>
            <div className="navbar">
                <h1></h1>
                <ul>
                    <li>
                        <a href="/">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about">
                            Services
                        </a>
                    </li>
                    {/* <li>
                        <a href="/Videocall">
                            VideoCall
                        </a>
                    </li> */}
                </ul>
                <div className="buttons">
                    {user ? signOutText : authOpt}
                </div>
            </div>
        </>
    )
}


export default Navbar;