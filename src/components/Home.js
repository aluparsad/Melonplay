import React from 'react';
import '../sass/Home.css';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import {v4 as uuidV4} from 'uuid'

export default function Home() {

    const navigate  = useNavigate();

    const createRoom = () => {
        navigate(`videocall/${uuidV4()}`);
    };

    const joinRoom = () => {
        navigate('/');
    };

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
                        {/* <h2></h2> */}
                        <h3>Keeping You Connect
                            <br />WhereEver You Are!</h3>
                        <p>Unlimited Access of Video Calling & Screen Sharing.</p>
                        <p>Stream Media , Movies With Your Friends.</p>
                        <Button color="primary" variant="text" className="start-call-btn" onClick={createRoom} >
                            create Room
                        </Button>
                        <div className="bottom">
                            <div className="about">
                                <h5>Connect Your Remote Team & Save Time</h5>
                                <p>Talk With You Friends & Colleagues AnyWhere AnyTime.</p>
                            </div>
                            <Button color="secondary" className="know-more">
                                join room
                            </Button>
                        </div>
                    </div>
                </div>
        </>
    )
}
