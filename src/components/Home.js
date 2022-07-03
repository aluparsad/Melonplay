import React from 'react';
import '../sass/Home.css';

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
                        <br/>WhereEver You Are!</h3>
                    <h4>Connect Your Remote team and Save Time.</h4>
                    <p>Unlimited Access of Video Calling & Screen Sharing.</p>
                    <button className="start-call-btn">
                        Start Video Call
                    </button>
                    <div className="bottom">
                        <p>
                            <h5></h5>
                             is an Online Video calling Web Application.You Can Video Call ,Stream Media, & live Chat With Your Friends and Teammates. In <h5></h5> You Can Watch Movie Together and simultaneously you can chat with Friends.
                        </p>
                        <button className="know-more">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
