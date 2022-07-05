import React from 'react';
import '../sass/video_call.css';
import { FaHeart, FaMicrophone, FaVideo, FaComment, FaMicrophoneSlash, FaVideoSlash, FaShareSquare, FaAngleUp } from 'react-icons/fa';
import Video1 from '../video/sample.mp4'
import { useState } from 'react';

export default function Video_call() {

    const [Style, setMyStyle] = useState({
        bottom: '-20px'
    })

    const toggle = () => {
        if (Style.bottom == '-20px') {
            setMyStyle({
                bottom: '-500px',
            })
        }
        else {
            setMyStyle({
                bottom: '-20px'
            })
        }
    }

    return (
        <>
            <div className="video-call-container">
                <div className="media-stream">
                    <video src={Video1} controls="True" />
                    <div className="camera">
                        <div className="our-camera">
                        </div>
                        <div className="controls">
                            <div className="controls-mic">
                                <FaMicrophone size={18} />
                            </div>
                            <div className="controls-video">
                                <FaVideo size={18} />
                            </div>
                        </div>
                        <div className="angle-up" onClick={toggle}>
                            <FaAngleUp />
                        </div>
                    </div>
                </div>
                <div className="participants" style={Style} >
                    <div className="participant participant-1">
                        <div className="participants-icons">
                            <div className="mic-icon">
                                <FaMicrophone />
                            </div>
                            <div className="video-icon">
                                <FaVideo />
                            </div>
                        </div>
                    </div>
                    <div className="participant participant-2">
                        <div className="participants-icons">
                            <div className="mic-icon">
                                <FaMicrophone />
                            </div>
                            <div className="video-icon">
                                <FaVideo />
                            </div>
                        </div>
                    </div>
                    <div className="participant participant-3">
                        <div className="participants-icons">
                            <div className="mic-icon">
                                <FaMicrophone />
                            </div>
                            <div className="video-icon">
                                <FaVideo />
                            </div>
                        </div>
                    </div>
                    <div className="participant participant-4">
                        <div className="participants-icons">
                            <div className="mic-icon">
                                <FaMicrophone />
                            </div>
                            <div className="video-icon">
                                <FaVideo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}