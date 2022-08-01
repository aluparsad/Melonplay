import React from 'react';
import { FaVideo, FaVolumeMute } from 'react-icons/fa';
import './style/userCall.css'

const UserCall = () => {
    return (
        <>
            <div className="participant">
                <video class="participant-video" />
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