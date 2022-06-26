import React from 'react';
import '../sass/login.css';
import PropTypes from 'prop-types';

export default function Login(props) {
    return (
        <>
             <h1></h1> 
            <div className="container">
                <h2>Login To Your Account</h2>
                <div className="login">
                    <div className="input" id="email">
                        <input type="email" name="" id="" placeholder="Email or Phone or Username" />
                    </div>
                    <div className="input" id="password">
                        <input type="password" name="" id="" placeholder="Password" />
                    </div>
                    <div className="anchor">
                        <input type="checkbox" name="" id="keep-login" />Keep me Log in
                        <a href="" id="forget-password">Forget Password</a>
                    </div>
                    <button className="btn">Log in</button>
                    <div className="need-an-account">
                        Need an Account? <a href="#">Signup</a>
                    </div>
                </div>
            </div>
        </>
    )
}

// Login.prototypes={
//     Sitename:PropTypes.string.isRequired
// }

// Login.defaultProps = {
//     Sitename:"Melonplay"
// }