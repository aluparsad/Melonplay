import React from 'react';
import '../sass/signup.css';

export default function signup() {
    return (
        <>
            <h2></h2>
            <div className="container">
                <h3>Signup Your Account</h3>
                <div className="" id="input-tags">
                    <div className="input">
                        <label htmlFor="">Name:</label>
                        <input type="text" placeholder='Enter Your Name' />
                    </div>
                    <div className="input">
                        Email:
                        <input type="text" placeholder='Enter Email' />
                    </div>
                    <div className="input">
                        <label htmlFor="">password:</label>
                        <input type="password" placeholder='Enter Password' />
                    </div>
                    <div className="input">
                        <label htmlFor="">Confirm Password:</label>
                        <input type="password" placeholder='Confirm Password' />
                    </div>
                </div>
                <button className="btn btn-submit">
                    SignUp
                </button>
            </div>
        </>
    )
}
