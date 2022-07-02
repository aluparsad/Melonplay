import React from 'react';
import '../sass/video_call.css';
import { FaHeart, FaMicrophone, FaVideo, FaComment, FaMicrophoneSlash, FaVideoSlash } from 'react-icons/fa';
import { icons } from 'react-icons/lib';



export default function Video_call() {
    const changeicon = () => {
        <div className="mic">
            <FaMicrophoneSlash />
        </div>
    }


    return (
        <>
            <div className="container">
                <div className="container-2">
                    <div className="video-call">
                        <div className="frnd frnd-1"></div>
                        <div className="frnd frnd-2"></div>
                        <div className="frnd frnd-3"></div>
                        <div className="frnd frnd-4"></div>
                    </div>

                    <div className="functions">
                        <div className="icons">
                            <div className="mic i">
                                <FaMicrophone size={28} onClick={changeicon} />
                                {/* <FaMicrophoneSlash size={28}/> */}
                            </div>
                            <div className="icon-video i">
                                <FaVideo size={28} />
                                {/* <FaVideoSlash size={28}/> */}
                            </div>
                        </div>
                        <button className="end-meeting">
                            End Meeting
                        </button>
                    </div>
                </div>
                <div className="right">
                    <div className="video-members">
                        <div className="video-heading">
                            <h3>Participants (5)</h3>
                        </div>
                        <div className="participants">
                            <div className="participant">Rohit sharma
                                <div className="icons">
                                    <div className="i mic">
                                        <FaMicrophone />
                                    </div>
                                    <div className="i video">
                                        <FaVideo />
                                    </div>
                                </div>
                            </div>
                            <div className="participant">Harsh sharma
                                <div className="icons">
                                    <div className="i mic">
                                        <FaMicrophone />
                                    </div>
                                    <div className="i video">
                                        <FaVideo />
                                    </div>
                                </div></div>
                            <div className="participant">Dogesh swami
                                <div className="icons">
                                    <div className="i mic">
                                        <FaMicrophone />
                                    </div>
                                    <div className="i video">
                                        <FaVideo />
                                    </div>
                                </div></div>
                            <div className="participant">anand samashiya
                                <div className="icons">
                                    <div className="i mic">
                                        <FaMicrophone />
                                    </div>
                                    <div className="i video">
                                        <FaVideo />
                                    </div>
                                </div></div>
                            <div className="participant">nikhil
                                sharma
                                <div className="icons">
                                    <div className="i mic">
                                        <FaMicrophone />
                                    </div>
                                    <div className="i video">
                                        <FaVideo />
                                    </div>
                                </div></div>
                            <div className="participant">Harish motwani<div className="icons">
                                <div className="i mic">
                                    <FaMicrophone />
                                </div>
                                <div className="i video">
                                    <FaVideo />
                                </div>
                            </div></div>
                        </div>
                    </div>
                    <div className="chatting">
                        <div className="chat-heading">
                            <div className="chat-icon">
                                <FaComment />
                            </div>
                            <h3>Chat</h3>
                        </div>
                        <div className="chats">
                            <div className="message-right">Rohit : hello how are you</div>
                            <div className="message-left">dogesh : i am fine</div>
                            <div className="message-right">Rohit : hello how are you</div>
                            <div className="message-left">dogesh : i am fine</div>
                            <div className="message-right">Rohit : hello how are you</div>
                            <div className="message-left">dogesh : i am fine</div>
                            <div className="message-right">Rohit : hello how are you</div>
                            <div className="message-left">dogesh : i am fine</div>
                        </div>
                        <div className="message">
                            <input type="text" placeholder='Type to write a message' />
                            <button className="btn">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}