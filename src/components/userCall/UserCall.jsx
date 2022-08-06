import React, { useRef } from 'react';
import { useEffect } from 'react';
import { FaVideo, FaVolumeMute } from 'react-icons/fa';
import './style/userCall.css'

const UserCall = ({ stream }) => {

    const videoRef = useRef();

    useEffect(() => {
        videoRef.current.srcObject = stream;
    }, [videoRef.current])


    return (
        <>
            <div className="participant">
                <video className="participant-video" ref={videoRef} autoPlay />
                <div className="participants-icons">
                    <div className="mic-icon">
                        <FaVolumeMute />
                    </div>
                    <div className="video-icon">
                        <FaVideo />
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserCall;