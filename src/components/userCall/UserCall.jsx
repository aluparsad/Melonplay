import React, { useRef } from 'react';
import { FaVolumeMute } from 'react-icons/fa';
import './style/userCall.css'

const UserCall = ({ call }) => {

    const videoRef = useRef();

    const muteAudio = ()=>{
        var state = videoRef.current.muted;
        videoRef.current.muted = !state;
    }


    call.on('stream', stream => {
        videoRef.current.srcObject = stream;
    })


    return (
        <>
            <div className="participant">
                <video className="participant-video" ref={videoRef} autoPlay />
                <div className="participants-icons">
                    <div onClick={()=>muteAudio()} className="mic-icon">
                        <FaVolumeMute />
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserCall;