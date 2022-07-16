import React, { useContext } from 'react';
import '../sass/Home.css';
import userContext from './UserContext';

export default function Home() {
    return (
        <>
            <div className="container">
                <div className="left">
                    <div className="tag-line">
                        <h2></h2>
                    </div>
                    <div className="image"></div>
                </div>
                <div className="right">
                    <h2></h2>
                    <h3>Keeping You Connect
                        <br />WhereEver You Are!</h3>
                    <p>Unlimited Access of Video Calling & Screen Sharing.</p>
                    <p>Stream Media , Movies With Your Friends.</p>
                    <button className="start-call-btn">
                        Start Video Call
                    </button>
                    <div className="bottom">
                        <div className="about">
                            <h5>Connect Your Remote Team & Save Time</h5>
                            <p>Talk With You Friends & Colleagues AnyWhere AnyTime.</p>
                        </div>
                        <button className="know-more">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
